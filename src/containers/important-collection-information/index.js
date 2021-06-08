/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Link from '@components/buttons/link';
import Timer from '@components/timer';
import { convertToEth } from '@helpers/price.helpers';
import { getExchangeRateETH, getChainId, getMonaPerEth } from '@selectors/global.selectors';
import { useSubscription } from '@hooks/subscription.hooks';
import wsApi from '@services/api/ws.service';

import styles from './styles.module.scss';

const ImportantCollectionInformation = ({ collection }) => {
  const exchangeRateETH = useSelector(getExchangeRateETH);
  const [currentAuctions, setCurrentAuctions] = useState([]);
  const [currentCollections, setCurrentCollections] = useState([]);
  const chainId = useSelector(getChainId);
  const monaPerEth = useSelector(getMonaPerEth);

  const [, updateState] = React.useState(0);
  const timer = useRef(null);
  const timerToSoldButton = useRef(null);

  clearTimeout(timer.current);
  clearTimeout(timerToSoldButton.current);

  useEffect(() => {
    clearTimeout(timer.current);
    clearTimeout(timerToSoldButton.current);
  }, []);

  useSubscription(
    {
      request:
        collection.id === 1 || collection.id === 2
          ? wsApi.getAllDigitalaxGarmentsCollections()
          : wsApi.getAllDigitalaxGarmentsCollectionsV2(),
      next: (data) => {
        setCurrentCollections(data?.digitalaxGarmentCollections || []);
      },
    },
    [chainId],
  );

  useSubscription(
    {
      request:
        collection.id === 1 || collection.id === 2
          ? wsApi.onAllAuctionsChange()
          : wsApi.onAllAuctionsChangeV2(),
      next: (data) => setCurrentAuctions(data?.digitalaxGarmentAuctions || []),
    },
    [chainId],
  );

  const digitalIds = ['2607', '2633', '2658', '2679', '3532', '773'];
  const filteredAuctions = currentAuctions;

  const filteredCollection1 = currentCollections.filter((collection) =>
    collection.garments.filter((garment) => {
      return garment.name.includes('DIGI').length;
    }),
  );

  console.log({ filteredCollection1 });

  const filteredCollections =
    collection.id === 1
      ? currentCollections.filter(
          (collection) =>
            collection.garments.length && !digitalIds.includes(collection.garments[0].designer),
        )
      : collection.id === 2
      ? currentCollections.filter(
          (collection) =>
            collection.garments.length && digitalIds.includes(collection.garments[0].designer),
        )
      : currentCollections;
  const auctionPrice = filteredAuctions
    .filter((auction) => auction.topBid)
    .map((auction) => parseInt(auction.topBid))
    .reduce((total, cur) => total + cur, 0);
  const collectionPrice = filteredCollections
    .map((collection) =>
      collection.garments.reduce((total, cur) => total + parseInt(cur.primarySalePrice), 0),
    )
    .reduce((total, cur) => total + cur, 0);
  const priceEth = convertToEth(auctionPrice + collectionPrice);

  const expirationDate = filteredAuctions.length
    ? Math.max(...filteredAuctions.map((auction) => parseInt(auction.endTime))) * 1000
    : 0;

  const timeOut = expirationDate ? new Date(expirationDate) - new Date() + 1000 : -1;

  if (timeOut > 0) {
    timerToSoldButton.current = setTimeout(() => updateState(Date.now()), timeOut);
  }

  const getPriceUsd = (valueEth) => {
    const priceUsd = valueEth * exchangeRateETH;
    return (Math.trunc(priceUsd * 10000) / 10000).toLocaleString('en');
  };

  return (
    <div className={styles.smallWhite}>
      <div className={styles.leftWrapper}>
        <p className={styles.priceDescription}>Total Sold</p>
        <p className={styles.priceWrapper}>
          <span className={styles.priceEth}>
            {collection.id !== 2 ? parseFloat(priceEth / monaPerEth).toFixed(2) : 40} $MONA
          </span>
          <span className={styles.priceUsd}>
            (${getPriceUsd(collection.id !== 2 ? priceEth : 40 * monaPerEth)})
          </span>
        </p>
      </div>
      <div className={styles.footerBoxRight}>
        {timeOut >= 0 && (
          <>
            <Timer className={styles.timer} expirationDate={expirationDate} />
            <p className={styles.expirationDateText}>TIME LEFT</p>
          </>
        )}
        <Link
          href={`/collections/${collection.id}`}
          className={styles.buttonSold}
          background="black"
        >
          <span>VIEW COLLECTION</span>
        </Link>
      </div>
    </div>
  );
};

ImportantCollectionInformation.propTypes = {
  collection: PropTypes.object.isRequired,
};

ImportantCollectionInformation.defaultProps = {};

export default ImportantCollectionInformation;
