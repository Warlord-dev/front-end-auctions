import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Web3 from 'web3';

import { getAccount } from '@selectors/user.selectors';
import config from '@utils/config';
import useMaticPosClient from './useMaticPosClient';
import { useIsMainnet } from './useIsMainnet';
import usePollar from './usePollar';
import { useDTXBalance } from './useERC721Balance';
import erc721_abi from '@constants/erc721_abi_V2.json';

const getERC721TokenContract = (provider, token) => {
  const web3 = new Web3(provider);
  return new web3.eth.Contract(erc721_abi, token);
};

export function useDTXTokenIds() {
  const [dtxEthIds, setDtxEthIds] = useState([]);
  const [dtxMaticIds, setDtxMaticIds] = useState([]);

  const account = useSelector(getAccount);
  const isMainnet = useIsMainnet();

  const [posClientParent, posClientChild] = useMaticPosClient();

  const [dtxEthBalance, dtxMaticBalance] = useDTXBalance();

  const fetchDtxEthIds = useCallback(async () => {
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
        setDtxEthIds(ethIds);
      } catch (e) {
        console.log(e);
      }
    }
  }, [dtxEthBalance]);

  const fetchDtxIds = useCallback(async () => {
    if (account) {
      try {
        const erc721MaticContract = getERC721TokenContract(
          isMainnet ? config.WEB3_URLS.MATIC : config.WEB3_URLS.MUMBAI,
          config.DTX_ADDRESSES[isMainnet ? 'matic' : 'mumbai'],
        );
        const batchTokensOfOwnerMatic = erc721MaticContract.methods[
          'batchTokensOfOwner'
        ].apply(null, [account]);
        const maticIds = await batchTokensOfOwnerMatic.call({});
        setDtxMaticIds(maticIds);
      } catch (e) {
        console.log(e);
      }
    }
  }, [dtxMaticBalance]);

  useEffect(() => {
    fetchDtxIds();
    fetchDtxEthIds();
  }, [dtxMaticBalance, dtxEthBalance]);

  return [dtxEthIds, dtxMaticIds];
}
