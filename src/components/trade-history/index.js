/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import BigNumber from 'bignumber.js';
import {
  getHistoryByTokenIds,
  getCommonHistoryByTokenIds,
  getSemiRareHistoryByTokenIds,
} from '@selectors/history.selectors';
import { convertToEth } from '@helpers/price.helpers';
import TradeHistoryLine from './trade-history-line';
import styles from './styles.module.scss';

const TradeHistory = ({ clothesIds, className, headerTitle, activeTab }) => {
  const history = useSelector(getHistoryByTokenIds(clothesIds));
  const commonHistory = useSelector(getCommonHistoryByTokenIds(clothesIds));
  const semiRareHistory = useSelector(getSemiRareHistoryByTokenIds(clothesIds));

  const tradeHistory = useMemo(() => {
    if (activeTab === 0) {
      return history
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
    } else if (activeTab === 1) {
      return semiRareHistory
        .sort((a, b) => {
          if (a.timestamp === b.timestamp) {
            return new BigNumber(b.value, 10).comparedTo(new BigNumber(a.value));
          }

          return b.timestamp - a.timestamp;
        })
        .map((item) => ({
          id: item.id,
          priceMona: convertToEth(item.monaTransferredAmount),
          priceEth: convertToEth(item.value),
          isPaidWithMona: item.isPaidWithMona,
          date: item.timestamp * 1000,
          sendersPhoto: './images/user-photo.svg',
          sendersAddress: item.buyer,
          recipientPhoto: './images/avatar.svg',
          recipientAddress: item.transactionHash,
          eventName: item.eventName,
        }));
    } else if (activeTab === 2) {
      return commonHistory
        .sort((a, b) => {
          if (a.timestamp === b.timestamp) {
            return new BigNumber(b.value, 10).comparedTo(new BigNumber(a.value));
          }

          return b.timestamp - a.timestamp;
        })
        .map((item) => ({
          id: item.id,
          priceMona: convertToEth(item.monaTransferredAmount),
          priceEth: convertToEth(item.value),
          isPaidWithMona: item.isPaidWithMona,
          date: item.timestamp * 1000,
          sendersPhoto: './images/user-photo.svg',
          sendersAddress: item.buyer,
          recipientPhoto: './images/avatar.svg',
          recipientAddress: item.transactionHash,
          eventName: item.eventName,
        }));
    } else if (activeTab === 3) {
      //Digi Bundle
      return semiRareHistory
        .sort((a, b) => {
          if (a.timestamp === b.timestamp) {
            return new BigNumber(b.value, 10).comparedTo(new BigNumber(a.value));
          }

          return b.timestamp - a.timestamp;
        })
        .filter((a) => Number(a.token.id) >= 773 && Number(a.token.id) <= 792)
        .map((item) => ({
          id: item.id,
          priceMona: convertToEth(item.monaTransferredAmount),
          priceEth: convertToEth(item.value),
          isPaidWithMona: item.isPaidWithMona,
          date: item.timestamp * 1000,
          sendersPhoto: './images/user-photo.svg',
          sendersAddress: item.buyer,
          recipientPhoto: './images/avatar.svg',
          recipientAddress: item.transactionHash,
          eventName: item.eventName,
        }));
    } else {
      const total = [...history, ...semiRareHistory, ...commonHistory];
      return total
        .sort((a, b) => {
          if (a.timestamp === b.timestamp) {
            return new BigNumber(b.value, 10).comparedTo(new BigNumber(a.value));
          }

          return b.timestamp - a.timestamp;
        })
        .map((item) =>
          item.eventName === 'Purchased'
            ? {
                id: item.id,
                priceMona: convertToEth(item.monaTransferredAmount),
                priceEth: convertToEth(item.value),
                isPaidWithMona: item.isPaidWithMona,
                date: item.timestamp * 1000,
                sendersPhoto: './images/user-photo.svg',
                sendersAddress: item.buyer,
                recipientPhoto: './images/avatar.svg',
                recipientAddress: item.transactionHash,
                eventName: item.eventName,
              }
            : {
                id: item.id,
                clothesId: item.token.id,
                priceEth: convertToEth(item.value),
                date: item.timestamp * 1000,
                sendersPhoto: './images/user-photo.svg',
                sendersAddress: item.bidder ? item.bidder.id : item.token.owner,
                recipientPhoto: './images/avatar.svg',
                recipientAddress: item.transactionHash,
                eventName: item.eventName,
              }
        );
    }
  }, [activeTab, history, commonHistory, semiRareHistory]);

  return (
    <div className={cn(styles.wrapper, className, 'animate__animated animate__fadeInUp')}>
      <div className={styles.headerTitle}>
        {headerTitle.map((item) => (
          <p key={item} className={styles.headerTitleItem}>
            {item}
          </p>
        ))}
      </div>
      {tradeHistory.map((item) => (
        <TradeHistoryLine key={item.recipientAddress} {...item} />
      ))}
      {(!tradeHistory || tradeHistory.length === 0) && (
        <div className={styles.loading}>Loading...</div>
      )}
    </div>
  );
};

TradeHistory.propTypes = {
  clothesIds: PropTypes.array.isRequired,
  className: PropTypes.string,
  headerTitle: PropTypes.array,
  activeTab: PropTypes.number,
};

TradeHistory.defaultProps = {
  className: '',
  activeTab: -1,
  headerTitle: ['Price', 'From', 'Tx', 'Date'],
};

export default TradeHistory;
