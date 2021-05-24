import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import { useIsMainnet } from './useIsMainnet';
import { useDTXTokenIds } from './useERC721TokenId';
import { getDTXContract, getDTXMaticContract } from '@services/contract.service';
import { getEthNfts, getMaticNfts } from '@selectors/global.selectors';
import globalActions from '@actions/global.actions';

export function useEthMaticNFTs() {
  const dispatch = useDispatch();
  const [ethDtxTokenIds, maticDtxTokenIds] = useDTXTokenIds();
  const ethNfts = useSelector(getEthNfts);
  const maticNfts = useSelector(getMaticNfts);

  const account = useSelector(getAccount);
  const isMainnet = useIsMainnet();

  const fetchEthNfts = async () => {
    if (account) {
      try {
        const dtxContract = await getDTXContract(isMainnet);
        const ethNftTokenUris = await Promise.all(
          ethDtxTokenIds.map((i) =>
            dtxContract.methods.tokenURI(parseInt(i)).call({ from: account }),
          ),
        );

        dispatch(
          globalActions.setEthNfts(
            ethNftTokenUris.map((uri, i) => ({ tokenUri: uri, id: ethDtxTokenIds[i] })),
          ),
        );
      } catch (e) {
        console.log(e);
      }
    }
  };

  const fetchNfts = async () => {
    if (account) {
      try {
        const maticDtxContract = await getDTXMaticContract(isMainnet);

        const maticNftTokenUris = await maticDtxContract.methods
          .batchTokenURI(maticDtxTokenIds)
          .call({ from: account });
        dispatch(
          globalActions.setMaticNfts(
            maticNftTokenUris.map((uri, i) => ({ tokenUri: uri, id: maticDtxTokenIds[i] })),
          ),
        );
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    fetchNfts();
    fetchEthNfts();
  }, [maticDtxTokenIds, ethDtxTokenIds]);

  return [ethNfts, maticNfts];
}
