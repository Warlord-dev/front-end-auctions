const Web3 = require('web3');
import { getChainId } from '@selectors/global.selectors';
import { getAccount } from '@selectors/user.selectors';
import config from '@utils/config';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useIsMainnet } from './useIsMainnet';
import usePollar from './usePollar';

export const useCheckInclusion = (txIds) => {
  const [status, setStatus] = useState([]);
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);
  const isMainnet = useIsMainnet();

  const fetchCheckInclusion = useCallback(async () => {
    const provider = new Web3.providers.HttpProvider(
      isMainnet ? config.DEFAULT_WEB3_URL : config.WEB3_URLS.GOERLI
    );
    const web3 = new Web3(provider);

    const chil_provider = new Web3.providers.HttpProvider(
      isMainnet ? config.WEB3_URLS.MUMBAI : config.WEB3_URLS.MUMBAI
    );
    const child_web3 = new Web3(chil_provider);

    async function checkInclusion(txHash) {
      const txDetails = await child_web3.eth.getTransactionReceipt(txHash);
      console.log('tx details', txDetails);

      web3.eth.subscribe(
        'logs',
        {
          address: '0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74',
        },
        async (error, result) => {
          if (error) {
            console.error('error', error);
          }

          if (result && result.data) {
            let transaction = web3.eth.abi.decodeParameters(
              ['uint256', 'uint256', 'bytes32'],
              result.data
            );
            if (block <= transaction['1']) {
              resolve(result);
            }
          }
        }
      );

      return !txDetails;
    }

    setStatus(await Promise.all(txIds.map((id) => checkInclusion(id))));
  }, [account, chainId]);

  usePollar(fetchCheckInclusion);

  return status;
};
