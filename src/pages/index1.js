import React, { memo, useEffect, useState } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import styles from './styles.module.scss';
import UButton from '@components/buttons/ubutton';
import MobilePanel from '@components/mobile-panel';
import Container from '@components/container';
import BannerBlue from '@components/banner-blue';
import BannerPink from '@components/banner-pink';
import FashionCard from '@components/fashion-card';
import { useSelector } from 'react-redux';
import { getChainId } from '@selectors/global.selectors';
import { getCollectionGroupById, getDigitalaxGarmentAuctions } from '@services/api/apiService';
import BannerBar from '@components/banner-bar';

const LandingPage = () => {
  const [collections, setCollections] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const [fashionData, setFashionData] = useState([
    {
      title: 'DeFi Staking Functionality',
      description: `All NFTs can be staked in the DIGITALAX NFT Staking Contracts on Polygon for $MONA yield. This forms part of the broader Fashion x DeFi merger that DIGITALAX has undertaken to bring greater utility to metaversal fashion and also welcome multitudes more into web3 and DeFi. 

      What if you could earn more from what you wear? Wear to DeFi lets you put your fashion to work for you. We are melting the centralised exploitative crown to weave the fabric of a generative ecosystem.
      `
    },
    {
      title: 'Unique PFP Collectible Avatar W/ In-Game Utility',
      description: `With every NFT enjoy a custom unique PFP Collectible Avatar that can be taken into The First Dungeon— an open source 2D battle royale game developed by Thijmen Happy. The game is launching through DIGITALAX’s ESPA esports platform mid September. 

      Take your character in-game to engage in The First Dungeon casual esports battles, rank on the leaderboard and earn $MONA as you level up from 0 to 1.  

      See more about The First Dungeon here. `
    },
    {
      title: '3D Model FBX File Included',
      description: `All of the DIGITALAX digital fashion garment and accessory ERC-721 NFTs are backed by the underlying 3D model FBX file, stored in IPFS. This forms part of the platform’s broader pursuit for decentralising content distribution and access to it. The FBX file is one of the most popular and widely used 3D data interchange formats between 3D editors and game engines. There are still efficiency problems that exist with it, which DIGITALAX is working to solve through it’s DASH File Format architecture. `
    },
    {
      title: 'Fractional Garment ERC-1155 Open Source Pattern',
      description: `Fractional Garment Ownership (FGO) sets forth the standard and dress code for the manufacture of digital fashion along the content supply chain. FGO leverages ERC Protocol standards across the Ethereum Blockchain and Polygon (Matic Network) for breaking down a master ERC-721 digital garment into its programmable and composable ERC-1155 elements of materials, patterns and textures.

      Here, we are using a variant on the ERC-998 standard, where each ERC-721 token can hold a balance of ERC-1155 NFTs. We coin this respectively the Parent and Child NFTs. This allows for other designers to leverage off of the open source digital libraries, incorporating the patterns, materials and textures into their master garments.`
      },
  ]);
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
        <section className={styles.robloxSection} id="roblox">
          <img src="./images/metaverse/section-texture.png" className={styles.back} />
          <video autoPlay loop muted playsInline>
            <source src="/video/roblox.mp4" type="video/mp4" />
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

      <section className={styles.viewAllSkinsSection}>
        <img src="/images/metaverse/bgbot.png" className={styles.back} />
        <img src="/images/metaverse/glitch.png" className={styles.glitch} />
      </section>

      
      <section className={styles.fashionListSection}>
        <img src="/images/metaverse/webtitle.png" className={styles.webtitle} />
        {fashionData.map((item,index) => (
        <Container>
          <div className={styles.cardWrapper}>
            <FashionCard
              item={item}
              leftImage={(index%2 == 0)?true:false}
              products={
                collections.filter((collection) => collection.rarity === 'Semi-Rare') || []
              }
              rarity={'Semi-Rare'}
            />
          </div>
        </Container>
        ))}
        <img src="/images/metaverse/glitch.png" className={styles.glitch} />
      </section>
      

      <section className={styles.viewAllSkinsSection}>
        <img src="/images/metaverse/bgbot.png" className={styles.back} />
      </section>
    </div>
  );
};

export default memo(LandingPage);
