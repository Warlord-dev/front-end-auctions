import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import HeroBar from '@components/hero-bar';
import ImageCard from '@components/image-card';
import ProductCard from '@components/product-card';
import styles from './index.module.scss';
import Container from '@components/container';

const All = () => {
  const route = useRouter();
  const { id } = route.query;
  const mainLogos = ['/images/metaverse/amongus-logo1.png'];

  return (
    <div className={styles.wrapper}>
      <section className={styles.heroSection}>
        <img src={mainLogos[parseInt(id) - 1]} className={styles.mainLogo} />
        <img src="./images/metaverse/party_flags.png" className={styles.flag} />
        <img src="./images/metaverse/gpad.png" className={styles.gpad} />
        <HeroBar />
        <Link href={`/marketplace/rarity/${id}`}>
          <a className={styles.browseRarity}>
            browse by rarity
            <img src="/images/metaverse/right-arrow-pink.png" />
          </a>
        </Link>
      </section>

      <section className={styles.productsSection}>
        <video autoPlay muted loop className={styles.backVideo}>
          <source src="./images/metaverse/all_skins.mp4" type="video/mp4" />
        </video>
        <img src="./images/metaverse/Gamepad 4.png" className={styles.gamePad} />
        <Container>
          <div className={styles.body}>
            <ImageCard />
            <ImageCard />
          </div>
        </Container>
      </section>

      <section className={styles.productsSection}>
        <video autoPlay muted loop className={styles.backVideo}>
          <source src="./images/metaverse/all_skins.mp4" type="video/mp4" />
        </video>
        <img src="./images/metaverse/Gamepad 4.png" className={styles.gamePad} />
        <Container>
          <div className={styles.body}>
            <ImageCard />
            <ImageCard />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default All;
