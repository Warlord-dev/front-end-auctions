import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TradeHistory from '@components/trade-history';
import styles from './styles.module.scss';

const Trade = ({ collectionId, clothesIds, tradeHistoryText, activeTab }) => (
  <section>
    <p className={styles.title}>{tradeHistoryText}</p>
    <TradeHistory collectionId={collectionId} clothesIds={clothesIds} activeTab={activeTab} />
  </section>
);

Trade.propTypes = {
  clothesIds: PropTypes.array.isRequired,
  tradeHistoryText: PropTypes.string,
  activeTab: PropTypes.number.isRequired,
};

Trade.defaultProps = {
  tradeHistoryText: 'Trade history',
};

export default memo(Trade);
