import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Timer from '@components/timer';
import styles from './styles.module.scss';

const ExamplesWorkLine = ({
  clothesName, clothesHashAddress, priceEth, estimateApy, listedDate, status, clothesPhotos, expirationDate, key,
}) => {
  const clothesPhotoUrl = clothesPhotos.find(({ isMain }) => isMain)?.image;

  return (
    <div className={styles.item} key={key}>
      <div className={styles.imageWrapper}>
        <img className={styles.img} src={clothesPhotoUrl} alt={clothesName} />
      </div>
      <div>
        <p className={styles.clothesName}>{clothesName}</p>
        <p className={styles.clothesHashAddress} title={clothesHashAddress}>{clothesHashAddress}</p>
      </div>
      <p className={styles.boldText}>{priceEth} E</p>
      <p className={styles.boldText}><span className={styles.boldTextGray}>~: </span>{estimateApy}%</p>
      <p className={styles.boldText}>{listedDate}</p>
      {status ? <p className={styles.boldText}>{status}</p> : <Timer expirationDate={expirationDate} size="small" />}
    </div>
  );
};

ExamplesWorkLine.propTypes = {
  clothesName: PropTypes.string,
  clothesPhotos: PropTypes.array,
  clothesHashAddress: PropTypes.string,
  priceEth: PropTypes.number,
  estimateApy: PropTypes.number,
  listedDate: PropTypes.string,
  status: PropTypes.string,
  expirationDate: PropTypes.string,
  key: PropTypes.string,
};

ExamplesWorkLine.defaultProps = {
  clothesName: '',
  clothesPhotos: [],
  clothesHashAddress: '',
  priceEth: null,
  estimateApy: null,
  listedDate: '',
  status: '',
  expirationDate: '',
  key: '',
};


export default memo(ExamplesWorkLine);
