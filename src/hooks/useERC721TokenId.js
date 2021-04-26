import { useCallback, useState } from 'react';
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

  const fetchDtxIds = useCallback(async () => {
    if (account && posClientChild) {
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

      const erc721MaticContract = getERC721TokenContract(
        isMainnet ? config.WEB3_URLS.MATIC : config.WEB3_URLS.MUMBAI,
        // config.WEB3_URLS.MUMBAI,
        config.DTX_ADDRESSES[isMainnet ? 'matic' : 'mumbai'],
        // '0xa715d6005a6EFBA3cA2546B67a296Fe1f06b3aB5',
      );
      const batchTokensOfOwnerMatic = erc721MaticContract.methods['batchTokensOfOwner'].apply(
        null,
        [account],
      );
      const maticIds = await batchTokensOfOwnerMatic.call({});

      setDtxMaticIds(maticIds);
    }
  }, [isMainnet, account, dtxEthBalance, dtxMaticBalance, posClientChild]);

  usePollar(fetchDtxIds);

  return [dtxEthIds, dtxMaticIds];
}
