import { useCallback } from 'react';
import axios from 'axios';
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
  const isMainnet = useIsMainnet();
  const rootTunnelContract = getRootTunnelV2Contract(chainId);
  const user = useSelector(getUser);
  const withdrawalTxs = user.withdrawalTxs.filter((tx) => tx.amount);

  const rootTunnelReceiveMessage = async (hashes) => {
    if (hashes.length) {
      dispatch(globalActions.setIsLoading(true));
      try {
        const res = await Promise.all(
          hashes.map((hash) => {
            const network = isMainnet ? 'matic' : 'mumbai';
            return axios
              .get(
                `https://apis.matic.network/api/v1/${network}/exit-payload/${hash.txHash}/?eventSignature=0x8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b036`,
              )
              .then((res) => {
                const { data } = res;
                return rootTunnelContract?.methods.receiveMessage(data.result).send({
                  from: account,
                });
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
