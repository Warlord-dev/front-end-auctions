/* eslint-disable react/no-array-index-key */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import BigNumber from 'bignumber.js';
import { convertToEth } from '@helpers/price.helpers';
import { useTokenInfo } from '@hooks/token.info.hooks';
import { createPreviewURL } from '@services/imgix.service';
import styles from './styles.module.scss';

const MaterialLine = ({ className, item: { tokenUri, id, amount } }) => {

  const tokenInfo = useTokenInfo(tokenUri, [tokenUri]);
  const ETH = new BigNumber(convertToEth(amount)).toFixed(4);

  return (
    <ul className={className}>
      <li className={styles.item}>
        <div className={styles.imgWrapper}>
          {tokenInfo && tokenInfo.image
            ? <img className={styles.img} src={createPreviewURL(tokenInfo.image)} alt={tokenInfo && tokenInfo.name} /> : null}
          <span className={styles.textForImg}>{id}</span>
        </div>
        <div className={styles.addressWrapper}>
          <p className={styles.name}>{tokenInfo && tokenInfo.name}</p>
          <p className={styles.address}>{tokenInfo && tokenInfo.description}</p>
        </div>
        <div className={styles.priceWrapper}>
          <span className={styles.price}>{ETH} Ξ</span>
        </div>
        <span className={styles.estimate}>
          <span className={styles.estimateInnerGray}>~</span>
        </span>
      </li>
    </ul>
  );
};

MaterialLine.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string,
};

MaterialLine.defaultProps = {
  className: '',
};

export default memo(MaterialLine);
