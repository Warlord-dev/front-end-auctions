import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import { useDTXTokenIds } from './useERC721TokenId';
import { getEthNfts, getMaticNfts } from '@selectors/global.selectors';
import globalActions from '@actions/global.actions';
import apiService from '@services/api/api.service';

export function useEthMaticNFTs() {
  const dispatch = useDispatch();
  const [ethDtxTokenIds, maticDtxTokenIds] = useDTXTokenIds();
  const ethNfts = useSelector(getEthNfts).toJS();
  const maticNfts = useSelector(getMaticNfts).toJS();

  const account = useSelector(getAccount);

  const fetchEthNfts = async () => {
    console.log({ account });
    if (account) {
      try {
        const { digitalaxCollector } = await apiService.getDigitalaxCollector(account);
        dispatch(globalActions.setEthNfts(digitalaxCollector.parentsOwned));
      } catch (e) {
        console.log(e);
      }
    }
  };

  const fetchNfts = async () => {
    if (account) {
      try {
        const { digitalaxCollectorV2 } = await apiService.getDigitalaxCollectorV2(account);
        dispatch(globalActions.setMaticNfts(digitalaxCollectorV2.parentsOwned));
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
