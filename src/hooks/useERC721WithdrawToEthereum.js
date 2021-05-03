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
    (tokenIds) => {
      return new Promise((resolve, reject) => {
        if (posClient && account && chainId) {
          posClient
            .burnBatchERC721(config.DTX_ADDRESSES[isMainnet ? 'matic' : 'mumbai'], tokenIds, {
              from: account,
            })
            .then((res) => {
              dispatch(
                userActions.updateProfile({
                  withdrawalTxs: [
                    ...existingTxs,
                    ...tokenIds.map((tokenId) => ({
                      txHash: res.transactionHash,
                      amount: tokenId,
                      status: 'pending-721',
                      created: new Date(),
                    })),
                  ],
                }),
              );
              resolve(res);
            })
            .catch((e) => reject(e));
        } else reject('error');
      });
    },
    [posClient, account],
  );

  return withdrawCallback;
}
