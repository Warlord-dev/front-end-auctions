import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import config from '@utils/config';
import useMaticPosClient from './useMaticPosClient';
import { getChainId } from '@selectors/global.selectors';
import { getEnabledNetworkByChainId } from '@services/network.service';
import { convertToWei } from '@helpers/price.helpers';
import { useIsMainnet } from './useIsMainnet';
import globalActions from '@actions/global.actions';
import userActions from '@actions/user.actions';
import { getUser } from '@helpers/user.helpers';

export default function useDepositToMatic() {
  const dispatch = useDispatch();
  const [posClient] = useMaticPosClient();
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);
  const isMainnet = useIsMainnet();
  const user = useSelector(getUser);
  const existingTxs = user?.depositTxs || [];

  const depositCallback = (amount) => {
    if (posClient && account && chainId) {
      dispatch(globalActions.setIsLoading(true));
      return posClient
        .depositERC20ForUser(
          config.MONA_TOKEN_ADDRESSES[isMainnet ? 'mainnet' : 'goerli'],
          account,
          convertToWei(amount),
          {
            from: account,
          },
        )
        .then((res) => {
          console.log('deposit resp', res);
          dispatch(
            userActions.updateProfile({
              depositTxs: [
                ...existingTxs,
                {
                  txHash: res.transactionHash,
                  amount: parseFloat(amount),
                  status: 'pending',
                  created: new Date(),
                },
              ],
            }),
          );
          return res;
        })
        .catch((e) => {
          dispatch(globalActions.setIsLoading(false));
          throw e;
        });
    }
  };

  return depositCallback;
}
