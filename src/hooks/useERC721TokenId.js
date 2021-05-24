import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Web3 from 'web3';

import { getAccount } from '@selectors/user.selectors';
import config from '@utils/config';
import useMaticPosClient from './useMaticPosClient';
import { useIsMainnet } from './useIsMainnet';
import usePollar from './usePollar';
import { useDTXBalance } from './useERC721Balance';
import erc721_abi from '@constants/erc721_abi_V2.json';
import { getDtxEthIds, getDtxMaticIds } from '@selectors/global.selectors';
import globalActions from '@actions/global.actions';

const getERC721TokenContract = (provider, token) => {
  const web3 = new Web3(provider);
  return new web3.eth.Contract(erc721_abi, token);
};

export function useDTXTokenIds() {
  const dispatch = useDispatch();
  const dtxEthIds = useSelector(getDtxEthIds);
  const dtxMaticIds = useSelector(getDtxMaticIds);

  const account = useSelector(getAccount);
  const isMainnet = useIsMainnet();

  const [posClientParent, posClientChild] = useMaticPosClient();

  const [dtxEthBalance, dtxMaticBalance] = useDTXBalance();

  const fetchDtxEthIds = async () => {
    if (account && posClientChild) {
      try {
        const ethIds = await Promise.all(
          [...Array(parseInt(dtxEthBalance)).keys()].map((i) =>
            posClientChild.tokenOfOwnerByIndexERC721(
              account,
              config.DTX_ADDRESSES[isMainnet ? 'mainnet' : 'goerli'],
              i,
              { parent: true },
            ),
          ),
        );
        dispatch(globalActions.setDtxEthIds(ethIds));
      } catch (e) {
        console.log(e);
      }
    }
  };

  const fetchDtxIds = async () => {
    if (account) {
      try {
        const erc721MaticContract = getERC721TokenContract(
          isMainnet ? config.WEB3_URLS.MATIC : config.WEB3_URLS.MUMBAI,
          config.DTX_ADDRESSES[isMainnet ? 'matic' : 'mumbai'],
        );
        const batchTokensOfOwnerMatic = erc721MaticContract.methods['batchTokensOfOwner'].apply(
          null,
          [account],
        );
        const maticIds = await batchTokensOfOwnerMatic.call({});
        dispatch(globalActions.setDtxMaticIds(maticIds));
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    fetchDtxIds();
    fetchDtxEthIds();
  }, [dtxMaticBalance, dtxEthBalance]);

  return [dtxEthIds, dtxMaticIds];
}
