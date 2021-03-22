import React, { memo, useEffect, useMemo, useState } from 'react';
import BigNumber from 'bignumber.js';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { convertToEth } from '@helpers/price.helpers';
import auctionPageActions from '@actions/auction.page.actions';
import { MAIN_GRAPH_COUNT_DAYS, TOTAL_VOLUME_DAYS } from '@constants/global.constants';
import { STORAGE_SORT_BY_AUCTION } from '@constants/storage.constants';
import { getChainId } from '@selectors/global.selectors';
import { getMonaPerEth } from '@selectors/global.selectors';
import collectionActions from '@actions/collection.actions';
import { getAllCollections, getAllMarketplaceOffers } from '@selectors/collection.selectors';
import {
  getAllAuctions,
  getGlobalStats,
  getWeekResultedAuctions,
  getMonthResultedAuctions,
} from '@selectors/auction.selectors';
import { useAPY } from '@hooks/apy.hooks';
import wsApi from '@services/api/ws.service';
import { useSubscription } from '@hooks/subscription.hooks';
import GeneralInformation from '@containers/page-products-list/general-information';
import AuctionProduct from '@components/auction-product';
import Loader from '@components/loader';
import 'semantic-ui-css/components/dropdown.css';
import 'semantic-ui-css/components/transition.css';
import styles from './styles.module.scss';

const auctionNames = [
  {
    id: 1,
    text: 'Collection: Kodomodachi x charli cohen',
  },
  { id: 4, text: 'Digi bundle' },
];
const dropdownOptions = [
  { key: 1, text: 'Earliest Auction', value: 'earliest_auction' },
  { key: 2, text: 'Latest Auction', value: 'latest_auction' },
  { key: 3, text: 'Highest Volume', value: 'highest_volume' },
  { key: 4, text: 'Lowest Volume', value: 'lowest_volume' },
];

