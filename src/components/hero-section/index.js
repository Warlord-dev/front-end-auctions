import HeroBar from '@components/hero-bar';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './styles.module.scss';

const HeroSection = ({ children, logo, width = '80%', filter, setFilter, setSortBy }) => {
  const route = useRouter();

  return (
    <>
      <div className={styles.wrapper}>
        <section className={styles.heroSection}>
          <img src="/images/metaverse/marketplaceBack.png" className={styles.back} />
          <img src={logo} className={styles.logo} style={{ width: width }} />
          <HeroBar filter={filter} setFilter={setFilter} setSortBy={setSortBy} />
          {children}
        </section>
      </div>
    </>
  );
};

export default HeroSection;
