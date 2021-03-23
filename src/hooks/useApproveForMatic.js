import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import config from '@utils/config';
import useMaticPosClient from './useMaticPosClient';
import { getChainId } from '@selectors/global.selectors';
import { getEnabledNetworkByChainId } from '@services/network.service';

export default function useApproveForMatic(amount) {
  const [posClient] = useMaticPosClient();
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);

  const [approved, setApproved] = useState(false);

  useEffect(() => {
    console.log(chainId);
    if (posClient && account && chainId) {
      const network = getEnabledNetworkByChainId(chainId);
      posClient
        .getERC20Allowance(account, config.MONA_TOKEN_ADDRESSES[network.alias])
        .then((res) => {
          if (res && res > parseInt(amount)) {
            setApproved(true);
          }
        });
    }
  }, [account, posClient, chainId]);

  const approveCallback = useCallback(() => {
    if (posClient && account && chainId) {
      const network = getEnabledNetworkByChainId(chainId);
      posClient
        .approveMaxERC20ForDeposit(config.MONA_TOKEN_ADDRESSES[network.alias], {
          from: account,
        })
        .then((res) => {
          console.log('approve resp', res);
          setApproved(true);
        });
    }
  }, [posClient, account]);

  return { approved, approveCallback };
}
