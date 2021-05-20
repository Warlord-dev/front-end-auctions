import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import config from '@utils/config';
import useMaticPosClient from './useMaticPosClient';
import { getChainId } from '@selectors/global.selectors';
import { getEnabledNetworkByChainId } from '@services/network.service';
import globalActions from '@actions/global.actions';

export default function useApproveForMatic(amount) {
  const dispatch = useDispatch();
  const [posClient] = useMaticPosClient();
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);

  const [approved, setApproved] = useState(false);

  // useEffect(() => {
  //   if (posClient && account && chainId) {
  //     const network = getEnabledNetworkByChainId(chainId);
  //     posClient
  //       .getERC20Allowance(account, config.MONA_TOKEN_ADDRESSES[network.alias])
  //       .then((res) => {
  //         if (res && res > parseInt(amount)) {
  //           setApproved(true);
  //         }
  //       });
  //   }
  // }, [account, posClient, chainId]);

  const approveCallback = () => {
    if (posClient && account && chainId) {
      const network = getEnabledNetworkByChainId(chainId);
      dispatch(globalActions.setIsLoading(true));
      return posClient
        .approveMaxERC20ForDeposit(config.MONA_TOKEN_ADDRESSES[network.alias], {
          from: account,
        })
        .then((res) => {
          setApproved(true);
          dispatch(globalActions.setIsLoading(false));
          return res;
        })
        .catch((err) => {
          dispatch(globalActions.setIsLoading(false));
          throw err;
        });
    }
  };

  return { approved, setApproved, approveCallback };
}
