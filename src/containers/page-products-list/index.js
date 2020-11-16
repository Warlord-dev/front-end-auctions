import React, { memo, useEffect } from 'react';
import BigNumber from 'bignumber.js';
import { useDispatch, useSelector } from 'react-redux';
import { convertToEth } from '@helpers/price.helpers';
import auctionPageActions from '@actions/auction.page.actions';
import { getAllAuctions, getWeekResultedAuctions, getMonthResultedAuctions } from '@selectors/auction.selectors';
import wsApi from '@services/api/ws.service';
import content from './content';
import GeneralInformation from './general-information';
import CardList from './card-list';

const PageProductsList = () => {

  const dispatch = useDispatch();
  const auctions = useSelector(getAllAuctions);
  const weekResultedAuctions = useSelector(getWeekResultedAuctions).toJS();
  const monthResultedAuctions = useSelector(getMonthResultedAuctions).toJS(); // TODO::rm toJS

  useEffect(() => {

    const request = wsApi.onAuctionsChange();

    const { unsubscribe } = request.subscribe({
      next({ data }) {
        if (!data) {
          return;
        }
        dispatch(auctionPageActions.updateAuctions(data.digitalaxGarmentAuctions));
      },
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => () => {
    dispatch(auctionPageActions.reset());
  }, []);

  const nowTimestamp = Date.now();
  const currentAuctions = auctions.toJS(); // TODO:: rm .toJS

  const filteredAuctionsTimes = currentAuctions
    .filter((item) => (item.endTime * 1000 - nowTimestamp) > 0)
    .map((item) => item.endTime * 1000);

  const minTimestampAutcionTime = filteredAuctionsTimes.length ? Math.min(...filteredAuctionsTimes) : 0;

  const sumTopBids = (items) => items
    .reduce((acc, auction) => (auction.topBid ? acc.plus(new BigNumber(auction.topBid)) : acc), new BigNumber(0));

  const totalValue = sumTopBids(currentAuctions);
  const totalWeekValue = sumTopBids(weekResultedAuctions);

  const list = [
    {
      description: 'Total NFT’s value',
      value: convertToEth(totalValue),
    },
    {
      description: 'Highest APY',
      value: 120,
    },
    {
      description: 'Total Vol 7 days',
      value: convertToEth(totalWeekValue),
    },
  ];

  return (
    <>
      <GeneralInformation {...content[0]} list={list} timestamp={minTimestampAutcionTime} history={monthResultedAuctions} />
      <CardList auctions={auctions} {...content[1]} />
    </>
  );
};

export default memo(PageProductsList);
