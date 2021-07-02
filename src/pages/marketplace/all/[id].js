import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import HeroBar from '@components/hero-bar';
import ImageCard from '@components/image-card';
import ProductCard from '@components/product-card';
import styles from './index.module.scss';
import Container from '@components/container';
import { getCollectionGroupById } from '@services/api/apiService';
import { useSelector } from 'react-redux';
import { getChainId } from '@selectors/global.selectors';
import HeroSection from '@components/hero-section';
import ProductInfoCard from '@components/product-info-card';

const All = () => {
  const route = useRouter();
  const chainId = useSelector(getChainId);
  const [collections, setCollections] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const { id } = route.query;
  const mainLogos = ['/images/metaverse/amongus-logo1.png'];

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
    };

    fetchCollectionGroup();
  }, []);

  return (
    <div className={styles.wrapper}>
      <HeroSection>
        <Link href={`/marketplace/rarity/${id}`}>
          <a className={styles.browseRarity}>
            browse by rarity
            <img src="/images/metaverse/right-arrow-pink.png" />
          </a>
        </Link>
      </HeroSection>

      {auctions.map((auction, index) => {
        if (index % 2 === 1) return <> </>;
        return (
          <section className={styles.productsSection} key={auction.id}>
            <video autoPlay muted loop className={styles.backVideo}>
              <source src="./images/metaverse/all_skins.mp4" type="video/mp4" />
            </video>
            <Container>
              <div className={styles.body}>
                <ProductInfoCard product={auctions[index]} />
                {/* <ImageCard data={auctions[index]} showName /> */}
                {index + 1 < auctions.length ? (
                  <ProductInfoCard product={auctions[index]} />
                  // <ImageCard data={auctions[index + 1]} showName />
                ) : null}
              </div>
            </Container>
          </section>
        );
      })}

      {collections.map((collection, index) => {
        if (index % 2 === 1) return <></>;
        return (
          <section className={styles.productsSection} key={collection.id}>
            <video autoPlay muted loop className={styles.backVideo}>
              <source src="./images/metaverse/all_skins.mp4" type="video/mp4" />
            </video>
            <Container>
              <div className={styles.body}>
                <ProductInfoCard product={collections[index]} />
                {/* <ImageCard data={collections[index]} showName /> */}
                {index + 1 < collections.length ? (
                  <ProductInfoCard product={collections[index]} />
                  // <ImageCard data={collections[index + 1]} showName />
                ) : null}
              </div>
            </Container>
          </section>
        );
      })}
    </div>
  );
};

export default All;
