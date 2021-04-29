import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { formatEther } from '@ethersproject/units';
import { getAccount } from '@selectors/user.selectors';
import config from '@utils/config';
import useMaticPosClient from './useMaticPosClient';
import { useIsMainnet } from './useIsMainnet';
import usePollar from './usePollar';

export function useDTXBalance() {
  const [garmentETHBalance, setGarmentETHBalance] = useState('0');
  const [garmentMaticV1Balance, setGarmentMaticV1Balance] = useState('0');

  const account = useSelector(getAccount);
  const isMainnet = useIsMainnet();

  const [posClientParent, posClientChild] = useMaticPosClient();

  const fetchMonaETHBalance = useCallback(async () => {
    if (posClientChild) {
      const ethBalance = await posClientChild.balanceOfERC721(
        account,
        config.DTX_ADDRESSES[isMainnet ? 'mainnet' : 'goerli'],
        {
          parent: true,
        },
      );
      setGarmentETHBalance(() => ethBalance);
    }
  }, [isMainnet, posClientChild]);

  const fetchMonaMaticBalance = useCallback(async () => {
    if (posClientParent) {
      const maticBalance = await posClientParent.balanceOfERC20(
        account,
        config.DTX_ADDRESSES[isMainnet ? 'matic' : 'mumbai'],
        {
          parent: false,
        },
      );
      setGarmentMaticV1Balance((va) => maticBalance);
    }
  }, [isMainnet, posClientParent]);

  usePollar(fetchMonaETHBalance);
  usePollar(fetchMonaMaticBalance);

  return [garmentETHBalance, garmentMaticV1Balance];
}
