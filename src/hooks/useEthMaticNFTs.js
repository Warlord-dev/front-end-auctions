import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import useMaticPosClient from './useMaticPosClient';
import { useIsMainnet } from './useIsMainnet';
import usePollar from './usePollar';
import { useDTXTokenIds } from './useERC721TokenId';
import { getDTXContract, getDTXMaticContract } from '@services/contract.service';

export function useEthMaticNFTs() {
  const [ethDtxTokenIds, maticDtxTokenIds] = useDTXTokenIds();
  const [ethNfts, setEthNfts] = useState([]);
  const [maticNfts, setMaticNfts] = useState([]);

  const account = useSelector(getAccount);
  const isMainnet = useIsMainnet();

  const [posClientParent, posClientChild] = useMaticPosClient();

  const fetchNfts = useCallback(async () => {
    if (account && posClientParent && posClientChild) {
      const dtxContract = await getDTXContract(isMainnet);

      const ethNftTokenUris = await Promise.all(
        ethDtxTokenIds.map((i) => dtxContract.methods.tokenURI(parseInt(i)).call({ from: account }))
      );

      setEthNfts(ethNftTokenUris.map((uri, i) => ({ tokenUri: uri, id: ethDtxTokenIds[i] })));

      const maticDtxContract = await getDTXMaticContract(isMainnet);

      const maticNftTokenUris = await Promise.all(
        maticDtxTokenIds.map((i) =>
          maticDtxContract.methods.tokenURI(parseInt(i)).call({ from: account })
        )
      );

      setMaticNfts(maticNftTokenUris.map((uri, i) => ({ tokenUri: uri, id: maticDtxTokenIds[i] })));
    }
  }, [isMainnet, ethDtxTokenIds, maticDtxTokenIds]);

  usePollar(fetchNfts);

  return [ethNfts, maticNfts];
}
