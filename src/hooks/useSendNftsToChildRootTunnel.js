import { useSelector, useDispatch } from 'react-redux';
import { getAccount } from '@selectors/user.selectors';
import { getRootTunnelV2Contract } from '@services/contract.service';
import globalActions from '@actions/global.actions';
import userActions from '@actions/user.actions';
import { getUser } from '@helpers/user.helpers';
import { getChainId } from '@selectors/global.selectors';

const useSendNftsToChildRootTunnel = () => {
  const dispatch = useDispatch();
  const chainId = useSelector(getChainId);
  const account = useSelector(getAccount);
  const user = useSelector(getUser);
  const depositTxs = (user?.depositTxs || []).filter((tx) => tx.amount);

  const sendNftsToChildRootTunnel = async (tokenIds) => {
    try {
      dispatch(globalActions.setIsLoading(true));
      const parsedTokenIds = tokenIds.map((tokenId) => parseInt(tokenId, 10));
      const rootTunnelContract = getRootTunnelV2Contract(chainId);

      const res = await rootTunnelContract?.methods
        .sendNFTsToChild(parsedTokenIds)
        .send({ from: account });
      const oldIds = [...tokenIds];
      const updatedTxs = [
        ...oldIds.map((nftId, index) => ({
          txHash: res.transactionHash,
          amount: nftId,
          tokenType: 'NFT SKINS',
          status: 'pending-721',
          created: new Date(),
        })),
      ];
      dispatch(
        userActions.updateProfile({
          depositTxs: [...depositTxs, ...updatedTxs],
        }),
      );
      return res;
    } catch (e) {
      dispatch(globalActions.setIsLoading(false));
      console.log('this is error', e);
      throw e;
    }
  };

  return sendNftsToChildRootTunnel;
};

export default useSendNftsToChildRootTunnel;
