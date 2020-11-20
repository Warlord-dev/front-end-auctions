import BigNumber from 'bignumber.js';

export const sortByLowestBid = (auctions) => auctions.sort((a, b) => {

  const aBN = new BigNumber(a.get('topBid'), 10);
  const bBN = new BigNumber(b.get('topBid'), 10);

  if (aBN.lt(bBN)) {
    return -1;
  }
  if (aBN.gt(bBN)) {
    return 1;
  }
  return 0;
});

export const sortByHighestBid = (auctions) => auctions.sort((a, b) => {

  const aBN = new BigNumber(a.get('topBid'), 10);
  const bBN = new BigNumber(b.get('topBid'), 10);

  if (aBN.gt(bBN)) {
    return -1;
  }

  if (aBN.lt(bBN)) {
    return 1;
  }

  return 0;
});

const getHistorySum = (history) => (history
  ? history.reduce((acc, currentValue) => acc.plus(new BigNumber(currentValue.value ? currentValue.value : 0, 10)), new BigNumber(0))
  : new BigNumber(0));

export const sortByHighestVolume = (auctions, historyByTokenId) => auctions.sort((a, b) => {

  const aHistory = historyByTokenId.get(a.get('id'));
  const bHistory = historyByTokenId.get(b.get('id'));
  const aSumHistory = getHistorySum(aHistory);
  const bSumHistory = getHistorySum(bHistory);

  if (aSumHistory.gt(bSumHistory)) {
    return -1;
  }

  if (aSumHistory.lt(bSumHistory)) {
    return 1;
  }

  return 0;
});

export const sortByLowestVolume = (auctions, historyByTokenId) => auctions.sort((a, b) => {

  const aHistory = historyByTokenId.get(a.get('id'));
  const bHistory = historyByTokenId.get(b.get('id'));

  const aSumHistory = getHistorySum(aHistory);
  const bSumHistory = getHistorySum(bHistory);

  if (aSumHistory.gt(bSumHistory)) {
    return 1;
  }

  if (aSumHistory.lt(bSumHistory)) {
    return -1;
  }

  return 0;
});
