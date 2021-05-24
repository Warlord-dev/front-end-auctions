import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import useMaticPosClient from './useMaticPosClient';
import { getChainId } from '@selectors/global.selectors';
import userActions from '@actions/user.actions';
import { getUser } from '@helpers/user.helpers';
import globalActions from '@actions/global.actions';

export default function useExitFromMatic() {
  const [posClientParent] = useMaticPosClient();
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);
  const dispatch = useDispatch();
  const profile = useSelector(getUser);
  const existingTxs = profile?.withdrawalTxs || [];

  const exitCallback = (hash) => {
    if (posClientParent && account && chainId) {
      dispatch(globalActions.setIsLoading(true));
      return posClientParent
        .exitERC20(hash, {
          from: account,
        })
        .then((res) => {
          const index = existingTxs.findIndex((tx) => tx.txHash === hash);
          const newTxs = [...existingTxs];
          newTxs.splice(index, 1);
          dispatch(userActions.updateProfile({ withdrawalTxs: newTxs }));
        })
        .catch((err) => {
          dispatch(globalActions.setIsLoading(false));
          console.log('this is error', err);
          throw err;
        });
    }
  };

  return exitCallback;
}
