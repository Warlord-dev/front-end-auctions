import React, { useEffect, useState } from 'react';
import { getCollectionGroups, getDigitalaxGarmentCollections } from '@services/api/apiService';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { getChainId } from '@selectors/global.selectors';
import CollectionList from '@components/collection-list';
import HeroSection from '@components/hero-section';

const LandingPage = () => {
  const chainId = useSelector(getChainId);
  const [collectionGroups, setCollectionGroups] = useState([]);
  const previewIds = {
    3: 49,
    4: 2,
    8: 5,
    6: 22,
    7: 19,
    8: 4,
    10: 4,
  };

  const getPreviewId = (id) => {
    return previewIds[id] ? previewIds[id] : 0;
  };

  useEffect(() => {
    const fetchCollectionGroups = async () => {
      const { digitalaxCollectionGroups } = await getCollectionGroups(chainId);

      const collections = [];
      const auctions = [];

      const sortedCollectionGroups = digitalaxCollectionGroups.sort((a, b) => {
        if (parseInt(a.id) > parseInt(b.id)) return -1;
        if (parseInt(a.id) === parseInt(b.id)) return 0;
        return 1;
      });

      sortedCollectionGroups.forEach((digitalaxCollectionGroup) => {
        const collectionPrice = digitalaxCollectionGroup.collections
          .filter((collection) => collection.id !== '0')
          .reduce((a, b) => a + Number(b.valueSold), 0);
        const auctionPrice = digitalaxCollectionGroup.auctions
          .filter((auction) => auction.id !== '0')
          .reduce((a, b) => a + Number(b.topBid), 0);
        if (
          digitalaxCollectionGroup.collections.length > getPreviewId(digitalaxCollectionGroup.id) &&
          (digitalaxCollectionGroup.collections.length >= 2 ||
            digitalaxCollectionGroup.collections[getPreviewId(digitalaxCollectionGroup.id)].id !==
              '0')
        ) {
          collections.push({
            ...digitalaxCollectionGroup.collections[getPreviewId(digitalaxCollectionGroup.id)]
              .garments[0],
            designer:
              digitalaxCollectionGroup.collections[getPreviewId(digitalaxCollectionGroup.id)]
                .designer,
            id: digitalaxCollectionGroup.id,
            sold: (collectionPrice + auctionPrice) / 1e18,
            isAuction: false,
          });
        } else if (
          digitalaxCollectionGroup.auctions.length > getPreviewId(digitalaxCollectionGroup.id) &&
          (digitalaxCollectionGroup.auctions.length >= 2 ||
            digitalaxCollectionGroup.auctions[getPreviewId(digitalaxCollectionGroup.id)].id !== '0')
        ) {
          auctions.push({
            ...digitalaxCollectionGroup.auctions[getPreviewId(digitalaxCollectionGroup.id)].garment,
            endTime:
              digitalaxCollectionGroup.auctions[getPreviewId(digitalaxCollectionGroup.id)].endTime,
            designer:
              digitalaxCollectionGroup.auctions[getPreviewId(digitalaxCollectionGroup.id)].designer,
            id: digitalaxCollectionGroup.id,
            sold: (collectionPrice + auctionPrice) / 1e18,
            isAuction: true,
          });
        }
      });

      setCollectionGroups(
        [...collections, ...auctions].sort((a, b) => {
          if (parseInt(a.id) > parseInt(b.id)) return -1;
          if (parseInt(a.id) < parseInt(b.id)) return 1;
          return 0;
        }),
      );
    };

    fetchCollectionGroups();
  }, []);

  return (
    <div className={styles.wrapper}>
      <HeroSection logo="/images/metaverse/marketplaceLogo.png" />

      <section className={styles.collectionSection}>
        <div className={styles.collectionWrapper}>
          {!!collectionGroups?.length && <CollectionList items={collectionGroups} />}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
