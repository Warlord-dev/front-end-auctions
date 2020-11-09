/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import TradeHistoryLine from './trade-history-line';
import styles from './styles.module.scss';

const TradeHistory = ({ className, headerTitle, tradeHistory }) => (
  <div className={cn(styles.wrapper, className)}>
    <div className={styles.headerTitle}>
      {headerTitle.map((item) => <p key={item} className={styles.headerTitleItem}>{item}</p>)}
    </div>
    {tradeHistory.map((item) => <TradeHistoryLine key={item.sendersAddress} {...item} />)}
  </div>
);

TradeHistory.propTypes = {
  className: PropTypes.string,
  headerTitle: PropTypes.array,
  tradeHistory: PropTypes.array,
};

TradeHistory.defaultProps = {
  className: '',
  headerTitle: ['Price', 'From', 'Tx', 'Date'],
  tradeHistory: null,
};

export default TradeHistory;
