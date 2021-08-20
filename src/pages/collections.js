import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Container from '@components/container';
import BannerBlue from '@components/banner-blue';
import BannerPink from '@components/banner-pink';
import FashionList from '@components/fashion-list';
import { useSelector } from 'react-redux';
import { getChainId } from '@selectors/global.selectors';
import { getCollectionV2ByIds } from '@services/api/apiService';
import BannerBar from '@components/banner-bar';
import physicals from '../data/drip.json';

const LandingPage = () => {
  const fashionData = [
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
      
      See more about The First Dungeon here. Your collectible is airdropped to you within 12 hours of purchase. `
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
    {
      title: 'DressX Try On Functionality',
      description: `Take your digital fashion item and wear across the social media metaverse. DressX’s try on technology allows you to overlay your digital fashion itme onto a photo of your choosing. It’s the outift that doesn’t exist— physically at least! `
    },
    {
      title: 'Decentraland In-Game Digital Fashion Outfit',
      description: `Exclusive W3FW Decentraland In-Game Digital Fashion Memorabilia Bomber Jacket! View it also through the DressX AR Try On filter and head over to DRIP to purchase the physical varsity jacket version to rep IRL!`
    }
  ];
  const chainId = useSelector(getChainId);
  const digitalIds = ['358', '359', '360', '361', '362', '363', '364', '365', '366'];
  const [digital, setDigital] = useState([]);

  useEffect(() => {
    const fetchCollectionGroup = async () => {
      const { digitalaxGarmentV2Collections } = await getCollectionV2ByIds(chainId, digitalIds);
      setDigital(digitalaxGarmentV2Collections.map(collection => collection.garments[0]));
    };

    fetchCollectionGroup();
  }, []);

  return (
    <div className={styles.wrapper}>
      <section className={styles.heroSection}>
        <section className={styles.robloxSection} id="roblox">
          <img src="./images/metaverse/section-texture.png" className={styles.back} />
          <video autoPlay loop muted playsInline>
            <source src="/images/metaverse/!RENDER.mp4" type="video/mp4" />
          </video>
        </section>
      </section>

      <section className={styles.bannerSection}>
        <BannerBar className={styles.homeHeroBar} type={1}/>
        <Container>
          <div className={styles.cardWrapper}>
            <BannerBlue
              products={
                physicals
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
                digital
              }
              rarity={'Semi-Rare'}
            />
          </div>
        </Container>
      </section>

      <FashionList fashionData={fashionData} />

    </div>
  );
};

export default memo(LandingPage);
