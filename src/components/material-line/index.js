/* eslint-disable react/no-array-index-key */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const MaterialLine = ({ className, list }) => (
  <ul className={className}>
    {list.map(({
      imgUrl, name, address, price, estimate, textForImg,
    }, index) => (
      <li key={index} className={styles.item}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={imgUrl} alt={name} />
          <span className={styles.textForImg}>{textForImg}</span>
        </div>
        <div className={styles.addressWrapper}>
          <p className={styles.name}>{name}</p>
          <p className={styles.address}>{address}</p>
        </div>
        <div className={styles.priceWrapper}>
          <span className={styles.price}>{price} E</span>
        </div>
        <span className={styles.estimate}>
          <span className={styles.estimateInnerGray}>~AYP:</span>
          {estimate}%
        </span>
      </li>
    ))}
  </ul>
);

MaterialLine.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array,
};

MaterialLine.defaultProps = {
  className: '',
  list: [],
};

export default memo(MaterialLine);
