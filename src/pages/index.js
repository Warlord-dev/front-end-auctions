import React, { useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';
import Head from 'next/head';
import { getCollectionGroups, getCollectionV2ByIds, getDigitalaxGarmentNftV2GlobalStats } from '@services/api/apiService';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { getChainId } from '@selectors/global.selectors';
import NewButton from '@components/buttons/newbutton';
import Container from '@components/container';
import CollectionList from '@components/collection-list';
import HeroBar from '@components/hero-bar';
import DesignerList from '@containers/designer-network';
import GarmentSquareList from '@containers/designer-network/imageCard';
import globalActions from '@actions/global.actions';
import { convertToEth } from '@helpers/price.helpers';
import Link from 'next/link';
import BannerBar from '@components/banner-bar';
import BannerBlue from '@components/banner-blue';
import BannerPink from '@components/banner-pink';
import pysicals from '../data/drip.json';

const LandingPage = () => {
  const chainId = useSelector(getChainId);
  const [digital, setDigital] = useState([]);
  const digitalIds = ['223', '224', '225', '226', '227', '228', '229', '230', '231'];

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
    const fetchCollectionGroups = async () => {
      const { digitalaxGarmentV2Collections } = await getCollectionV2ByIds(chainId, digitalIds);
      console.log({digitalaxGarmentV2Collections})
      setDigital(digitalaxGarmentV2Collections.map(collection => collection.garments[0]));
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
        <GarmentSquareList />

        <div className={styles.designer}>
          <Link href="/collections">
            <a className={styles.heroSectionLink}>
              Web3 Fashion <br />
              Market >
            </a>
          </Link>
        </div>
      </section>

      <section className={styles.globalDesignerNetwork}>
        <DesignerList />
      </section>

      <section className={styles.fashionWeekScheduleSection}>
        <img className={styles.topImageTitle} src="/images/fashionActionTitle.png" />
        <img className={styles.backImage} src="/images/fashionAction.png" />
        <Link href="/collections">
          <h3 className={styles.fashionWeekLink}>Shop the GDN Auction ></h3>
        </Link>
        <a href="https://blog.digitalax.xyz/global-designer-network-dao-auction-governance-token-launch-w3fw-abe09ce1c5d0" target="_blank">
          <div className={styles.readmoreText}>
            Read more about our <br /> DAO here.
          </div>
        </a>
        <div className={styles.markText}>
          The Global Designer Network is initiating as an on-chain DAO.
        </div>
      </section>
      <marquee>
        <img className={styles.bottomImageText} src="/images/fashionActionText.png" />
      </marquee>

      <section className={styles.seenAndBeeSeenSection}>
        <img src="/images/beseentext.png" />
        <ul className={styles.rightArrowBtn}>
          <li>
            {' '}
            <Link href="/collections">
              <a>
                <img className={styles.backImage} src="/images/arrowLink.png" />
              </a>
            </Link>
          </li>
          <li>
            {' '}
            <Link href="/collections">
              <a>
                <img className={styles.backImage} src="/images/arrowLink.png" />
              </a>
            </Link>
          </li>
          <li>
            {' '}
            <Link href="/collections">
              <a>
                <img className={styles.backImage} src="/images/arrowLink.png" />
              </a>
            </Link>
          </li>
        </ul>
      </section>

      <section className={styles.bannerSection}>
        <BannerBar className={styles.homeHeroBar} type={1}/>
        <Container>
          <div className={styles.cardWrapper}>
            <BannerBlue
              products={pysicals}
              rarity={'Semi-Rare'}
            />
          </div>
        </Container>
      </section>

      <section className={styles.bannerPinkSection}>
        <Container>
          <div className={styles.cardWrapper}>
            <BannerPink
              products={digital}
              rarity={'Semi-Rare'}
            />
          </div>
        </Container>
      </section>

      <section className={styles.weekNtfs}>
        <img className={styles.imgTitleWeekNtfs} src="/images/weekNtfstext.png" />
        <div className={styles.row50}>
          <div className={styles.imgWrapperWeekNtfs}>
            <img src="/images/weekNtfsframe.png" />
            <p>
              wear to defi stake your nft for $mona <a href="https://staking.digitalax.xyz">HERE</a>
            </p>
          </div>
          <div className={styles.imgWrapperWeekNtfs}>
            <img src="/images/weekNtfsframe.png" />
            <p>Unique pfp collectible avatar W/ in-game utility</p>
          </div>
          <div className={styles.imgWrapperWeekNtfs}>
            <img src="/images/weekNtfsframe.png" />
            <p>Original 3d model fbx file included</p>
          </div>
          <div className={styles.imgWrapperWeekNtfs}>
            <img src="/images/weekNtfsframe.png" />
            <p>Fractional garment ownership erc-1155 open source pattern</p>
          </div>
        </div>
      </section>

      <section className={styles.liveSection}>
        <span>
          <img className={styles.liveText} src="/images/liveText.png" />
          <video autoPlay muted loop className={styles.liveArea}>
            <source src="/images/metaverse/Web Fashion Week.mp4" type="video/mp4" />
          </video>
        </span>
      </section>
    </div>
  );
};

export default LandingPage;
