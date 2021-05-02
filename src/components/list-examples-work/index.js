import React, { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getDesignerInfoByName, getAllDesignersById } from '@selectors/designer.selectors';
import { getAllMarketplaceOffers } from '@selectors/collection.selectors';
import ExamplesWorkLine from './examples-work-line';
import styles from './styles.module.scss';

const ListExamplesWork = ({ designerName, headerTitle }) => {
  const currentDesigner = useSelector(getDesignerInfoByName(designerName));
  const allDesigners = useSelector(getAllDesignersById);
  const designers = allDesigners
    ? allDesigners.filter((item) => currentDesigner.ids.includes(item.id))
    : null;


  const marketplaceOffers = useSelector(getAllMarketplaceOffers);

  const designerMarketplaceOffers = useMemo(() => {
    if (
      !designers ||
      designers.every((designer) => !designer.listings || designer.listings.length === 0)
    )
      return [];

    const jsOffers = marketplaceOffers.toJS();
    const ids = designers.reduce(
      (total, cur) => [...total, ...cur.listings.map((item) => item.id)],
      []
    );
    console.log('---marketplaceoffers', ids);
    return jsOffers.filter((val) =>
      ids.find(
        (id) =>
          id === val.garmentCollection.garmentAuctionID &&
          val.garmentCollection.garments &&
          val.garmentCollection.garments.length &&
          currentDesigner.ids.includes(val.garmentCollection.garments[0].id)
      )
    );
  }, [marketplaceOffers, designers]);

  const designerListing = useMemo(() => {
    if (
      !designers ||
      designers.every((designer) => !designer.listings || designer.listings.length === 0)
    )
      return [];

    return [
      ...designers.reduce((total, cur) => [...total, ...cur.listings], []),
      ...designerMarketplaceOffers,
    ].sort((a, b) => {
      return parseInt(b.startTime) - parseInt(a.startTime);
    });
  }, [designers, designerMarketplaceOffers]);


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
        {designerListing.length === 0 && <div className={styles.loading}>Loading...</div>}
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
  headerTitle: ['Design', '', 'Last Price', 'Yield (estimates)', 'Listed Date', 'Status'],
};

export default memo(ListExamplesWork);
