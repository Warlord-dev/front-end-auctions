import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { formatEther } from '@ethersproject/units';
import { getAccount } from '@selectors/user.selectors';
import config from '@utils/config';
import useMaticPosClient from './useMaticPosClient';
import { useIsMainnet } from './useIsMainnet';
import globalActions from '@actions/global.actions';
import { getMonaEthBalance, getMonaMaticBalance } from '@selectors/global.selectors';
import { getUser } from '@helpers/user.helpers';

export function useMonaBalance() {
  const dispatch = useDispatch();
  const monaMaticBalance = useSelector(getMonaMaticBalance);
  const monaEthBalance = useSelector(getMonaEthBalance);
  const user = useSelector(getUser);

  const account = useSelector(getAccount);
  const isMainnet = useIsMainnet();

  const [posClientParent, posClientChild] = useMaticPosClient();

  const fetchMonaBalance = async () => {
    try {
      const ethBalance = await posClientChild.balanceOfERC20(
        account,
        config.MONA_TOKEN_ADDRESSES[isMainnet ? 'mainnet' : 'goerli'],
        {
          parent: true,
        },
      );
      const maticBalance = await posClientParent.balanceOfERC20(
        account,
        config.MONA_TOKEN_ADDRESSES[isMainnet ? 'matic' : 'mumbai'],
        {
          parent: false,
        },
      );
      if (monaEthBalance !== formatEther(ethBalance)) {
        dispatch(globalActions.setMonaEthBalance(formatEther(ethBalance)));
      }
      if (monaMaticBalance !== formatEther(maticBalance)) {
        dispatch(globalActions.setMonaMaticBalance(formatEther(maticBalance)));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (account && posClientParent && posClientChild) {
      console.log('this is fetch mona balance');
      fetchMonaBalance();
    }
  }, [isMainnet, posClientChild, posClientParent, user]);

  return [monaEthBalance, monaMaticBalance];
}
