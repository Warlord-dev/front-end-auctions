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
        ReactPixel.init('886174625261983');
        ReactPixel.pageView();

        Router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
  }, []);

  const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'Marketplace Landing page',
    title: 'Digitalax - Web3 Fashion Economy',
    description:
      'DIGITALAX is the first NFT live digital fashion market, combining NFT staking and DeFi. We are pioneering Fractional Garment Ownership with ERC-721 and ERC-1155 NFTs. All designs are handmade by our Global Designer Network and infused with the special attention of our in house fashion studio. All NFTs are backed by the 3D File and all metadata is decentralised. ',
  };

  return (
    <div className={styles.wrapper}>
      <Head>
        <meta
          name="description"
          content="DIGITALAX is the first NFT live digital fashion market, combining NFT staking and DeFi. We are pioneering Fractional Garment Ownership with ERC-721 and ERC-1155 NFTs. All designs are handmade by our Global Designer Network and infused with the special attention of our in house fashion studio. All NFTs are backed by the 3D File and all metadata is decentralised. "
        />
        <meta property="og:title" content="Digitalax - Web3 Fashion Economy" />
        <meta
          property="og:description"
          content="DIGITALAX is the first NFT live digital fashion market, combining NFT staking and DeFi. We are pioneering Fractional Garment Ownership with ERC-721 and ERC-1155 NFTs. All designs are handmade by our Global Designer Network and infused with the special attention of our in house fashion studio. All NFTs are backed by the 3D File and all metadata is decentralised. "
        />
        <meta property="og:url" content="https://marketplace.digitalax.xyz" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ESPA4play" />
        <meta name="twitter:title" content="Marketplace Landing page" />
        <meta
          name="twitter:description"
          content="DIGITALAX is the first NFT live digital fashion market, combining NFT staking and DeFi. We are pioneering Fractional Garment Ownership with ERC-721 and ERC-1155 NFTs. All designs are handmade by our Global Designer Network and infused with the special attention of our in house fashion studio. All NFTs are backed by the 3D File and all metadata is decentralised. "
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <div className={styles.navBack}>
        <video autoPlay loop muted playsInline>
          <source src={`/video/BGVIDEO-MARKETPLACE.mp4`} type="video/mp4" />
        </video>
        <div className={styles.buttonWrapper}>
          <UButton caption='go to the og marketplace >' link="/marketplace" />
        </div>
      </div>
      <div className={styles.promoteWrapper}>
        <div style={{
          display: 'flex'
        }}>
        <h1>MARKETPLACE</h1>
        <img src="/images/social-icons/white-logo.svg" alt="white-logo" />
        </div>
        <h2>WE ARE THE FIRST DIGITAL FASHION NFT MARKETPLACE. OVER 1300 ETH IN SALES. <br />A GLOBAL DESIGNER NETWORK.</h2>
        <h5>DeFi X NFTs: Stake Fashion NFTs for $MONA<br /> Pioneering Fractional Garment Ownership.</h5>
      </div>
      <div className={styles.descriptionWrapper}>
        <h1>ALL DESIGNS  ARE HANDMADE BY OUR GLOBAL DESIGNER NETWORK AND INFUSED WITH THE SPECIAL ATTENTION OF OUR IN HOUSE FASHION STUDIO.</h1>
        <h2>ALL NFTs BACKED BY THE 3D FILE. ALL METADATA DECENTRALIZED.</h2>
      </div>
      <MobilePanel style={{ padding: 0 }}>
        <div className={styles.fashionWrapper}>
          <img src="/images/fashion/fashion-1.png" alt="fashion-1" />
          <img src="/images/fashion/fashion-2.png" alt="fashion-2" />
          <img src="/images/fashion/fashion-3.png" alt="fashion-3" />
          <img src="/images/fashion/fashion-4.png" alt="fashion-4" />
        </div>
      </MobilePanel>
      <MobilePanel
        backgroundColor={'white'}
        color={'black'}
        style={{
          paddingRight: 20
        }}
      >
        <div className={styles.mobilePromoteWrapper}>
          <div className={styles.title}>
            <h1>MARKETPLACE</h1>
            <h2>We are the first digital fashion NFT marketplace over 1300 ETH in sales. A global designer network.</h2>
          </div>
          <img src="/images/logo.jpg" alt="black-logo" />
        
        </div>
      </MobilePanel>
      <MobilePanel
        style={{
          textAlign: 'center',
          letterSpacing: 1,
          fontSize: 11
        }}
      >
        ALL DESIGNS  ARE HANDMADE BY OUR GLOBAL DESIGNER NETWORK AND INFUSED WITH THE SPECIAL ATTENTION OF OUR IN HOUSE FASHION STUDIO.
      </MobilePanel>
      <MobilePanel 
        backgroundColor={'#74A3F3'}
        color={'white'}
        style={{
          textAlign: 'center',
          letterSpacing: 2,
          fontSize: 14
        }}
      >
        ALL NFTs BACKED BY THE 3D FILE. <br/> ALL METADATA DECENTRALIZED.
      </MobilePanel>
      <MobilePanel 
        backgroundColor={'white'}
        color={'black'}
        style={{
          textAlign: 'center',
          letterSpacing: 1,
          fontSize: 12
        }}
      >
        DeFi X NFTs: Stake Fashion NFTs for $MONA
      </MobilePanel>
    </div>
  )
}

export default memo(LandingPage)

