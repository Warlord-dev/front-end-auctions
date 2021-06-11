import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import ProductDescription from './product-description';
import Trade from './trade';
import styles from './styles.module.scss';

const PageProduct = ({
  collectionId,
  clothesId,
  tabIndex,
  auctionIndex,
  designerId,
  auctionId,
  currentCollections,
  currentMarketplaceOffers,
}) => {
  // const SHOW_EXCULSIVE_TAB = 0;
  // const SHOW_SEMIRARE_TAB = 1;
  // const SHOW_COMMON_TAB = 2;
  const [activeTab, setActiveTab] = useState(tabIndex);

  return (
    <div className={styles.wrapper}>
      <ProductDescription
        collectionId={collectionId}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        auctionIndex={auctionIndex}
        clothesId={clothesId}
        designerId={designerId}
        currentCollections={currentCollections}
        currentMarketplaceOffers={currentMarketplaceOffers}
      />
      <Trade collectionId={collectionId} clothesIds={[auctionId]} activeTab={activeTab} />
    </div>
  );
};

PageProduct.propTypes = {
  clothesId: PropTypes.string.isRequired,
  tabIndex: PropTypes.number.isRequired,
  designerId: PropTypes.string.isRequired,
  currentCollections: PropTypes.array.isRequired,
  currentMarketplaceOffers: PropTypes.array.isRequired,
};

export default memo(PageProduct);
