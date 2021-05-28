/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Link from '@components/buttons/link';
import Timer from '@components/timer';
import { convertToEth } from '@helpers/price.helpers';
import { getExchangeRateETH } from '@selectors/global.selectors';

import styles from './styles.module.scss';

const ImportantNFTInformation = ({ nft, nftId, nftType }) => {
  const exchangeRateETH = useSelector(getExchangeRateETH);

  const [, updateState] = React.useState(0);
  const timer = useRef(null);
  const timerToSoldButton = useRef(null);

  clearTimeout(timer.current);
  clearTimeout(timerToSoldButton.current);

  useEffect(() => {
    clearTimeout(timer.current);
    clearTimeout(timerToSoldButton.current);
  }, []);

  if (!nft) {
    return null;
  }

  const priceEth = convertToEth(nft.primarySalePrice);
  const expirationDate = nft.endTime * 1000;

  const timeOut = new Date(expirationDate) - new Date() + 1000;

  if (timeOut > 0) {
    timerToSoldButton.current = setTimeout(
      () => updateState(Date.now()),
      timeOut,
    );
  }

  const getPriceUsd = (valueEth) => {
    const priceUsd = valueEth * exchangeRateETH;
    return (Math.trunc(priceUsd * 10000) / 10000).toLocaleString('en');
  };

  return (
    <div className={styles.smallWhite}>
      <div className={styles.leftWrapper}>
        <p className={styles.priceWrapper}>
          <span className={styles.priceEth}>{priceEth} MONA</span>
          <span className={styles.priceUsd}>(${getPriceUsd(priceEth)})</span>
        </p>
        <a href="https://espa.digitalax.xyz" target="_blank" className={styles.espaButton}>
          play in espa
        </a>
      </div>
      <div className={styles.footerBoxRight}>
        <p className={styles.rarityLabel}>RARITY</p>
        <p className={styles.rarityText}> {nftType?.value} </p>
      </div>
    </div>
  );
};

ImportantNFTInformation.propTypes = {
  nft: PropTypes.object.isRequired,
  nftId: PropTypes.number,
};

ImportantNFTInformation.defaultProps = {
  nftId: -1,
};

export default ImportantNFTInformation;
