import HeroBar from '@components/hero-bar';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './styles.module.scss';

const HeroSection = ({ children }) => {
  const route = useRouter();
  const { id } = route.query;
  const mainLogos = [
    '/images/metaverse/amongus-logo1.png',
    '/images/metaverse/minecraft-logo.png',
    '/images/metaverse/roblox-logo.png',
  ];

  return (
    <>
      <div className={styles.wrapper}>
        <section className={styles.heroSection}>
          <img src="./images/metaverse/party_flags.png" className={styles.flag} />
          <div className={styles.logoWrapper}>
            <img src={mainLogos[parseInt(id)]} className={styles.mainLogo} />
          </div>
          <img src="./images/metaverse/gpad.png" className={styles.gpad} />
          <HeroBar />
          {children}
        </section>
      </div>
    </>
  );
};

export default HeroSection;
