import React, { memo, useEffect, useState } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import styles from './styles.module.scss';
import UButton from '@components/buttons/ubutton';
import MobilePanel from '@components/mobile-panel';
import Container from '@components/container';
import BannerBlue from '@components/banner-blue';
import BannerPink from '@components/banner-pink';
import { useSelector } from 'react-redux';
import { getChainId } from '@selectors/global.selectors';
import { getCollectionGroupById, getDigitalaxGarmentAuctions } from '@services/api/apiService';
import BannerBar from '@components/banner-bar';

const LandingPage = () => {
  const [collections, setCollections] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const chainId = useSelector(getChainId);

  useEffect(() => {
    const id = 0;
    const fetchCollectionGroup = async () => {
      const { digitalaxCollectionGroup } = await getCollectionGroupById(chainId, id);
      let aucs = [];
      let colls = [];

      if (id === '0') {
        const { digitalaxGarmentAuctions } = await getDigitalaxGarmentAuctions(chainId);
        digitalaxGarmentAuctions.forEach((auction) => {
          aucs.push({
            ...auction,
            rarity: 'Exclusive',
          });
        });
      } else {
        digitalaxCollectionGroup.auctions.forEach((auction) => {
          aucs.push({
            ...auction,
            rarity: 'Exclusive',
          });
        });
        
      }
      
      digitalaxCollectionGroup.collections.forEach((collection) => {
        colls.push({
          garment: {
            ...collection.garments[0],
          },
          id: collection.id,
          rarity: collection.rarity,
        });
      });
      
      setAuctions(aucs);
      setCollections(colls);
    };

    fetchCollectionGroup();
  }, []);

  const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'Skins Landing page',
    title: 'Digitalax - The Digital Fashion Engine',
    description:
      'Take your digital fashion skins to the next level: directly into indie games & mods, where players from amateur to pro can start to earn a livelihood through play, without sacrificing our love of the game. ESPA is the first casual esports platform, with direct integration with DIGITALAX NFT skins on Matic Network. ',
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.heroSection}>
        <section className={styles.mineCraftSection} id="minecraft">
          <img src="./images/metaverse/section-texture.png" className={styles.back} />
          <img src="./images/metaverse/minecraft-logo.png" className={styles.logo} />
          <video autoPlay loop muted playsInline>
            <source src="/video/among-us.mp4" type="video/mp4" />
          </video>
        </section>
      </section>

      <section className={styles.bannerSection}>
        <BannerBar className={styles.homeHeroBar} />
        <Container>
          <div className={styles.cardWrapper}>
            <BannerBlue
              products={
                collections.filter((collection) => collection.rarity === 'Semi-Rare') || []
              }
              rarity={'Semi-Rare'}
            />
          </div>
        </Container>
      </section>

      <section className={styles.bannerPinkSection}>
        <Container>
          <div className={styles.cardWrapper}>
            <BannerPink
              products={
                collections.filter((collection) => collection.rarity === 'Semi-Rare') || []
              }
              rarity={'Semi-Rare'}
            />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default memo(LandingPage);
