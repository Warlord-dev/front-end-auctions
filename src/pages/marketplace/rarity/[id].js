import HeroBar from '@components/hero-bar';
import ProductCard from '@components/product-card';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './styles.module.scss';

const MarketplaceRarity = () => {
  const route = useRouter();
  const { id } = route.query;

  const mainLogos = ['/images/metaverse/amongus-logo1.png'];

  return (
    <>
      <div className={styles.wrapper}>
        <section className={styles.heroSection}>
          <img src={mainLogos[parseInt(id) - 1]} className={styles.mainLogo} />
          <img src="./images/metaverse/party_flags.png" className={styles.flag} />
          <img src="./images/metaverse/gpad.png" className={styles.gpad} />
          <HeroBar />
        </section>

        <section className={styles.exclusiveSection}>
          <img src="./images/metaverse/marketplace-texture.png" className={styles.texture} />
          <div className={styles.cardWrapper}>
            <ProductCard />
          </div>
        </section>

        <section className={styles.semiSection}>
          <img src="./images/metaverse/marketplace-texture.png" className={styles.texture} />
          <div className={styles.cardWrapper}>
            <ProductCard />
          </div>
        </section>

        <section className={styles.commonSection}>
          <img src="./images/metaverse/marketplace-texture.png" className={styles.texture} />
          <div className={styles.cardWrapper}>
            <ProductCard />
          </div>
        </section>
      </div>
    </>
  );
};

export default MarketplaceRarity;
