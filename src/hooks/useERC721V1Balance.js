import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { formatEther } from '@ethersproject/units';
import { getAccount } from '@selectors/user.selectors';
import config from '@utils/config';
import useMaticPosClient from './useMaticPosClient';
import { useIsMainnet } from './useIsMainnet';
import usePollar from './usePollar';

export function useDTXV1Balance() {
  //const [garmentETHBalance, setGarmentETHBalance] = useState('0');
  const [garmentMaticV1Balance, setGarmentMaticV1Balance] = useState('0');

  const account = useSelector(getAccount);
  const isMainnet = useIsMainnet();

  const [posClientParent, posClientChild] = useMaticPosClient();

  const fetchMonaBalance = useCallback(async () => {
    if (account && posClientParent && posClientChild) {
      console.log('checking v1 balance');
      console.log(config.DTXV1_ADDRESSES[isMainnet ? 'matic' : 'mumbai']);
      try {
        const maticBalance = await posClientChild.balanceOfERC721(
          account,
          config.DTXV1_ADDRESSES[isMainnet ? 'matic' : 'mumbai'],
          {
            parent: false,
          },
        );
        console.log('v1 matic balance');
        console.log(maticBalance);
        setGarmentMaticV1Balance(maticBalance);
      } catch (e) {
        console.log(e);
      }
    }
  }, [isMainnet, posClientParent, posClientChild]);

  usePollar(fetchMonaBalance);

  return [garmentMaticV1Balance];
}
