import { useEffect, useState } from 'react';
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
  const dtxContract = getDTXContract(isMainnet);
  const rootTunnelAddressV2 = getRootTunnelAddressV2ByChainId(chainId);

  const isApprovedForAll = async () => {
    return await dtxContract?.methods
      .isApprovedForAll(account, rootTunnelAddressV2)
      .call({ from: account });
  };

  useEffect(() => {
    const fetchApprovedAll = async () => {
      const approved = await isApprovedForAll();
      setApprovedRootTunnel(approved);
    };

    fetchApprovedAll();
  }, []);

  const approveForRootTunnel = async () => {
    if (account && chainId) {
      try {
        dispatch(globalActions.setIsLoading(true));
        const isApprovedAll = await isApprovedForAll();
        if (!isApprovedAll) {
          return dtxContract?.methods
            .setApprovalForAll(rootTunnelAddressV2, true)
            .send({ from: account })
            .then((res) => {
              setApprovedRootTunnel(true);
              dispatch(globalActions.setIsLoading(false));
              return res;
            })
            .catch((err) => {
              dispatch(globalActions.setIsLoading(false));
              throw err;
            });
        } else {
          setApprovedRootTunnel(true);
          dispatch(globalActions.setIsLoading(false));
          return;
        }
      } catch (err) {
        dispatch(globalActions.setIsLoading(false));
        throw err;
      }
    }
  };

  return { approvedRootTunnel, setApprovedRootTunnel, approveForRootTunnel };
}
