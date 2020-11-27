import React, { memo, useEffect } from 'react';
import BigNumber from 'bignumber.js';
import { useDispatch, useSelector } from 'react-redux';
import { convertToEth } from '@helpers/price.helpers';
import auctionPageActions from '@actions/auction.page.actions';
import { MAIN_GRAPH_COUNT_DAYS, TOTAL_VOLUME_DAYS } from '@constants/global.constants';
import { getChainId } from '@selectors/global.selectors';
import {
  getAllAuctions, getGlobalStats, getWeekResultedAuctions, getMonthResultedAuctions,
} from '@selectors/auction.selectors';
import wsApi from '@services/api/ws.service';
import { useSubscription } from '@hooks/subscription.hooks';
import { useAPY } from '@hooks/apy.hooks';
import GeneralInformation from './general-information';
import CardList from './card-list';

const PageProductsList = () => {

  const dispatch = useDispatch();
  const auctions = useSelector(getAllAuctions);
  const weekResultedAuctions = useSelector(getWeekResultedAuctions).toJS();
  const globalStats = useSelector(getGlobalStats).toJS();
  const monthResultedAuctions = useSelector(getMonthResultedAuctions).toJS();
  const chainId = useSelector(getChainId);
  const currentAuctions = auctions.toJS();

  useSubscription({
    request: wsApi.onDaysChange(MAIN_GRAPH_COUNT_DAYS),
    next: (data) => dispatch(auctionPageActions.updateMonthStats(data.days)),
  }, [chainId]);

  useSubscription({
    request: wsApi.onDaysChange(TOTAL_VOLUME_DAYS),
    next: (data) => dispatch(auctionPageActions.updateWeekStats(data.days)),
  }, [chainId]);

  useSubscription({
    request: wsApi.onNFTGlobalStats(),
    next: (data) => dispatch(auctionPageActions.updateGlobalStats(data.digitalaxGarmentNFTGlobalStats[0])),
  }, [chainId]);

  useSubscription({
    request: wsApi.onAuctionsChange(),
    next: (data) => dispatch(auctionPageActions.updateAuctions(data.digitalaxGarmentAuctions)),
  }, [chainId]);

  useSubscription({
    request: wsApi.onAuctionsHistoryByIds(currentAuctions.map((auction) => auction.id)),
    next: (data) => dispatch(auctionPageActions.udateHistory(data.digitalaxGarmentAuctionHistories)),
  }, [chainId, JSON.stringify(currentAuctions.map((auction) => auction.id))]);

  useEffect(() => () => {
    dispatch(auctionPageActions.reset());
  }, []);

  const nowTimestamp = Date.now();


  const filteredAuctionsTimes = currentAuctions
    .filter((item) => (item.endTime * 1000 - nowTimestamp) > 0)
    .map((item) => item.endTime * 1000);

  const minTimestampAutcionTime = filteredAuctionsTimes.length ? Math.min(...filteredAuctionsTimes) : 0;

  const sumTopBids = (items) => items
    .reduce((acc, auction) => (auction.totalNetBidActivity ? acc.plus(new BigNumber(auction.totalNetBidActivity)) : acc), new BigNumber(0));

  const totalWeekValue = sumTopBids(weekResultedAuctions);

  let highestBid = new BigNumber(0);

  currentAuctions.forEach((auction) => {
    if (!auction.topBid) {
      return;
    }

    const bid = new BigNumber(auction.topBid);

    if (bid.gt(highestBid)) {
      highestBid = bid;
    }

  });

  const estimateApy = useAPY(highestBid.toString(10));

  const list = [
    {
      description: 'Total NFT’s value',
      value: convertToEth(globalStats.totalSalesValue),
    },
    {
      description: `Total Vol ${TOTAL_VOLUME_DAYS} days`,
      value: convertToEth(totalWeekValue),
    },
    {
      description: 'Highest APY',
      value: estimateApy,
    },

  ];

  return (
    <>
      <GeneralInformation title="All Bids" list={list} timestamp={minTimestampAutcionTime} history={monthResultedAuctions} />
      <CardList auctions={auctions} />
    </>
  );
};

export default memo(PageProductsList);
