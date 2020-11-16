import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TradeHistory from '@components/trade-history';
import styles from './styles.module.scss';

const Trade = ({ clothesIds, tradeHistoryText }) => (
  <section>
    <p className={styles.title}>{tradeHistoryText}</p>
    <TradeHistory clothesIds={clothesIds} />
  </section>
);

Trade.propTypes = {
  clothesIds: PropTypes.array.isRequired,
  tradeHistoryText: PropTypes.string,
};

Trade.defaultProps = {
  tradeHistoryText: 'Trade history',
};

export default memo(Trade);
