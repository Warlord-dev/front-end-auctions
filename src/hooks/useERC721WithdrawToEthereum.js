import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import config from '@utils/config';
import useMaticPosClient from './useMaticPosClient';
import { getChainId } from '@selectors/global.selectors';
import { getEnabledNetworkByChainId } from '@services/network.service';
import { convertToWei } from '@helpers/price.helpers';
import { useIsMainnet } from './useIsMainnet';
import userActions from '@actions/user.actions';
import { getUser } from '@helpers/user.helpers';

export default function useERC721WithdrawFromMatic() {
  const [_, posClient] = useMaticPosClient();
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);
  const isMainnet = useIsMainnet();
  const dispatch = useDispatch();
  const profile = useSelector(getUser);
  const existingTxs = profile?.withdrawalTxs || [];

  const withdrawCallback = useCallback(
    async (tokenIds) => {
      if (posClient && account && chainId) {
        let success = true;
        let updatedIds = [];
        while (1) {
          const nodeItems = tokenIds.splice(0, 10);
          const res = await posClient
            .burnBatchERC721(config.DTX_ADDRESSES[isMainnet ? 'matic' : 'mumbai'], nodeItems, {
              from: account,
            })
            .then((res) => {
              updatedIds = [
                ...updatedIds,
                ...nodeItems.map((tokenId) => ({
                  txHash: res.transactionHash,
                  amount: tokenId,
                  status: 'pending-721',
                  created: new Date(),
                })),
              ];
              return res;
            })
            .catch((e) => {
              success = false;
              return e;
            });
          if (!tokenIds.length) break;
          if (!success) {
            throw res;
          }
        }
        if (success) {
          if (updatedIds.length) {
            dispatch(
              userActions.updateProfile({
                withdrawalTxs: [...existingTxs, ...updatedIds],
              }),
            );
          }
        }
      }
    },
    [posClient, account],
  );

  return withdrawCallback;
}
