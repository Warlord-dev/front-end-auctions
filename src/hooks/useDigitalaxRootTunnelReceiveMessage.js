import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccount } from '@selectors/user.selectors';
import { getChainId } from '@selectors/global.selectors';
import { getDitiRootTunnelContract } from '@services/contract.service';
import { useIsMainnet } from './useIsMainnet';
import useMaticPosClient from './useMaticPosClient';

const useDigitalaxRootTunnelReceiveMessage = () => {
  const dispatch = useDispatch();
  const isMainnet = useIsMainnet();
  const rootTunnelContract = getDitiRootTunnelContract(isMainnet);
  const digitalaxRootTunnel = useCallback(
    async (bytes) => {
      if (bytes) {
        try {
          const res = rootTunnelContract.methods.receiveMessage(bytes).call();
          return res;
        } catch (e) {
          throw e;
        }
      }
    },
    [rootTunnelContract],
  );

  return digitalaxRootTunnel;
};

export default useDigitalaxRootTunnelReceiveMessage;
