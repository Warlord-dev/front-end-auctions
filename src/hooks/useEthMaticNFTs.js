import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import useMaticPosClient from './useMaticPosClient';
import { useIsMainnet } from './useIsMainnet';
import usePollar from './usePollar';
import { useDTXTokenIds } from './useERC721TokenId';
import { getDTXContract, getDTXMaticContract } from '@services/contract.service';
import { closeNotInstalledMetamask } from '@actions/modals.actions';

export function useEthMaticNFTs() {
  const [ethDtxTokenIds, maticDtxTokenIds] = useDTXTokenIds();
  const [ethNfts, setEthNfts] = useState([]);
  const [maticNfts, setMaticNfts] = useState([]);

  const account = useSelector(getAccount);
  const isMainnet = useIsMainnet();

  const fetchEthNfts = useCallback(async () => {
    if (account) {
      const dtxContract = await getDTXContract(isMainnet);
      const ethNftTokenUris = await Promise.all(
        ethDtxTokenIds.map((i) =>
          dtxContract.methods.tokenURI(parseInt(i)).call({ from: account }),
        ),
      );

      setEthNfts(ethNftTokenUris.map((uri, i) => ({ tokenUri: uri, id: ethDtxTokenIds[i] })));
    }
  }, [account, isMainnet, ethDtxTokenIds]);

  const fetchNfts = useCallback(async () => {
    if (account) {
      const maticDtxContract = await getDTXMaticContract(isMainnet);

      const maticNftTokenUris = await maticDtxContract.methods
        .batchTokenURI(maticDtxTokenIds)
        .call({ from: account });

      setMaticNfts(maticNftTokenUris.map((uri, i) => ({ tokenUri: uri, id: maticDtxTokenIds[i] })));
    }
  }, [account, isMainnet, maticDtxTokenIds]);

  usePollar(fetchNfts);
  usePollar(fetchEthNfts);

  return [ethNfts, maticNfts];
}
