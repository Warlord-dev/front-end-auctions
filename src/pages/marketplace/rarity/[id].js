import Container from '@components/container';
import HeroBar from '@components/hero-bar';
import HeroSection from '@components/hero-section';
import ProductCard from '@components/product-card';
import { getChainId } from '@selectors/global.selectors';
import { getCollectionGroupById } from '@services/api/apiService';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

const MarketplaceRarity = () => {
  const route = useRouter();
  const chainId = useSelector(getChainId);
  const [collections, setCollections] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const { id } = route.query;

  useEffect(() => {
    const fetchCollectionGroup = async () => {
      const { digitalaxCollectionGroup } = await getCollectionGroupById(chainId, id);
      let aucs = [],
        colls = [];
      digitalaxCollectionGroup.auctions.forEach((auction) => {
        aucs.push({
          ...auction,
          rarity: 'Exclusive',
        });
      });

      digitalaxCollectionGroup.collections.forEach((collection) => {
        colls.push({
          garment: {
            ...collection.garments[0],
          },
          id: collection.id,
          rarity: collection.rarity,
        });
      });

      setCollections(colls);
      setAuctions(aucs);

      console.log({ digitalaxCollectionGroup });
    };

    fetchCollectionGroup();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <HeroSection />

        <section className={styles.exclusiveSection}>
          <img src="./images/metaverse/marketplace-texture.png" className={styles.texture} />
          <Container>
            <div className={styles.cardWrapper}>
              <ProductCard products={auctions} rarity={'Exclusive'} />
            </div>
          </Container>
        </section>

        <section className={styles.semiSection}>
          <img src="./images/metaverse/marketplace-texture.png" className={styles.texture} />
          <Container>
            <div className={styles.cardWrapper}>
              <ProductCard
                products={
                  collections.filter((collection) => collection.rarity === 'Semi-Rare') || []
                }
                rarity={'Semi-Rare'}
              />
            </div>
          </Container>
        </section>

        <section className={styles.commonSection}>
          <img src="./images/metaverse/marketplace-texture.png" className={styles.texture} />
          <Container>
            <div className={styles.cardWrapper}>
              <ProductCard
                products={collections.filter((collection) => collection.rarity === 'Common') || []}
                rarity={'Common'}
              />
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default MarketplaceRarity;
