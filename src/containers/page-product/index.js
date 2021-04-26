import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import ProductDescription from './product-description';
import Trade from './trade';
import styles from './styles.module.scss';

const PageProduct = ({ clothesId, designerId, currentCollections, currentMarketplaceOffers, isInCollectionOne }) => {
  // const SHOW_EXCULSIVE_TAB = 0;
  // const SHOW_SEMIRARE_TAB = 1;
  // const SHOW_COMMON_TAB = 2;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <ProductDescription
        activeTab={activeTab}
        isInCollectionOne={isInCollectionOne}
        setActiveTab={setActiveTab}
        clothesId={clothesId}
        designerId={designerId}
        currentCollections={currentCollections}
        currentMarketplaceOffers={currentMarketplaceOffers}
      />
      <Trade clothesIds={[clothesId]} activeTab={activeTab} />
    </div>
  );
};

PageProduct.propTypes = {
  clothesId: PropTypes.string.isRequired,
  designerId: PropTypes.string.isRequired,
  currentCollections: PropTypes.array.isRequired,
  currentMarketplaceOffers: PropTypes.array.isRequired,
};

export default memo(PageProduct);
