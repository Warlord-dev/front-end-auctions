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

      <section className={styles.botiqueSection}>
        <div className={styles.content}>
          <div className={styles.mainText}>
            Web3 Fashion Metaverse Boutique
          </div>
          <a href="https://designers.digitalax.xyz/getdressed/" target="_blank">
            <div className={styles.linkText}>
              Get Bespoke Tailored by the Global Designer Network
            </div>
          </a>
        </div>
      </section>

      <section className={styles.heroSection}>
        <section className={styles.robloxSection} id="roblox">
          <img src="./images/metaverse/section-texture.png" className={styles.back} />
          <video autoPlay loop muted playsInline>
            <source src="/images/metaverse/!RENDER.mp4" type="video/mp4" />
          </video>
        </section>
      </section>

    </div>
  );
};

export default memo(LandingPage);
