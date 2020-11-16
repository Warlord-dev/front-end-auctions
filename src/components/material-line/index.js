/* eslint-disable react/no-array-index-key */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { convertToEth } from '@helpers/price.helpers';
import styles from './styles.module.scss';

const MaterialLine = ({ className, item: { tokenUri, id, amount } }) => (
  <ul className={className}>
    <li key={Math.random()} className={styles.item}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={tokenUri} alt="" />
        <span className={styles.textForImg}>{id}</span>
      </div>
      <div className={styles.addressWrapper}>
        <p className={styles.name}>{id}</p>
        <p className={styles.address}>{id}</p>
      </div>
      <div className={styles.priceWrapper}>
        <span className={styles.price}>{convertToEth(amount)} E</span>
      </div>
      <span className={styles.estimate}>
        <span className={styles.estimateInnerGray}>~AYP:</span>
        {0}%
      </span>
    </li>
  </ul>
);

MaterialLine.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string,
};

MaterialLine.defaultProps = {
  className: '',
};

export default memo(MaterialLine);
