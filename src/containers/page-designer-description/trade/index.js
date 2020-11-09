import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TradeHistory from '@components/trade-history';
import styles from './styles.module.scss';

const Trade = ({ tradeHistory, tradeHistoryText }) => (
  <section>
    {!!tradeHistory.length && (
      <>
        <p className={styles.title}>{tradeHistoryText}</p>
        <TradeHistory tradeHistory={tradeHistory} />
      </>
    )}
  </section>
);

Trade.propTypes = {
  tradeHistory: PropTypes.array,
  tradeHistoryText: PropTypes.string,
};

Trade.defaultProps = {
  tradeHistory: null,
  tradeHistoryText: 'Trade history',
};

export default memo(Trade);
