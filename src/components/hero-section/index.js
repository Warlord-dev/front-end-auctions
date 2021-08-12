import HeroBar from '@components/hero-bar';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './styles.module.scss';

const HeroSection = ({ children, logo }) => {
  const route = useRouter();

  return (
    <>
      <div className={styles.wrapper}>
        <section className={styles.heroSection}>
          <img src="/images/metaverse/marketplaceBack.png" className={styles.back} />
          <img src={logo} className={styles.logo} />
          <HeroBar />
          {children}
        </section>
      </div>
    </>
  );
};

export default HeroSection;
