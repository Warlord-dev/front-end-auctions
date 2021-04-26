import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import Web3 from 'web3';

import { getAccount } from '@selectors/user.selectors';
import config from '@utils/config';
import useMaticPosClient from './useMaticPosClient';
import { useIsMainnet } from './useIsMainnet';
import usePollar from './usePollar';
import { useDTXBalance } from './useERC721Balance';
import erc731_abi from '@constants/erc721_abi_V2.json';

const getERC721TokenContract = (parent, token) => {
  const web3 = parent ? new Web3(window.ethereum) : this.web3Client.web3;
  return new web3.eth.Contract(erc731_abi, token);
};

export function useDTXTokenIds() {
  const [dtxEthIds, setDtxEthIds] = useState([]);
  const [dtxMaticIds, setDtxMaticIds] = useState([]);

  const account = useSelector(getAccount);
  const isMainnet = useIsMainnet();

  const [posClientParent, posClientChild] = useMaticPosClient();

  const [dtxEthBalance, dtxMaticBalance] = useDTXBalance();

  const fetchDtxIds = useCallback(async () => {
    if (account && posClientParent && posClientChild) {
      console.log('this is posclientchild', posClientChild);
      const erc721Contract = getERC721TokenContract(
        true,
        '0xa715d6005a6EFBA3cA2546B67a296Fe1f06b3aB5',
      );
      console.log('this is methods', erc721Contract.methods);
      console.log('this is account', account);
      const batchTokensOfOwner = erc721Contract.methods['batchTokensOfOwner'].apply(null, [
        account,
      ]);
      const ethIds = await batchTokensOfOwner.call({});
      console.log('this is ethIdds', ethIds);
      setDtxEthIds(ethIds);

      // const maticIds = await Promise.all(
      //   [...Array(parseInt(dtxMaticBalance)).keys()].map((i) =>
      //     posClientParent.batchTokensOfOwnerERC721(
      //       account,
      //       config.DTX_ADDRESSES[isMainnet ? 'matic' : 'mumbai'],
      //       { parent: false },
      //     ),
      //   ),
      // );

      // setDtxMaticIds(maticIds);
    }
  }, [isMainnet, posClientParent, posClientChild, dtxEthBalance, dtxMaticBalance]);

  usePollar(fetchDtxIds);

  return [dtxEthIds, dtxMaticIds];
}
