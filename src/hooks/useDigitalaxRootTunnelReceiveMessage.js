import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccount } from '@selectors/user.selectors';
import { getChainId } from '@selectors/global.selectors';
import { getDitiRootTunnelContract } from '@services/contract.service';
import { useIsMainnet } from './useIsMainnet';
import useMaticPosClient from './useMaticPosClient';

const useDigitalaxRootTunnelReceiveMessage = () => {
  const dispatch = useDispatch();
  const account = useSelector(getAccount);
  const isMainnet = useIsMainnet();
  const rootTunnelContract = getDitiRootTunnelContract(isMainnet);
  const digitalaxRootTunnel = useCallback(
    async (bytes) => {
      if (bytes) {
        try {
          const res = await rootTunnelContract.methods.receiveMessage(bytes).send({
            from: account,
          });
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
