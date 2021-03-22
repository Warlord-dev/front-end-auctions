import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { formatEther } from '@ethersproject/units';
import { getAccount } from '@selectors/user.selectors';
import config from '@utils/config';
import useMaticPosClient from './useMaticPosClient';
import { useIsMainnet } from './useIsMainnet';
import usePollar from './usePollar';

export function useMonaBalance() {
  const [monaEthBalance, setMonaEthBalance] = useState('0');
  const [monaMaticBalance, setMonaMaticBalance] = useState('0');

  const account = useSelector(getAccount);
  const isMainnet = useIsMainnet();

  const [posClientParent, posClientChild] = useMaticPosClient();

  const fetchMonaBalance = useCallback(async () => {
    if (account && posClientParent && posClientChild) {
      // const ethBalance = await posClientChild.balanceOfERC20(
      //   account,
      //   config.MONA_TOKEN_ADDRESSES[isMainnet ? 'mainnet' : 'goerli'],
      //   {
      //     parent: true,
      //   }
      // );
      // setMonaEthBalance(formatEther(ethBalance));
      // const maticBalance = await posClientParent.balanceOfERC20(
      //   account,
      //   config.MONA_TOKEN_ADDRESSES[isMainnet ? 'matic' : 'mumbai'],
      //   {
      //     parent: false,
      //   }
      // );
      // setMonaMaticBalance(formatEther(maticBalance));
    }
  }, [isMainnet, posClientParent, posClientChild]);

  usePollar(fetchMonaBalance);

  return [monaEthBalance, monaMaticBalance];
}
