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
import DesignerList from '@containers/designer-network';
import DesignerSquareList from '@containers/designer-network/imageCard';
import globalActions from '@actions/global.actions';
import { convertToEth } from '@helpers/price.helpers';
import Link from 'next/link';

const LandingPage = () => {
  const chainId = useSelector(getChainId);
  const router = useRouter();
  const [collectionGroups, setCollectionGroups] = useState([]);
  const [bundleGroups, setBundleGroups] = useState([]);

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
    // const fetchCollectionGroups = async () => {
    //   const { digitalaxCollectionGroups } = await getCollectionGroups(chainId);
    //   const { digitalaxGarmentNFTV2GlobalStats } = await getDigitalaxGarmentNftV2GlobalStats(chainId);
    //   globalActions.setMonaPerEth(convertToEth(digitalaxGarmentNFTV2GlobalStats[0].monaPerEth));
    //   let collections = [],
    //     bundles = [];
    //   digitalaxCollectionGroups.forEach((digitalaxCollectionGroup) => {
    //     const collectionPrice = digitalaxCollectionGroup.collections.reduce((a, b) => a + Number(b.valueSold), 0);
    //     const auctionPrice = digitalaxCollectionGroup.auctions.reduce((a, b) => a + Number(b.topBid), 0);
    //     const bundlePrice = digitalaxCollectionGroup.digiBundle.valueSold;
    //     collections.push({
    //       ...digitalaxCollectionGroup.collections[0].garments[0],
    //       designer: digitalaxCollectionGroup.collections[0].designer,
    //       id: digitalaxCollectionGroup.id,
    //       sold: (collectionPrice + auctionPrice) / 1e18
    //     });
    //     bundles.push({
    //       ...digitalaxCollectionGroup.digiBundle.garments[0],
    //       productId: digitalaxCollectionGroup.digiBundle.id,
    //       designer: digitalaxCollectionGroup.digiBundle.designer,
    //       id: digitalaxCollectionGroup.id,
    //       sold: bundlePrice / 1e18
    //     });
    //   });
    //   setCollectionGroups(collections);
    //   setBundleGroups(bundles);
    // };
    // fetchCollectionGroups();
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
      <Head>
        <meta
          name="description"
          content="Take your digital fashion skins to the next level: directly into indie games & mods, where players from amateur to pro can start to earn a livelihood through play, without sacrificing our love of the game. ESPA is the first casual esports platform, with direct integration with DIGITALAX NFT skins on Matic Network. "
        />
        <meta property="og:title" content="Digitalax - Web3 Fashion Economy" />
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
        <video width="100%" autoPlay muted loop playsInline>
          <source src="/video/web3fashionweek.mp4" type="video/mp4" />
        </video>
        <DesignerSquareList />

        <div className={styles.designer}>
          {/* <Link href="https://twitter.com/glycemag"> */}
          <a target="_blank">
            Web3 Fashion <br />
            Market{' '}
          </a>
          {/* </Link> */}
        </div>
      </section>

      <section className={styles.globalDesignerNetwork}>
        <DesignerList />
      </section>

      <section className={styles.fashionWeekScheduleSection}>
        <img className={styles.topImageTitle} src="/images/fashionActionTitle.png" />
        <img className={styles.backImage} src="/images/fashionAction.png" />
        <marquee>
          <img className={styles.bottomImageText} src="/images/fashionActionText.png" />
        </marquee>
        <div className={styles.readmoreText}>
          Read more about our <br /> DAO here.
        </div>
        <div className={styles.markText}>
          The Global Designer Network is initiating as an on-chain DAO.
        </div>
      </section>

      <section className={styles.seenAndBeeSeenSection}>
        <img src="/images/beseentext.png" />
        <ul className={styles.rightArrowBtn}>
          <li>
            {' '}
            <img className={styles.backImage} src="/images/arrowLink.png" />
          </li>
          <li>
            {' '}
            <img className={styles.backImage} src="/images/arrowLink.png" />
          </li>
          <li>
            {' '}
            <img className={styles.backImage} src="/images/arrowLink.png" />
          </li>
        </ul>
      </section>

      <section className={styles.physicalFashion}>
        <marquee>
          <img className={styles.bottomImageText} src="/images/fashionweb3.png" />
        </marquee>
        <div className={styles.row50}>
          <div className={styles.col50}>
            <img className={styles.bottomImageText} src="/images/physicalFashion.png" />
            <br />
            <button className={styles.wideButtonBlock}>
              SHOP physical WEB3 FASHION{' '}
              <img className={styles.bottomImageText} src="/images/arrowLink.png" />
            </button>
          </div>
          <div className={styles.col50}>
            <div className={styles.sqaureSlideArrows}>
              <img className={styles.bottomImageText} src="/images/fashionweb3frame.png" />
              <a className={styles.arrowRight}>
                <img className={styles.bottomImageText} src="/images/blueArrow.png" />
              </a>
              <a className={styles.arrowLeft}>
                <img className={styles.bottomImageText} src="/images/blueArrow.png" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.digitalFashion}>
        <div className={styles.row50}>
          <div className={styles.col50}>
            <div className={styles.sqaureSlideArrows}>
              <img className={styles.bottomImageText} src="/images/digitalFrame.png" />
              <a className={styles.arrowRight}>
                <img className={styles.bottomImageText} src="/images/digitalArrow.png" />
              </a>
              <a className={styles.arrowLeft}>
                <img className={styles.bottomImageText} src="/images/digitalArrow.png" />
              </a>
            </div>
          </div>
          <div className={styles.col50}>
            <img className={styles.bottomImageText} src="/images/digitalFashion.png" />
            <br />
            <button className={styles.wideButtonBlock}>
              SHOP DIGITAL WEB3 FASHION
              <img className={styles.bottomImageText} src="/images/arrowLink.png" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
