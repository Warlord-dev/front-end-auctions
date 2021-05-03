import { MaticPOSClient } from '@maticnetwork/maticjs';
import { useSelector } from 'react-redux';
import { getAccount } from '@selectors/user.selectors';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import config from '@utils/config';
import RootChain from '@maticnetwork/maticjs/lib/root/RootChain';
import ExitManager from '@maticnetwork/maticjs/lib/common/ExitManager';
import { useIsMainnet } from './useIsMainnet';

export default function useMaticExitManager() {
  const account = useSelector(getAccount);
  const isMainnet = useIsMainnet();

  const [posExitManager, setPosExitManager] = useState();

  useEffect(() => {
    const web3 = new Web3(window.ethereum);

    if (account) {
      const options = {
        network: isMainnet ? 'mainnet' : 'testnet',
        version: isMainnet ? 'v1' : 'mumbai',
        parentProvider: web3,
        maticProvider: isMainnet ? config.WEB3_URLS.MATIC : config.WEB3_URLS.MUMBAI,
        parentDefaultOptions: { from: account },
        maticDefaultOptions: { from: account },
      };
      const client = new MaticPOSClient(options);
      const mgr = new ExitManager(RootChain, options, client);
      const temp = mgr.web3Client.posRootChainManager.exitManager;
      setPosExitManager(temp);
    }
  }, [account, isMainnet]);

  return [posExitManager];
}
