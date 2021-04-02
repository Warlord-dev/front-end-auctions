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
    (tokenId) => {
      if (posClient && account && chainId) {
        posClient
          .burnERC721(config.DTX_ADDRESSES[isMainnet ? 'matic' : 'mumbai'], tokenId, {
            from: account,
          })
          .then((res) => {
            console.log('res', res);

            dispatch(
              userActions.updateProfile({
                withdrawalTxs: [
                  ...existingTxs,
                  {
                    txHash: res.transactionHash,
                    amount: tokenId,
                    status: 'pending-721',
                    created: new Date(),
                  },
                ],
              })
            );
          });
      }
    },
    [posClient, account]
  );

  return withdrawCallback;
}
