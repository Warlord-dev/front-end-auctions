import { useSelector, useDispatch } from 'react-redux';
import { getAccount } from '@selectors/user.selectors';
import { getChildTunnelContract } from '@services/contract.service';
import globalActions from '@actions/global.actions';
import userActions from '@actions/user.actions';
import { getUser } from '@helpers/user.helpers';
import { getChainId } from '@selectors/global.selectors';

const useSendNFTsToRootChildTunnel = () => {
  const dispatch = useDispatch();
  const chainId = useSelector(getChainId);
  const account = useSelector(getAccount);
  const user = useSelector(getUser);
  const withdrawalTxs = (user.withdrawalTxs || []).filter((tx) => tx.amount);

  const sendNTFsToRootChildTunnel = async (tokenIds) => {
    try {
      dispatch(globalActions.setIsLoading(true));
      const parsedTokenIds = tokenIds.map((tokenId) => parseInt(tokenId, 10));
      const childTunnelContract = getChildTunnelContract(chainId);
      console.log(childTunnelContract);
      const res = await childTunnelContract.methods
        .sendNFTsToRoot(parsedTokenIds)
        .send({ from: account });
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

  return sendNTFsToRootChildTunnel;
};

export default useSendNFTsToRootChildTunnel;
