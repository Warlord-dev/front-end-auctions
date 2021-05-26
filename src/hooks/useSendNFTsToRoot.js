import { useSelector, useDispatch } from 'react-redux';
import { getAccount } from '@selectors/user.selectors';
import { getDTXMaticContract } from '@services/contract.service';
import { useIsMainnet } from './useIsMainnet';
import globalActions from '@actions/global.actions';
import userActions from '@actions/user.actions';
import { getUser } from '@helpers/user.helpers';

const useSendNFTsToRoot = () => {
  const dispatch = useDispatch();
  const isMainnet = useIsMainnet();
  const account = useSelector(getAccount);
  const user = useSelector(getUser);
  const withdrawalTxs = (user.withdrawalTxs || []).filter((tx) => tx.amount);

  const sendNTFsToRoot = async (tokenIds) => {
    try {
      dispatch(globalActions.setIsLoading(true));
      const parsedTokenIds = tokenIds.map((tokenId) => parseInt(tokenId, 10));
      const dtxContract = getDTXMaticContract(isMainnet);
      const res = await dtxContract.methods.sendNFTsToRoot(parsedTokenIds).send({ from: account });
      const oldIds = [...tokenIds];
      const updatedTxs = [
        ...oldIds.map((nftId, index) => ({
          txHash: res.transactionHash,
          amount: nftId,
          status: 'pending-721',
          created: new Date(),
          sendNftsToRootTokenIds: oldIds,
        })),
      ];
      dispatch(
        userActions.updateProfile({
          withdrawalTxs: [...withdrawalTxs, ...updatedTxs],
        }),
      );
      return res;
    } catch (e) {
      dispatch(globalActions.setIsLoading(false));
      throw e;
    }
  };

  return sendNTFsToRoot;
};

export default useSendNFTsToRoot;
