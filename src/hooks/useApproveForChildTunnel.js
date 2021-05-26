import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import { getChainId } from '@selectors/global.selectors';
import { getChildTunnelAddressV2ByChainId } from '@services/network.service';
import globalActions from '@actions/global.actions';
import { getDTXMaticContract } from '@services/contract.service';
import { useIsMainnet } from './useIsMainnet';

export default function useApproveForChildTunnel() {
  const dispatch = useDispatch();
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);
  const isMainnet = useIsMainnet();

  const [approvedChildTunnel, setApprovedChildTunnel] = useState(false);

  const approveForChildTunnel = () => {
    if (account && chainId) {
      try {
        dispatch(globalActions.setIsLoading(true));
        const dtxMaticContract = getDTXMaticContract(isMainnet);
        const childTunnelAddress = getChildTunnelAddressV2ByChainId(chainId);
        console.log(dtxMaticContract);
        return dtxMaticContract.methods
          .setApprovalForAll(childTunnelAddress, true)
          .send({ from: account })
          .then((res) => {
            setApprovedChildTunnel(true);
            dispatch(globalActions.setIsLoading(false));
            return res;
          })
          .catch((err) => {
            dispatch(globalActions.setIsLoading(false));
            throw err;
          });
      } catch (err) {
        dispatch(globalActions.setIsLoading(false));
        throw err;
      }
    }
  };

  return { approvedChildTunnel, setApprovedChildTunnel, approveForChildTunnel };
}
