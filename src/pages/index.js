import React, { memo, useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import styles from './styles.module.scss';
import UButton from '@components/buttons/ubutton'
import MobilePanel from '@components/mobile-panel'

const LandingPage = () => {
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <div className={styles.navBack}>
        <div className={styles.espaSkinsMobile}>
          <h1>ESPA SKINS</h1>
          <p>Purchase with $MONA or crypto</p>
        </div>
        <div className={styles.skinList}>
          <img src={'/images/skin-sample/espa-skin-1.png'} />
          <img src={'/images/skin-sample/espa-skin-2.png'} />
          <img src={'/images/skin-sample/espa-skin-3.png'} />
          <img src={'/images/skin-sample/espa-skin-4.png'} />
        </div>
        <div className={styles.espaSkins}>
          <h1>ESPA SKINS</h1>
          <UButton caption='SUIT UP >' link="/marketplace" />
        </div>
        <div className={styles.buttonForMobile}>
          <UButton 
            caption='SUIT UP >' 
            style={{
              fontSize: 18,
              padding: 12,
              paddingLeft: 20,
              paddingRight: 20,
              borderRadius: 8
            }}
            link="/marketplace"
          />
        </div>
      </div>
      <div className={styles.promoteWrapper}>
        <h1>Get Winning Streaks & Earn $MONA.</h1>
        <h1>Matic Layer 2 Sustainability. </h1>
        <h1 style={{
          marginRight: '5%'
        }}>Suit up for Indie & Mod Esports.</h1>
      </div>
      <div className={styles.videoWrapper}>
        <video autoPlay loop muted playsInline>
          <source src={`/video/among-us.mp4`} type="video/mp4" />
        </video>
      </div>
      <MobilePanel>
        SUIT UP FOR BATTLE IN THE ESPA INDIE + MOD ESPORTS TOURNAMENTS
      </MobilePanel>
      <MobilePanel backgroundColor={'#74A3F3'} color={'white'}>
        WE ARE EMPOWERING DESIGNERS, DEVELOPERS, MODDERS, PLAYERS GLOBALLY. 
      </MobilePanel>
      <MobilePanel backgroundColor={'white'} color={'black'}>
        LIBERATING FASHION AND GAMING.  
      </MobilePanel>
      <MobilePanel>
        MATIC LAYER 2 SUSTAINABILITY.
      </MobilePanel>
      <MobilePanel backgroundColor={'#74A3F3'} color={'white'}>
        PLAY ESPORTS, EARN $MONA.
      </MobilePanel>
    </div>
  )
}

export default memo(LandingPage)

