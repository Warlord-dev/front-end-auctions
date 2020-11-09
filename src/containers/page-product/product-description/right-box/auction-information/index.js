import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ImportantProductInformation from '@containers/important-product-information';
import styles from './styles.module.scss';


const AuctionInformation = ({
  clothesId, chartImage, priceEth, estimateApy, expirationDate,
}) => (
  <div className={styles.wrapper}>
    <img className={styles.chart} src={chartImage} alt="chart" />
    <ImportantProductInformation
      clothesId={clothesId}
      priceEth={priceEth}
      estimateApy={estimateApy}
      expirationDate={expirationDate}
      styleTypeBlock="largeTransparent"
    />
  </div>
);

AuctionInformation.propTypes = {
  clothesId: PropTypes.string,
  chartImage: PropTypes.string,
  priceEth: PropTypes.number,
  estimateApy: PropTypes.number,
  expirationDate: PropTypes.string,
};

AuctionInformation.defaultProps = {
  clothesId: '',
  chartImage: '',
  priceEth: null,
  estimateApy: null,
  expirationDate: '',
};

export default memo(AuctionInformation);
