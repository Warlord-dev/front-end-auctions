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
  console.log('this is isMainnet', isMainnet);

  const [posClientParent, setPosClientParent] = useState();
  const [posClientChild, setPosClientChild] = useState();

  useEffect(() => {
    const web3 = new Web3(window.ethereum);

    if (account) {
      setPosClientParent(
        new MaticPOSClient({
          network: isMainnet ? 'mainnet' : 'testnet',
          version: isMainnet ? 'v1' : 'mumbai',
          parentProvider: web3,
          maticProvider: isMainnet ? config.WEB3_URLS.MATIC : config.WEB3_URLS.MUMBAI,
          parentDefaultOptions: { from: account },
          maticDefaultOptions: { from: account },
        }),
      );

      setPosClientChild(
        new MaticPOSClient({
          network: isMainnet ? 'mainnet' : 'testnet',
          version: isMainnet ? 'v1' : 'mumbai',
          maticProvider: web3,
          parentProvider: isMainnet ? config.DEFAULT_WEB3_URL : config.WEB3_URLS.GOERLI,
          parentDefaultOptions: { from: account },
          maticDefaultOptions: { from: account },
        }),
      );
    }
  }, [account, isMainnet]);

  return [posClientParent, posClientChild];
}
