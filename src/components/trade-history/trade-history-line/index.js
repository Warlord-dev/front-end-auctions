/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { getExchangeRateETH, getChainId } from '@selectors/global.selectors';
import { getExplorerUrlByChainId } from '@services/network.service';
import SmallPhotoWithText from '../../small-photo-with-text';
import styles from './styles.module.scss';
import { getMonaPerEth } from '@selectors/global.selectors';

const TradeHistoryLine = ({
  className,
  priceEth,
  date,
  sendersPhoto,
  sendersAddress,
  recipientAddress,
  recipientPhoto,
  eventName,
  isPaidWithMona,
  priceMona,
}) => {
  const exchangeRateETH = useSelector(getExchangeRateETH);
  const chainId = useSelector(getChainId);

  const senderLink = `${getExplorerUrlByChainId(chainId)}address/${sendersAddress}`;
  const txLink = `${getExplorerUrlByChainId(chainId)}tx/${recipientAddress}`;

  const getPriceUsd = (valueEth) => {
    const priceUsd = valueEth * exchangeRateETH;
    return (Math.trunc(priceUsd * 10000) / 10000).toLocaleString('en');
  };

  const getDefaultText = (text) => text.split(/(?=[A-Z])/).join(' ');

  const monaPerEth = useSelector(getMonaPerEth);

  return (
    <div className={cn(styles.item, className)}>
      {isPaidWithMona ? (
        <div>
          <span className={styles.priceEth}>
            {Math.round(parseFloat(priceMona) * 10000) / 10000} MONA
          </span>
          <span className={styles.priceUsd}>(${getPriceUsd(priceEth)})</span>
          <span> - {getDefaultText(eventName)}</span>
        </div>
      ) : (
        <div>
          <span className={styles.priceEth}>
            {Math.floor(priceEth * monaPerEth * 10000) / 10000} MONA
          </span>
          <span className={styles.priceUsd}>(${getPriceUsd(priceEth)})</span>
          <span> - {getDefaultText(eventName)}</span>
        </div>
      )}
      <SmallPhotoWithText
        addressLink={senderLink}
        addressText={sendersAddress}
        photo={sendersPhoto}
      />
      <SmallPhotoWithText
        addressLink={txLink}
        addressText={recipientAddress}
        photo={recipientPhoto}
      />
      <span>{moment(date).fromNow()}</span>
    </div>
  );
};

TradeHistoryLine.propTypes = {
  className: PropTypes.string,
  priceEth: PropTypes.string,
  priceMona: PropTypes.string,
  date: PropTypes.number,
  sendersPhoto: PropTypes.string,
  sendersAddress: PropTypes.string,
  recipientPhoto: PropTypes.string,
  recipientAddress: PropTypes.string,
  eventName: PropTypes.string,
  isPaidWithMona: PropTypes.bool,
};

TradeHistoryLine.defaultProps = {
  className: '',
  priceEth: null,
  priceMona: null,
  isPaidWithMona: false,
  date: '',
  sendersPhoto: '',
  sendersAddress: '',
  recipientPhoto: '',
  recipientAddress: '',
  eventName: '',
};

export default TradeHistoryLine;
