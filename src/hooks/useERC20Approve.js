import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { MaxUint256 } from '@ethersproject/constants';

import { getAccount } from '@selectors/user.selectors';
import config from '@utils/config';
import { getChainId } from '@selectors/global.selectors';
import { getEnabledNetworkByChainId } from '@services/network.service';
import { getMonaTokenContract, getUSDTContract } from '@services/contract.service';
import { useIsMainnet } from './useIsMainnet';
import usePollar from './usePollar';
import { formatEther } from '@ethersproject/units';

export function useTokenAllowance(isMona = true) {
  const [allowance, setAllowance] = useState('0');
  const account = useSelector(getAccount);
  const isMainnet = useIsMainnet();
  const chainId = useSelector(getChainId);

  const fetchAllowance = useCallback(async () => {
    if (account && chainId) {
      const contract = isMona
        ? await getMonaTokenContract(config.MONA_TOKEN_ADDRESSES[isMainnet ? 'matic' : 'mumbai'])
        : await getUSDTContract(chainId);

      setAllowance(
        formatEther(
          await contract.methods.allowance(account, config.QUICKSWAP_ROUTER).call({ from: account })
        )
      );
    }
  }, [account, chainId]);

  usePollar(fetchAllowance);

  return allowance;
}

export default function useERC20Approve(amount, isMona) {
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);

  const [approved, setApproved] = useState(false);

  const allowance = useTokenAllowance(isMona);

  useEffect(() => {
    if (parseFloat(allowance) > parseFloat(amount)) {
      setApproved(true);
    } else {
      setApproved(false);
    }
  }, [amount, allowance, isMona]);

  const approveCallback = useCallback(async () => {
    if (account && chainId) {
      const contract = isMona
        ? await getMonaTokenContract(config.MONA_TOKEN_ADDRESSES[isMainnet ? 'matic' : 'mumbai'])
        : await getUSDTContract(chainId);

      contract.methods.approve(config.QUICKSWAP_ROUTER, MaxUint256).send({ from: account });
    }
  }, [account]);

  return { approved, approveCallback };
}
