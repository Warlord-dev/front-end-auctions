import { useCallback, useEffect, useState } from 'react';
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
      try {
        const dtxContract = await getDTXContract(isMainnet);
        const ethNftTokenUris = await Promise.all(
          ethDtxTokenIds.map((i) =>
            dtxContract.methods.tokenURI(parseInt(i)).call({ from: account }),
          ),
        );

        setEthNfts(ethNftTokenUris.map((uri, i) => ({ tokenUri: uri, id: ethDtxTokenIds[i] })));
      } catch (e) {
        console.log(e);
      }
    }
  }, [account, isMainnet, ethDtxTokenIds]);

  const fetchNfts = useCallback(async () => {
    if (account) {
      try {
        const maticDtxContract = await getDTXMaticContract(isMainnet);

        const maticNftTokenUris = await maticDtxContract.methods
          .batchTokenURI(maticDtxTokenIds)
          .call({ from: account });
        setMaticNfts(
          maticNftTokenUris.map((uri, i) => ({ tokenUri: uri, id: maticDtxTokenIds[i] })),
        );
      } catch (e) {
        console.log(e);
      }
    }
  }, [account, isMainnet, maticDtxTokenIds]);

  useEffect(() => {
    fetchNfts();
    fetchEthNfts();
  }, [maticDtxTokenIds, ethDtxTokenIds]);

  return [ethNfts, maticNfts];
}
