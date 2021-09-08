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
  const [auctionsGroups, setAuctionGroups] = useState([]);
  const previewIds = {
    '3': 49,
    '4': 2,
    '8': 5,
    '6': 22,
    '7': 19,
    '8': 4,
    '10': 4,

  }

  const getPreviewId = (id) => {
    return previewIds[id] ? previewIds[id] : 0;
  }

  useEffect(() => {
    const fetchCollectionGroups = async () => {
      const { digitalaxCollectionGroups } = await getCollectionGroups(chainId);
      const { digitalaxGarmentCollections } = await getDigitalaxGarmentCollections(chainId);
      
      let collections = []
      let auctions = []
      const amongUsPrice = digitalaxGarmentCollections.reduce((a, b) => a + Number(b.valueSold), 0);
      auctions.push({
        ...digitalaxGarmentCollections[0].garments[0],
        designer: null,
        id: '0',
        sold: amongUsPrice / 1e18,
        isAuction: false
      });

      digitalaxCollectionGroups.forEach((digitalaxCollectionGroup) => {
        const collectionPrice = digitalaxCollectionGroup.collections
          .filter(collection => collection.id !== '0')
          .reduce(
            (a, b) => a + Number(b.valueSold),
            0,
          );
        const auctionPrice = digitalaxCollectionGroup.auctions
          .filter(auction => auction.id !== '0')
          .reduce(
            (a, b) => a + Number(b.topBid),
            0,
          );
        if (digitalaxCollectionGroup.collections.length > getPreviewId(digitalaxCollectionGroup.id) && digitalaxCollectionGroup.collections[getPreviewId(digitalaxCollectionGroup.id)].id !== '0') {
          collections.push({
            ...digitalaxCollectionGroup.collections[getPreviewId(digitalaxCollectionGroup.id)].garments[0],
            designer: digitalaxCollectionGroup.collections[getPreviewId(digitalaxCollectionGroup.id)].designer,
            id: digitalaxCollectionGroup.id,
            sold: (collectionPrice + auctionPrice) / 1e18,
            isAuction: false,
          });
        }
        if (digitalaxCollectionGroup.auctions.length > getPreviewId(digitalaxCollectionGroup.id) && digitalaxCollectionGroup.auctions[getPreviewId(digitalaxCollectionGroup.id)].id !== '0') {
          auctions.push({
            ...digitalaxCollectionGroup.auctions[getPreviewId(digitalaxCollectionGroup.id)].garment,
            designer: digitalaxCollectionGroup.auctions[getPreviewId(digitalaxCollectionGroup.id)].designer,
            id: digitalaxCollectionGroup.id,
            sold: (collectionPrice + auctionPrice) / 1e18,
            isAuction: true
          });
        }
      });
      setCollectionGroups(collections);
      setAuctionGroups(auctions);
    };

    fetchCollectionGroups();
  }, []);

  return (
    <div className={styles.wrapper}>
      <HeroSection logo="/images/metaverse/marketplaceLogo.png" />

      <section className={styles.collectionSection}>
        <div className={styles.collectionWrapper}>
          <CollectionList items={[...auctionsGroups, ...collectionGroups]} />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
