import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import config from '@utils/config';
import useMaticPosClient from './useMaticPosClient';
import { getChainId } from '@selectors/global.selectors';
import { getEnabledNetworkByChainId } from '@services/network.service';
import { convertToWei } from '@helpers/price.helpers';

export default function useDepositToMatic() {
  const [posClient] = useMaticPosClient();
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);

  const depositCallback = useCallback(
    (amount) => {
      if (posClient && account && chainId) {
        const network = getEnabledNetworkByChainId(chainId);
        posClient
          .depositERC20ForUser(
            config.MONA_TOKEN_ADDRESSES[network.alias],
            account,
            convertToWei(amount),
            {
              from: account,
            }
          )
          .then((res) => {
            console.log('deposit resp', res);
          });
      }
    },
    [posClient, account]
  );

  return depositCallback;
}
