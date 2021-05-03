import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import config from '@utils/config';
import useMaticPosClient from './useMaticPosClient';
import { getChainId } from '@selectors/global.selectors';
import { useIsMainnet } from './useIsMainnet';

export default function useDepositToMatic() {
  const [posClient] = useMaticPosClient();
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);
  const isMainnet = useIsMainnet();

  const depositCallback = (tokenId) => {
    return new Promise((resolve, reject) => {
      if (posClient && account && chainId) {
        posClient
          .depositERC721ForUser(
            config.DTX_ADDRESSES[isMainnet ? 'mainnet' : 'goerli'],
            account,
            tokenId,
            {
              from: account,
            }
          )
          .then((res) => {
            console.log('deposit resp', res);
            resolve(res);
          })
          .catch((e) => reject(e));
      } else reject('error');
    });
  };

  return depositCallback;
}
