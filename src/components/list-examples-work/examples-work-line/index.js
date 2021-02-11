/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Timer from '@components/timer';
import { getGarmentsById } from '@selectors/garment.selectors';
import { useTokenInfo } from '@hooks/token.info.hooks';
import { useSelector } from 'react-redux';
import { convertToEth } from '@helpers/price.helpers';
import styles from './styles.module.scss';

const ExamplesWorkLine = ({
  resulted,
  endTime,
  startTime,
  topBid,
  clothesId,
  amountSold,
  garmentCollection,
  primarySalePrice
}) => {
  const garment = amountSold ? garmentCollection.garments[0] : useSelector(getGarmentsById(clothesId));
  const collectionLength = amountSold ? garmentCollection.garments.length : 0;
  const tokenInfo = garment
    ? useTokenInfo(garment.tokenUri, [garment.tokenUri])
    : {};

  if (!tokenInfo) return null;

  const renderThumbnail = () => {
    if (!amountSold && parseInt(clothesId, 10) >= 20 && parseInt(clothesId, 10) <= 28) {
      return (
        <video autoPlay muted loop className={styles.img}>
          <source src={`/video/${clothesId}.mp4`} type="video/mp4" />
        </video>
      );
    }

    if (tokenInfo.animation_url) {
      return (
        <video autoPlay muted loop className={styles.img}>
          <source src={tokenInfo.animation_url} type="video/mp4" />
        </video>
      );
    }

    return (
      <img
        className={styles.img}
        src={tokenInfo.image}
        alt={tokenInfo.name}
      />
    )
  }

  return (
    <div className={styles.item}>
      <div className={styles.imageWrapper}>
        {renderThumbnail()}
      </div>
      <div>
        <p className={styles.clothesName}>{tokenInfo.name}</p>
        <p className={styles.clothesHashAddress}>{tokenInfo.description}</p>
      </div>
      <p className={styles.boldText}>{convertToEth(amountSold ? primarySalePrice : topBid)} Ξ</p>
      <p className={styles.boldText}>
        <span className={styles.boldTextGray}>~</span>%
      </p>
      <p className={styles.boldText}>{moment(startTime * 1000).fromNow()}</p>
      { amountSold? (parseInt(amountSold) === collectionLength ? <p className={styles.boldText}>Sold</p> : <p className={styles.boldText}>{collectionLength - parseInt(amountSold)} left</p> ): (resulted ? (
        <p className={styles.boldText}>Sold</p>
      ) : (
        <Timer expirationDate={endTime * 1000} size="small" />
      ))}
    </div>
  );
};

ExamplesWorkLine.propTypes = {
  resulted: PropTypes.bool,
  endTime: PropTypes.string,
  startTime: PropTypes.string.isRequired,
  amountSold: PropTypes.string,
  garmentCollection: PropTypes.object,
  primarySalePrice: PropTypes.string,
  // estimateApy: PropTypes.number,
  topBid: PropTypes.string,
  // tokenUri: PropTypes.string,
  // address: PropTypes.string,
  // clothesName: PropTypes.string,
  clothesId: PropTypes.string,
};

ExamplesWorkLine.defaultProps = {
  resulted: undefined,
  endTime: undefined,
  topBid: '',
  clothesId: '',
  amountSold: undefined,
  garmentCollection: {},
  primarySalePrice: "0",
  // tokenUri: '',
  // address: '',
  // clothesName: '',
  // estimateApy: 0,
};

export default memo(ExamplesWorkLine);
