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

    async function checkInclusion(txHash) {
      const txDetails = await web3.eth.getTransactionReceipt(txHash);
      return !txDetails;
    }

    setStatus(await Promise.all(txIds.map((id) => checkInclusion(id))));
  }, [account, chainId]);

  usePollar(fetchCheckInclusion);

  return status;
};
