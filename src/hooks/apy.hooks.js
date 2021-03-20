import BigNumber from 'bignumber.js';
import { useSelector } from 'react-redux';
import {
  getExchangeRateETH,
  getChainId,
  getMonaPerEth,
  getRewards,
} from '@selectors/global.selectors';
import { getAllAuctions } from '@selectors/auction.selectors';
import { getRewardContractAddressByChainId } from '@services/network.service';
import { convertToEth } from '@helpers/price.helpers';

export const useAPY = (topBid) => {
  const APY = '0.00';
  const chainId = useSelector(getChainId);
  const exchangeRateETH = useSelector(getExchangeRateETH);
  const auctions = useSelector(getAllAuctions).toJS();
  const monaPerEth = 1.32; // useSelector(getMonaPerEth);
  const rewards = useSelector(getRewards);
  const address = getRewardContractAddressByChainId(chainId);

  if (!address || !topBid || !auctions.length) {
    return APY;
  }

  const TIME_INTERVAL = 365;
  const totalBidsBN = auctions.reduce(
    (acc, item) => (item.topBid ? acc.plus(item.topBid) : acc),
    new BigNumber(0)
  );

  const bidBN = new BigNumber(topBid || 0);
  const bidETHBN = new BigNumber(topBid ? convertToEth(topBid) : 0);

  const totalRatio =
    bidBN.gt(0) && totalBidsBN.gt(0) ? bidBN.dividedBy(totalBidsBN) : new BigNumber(0); // step 1

  const individualReward = totalRatio.times(new BigNumber(rewards)); // step 2

  const monaPerEthBN = new BigNumber(monaPerEth); // step 3

  const monaPerEthInUSDBN = monaPerEthBN.times(new BigNumber(exchangeRateETH));
  const reward = individualReward.times(monaPerEthInUSDBN);

  const bidUSDBN = bidETHBN.times(new BigNumber(exchangeRateETH)); // step 4 C13

  if (bidUSDBN.gt(0) && reward.gt(0)) {
    const ROI = reward.dividedBy(bidUSDBN).times(100);
    const APYInterval = ROI.times(TIME_INTERVAL)
      .times(totalRatio)
      .dividedBy(new BigNumber('1000000000000000000'));
    return APYInterval.toFixed(2);
  }

  return APY;
};
