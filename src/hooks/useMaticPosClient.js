import { MaticPOSClient } from '@maticnetwork/maticjs';
import { useSelector } from 'react-redux';
import { getAccount } from '@selectors/user.selectors';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import config from '@utils/config';
import { useIsMainnet } from './useIsMainnet';

export default function useMaticPosClient() {
  const account = useSelector(getAccount);
  const isMainnet = useIsMainnet();

  const [posClientParent, setPosClientParent] = useState();
  const [posClientChild, setPosClientChild] = useState();

  useEffect(() => {
    const web3 = new Web3(window.ethereum);

    if (account) {
      setPosClientParent(
        new MaticPOSClient({
          maticProvider: isMainnet ? config.MUMBAI_WEB3_URL : config.MUMBAI_WEB3_URL,
          parentProvider: web3,
          parentDefaultOptions: { from: account },
          maticDefaultOptions: { from: account },
        })
      );

      setPosClientChild(
        new MaticPOSClient({
          maticProvider: web3,
          parentProvider: isMainnet ? config.DEFAULT_WEB3_URL : config.WEB3_URLS.GOERLI,
          parentDefaultOptions: { from: account },
          maticDefaultOptions: { from: account },
        })
      );
    }
  }, [account, isMainnet]);

  return [posClientParent, posClientChild];
}
