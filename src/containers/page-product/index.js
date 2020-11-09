import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ProductDescription from './product-description';
import Trade from './trade';
import styles from './styles.module.scss';

const PageProduct = ({ currentClothesInfo, currentMaterial, tradeHistory }) => (
  <div className={styles.wrapper}>
    <ProductDescription currentClothesInfo={currentClothesInfo} currentMaterial={currentMaterial} />
    {tradeHistory && <Trade tradeHistory={tradeHistory} />}
  </div>
);

PageProduct.propTypes = {
  currentClothesInfo: PropTypes.object.isRequired,
  tradeHistory: PropTypes.array,
  currentMaterial: PropTypes.array,
};

PageProduct.defaultProps = {
  tradeHistory: null,
  currentMaterial: null,
};

export default memo(PageProduct);
