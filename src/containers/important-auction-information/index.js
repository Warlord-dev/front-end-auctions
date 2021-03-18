/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Link from '@components/buttons/link';
import Timer from '@components/timer';
import { convertToEth } from '@helpers/price.helpers';
import { getExchangeRateETH } from '@selectors/global.selectors';

import styles from './styles.module.scss';

const ImportantAuctionInformation = ({ auction, auctionId }) => {
  const exchangeRateETH = useSelector(getExchangeRateETH);

  const [, updateState] = React.useState(0);
  const timer = useRef(null);
  const timerToSoldButton = useRef(null);

  clearTimeout(timer.current);
  clearTimeout(timerToSoldButton.current);

  useEffect(() => {
    clearTimeout(timer.current);
    clearTimeout(timerToSoldButton.current);
  }, []);

  if (!auction) {
    return null;
  }

  const priceEth = convertToEth(auction.totalBids);
  const expirationDate = auction.endTime * 1000;

  const timeOut = new Date(expirationDate) - new Date() + 1000;

  if (timeOut > 0) {
    timerToSoldButton.current = setTimeout(() => updateState(Date.now()), timeOut);
  }

  const getPriceUsd = (valueEth) => {
    const priceUsd = valueEth * exchangeRateETH;
    return (Math.trunc(priceUsd * 100) / 100).toLocaleString('en');
  };

  return (
    <div className={styles.smallWhite}>
      <div className={styles.leftWrapper}>
        <p className={styles.priceDescription}>Total Sold</p>
        <p className={styles.priceWrapper}>
          <span className={styles.priceEth}>{priceEth} Ξ</span>
          <span className={styles.priceUsd}>(${getPriceUsd(priceEth)})</span>
        </p>
      </div>
      <div className={styles.footerBoxRight}>
        <Timer className={styles.timer} expirationDate={expirationDate} />
        <p className={styles.expirationDateText}>TIME LEFT</p>
        <Link href={`/auctions/${auctionId}`} className={styles.buttonSold} background="black">
          <span>VIEW COLLECTION</span>
        </Link>
      </div>
    </div>
  );
};

ImportantAuctionInformation.propTypes = {
  auction: PropTypes.object.isRequired,
  auctionId: PropTypes.number,
};

ImportantAuctionInformation.defaultProps = {
  auctionId: -1,
};

export default ImportantAuctionInformation;
