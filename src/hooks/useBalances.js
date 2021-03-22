import { getAccount } from '@selectors/user.selectors';
import { getUSDTContract } from '@services/contract.service';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { utils as ethersUtils } from 'ethers';
import usePollar from './usePollar';
import { getChainId } from '@selectors/global.selectors';

export const useUSDTBalance = () => {
  const [balance, setBalance] = useState('0.0');
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);

  const fetchUSDTBalance = useCallback(async () => {
    const usdtContract = await getUSDTContract(chainId);
    const usdtBalance = await usdtContract.methods.balanceOf(account).call({ from: account });

    setBalance(ethersUtils.formatUnits(usdtBalance, 6));
  }, [account, chainId]);

  usePollar(fetchUSDTBalance);

  return balance;
};
