import React, {
  memo, useEffect, useMemo, useState,
} from 'react';
import BigNumber from 'bignumber.js';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { convertToEth } from '@helpers/price.helpers';
import auctionPageActions from '@actions/auction.page.actions';
import {
  MAIN_GRAPH_COUNT_DAYS,
  TOTAL_VOLUME_DAYS,
} from '@constants/global.constants';
import { STORAGE_SORT_BY_AUCTION } from '@constants/storage.constants';
import { getChainId } from '@selectors/global.selectors';
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
    text: 'Auction01: Crypto Essentials',
  },
  { id: 2, text: 'Auction02: Rush Corps' },
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
  const chainId = useSelector(getChainId);
  const [dropdownActiveItem, setDropdownActiveItem] = useState(
    localStorage.getItem(STORAGE_SORT_BY_AUCTION),
  );
  const currentAuctions = useMemo(() => {
    const rAuctions = [...new Array(2).fill([])];
    const arrAcutions = auctions.toJS();

    if (arrAcutions.length === 0) return [];

    let i;
    let j;
    for (i = 0; i < arrAcutions.length; i += 1) {
      const item = arrAcutions[i];
      if (parseInt(item.id, 10) < 20) {
        rAuctions[0] = [...rAuctions[0], item];
      } else {
        rAuctions[1] = [...rAuctions[1], item];
      }
    }

    for (i = 0; i < rAuctions.length; i += 1) {
      let sum = new BigNumber(rAuctions[i][0].topBid);
      let maxId = 0;

      for (j = 1; j < rAuctions[i].length; j += 1) {
        sum = sum.plus(new BigNumber(rAuctions[i][j].topBid));
        if (
          new BigNumber(rAuctions[i][maxId]).lt(new BigNumber(rAuctions[i][j]))
        ) {
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

    return rAuctions;
  }, [auctions.toJS()]);

  const sortedAuctions = useMemo(() => {
    if (currentAuctions.length === 0) return [];

    const result = currentAuctions.slice();

    console.log('happened', dropdownActiveItem);

    switch (dropdownActiveItem) {
      case 'earliest_auction':
        result.sort((a, b) => a.auctionId - b.auctionId);
        break;
      case 'latest_auction':
        result.sort((b, a) => a.auctionId - b.auctionId);
        break;

      case 'lowest_volume':
        result.sort(
          (a, b) => parseFloat(convertToEth(a.totalBids))
            - parseFloat(convertToEth(b.totalBids)),
        );
        break;

      case 'highest_volume':
        result.sort(
          (b, a) => parseFloat(convertToEth(a.totalBids))
            - parseFloat(convertToEth(b.totalBids)),
        );
        break;
      default:
    }

    return result;
  }, [dropdownActiveItem, currentAuctions]);

  useSubscription(
    {
      request: wsApi.onDaysChange(MAIN_GRAPH_COUNT_DAYS),
      next: (data) => dispatch(auctionPageActions.updateMonthStats(data.days)),
    },
    [chainId],
  );

  useSubscription(
    {
      request: wsApi.onDaysChange(TOTAL_VOLUME_DAYS),
      next: (data) => dispatch(auctionPageActions.updateWeekStats(data.days)),
    },
    [chainId],
  );

  useSubscription(
    {
      request: wsApi.onNFTGlobalStats(),
      next: (data) => {
        dispatch(
          auctionPageActions.updateGlobalStats(
            data.digitalaxGarmentNFTGlobalStats[0],
          ),
        );
      },
    },
    [chainId],
  );

  useSubscription(
    {
      request: wsApi.onAllAuctionsChange(),
      next: (data) => dispatch(
        auctionPageActions.updateAuctions(data.digitalaxGarmentAuctions),
      ),
    },
    [chainId],
  );

  useEffect(
    () => () => {
      if (!auctions) {
        dispatch(auctionPageActions.reset());
      }
    },
    [],
  );

  const nowTimestamp = Date.now();

  const filteredAuctionsTimes = currentAuctions
    .filter((item) => item.endTime * 1000 - nowTimestamp > 0)
    .map((item) => item.endTime * 1000);

  const minTimestampAutcionTime = filteredAuctionsTimes.length
    ? Math.min(...filteredAuctionsTimes)
    : 0;

  const sumTopBids = (items) => items.reduce(
    (acc, auction) => (auction.totalNetBidActivity
      ? acc.plus(new BigNumber(auction.totalNetBidActivity))
      : acc),
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
      value: convertToEth(
        totalWeekValue.gte(0) ? totalWeekValue : totalWeekValue.times(-1),
      ),
    },
    {
      description: 'Highest APY',
      value: estimateApy,
    },
  ];

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
              name={
                auctionNames.find((name) => name.id === auction.auctionId).text
              }
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
