import React, { memo, useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import BigNumber from 'bignumber.js';
import { useDispatch, useSelector } from 'react-redux';
import { convertToEth } from '@helpers/price.helpers';
import auctionPageActions from '@actions/auction.page.actions';
import collectionActions from '@actions/collection.actions';
import { MAIN_GRAPH_COUNT_DAYS, TOTAL_VOLUME_DAYS } from '@constants/global.constants';
import { getChainId } from '@selectors/global.selectors';
import { getAllCollections } from '@selectors/collection.selectors';
import {
  getAllAuctions,
  getGlobalStats,
  getWeekResultedAuctions,
  getMonthResultedAuctions,
} from '@selectors/auction.selectors';
import wsApi from '@services/api/ws.service';
import { useSubscription } from '@hooks/subscription.hooks';
import { useAPY } from '@hooks/apy.hooks';
import GeneralInformation from './general-information';
import TextContent from '@containers/page-products-list/text-content';
import CardList from './card-list';
import CardListDigi from './card-list-digi';
import styles from './styles.module.scss';
import apiService from '@services/api/api.service';
import globalActions from '@actions/global.actions';
import amongUsAuctions from '@constants/amongus_auctions.json';

const PageProductsList = ({ collectionId }) => {
  const dispatch = useDispatch();
  const auctions = useSelector(getAllAuctions);
  const collections = useSelector(getAllCollections);
  const weekResultedAuctions = useSelector(getWeekResultedAuctions).toJS();
  const globalStats = useSelector(getGlobalStats).toJS();
  const monthResultedAuctions = useSelector(getMonthResultedAuctions).toJS();
  const [collectionLoaded, setCollectionLoaded] = useState(false);
  const [auctionLoaded, setAuctionLoaded] = useState(false);
  const chainId = useSelector(getChainId);
  let currentAuctions = auctions.toJS();
  const currentCollections = collections.toJS();
  const [showGraphIds, setShowGraphIds] = useState([]);

  if (collectionId === '1') {
    currentAuctions = amongUsAuctions;
  }

  useSubscription(
    {
      request:
        collectionId === '1' || collectionId === '2'
          ? wsApi.onDaysChange(MAIN_GRAPH_COUNT_DAYS)
          : wsApi.onDaysChangeV2(MAIN_GRAPH_COUNT_DAYS),
      next: (data) => {
        dispatch(auctionPageActions.updateMonthStats(data?.days || []));
      },
    },
    [chainId],
  );

  useSubscription(
    {
      request:
        collectionId === '1' || collectionId === '2'
          ? wsApi.onDaysChange(TOTAL_VOLUME_DAYS)
          : wsApi.onDaysChangeV2(TOTAL_VOLUME_DAYS),
      next: (data) => {
        dispatch(auctionPageActions.updateWeekStats(data?.days || []));
      },
    },
    [chainId],
  );

  useSubscription(
    {
      request:
        collectionId === '1' || collectionId === '2'
          ? wsApi.onNFTGlobalStats()
          : wsApi.onNFTGlobalStatsV2(),
      next: (data) => {
        dispatch(
          auctionPageActions.updateGlobalStats(
            (data?.digitalaxGarmentNFTGlobalStats || []).length > 0
              ? Object.values(data)[0][0]
              : [],
          ),
        );
      },
    },
    [chainId],
  );

  useSubscription(
    {
      request:
        collectionId === '1' || collectionId === '2'
          ? wsApi.getAllDigitalaxGarmentsCollections()
          : wsApi.getAllDigitalaxGarmentsCollectionsV2(),
      next: (data) => {
        dispatch(globalActions.setIsLoading(false));
        dispatch(collectionActions.mapData(data?.digitalaxGarmentCollections || []));
      },
    },
    [],
  );

  useSubscription(
    {
      request:
        collectionId === '1' || collectionId === '2'
          ? wsApi.onDigitalaxMarketplaceOffers(currentCollections.map((val) => val.id))
          : wsApi.onDigitalaxMarketplaceOffersV2(currentCollections.map((val) => val.id)),
      next: (data) => {
        dispatch(collectionActions.updateMarketplaceOffers(data?.digitalaxMarketplaceOffers || []));
      },
    },
    [chainId, currentCollections],
  );

  console.log({ currentCollections });

  useSubscription(
    {
      request:
        collectionId === '1' || collectionId === '2'
          ? wsApi.onAllAuctionsChange()
          : wsApi.onAllAuctionsChangeV2(),
      next: (data) => {
        dispatch(globalActions.setIsLoading(false));
        dispatch(auctionPageActions.updateAuctions(data?.digitalaxGarmentAuctions || []));
      },
    },
    [],
  );

  useSubscription(
    {
      request:
        collectionId === '1' || collectionId === '2'
          ? wsApi.onAuctionsHistoryByIds(showGraphIds)
          : wsApi.onAuctionsHistoryByIdsV2(showGraphIds),
      next: (data) => {
        dispatch(auctionPageActions.updateHistory(data?.digitalaxGarmentAuctionHistories || []));
      },
    },
    [chainId, showGraphIds],
  );

  useEffect(() => {
    dispatch(globalActions.setIsLoading(true));
  }, []);

  const nowTimestamp = Date.now();

  const filteredAuctionsTimes = currentAuctions
    .filter((item) => item.endTime * 1000 - nowTimestamp > 0)
    .map((item) => item.endTime * 1000);

  const minTimestampAutcionTime = filteredAuctionsTimes.length
    ? Math.min(...filteredAuctionsTimes)
    : 0;

  const sumTopBids = (items) =>
    items.reduce(
      (acc, auction) =>
        auction.totalNetBidActivity ? acc.plus(new BigNumber(auction.totalNetBidActivity)) : acc,
      new BigNumber(0),
    );

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
      value: convertToEth(totalWeekValue.gte(0) ? totalWeekValue : totalWeekValue.times(-1)),
    },
    {
      description: 'Highest APY',
      value: estimateApy,
    },
  ];

  const digitalIds = ['2607', '2633', '2658', '2679', '3532', '773'];

  return (
    <>
      <div className={styles.textContent}>
        <TextContent />
      </div>
      {collectionId !== '2' ? (
        <CardList
          collectionId={collectionId}
          auctions={currentAuctions}
          collections={currentCollections.filter(
            (collection) =>
              collection.garments.length && !digitalIds.includes(collection.garments[0].designer),
          )}
          showGraphIds={showGraphIds}
          setShowGraphIds={setShowGraphIds}
        />
      ) : (
        <CardListDigi
          collectionId={collectionId}
          auctions={currentAuctions}
          collections={
            collectionId === '2'
              ? currentCollections.filter(
                  (collection) =>
                    collection.garments.length &&
                    digitalIds.includes(collection.garments[0].designer),
                )
              : currentCollections
          }
          showGraphIds={showGraphIds}
          setShowGraphIds={setShowGraphIds}
        />
      )}
    </>
  );
};

PageProductsList.propTypes = {};

export default memo(PageProductsList);
