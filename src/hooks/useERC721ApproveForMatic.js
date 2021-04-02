import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import config from '@utils/config';
import useMaticPosClient from './useMaticPosClient';
import { getChainId } from '@selectors/global.selectors';
import { getEnabledNetworkByChainId } from '@services/network.service';

export default function useERC721ApproveForMatic(tokenId) {
  const [posClient] = useMaticPosClient();
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);

  const [approved, setApproved] = useState(false);

  useEffect(() => {
    if (posClient && account && chainId) {
      const network = getEnabledNetworkByChainId(chainId);
      posClient
        .isApprovedAllERC721ForDeposit(config.DTX_ADDRESSES[network.alias], account)
        .then((res) => {
          if (res) {
            setApproved(true);
          }
        });
    }
  }, [account, posClient, chainId, tokenId]);

  const approveCallback = useCallback(
    (tokenId) => {
      if (posClient && account && chainId) {
        const network = getEnabledNetworkByChainId(chainId);
        posClient
          .approveAllERC721ForDeposit(config.DTX_ADDRESSES[network.alias], {
            from: account,
          })
          .then((res) => {
            console.log('approve resp', res);
            setApproved(true);
          });
      }
    },
    [posClient, account]
  );

  return { approved, approveCallback };
}
