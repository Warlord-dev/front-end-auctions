import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ProductDescription from './product-description';
import Trade from './trade';
import styles from './styles.module.scss';

const PageProduct = ({ clothesId, currentClothesInfo }) => (
  <div className={styles.wrapper}>
    <ProductDescription clothesId={clothesId} currentClothesInfo={currentClothesInfo} />
    <Trade clothesIds={[clothesId]} />
  </div>
);

PageProduct.propTypes = {
  clothesId: PropTypes.string.isRequired,
  currentClothesInfo: PropTypes.object.isRequired,
};

PageProduct.defaultProps = {
};

export default memo(PageProduct);
