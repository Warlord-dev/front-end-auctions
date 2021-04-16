import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import { getDTXContract, getDigiMaterialV2Contract } from '@services/contract.service';
import config from '@utils/config';
import { getApprovalStatus, setApprovalStatus } from '@utils/webStorage.util';
import { useIsMainnet } from './useIsMainnet';

const useSendNFTsToRoot = () => {
  const isMainnet = useIsMainnet();
  const account = useSelector(getAccount);
  const isApproved = getApprovalStatus();
  const dtxAddress = config.DTX_ADDRESSES[isMainnet ? 'matic' : 'mumbai'];

  const sendNTFsToRoot = useCallback(
    async (tokenIds) => {
      try {
        const dtxContract = getDTXContract();
        const digiMaterialV2Contract = getDigiMaterialV2Contract();

        if (!isApproved) {
          await digiMaterialV2Contract.methods
            .setApprovalForAll(dtxAddress, true)
            .send({ from: account }, (error, hash) => {
              console.log('CALLBACK ERR - ', error, hash);
            });
        }
        const res = await dtxContract.methods.sendNFTsToRoot(tokenIds).call({ from: account });
        return { success: true, result: res };
      } catch (e) {
        return { success: false, result: e };
      }
    },
    [getDTXContract, account],
  );

  return sendNTFsToRoot;
};

export default useSendNFTsToRoot;
