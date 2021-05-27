import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import { getChainId } from '@selectors/global.selectors';
import { getRootTunnelAddressV2ByChainId } from '@services/network.service';
import globalActions from '@actions/global.actions';
import { getDTXContract } from '@services/contract.service';
import { useIsMainnet } from './useIsMainnet';

export default function useApproveForRootTunnel() {
  const dispatch = useDispatch();
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);
  const isMainnet = useIsMainnet();

  const [approvedRootTunnel, setApprovedRootTunnel] = useState(false);

  const approveForRootTunnel = () => {
    if (account && chainId) {
      try {
        dispatch(globalActions.setIsLoading(true));
        const dtxContract = getDTXContract(isMainnet);
        console.log({ dtxContract });

        const rootTunnelAddressV2 = getRootTunnelAddressV2ByChainId(chainId);
        console.log(dtxContract);
        console.log({ rootTunnelAddressV2 });
        return dtxContract.methods
          .setApprovalForAll(rootTunnelAddressV2, true)
          .send({ from: account })
          .then((res) => {
            setApprovedRootTunnel(true);
            dispatch(globalActions.setIsLoading(false));
            return res;
          })
          .catch((err) => {
            console.log(err);
            dispatch(globalActions.setIsLoading(false));
            throw err;
          });
      } catch (err) {
        dispatch(globalActions.setIsLoading(false));
        throw err;
      }
    }
  };

  return { approvedRootTunnel, setApprovedRootTunnel, approveForRootTunnel };
}
