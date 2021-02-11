import React, { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getDesignerInfoByName,
  getDesignerById,
} from '@selectors/designer.selectors';
import { getAllMarketplaceOffers } from '@selectors/collection.selectors';
import ExamplesWorkLine from './examples-work-line';
import styles from './styles.module.scss';

const ListExamplesWork = ({ designerName, headerTitle }) => {
  const currentDesigner = useSelector(getDesignerInfoByName(designerName));
  const designer = useSelector(getDesignerById(currentDesigner.id));


  const marketplaceOffers = useSelector(getAllMarketplaceOffers);

  const designerMarketplaceOffers = useMemo(() => {
    if (!designer || !designer.listings || designer.listings.length === 0) return [];

    const jsOffers = marketplaceOffers.toJS();
    const ids = designer.listings.map(({id}) => id);
    return jsOffers.filter((val) => ids.find(id => id === val.garmentCollection.garmentAuctionID));
  }, [marketplaceOffers, designer]);

  const designerListing = useMemo(() => {
    if (!designer || !designer.listings || designer.listings.length === 0) return [];
    
    return [...designer.listings, ...designerMarketplaceOffers].sort((a, b) => { return parseInt(b.startTime) - parseInt(a.startTime) });
  }, [designer, designerMarketplaceOffers])

  return (
    <div>
      <div className={styles.headerTitle}>
        {headerTitle.map((item) => (
          <p key={item} className={styles.headerTitleItem}>
            {item}
          </p>
        ))}
      </div>
      <div className={styles.body}>
        {(designerListing.length === 0) && (
          <div className={styles.loading}>Loading...</div>
        )}
        {designerListing.map((item) => (
          <ExamplesWorkLine key={item.id} {...item} clothesId={item.id} />
        ))}
      </div>
    </div>
  );
};

ListExamplesWork.propTypes = {
  headerTitle: PropTypes.array,
  designerName: PropTypes.string.isRequired,
};

ListExamplesWork.defaultProps = {
  headerTitle: [
    'Design',
    '',
    'Last Price',
    'Yield (estimates)',
    'Listed Date',
    'Status',
  ],
};

export default memo(ListExamplesWork);
