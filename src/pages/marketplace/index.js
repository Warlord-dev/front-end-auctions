import React, { useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';
import Head from 'next/head';
import { getCollectionGroups, getDigitalaxGarmentNftV2GlobalStats } from '@services/api/apiService';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { getChainId } from '@selectors/global.selectors';
import NewButton from '@components/buttons/newbutton';
import Container from '@components/container';
import CollectionList from '@components/collection-list';
import HeroBar from '@components/hero-bar';
import globalActions from '@actions/global.actions';
import { convertToEth } from '@helpers/price.helpers';

const LandingPage = () => {
  const chainId = useSelector(getChainId);
  const router = useRouter();
  const [collectionGroups, setCollectionGroups] = useState([]);
  const [bundleGroups, setBundleGroups] = useState([]);

  useEffect(() => {
    const fetchCollectionGroups = async () => {
      const { digitalaxCollectionGroups } = await getCollectionGroups(chainId);
      const { digitalaxGarmentNFTV2GlobalStats } = await getDigitalaxGarmentNftV2GlobalStats(
        chainId,
      );
      globalActions.setMonaPerEth(convertToEth(digitalaxGarmentNFTV2GlobalStats[0].monaPerEth));

      let collections = [],
        bundles = [];
      digitalaxCollectionGroups.forEach((digitalaxCollectionGroup) => {
        const collectionPrice = digitalaxCollectionGroup.collections.reduce(
          (a, b) => a + Number(b.valueSold),
          0,
        );
        const auctionPrice = digitalaxCollectionGroup.auctions.reduce(
          (a, b) => a + Number(b.topBid),
          0,
        );
        const bundlePrice = digitalaxCollectionGroup.digiBundle.valueSold;
        collections.push({
          ...digitalaxCollectionGroup.collections[0].garments[0],
          designer: digitalaxCollectionGroup.collections[0].designer,
          id: digitalaxCollectionGroup.id,
          sold: (collectionPrice + auctionPrice) / 1e18,
        });
        bundles.push({
          ...digitalaxCollectionGroup.digiBundle.garments[0],
          productId: digitalaxCollectionGroup.digiBundle.id,
          designer: digitalaxCollectionGroup.digiBundle.designer,
          id: digitalaxCollectionGroup.id,
          sold: bundlePrice / 1e18,
        });
      });
      setCollectionGroups(collections);
      setBundleGroups(bundles);
    };

    fetchCollectionGroups();
  }, []);

  const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'Skins Landing page',
    title: 'Digitalax - Web3 Fashion Economy',
    description:
      'Take your digital fashion skins to the next level: directly into indie games & mods, where players from amateur to pro can start to earn a livelihood through play, without sacrificing our love of the game. ESPA is the first casual esports platform, with direct integration with DIGITALAX NFT skins on Matic Network. ',
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.heroSection}>
        <img src="/images/metaverse/metaverse-logo.png" className={styles.heroImage} />
        <a href="#amongus" className={styles.amongus}>
          among us
        </a>
        <a href="#minecraft" className={styles.minecraft}>
          minecraft
        </a>
        <a href="#roblox" className={styles.roblox}>
          roblox
        </a>
        <HeroBar />
      </section>

      <section className={styles.collectionSection}>
        <Container>
          <div className={styles.collectionWrapper}>
            <h1 className={styles.title}> collection </h1>
            <CollectionList items={collectionGroups} />
          </div>
          <div className={styles.bundleWrapper}>
            <h1 className={styles.title}> bundle </h1>
            <CollectionList items={bundleGroups} isBundle />
          </div>
        </Container>
      </section>

      <section className={styles.amongusSection} id="amongus">
        <img src="./images/metaverse/section-texture.png" className={styles.back} />
        <img src="./images/metaverse/amongus-logo.png" className={styles.logo} />
        <video autoPlay loop muted playsInline>
          <source src="/video/among-us.mp4" type="video/mp4" />
        </video>
        <div className={styles.suitUp}>
          <NewButton text="Suit up" onClick={() => router.push('/marketplace/all/0')} />
        </div>
      </section>

      <section className={styles.mineCraftSection} id="minecraft">
        <img src="./images/metaverse/section-texture.png" className={styles.back} />
        <img src="./images/metaverse/minecraft-logo.png" className={styles.logo} />
        <video autoPlay loop muted playsInline>
          <source src="/video/among-us.mp4" type="video/mp4" />
        </video>
        <div className={styles.suitUp}>
          <NewButton text="Suit up" onClick={() => router.push('/marketplace/all/1')} />
        </div>
      </section>

      <section className={styles.robloxSection} id="roblox">
        <img src="./images/metaverse/section-texture.png" className={styles.back} />
        <video autoPlay loop muted playsInline>
          <source src="/video/roblox.mp4" type="video/mp4" />
        </video>
        <img src="./images/metaverse/roblox-logo.png" className={styles.logo} />
        <div className={styles.suitUp}>
          <NewButton text="Suit up" onClick={() => router.push('/marketplace/all/2')} />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
