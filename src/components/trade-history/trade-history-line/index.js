/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import SmallPhotoWithText from '../../small-photo-with-text';
import styles from './styles.module.scss';

const TradeHistoryLine = ({
  className, priceEth, date, sendersPhoto, sendersAddress, recipientAddress, recipientPhoto,
}) => {
  const exchangeRateE = useSelector((state) => state.global.toJS().exchangeRateETH);

  const getPriceUsd = (valueEth) => {
    const priceUsd = valueEth * exchangeRateE;
    return (Math.trunc(priceUsd * 100) / 100).toLocaleString('en');
  };

  return (
    <div className={cn(styles.item, className)}>
      <div>
        <span className={styles.priceEth}>{priceEth} E</span>
        <span className={styles.priceUsd}>(${getPriceUsd(priceEth)})</span>
      </div>
      <SmallPhotoWithText hashAddress={sendersAddress} designerPhoto={sendersPhoto} />
      <SmallPhotoWithText hashAddress={recipientAddress} designerPhoto={recipientPhoto} />
      <span>{date}</span>
    </div>
  );
};

TradeHistoryLine.propTypes = {
  className: PropTypes.string,
  priceEth: PropTypes.number,
  date: PropTypes.string,
  sendersPhoto: PropTypes.string,
  sendersAddress: PropTypes.string,
  recipientPhoto: PropTypes.string,
  recipientAddress: PropTypes.string,
};

TradeHistoryLine.defaultProps = {
  className: '',
  priceEth: null,
  date: '',
  sendersPhoto: '',
  sendersAddress: '',
  recipientPhoto: '',
  recipientAddress: '',
};

export default TradeHistoryLine;
