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
  const [collectionGroups, setCollectionGroups] = useState([]);
  const [auctionsGroups, setAuctionGroups] = useState([]);

  useEffect(() => {
    const fetchCollectionGroups = async () => {
      const { digitalaxCollectionGroups } = await getCollectionGroups(chainId);
      const { digitalaxGarmentNFTV2GlobalStats } = await getDigitalaxGarmentNftV2GlobalStats(
        chainId,
      );
      globalActions.setMonaPerEth(convertToEth(digitalaxGarmentNFTV2GlobalStats[0].monaPerEth));

      let collections = []
      let auctions = []
      digitalaxCollectionGroups.forEach((digitalaxCollectionGroup) => {
        const collectionPrice = digitalaxCollectionGroup.collections.reduce(
          (a, b) => a + Number(b.valueSold),
          0,
        );
        const auctionPrice = digitalaxCollectionGroup.auctions.reduce(
          (a, b) => a + Number(b.topBid),
          0,
        );
        if (digitalaxCollectionGroup.collections.length && digitalaxCollectionGroup.collections[0].id !== '0') {
          collections.push({
            ...digitalaxCollectionGroup.collections[0].garments[0],
            designer: digitalaxCollectionGroup.collections[0].designer,
            id: digitalaxCollectionGroup.id,
            sold: (collectionPrice + auctionPrice) / 1e18,
            isAuction: false,
          });
        }
        if (digitalaxCollectionGroup.auctions.length && digitalaxCollectionGroup.auctions[0].id !== '0') {
          auctions.push({
            ...digitalaxCollectionGroup.auctions[0].garment,
            designer: digitalaxCollectionGroup.auctions[0].designer,
            id: digitalaxCollectionGroup.id,
            sold: (collectionPrice + auctionPrice) / 1e18,
            isAuction: true
          });
        }
      });
      setCollectionGroups(collections);
      setAuctionGroups(auctions);
    };

    fetchCollectionGroups();
  }, []);

  return (
    <div className={styles.wrapper}>
      <HeroSection logo="/images/metaverse/marketplaceLogo.png" />

      <section className={styles.collectionSection}>
        <div className={styles.collectionWrapper}>
          <CollectionList items={collectionGroups} />
          <CollectionList items={auctionsGroups} />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