const PageAuctionList = () => {
  const dispatch = useDispatch();
  const auctions = useSelector(getAllAuctions);
  const weekResultedAuctions = useSelector(getWeekResultedAuctions).toJS();
  const globalStats = useSelector(getGlobalStats).toJS();
  const monthResultedAuctions = useSelector(getMonthResultedAuctions).toJS();
  const currentCollections = useSelector(getAllCollections).toJS();
  const marketplaceOffers = useSelector(getAllMarketplaceOffers).toJS();
  const chainId = useSelector(getChainId);
  const [dropdownActiveItem, setDropdownActiveItem] = useState(
    localStorage.getItem(STORAGE_SORT_BY_AUCTION)
      ? localStorage.getItem(STORAGE_SORT_BY_AUCTION)
      : 1
  );
  const monaPerEth = useSelector(getMonaPerEth);

  const [currentAuctions, highestBid] = useMemo(() => {
    const rAuctions = [...new Array(5).fill([])];
    const arrAcutions = auctions.toJS();
    let highestBid = new BigNumber(0);

    if (arrAcutions.length === 0) return [[], highestBid];

    arrAcutions.forEach((auction) => {
      if (!auction.topBid) {
        return;
      }

      const bid = new BigNumber(auction.topBid);

      if (bid.gt(highestBid)) {
        highestBid = bid;
      }
    });

    let i;
    let j;
    for (i = 0; i < arrAcutions.length; i += 1) {
      const item = arrAcutions[i];
      if (parseInt(item.id, 10) < 20) {
        rAuctions[0] = [...rAuctions[0], item];
      } else if (parseInt(item.id, 10) < 29) {
        rAuctions[1] = [...rAuctions[1], item];
      } else if (parseInt(item.id, 10) < 43) {
        rAuctions[2] = [...rAuctions[2], item];
      } else if (parseInt(item.id, 10) >= 94 && parseInt(item.id, 10) <= 103) {
        rAuctions[4] = [...rAuctions[4], item];
      } else {
        rAuctions[3] = [...rAuctions[3], item];
      }
    }

    for (i = 0; i < rAuctions.length; i += 1) {
      if (rAuctions[i].length === 0) continue;

      let sum = new BigNumber(rAuctions[i][0].topBid ? rAuctions[i][0].topBid : 0);
      let auctionCollections = marketplaceOffers.filter(
        (offer) => offer.garmentCollection.garmentAuctionID === rAuctions[i][0].id
      );
      if (auctionCollections.length > 0) {
        auctionCollections.forEach(
          (offer) =>
            (sum = sum.plus(
              new BigNumber(offer.primarySalePrice).times(new BigNumber(offer.amountSold))
            ))
        );
      }
      let maxId = 0;

      for (j = 1; j < rAuctions[i].length; j += 1) {
        sum = sum.plus(new BigNumber(rAuctions[i][j].topBid ? rAuctions[i][j].topBid : 0));
        auctionCollections = marketplaceOffers.filter(
          (offer) => offer.garmentCollection.garmentAuctionID === rAuctions[i][j].id
        );
        if (auctionCollections.length > 0) {
          auctionCollections.forEach(
            (offer) =>
              (sum = sum.plus(
                new BigNumber(offer.primarySalePrice).times(new BigNumber(offer.amountSold))
              ))
          );
        }
        if (new BigNumber(rAuctions[i][maxId]).lt(new BigNumber(rAuctions[i][j]))) {
          maxId = j;
        }
      }

      rAuctions[i] = {
        auctionId: i + 1,
        totalBids: sum,
        topGarment: rAuctions[i][maxId].garment,
        endTime: parseInt(rAuctions[i][0].endTime, 10),
      };
    }

    const result = rAuctions.filter((auc) => auc.length === undefined);
    return [result, highestBid];
  }, [auctions.toJS(), marketplaceOffers]);

  const sortedAuctions = useMemo(() => {
    if (currentAuctions.length === 0) return [];

    const result = currentAuctions.slice();

    switch (dropdownActiveItem) {
      case 'earliest_auction':
        result.sort((a, b) => a.auctionId - b.auctionId);
        break;
      case 'latest_auction':
        result.sort((b, a) => a.auctionId - b.auctionId);
        break;

      case 'lowest_volume':
        result.sort(
          (a, b) => parseFloat(convertToEth(a.totalBids)) - parseFloat(convertToEth(b.totalBids))
        );
        break;

      case 'highest_volume':
        result.sort(
          (b, a) => parseFloat(convertToEth(a.totalBids)) - parseFloat(convertToEth(b.totalBids))
        );
        break;
      default:
        result.sort((b, a) => a.auctionId - b.auctionId);
        break;
    }

    return result;
  }, [dropdownActiveItem, currentAuctions]);

  useSubscription(
    {
      request: wsApi.onDaysChange(MAIN_GRAPH_COUNT_DAYS),
      next: (data) => dispatch(auctionPageActions.updateMonthStats(data.days)),
    },
    [chainId]
  );

  useSubscription(
    {
      request: wsApi.onDaysChange(TOTAL_VOLUME_DAYS),
      next: (data) => dispatch(auctionPageActions.updateWeekStats(data.days)),
    },
    [chainId]
  );

  useSubscription(
    {
      request: wsApi.onNFTGlobalStats(),
      next: (data) => {
        dispatch(
          auctionPageActions.updateGlobalStats(
            data.digitalaxGarmentNFTGlobalStats.length > 0
              ? data.digitalaxGarmentNFTGlobalStats[0]
              : []
          )
        );
      },
    },
    [chainId]
  );

  useSubscription(
    {
      request: wsApi.onAllAuctionsChange(),
      next: (data) => dispatch(auctionPageActions.updateAuctions(data.digitalaxGarmentAuctions)),
    },
    [chainId]
  );

  useSubscription(
    {
      request: wsApi.getAllDigitalaxGarmentsCollections(),
      next: (data) => {
        dispatch(collectionActions.mapData(data.digitalaxGarmentCollections));
      },
    },
    [chainId]
  );

  useSubscription(
    {
      request: wsApi.onDigitalaxMarketplaceOffers(currentCollections.map((val) => val.id)),
      next: (data) => {
        dispatch(collectionActions.updateMarketplaceOffers(data.digitalaxMarketplaceOffers));
      },
    },
    [chainId, currentCollections]
  );

  useEffect(
    () => () => {
      if (!auctions) {
        dispatch(auctionPageActions.reset());
      }
    },
    []
  );

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
        auction.totalNetBidActivity
          ? acc.plus(
              new BigNumber(auction.totalNetBidActivity)
                .plus(new BigNumber(auction.totalMarketplaceVolumeInETH))
                .plus(
                  new BigNumber(auction.totalMarketplaceVolumeInMona).times(
                    new BigNumber(monaPerEth)
                  )
                )
            )
          : acc,
      new BigNumber(0)
    );

  const totalWeekValue = sumTopBids(weekResultedAuctions);

  const estimateApy = useAPY(highestBid.toString(10));

  const list = useMemo(() => {
    let totalSum = new BigNumber(0);
    if (globalStats.totalSalesValue) {
      totalSum = totalSum.plus(
        new BigNumber(globalStats.totalMarketplaceSalesInMona).times(new BigNumber(monaPerEth))
      );
      totalSum = totalSum.plus(new BigNumber(globalStats.totalMarketplaceSalesInETH));
      totalSum = totalSum.plus(new BigNumber(globalStats.totalSalesValue));
    }
    return [
      {
        description: 'Total NFT’s value',
        value: Math.round(parseFloat(convertToEth(totalSum.integerValue())) * 100) / 100,
      },
      {
        description: `Total Vol ${TOTAL_VOLUME_DAYS} days`,
        value:
          Math.round(
            parseFloat(
              convertToEth(totalWeekValue.gte(0) ? totalWeekValue : totalWeekValue.times(-1))
            ) * 100
          ) / 100,
      },
      {
        description: 'Highest APY',
        value: estimateApy,
      },
    ];
  }, [globalStats, totalWeekValue, estimateApy]);

  const onHandleDropdownChange = (value) => {
    setDropdownActiveItem(value);
    localStorage.setItem(STORAGE_SORT_BY_AUCTION, value);
  };
  return (
    <>
      <GeneralInformation
        title="All Bids"
        list={list}
        timestamp={minTimestampAutcionTime}
        history={monthResultedAuctions}
      />

      <div className={styles.dropdown}>
        <span className={styles.caption}>Sort by</span>
        <Dropdown
          onChange={(event, data) => onHandleDropdownChange(data.value)}
          placeholder="Sort by"
          options={dropdownOptions}
          selection
          value={dropdownActiveItem}
        />
      </div>
      {sortedAuctions.length > 0 ? (
        <ul className={cn(styles.list, 'animate__animated animate__fadeIn')}>
          {sortedAuctions.map((auction) => (
            <AuctionProduct
              key={`auction_${auction.auctionId}`}
              name={auctionNames.find((name) => name.id === auction.auctionId).text}
              auction={auction}
              auctionId={auction.auctionId}
            />
          ))}
        </ul>
      ) : (
        <Loader size="large" className={styles.loader} />
      )}
    </>
  );
};

export default memo(PageAuctionList);
