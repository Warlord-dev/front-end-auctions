import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import config from '@utils/config';
import useMaticPosClient from './useMaticPosClient';
import { getChainId } from '@selectors/global.selectors';
import { getEnabledNetworkByChainId } from '@services/network.service';
import { convertToWei } from '@helpers/price.helpers';

export default function useWithdrawFromMatic() {
  const [posClientParent, posClient] = useMaticPosClient();
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);

  const withdrawCallback = useCallback(
    (amount) => {
      if (posClient && posClientParent && account && chainId) {
        const network = getEnabledNetworkByChainId(chainId);
        posClient
          .burnERC20(config.MONA_TOKEN_ADDRESSES[network.alias], convertToWei(amount), {
            from: account,
          })
          .then((res) => {
            console.log('burn resp', res);
          });

        // posClientParent
        //   .exitERC20('0x65ff381f669f8e6251cf06e98b811e6ae3e00a98d8b0e835ad03c3702b6f3006', {
        //     from: account,
        //   })
        //   .then((res) => {
        //     console.log('exit resp', res);
        //   });
      }
    },
    [posClient, account]
  );

  //   posClientParent
  //     .exitERC20('0x96961436403b482fc01f1363d15e803a1835bd6e97771e0934eef1c272d68503', {
  //       from: account,
  //     })
  //     .then((res) => {
  //       console.log('exit resp', res);
  //     });

  return withdrawCallback;
}
