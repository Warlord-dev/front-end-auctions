/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { getExchangeRateETH } from '@selectors/global.selectors';
import SmallPhotoWithText from '../../small-photo-with-text';
import styles from './styles.module.scss';

const TradeHistoryLine = ({
  className, priceEth, date, sendersPhoto, sendersAddress, recipientAddress, recipientPhoto, eventName,
}) => {
  const exchangeRateETH = useSelector(getExchangeRateETH);
  const getPriceUsd = (valueEth) => {
    const priceUsd = valueEth * exchangeRateETH;
    return (Math.trunc(priceUsd * 100) / 100).toLocaleString('en');
  };

  return (
    <div className={cn(styles.item, className)}>
      <div>
        <span className={styles.priceEth}>{priceEth} E</span>
        <span className={styles.priceUsd}>(${getPriceUsd(priceEth)})</span>
        - {eventName}
      </div>
      <SmallPhotoWithText address={sendersAddress} photo={sendersPhoto} />
      <SmallPhotoWithText address={recipientAddress} photo={recipientPhoto} />
      <span>{moment(date).fromNow()}</span>
    </div>
  );
};

TradeHistoryLine.propTypes = {
  className: PropTypes.string,
  priceEth: PropTypes.string,
  date: PropTypes.number,
  sendersPhoto: PropTypes.string,
  sendersAddress: PropTypes.string,
  recipientPhoto: PropTypes.string,
  recipientAddress: PropTypes.string,
  eventName: PropTypes.string,
};

TradeHistoryLine.defaultProps = {
  className: '',
  priceEth: null,
  date: '',
  sendersPhoto: '',
  sendersAddress: '',
  recipientPhoto: '',
  recipientAddress: '',
  eventName: '',
};

export default TradeHistoryLine;
