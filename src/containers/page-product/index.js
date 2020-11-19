import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ProductDescription from './product-description';
import Trade from './trade';
import styles from './styles.module.scss';

const PageProduct = ({ clothesId, designerId }) => (
  <div className={styles.wrapper}>
    <ProductDescription clothesId={clothesId} designerId={designerId} />
    <Trade clothesIds={[clothesId]} />
  </div>
);

PageProduct.propTypes = {
  clothesId: PropTypes.string.isRequired,
  designerId: PropTypes.string.isRequired,
};

export default memo(PageProduct);
