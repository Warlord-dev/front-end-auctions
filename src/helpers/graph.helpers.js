import BigNumber from 'bignumber.js';
import { convertToEth } from '@helpers/price.helpers';
import { HISTORY_BID_PLACED_EVENT, HISTORY_BID_WITHDRAWN_EVENT } from '@constants/history.constants';

export const prepareGraphHistory = (history) => {
  const sortedHistory = history
    .sort((a, b) => a.timestamp - b.timestamp);

  let lastBidPlaced = null;

  const data = sortedHistory
    .map((item, index) => {

      const value = item.value ? item.value : 0;

      if (item.eventName === HISTORY_BID_PLACED_EVENT) {
        lastBidPlaced = item;
      }

      if (index !== 0 && item.eventName === HISTORY_BID_WITHDRAWN_EVENT) {
        const prevValue = lastBidPlaced && lastBidPlaced.value ? lastBidPlaced.value : 0;
        const prevValueBN = new BigNumber(prevValue);
        const valueBN = new BigNumber(value);
        const currentValue = prevValueBN.minus(valueBN);
        return [item.timestamp * 1000, Number(convertToEth(currentValue.toString(10)))];
      }

      return [item.timestamp * 1000, Number(convertToEth(item.value ? item.value : 0))];
    });

  return data;
};
export const prepareGraphAuctions = (auctions) => {
  const sortedAuctions = auctions
    .filter((item) => item.topBid !== null)
    .sort((a, b) => a.endTime - b.endTime);

  const data = sortedAuctions
    .map((item) => [item.endTime * 1000, Number(convertToEth(item.topBid))]);

  return data;
};
