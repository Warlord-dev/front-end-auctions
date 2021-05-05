import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import { getChainId } from '@selectors/global.selectors';
import { useIsMainnet } from './useIsMainnet';
import {
  getUpgraderMaticContract,
  getDTXMaticContract,
  getDTXMaticV1Contract,
} from '@services/contract.service';

export default function useERC721Upgrader() {
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);
  const isMainnet = useIsMainnet();

  const upgradeCallback = useCallback(
    async (tokenIds) => {
      // return new Promise(async (resolve, reject) => {
      if (account && chainId) {
        try {
          const upgraderContract = await getUpgraderMaticContract(isMainnet);
          const maticDtxContract = await getDTXMaticV1Contract(isMainnet);
          await maticDtxContract.methods
            .setApprovalForAll(upgraderContract._address, true)
            .send({ from: account });
          while (1) {
            const nodeIds = tokenIds.splice(0, 25);
            const res = await upgraderContract.methods.upgrade(nodeIds).send({ from: account });
            if (!tokenIds.length) break;
          }
        } catch (e) {
          console.log(e);
          // reject(e);
        }
      }
      // });
    },
    [account, isMainnet, chainId],
  );

  return upgradeCallback;
}
