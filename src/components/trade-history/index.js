/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import BigNumber from 'bignumber.js';
import { getHistoryByTokenIds } from '@selectors/history.selectors';
import { convertToEth } from '@helpers/price.helpers';
import TradeHistoryLine from './trade-history-line';
import styles from './styles.module.scss';

const TradeHistory = ({ clothesIds, className, headerTitle }) => {
  const history = useSelector(getHistoryByTokenIds(clothesIds));

  const tradeHistory = history
    .sort((a, b) => {
      if (a.eventName === b.eventName && a.timestamp === b.timestamp) {
        return new BigNumber(b.value, 10).comparedTo(new BigNumber(a.value));
      }

      return b.timestamp - a.timestamp;
    })
    .map((item) => ({
      id: item.id,
      clothesId: item.token.id,
      priceEth: convertToEth(item.value),
      date: item.timestamp * 1000,
      sendersPhoto: './images/user-photo.svg',
      sendersAddress: item.bidder ? item.bidder.id : item.token.owner,
      recipientPhoto: './images/avatar.svg',
      recipientAddress: item.transactionHash,
      eventName: item.eventName,
    }));

  return (
    <div
      className={cn(
        styles.wrapper,
        className,
        'animate__animated animate__fadeInUp',
      )}
    >
      <div className={styles.headerTitle}>
        {headerTitle.map((item) => (
          <p key={item} className={styles.headerTitleItem}>
            {item}
          </p>
        ))}
      </div>
      {tradeHistory.map((item) => (
        <TradeHistoryLine key={item.id} {...item} />
      ))}
    </div>
  );
};

TradeHistory.propTypes = {
  clothesIds: PropTypes.object.isRequired,
  className: PropTypes.string,
  headerTitle: PropTypes.array,
};

TradeHistory.defaultProps = {
  className: '',
  headerTitle: ['Price', 'From', 'Tx', 'Date'],
};

export default TradeHistory;
