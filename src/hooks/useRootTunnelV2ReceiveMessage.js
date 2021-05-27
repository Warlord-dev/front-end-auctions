import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccount } from '@selectors/user.selectors';
import { getChainId } from '@selectors/global.selectors';
import { getRootTunnelV2Contract } from '@services/contract.service';
import { useIsMainnet } from './useIsMainnet';
import useMaticPosClient from './useMaticPosClient';
import globalActions from '@actions/global.actions';
import { getUser } from '@helpers/user.helpers';
import userActions from '@actions/user.actions';

const useRootTunnelReceiveMessage = () => {
  const dispatch = useDispatch();
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);
  const rootTunnelContract = getRootTunnelV2Contract(chainId);
  const user = useSelector(getUser);
  const withdrawalTxs = user.withdrawalTxs.filter((tx) => tx.amount);

  const rootTunnelReceiveMessage = async (hashes) => {
    if (hashes.length) {
      dispatch(globalActions.setIsLoading(true));
      try {
        const res = await Promise.all(
          hashes.map((hash) => {
            return rootTunnelContract.methods.receiveMessage(hash.txHash).send({
              from: account,
            });
          }),
        );
        const updatedWithdrawals = [...withdrawalTxs];
        for (let i = 0; i < updatedWithdrawals.length; i += 1) {
          if (hashes.filter((hash) => updatedWithdrawals[i].txHash === hash.txHash).length) {
            updatedWithdrawals[i].status = 'success';
          }
        }
        dispatch(
          userActions.updateProfile({
            withdrawalTxs: updatedWithdrawals,
          }),
        );
        dispatch(globalActions.setIsLoading(false));
        return res;
      } catch (e) {
        dispatch(globalActions.setIsLoading(false));
        console.log(e);
        throw e;
      }
    }
  };

  return rootTunnelReceiveMessage;
};

export default useRootTunnelReceiveMessage;
