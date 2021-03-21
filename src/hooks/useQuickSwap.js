import { getQuickSwapRouterContract } from '@services/contract.service';
import { ethers } from 'ethers';

export default function useQuickSwap(usdtAmount, slippage = 1, toMona = true) {
  const swapCallback = useCallback(async () => {
    const quickSwapRouter = await getQuickSwapRouterContract();
    quickSwapRouter.methods.swapExactTokensForTokens(ethers.utils.parseUnits(usdtAmount, 6));
  });
}
