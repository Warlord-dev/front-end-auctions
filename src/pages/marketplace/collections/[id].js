import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Container from '@components/container';
import { getCollectionGroupById, getDigitalaxMarketplaceV2Offers } from '@services/api/apiService';
import { useSelector } from 'react-redux';
import { getChainId } from '@selectors/global.selectors';
import HeroSection from '@components/hero-section';
import ProductInfoCard from '@components/product-info-card';

const Collections = () => {
  const route = useRouter();
  const chainId = useSelector(getChainId);
  const [collections, setCollections] = useState([]);
  const { id } = route.query;

  useEffect(() => {
    const fetchCollectionGroup = async () => {
      const { digitalaxCollectionGroup } = await getCollectionGroupById(chainId, id);
      const { digitalaxMarketplaceV2Offers } = await getDigitalaxMarketplaceV2Offers(chainId);
      let colls = [];

      digitalaxCollectionGroup.collections.forEach((collection) => {
        colls.push({
          designer: collection.designer,
          developer: collection.developer,
          garment: {
            ...collection.garments[0],
          },
          primarySalePrice: digitalaxMarketplaceV2Offers.find((offer) => offer.id === collection.id)
            .primarySalePrice,
          id: collection.id,
          rarity: collection.rarity,
        });
      });

      setCollections(colls);
    };

    fetchCollectionGroup();
  }, []);

  return (
    <div className={styles.wrapper}>
      <HeroSection logo="/images/metaverse/marketplaceLogo.png" />

      {collections.map((collection, index) => {
        if (index % 2 === 1) return <></>;
        return (
          <section className={styles.productsSection} key={collection.id}>
            <video autoPlay muted loop className={styles.backVideo}>
              <source src="./images/metaverse/all_skins.mp4" type="video/mp4" />
            </video>
            <Container>
              <div className={styles.body}>
                <ProductInfoCard
                  product={collections[index]}
                  price={collections[index].primarySalePrice}
                  showCollectionName
                  showRarity
                />
                {index + 1 < collections.length ? (
                  <ProductInfoCard
                    product={collections[index + 1]}
                    price={collections[index + 1].primarySalePrice}
                    showCollectionName
                    showRarity
                  />
                ) : null}
              </div>
            </Container>
          </section>
        );
      })}
    </div>
  );
};

export default Collections;
