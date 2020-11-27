/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Timer from '@components/timer';
import { convertToEth } from '@helpers/price.helpers';
import styles from './styles.module.scss';

const ExamplesWorkLine = ({
  resulted, endTime, startTime, topBid, tokenUri, clothesName, address, estimateApy,
}) => (
  <div className={styles.item}>
    <div className={styles.imageWrapper}>
      <img className={styles.img} src={tokenUri} alt={clothesName} />
    </div>
    <div>
      <p className={styles.clothesName}>{clothesName}</p>
      <p className={styles.clothesHashAddress} title={address}>{address}</p>
    </div>
    <p className={styles.boldText}>{convertToEth(topBid)} Ξ</p>
    <p className={styles.boldText}><span className={styles.boldTextGray}>~</span>%</p>
    <p className={styles.boldText}>{moment(startTime * 1000).fromNow()}</p>
    {resulted ? <p className={styles.boldText}>Sold</p> : <Timer expirationDate={endTime * 1000} size="small" />}
  </div>
);

ExamplesWorkLine.propTypes = {
  resulted: PropTypes.bool.isRequired,
  endTime: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  estimateApy: PropTypes.number,
  topBid: PropTypes.string,
  tokenUri: PropTypes.string,
  address: PropTypes.string,
  clothesName: PropTypes.string,
};

ExamplesWorkLine.defaultProps = {
  topBid: '',
  tokenUri: '',
  address: '',
  clothesName: '',
  estimateApy: 0,
};


export default memo(ExamplesWorkLine);
