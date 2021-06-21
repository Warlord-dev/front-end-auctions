import React, { useEffect } from 'react';
import { Router } from 'next/router';
import Head from 'next/head';
import { getCollections, getCollectionsV2 } from '@services/api/apiService';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { getChainId } from '@selectors/global.selectors';
import NewButton from '@components/buttons/newbutton';
import CollectionList from '@components/collection-list';
import HeroBar from '@components/hero-bar';

const LandingPage = () => {
  const chainId = useSelector(getChainId);
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('485692459240447');
        ReactPixel.pageView();

        Router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
  }, []);

  useEffect(() => {
    const fetchCollections = async () => {
      const { digitalaxGarmentCollections } = await getCollections(chainId);
      const { digitalaxGarmentV2Collections } = await getCollectionsV2(chainId);
      console.log({ digitalaxGarmentCollections });
      console.log({ digitalaxGarmentV2Collections });
    };

    fetchCollections();
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
      <Head>
        <meta
          name="description"
          content="Take your digital fashion skins to the next level: directly into indie games & mods, where players from amateur to pro can start to earn a livelihood through play, without sacrificing our love of the game. ESPA is the first casual esports platform, with direct integration with DIGITALAX NFT skins on Matic Network. "
        />
        <meta property="og:title" content="Digitalax - The Digital Fashion Engine" />
        <meta
          property="og:description"
          content="Take your digital fashion skins to the next level: directly into indie games & mods, where players from amateur to pro can start to earn a livelihood through play, without sacrificing our love of the game. ESPA is the first casual esports platform, with direct integration with DIGITALAX NFT skins on Matic Network. "
        />
        <meta property="og:url" content="https://marketplace.digitalax.xyz" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ESPA4play" />
        <meta name="twitter:title" content="Skins Landing page" />
        <meta
          name="twitter:description"
          content="Take your digital fashion skins to the next level: directly into indie games & mods, where players from amateur to pro can start to earn a livelihood through play, without sacrificing our love of the game. ESPA is the first casual esports platform, with direct integration with DIGITALAX NFT skins on Matic Network. "
        />
        <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
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
        <div className={styles.collectionWrapper}>
          <h1 className={styles.title}> collection </h1>
          <CollectionList />
        </div>
        <div className={styles.bundleWrapper}>
          <h1 className={styles.title}> bundle </h1>
          <CollectionList />
        </div>
      </section>

      <section className={styles.amongusSection} id="amongus">
        <img src="./images/metaverse/section-texture.png" className={styles.back} />
        <img src="./images/metaverse/amongus-logo.png" className={styles.logo} />
        <video autoPlay loop muted playsInline>
          <source src="/video/among-us.mp4" type="video/mp4" />
        </video>
        <div className={styles.suitUp}>
          <NewButton text="Suit up" />
        </div>
      </section>

      <section className={styles.mineCraftSection} id="minecraft">
        <img src="./images/metaverse/section-texture.png" className={styles.back} />
        <img src="./images/metaverse/minecraft-logo.png" className={styles.logo} />
        <video autoPlay loop muted playsInline>
          <source src="/video/among-us.mp4" type="video/mp4" />
        </video>
        <div className={styles.suitUp}>
          <NewButton text="Suit up" />
        </div>
      </section>

      <section className={styles.robloxSection} id="roblox">
        <img src="./images/metaverse/section-texture.png" className={styles.back} />
        <img src="./images/metaverse/roblox-logo.png" className={styles.logo} />
        <video autoPlay loop muted playsInline>
          <source src="/video/among-us.mp4" type="video/mp4" />
        </video>
        <div className={styles.suitUp}>
          <NewButton text="Suit up" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
