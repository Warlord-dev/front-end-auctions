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
import HeroSection from '@components/hero-section';

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
      <HeroSection logo="/images/metaverse/marketplaceLogo.png" />

      <section className={styles.collectionSection}>
        <div className={styles.collectionWrapper}>
          <CollectionList items={collectionGroups} />
        </div>
        <div className={styles.bundleWrapper}>
          <CollectionList items={bundleGroups} isBundle />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
