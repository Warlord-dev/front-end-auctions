import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import { getDTXContract } from '@services/contract.service';

const useSendNFTsToRoot = () => {
  const account = useSelector(getAccount);

  const sendNTFsToRoot = useCallback(
    async (tokenIds) => {
      try {
        const dtxContract = await getDTXContract();
        const res = await dtxContract.methods.sendNFTsToRoot(tokenIds).call({ from: account });
        return { success: true, result: res };
      } catch (e) {
        return { success: false, result: e };
      }
    },
    [getDTXContract, account]
  );

  return sendNTFsToRoot;
};

export default useSendNFTsToRoot;
