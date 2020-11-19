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
  clothesIds: PropTypes.object,
  tradeHistoryText: PropTypes.string,
};

Trade.defaultProps = {
  clothesIds: {},
  tradeHistoryText: 'Trade history',
};

export default memo(Trade);
