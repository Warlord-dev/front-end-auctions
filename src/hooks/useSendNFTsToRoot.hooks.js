import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import { getDTXMaticContract } from '@services/contract.service';

const useSendNFTsToRoot = () => {
  const isMainnet = process.env.NODE_ENV === 'production';
  const account = useSelector(getAccount);

  const sendNTFsToRoot = useCallback(
    async (tokenIds) => {
      try {
        const parsedTokenIds = tokenIds.map((tokenId) => parseInt(tokenId, 10));
        const dtxContract = getDTXMaticContract(isMainnet);
        const res = await dtxContract.methods
          .sendNFTsToRoot(parsedTokenIds)
          .send({ from: account });
        return { success: true, result: res };
      } catch (e) {
        throw e;
      }
    },
    [getDTXMaticContract, account],
  );

  return sendNTFsToRoot;
};

export default useSendNFTsToRoot;
