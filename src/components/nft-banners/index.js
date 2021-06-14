import Link from 'next/link';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import s from './index.module.scss';

const NftBanners = () => {
  return (
    <div className={s.bannerWrapper}>
      <Carousel
        autoPlay
        showThumbs={false}
        stopOnHover={false}
        showArrows={false}
        showStatus={false}
        infiniteLoop
      >
        {/* issue 1 */}
        {/* <div className={s.firstBanner}>
          <img src={`images/nft/1/Group 1187.png`} />
          <Link href="/unlockable/">
            <a className={s.viewBundles}> VIEW BUNDLES </a>
          </Link>
        </div>
        <img src={`images/nft/1/1.png`} />
        <img src={`images/nft/1/2.png`} />
        <img src={`images/nft/1/3.png`} />
        <img src={`images/nft/1/4.png`} />
        <img src={`images/nft/1/5.png`} />
        <img src={`images/nft/1/6.png`} />
        <img src={`images/nft/1/Group 1188.png`} />
        <div className={s.videoItem}>
          <img src={`images/nft/1/8.png`} />
          <img src={`images/nft/1/8.gif`} className={s.gif} />
        </div> */}

        {/* issue 2 */}
        <div className={s.firstBanner}>
          <img src={`images/nft/2/1.png`} />
          <Link href="/unlockable/">
            <a className={s.viewBundles}> VIEW BUNDLES </a>
          </Link>
        </div>
        <img src={`images/nft/2/2.png`} />
        <img src={`images/nft/2/2.png`} />
        <img src={`images/nft/2/3.png`} />
        <img src={`images/nft/2/4.png`} />
        <img src={`images/nft/2/5.png`} />
        <img src={`images/nft/2/6.png`} />
        <img src={`images/nft/2/7.png`} />
        <img src={`images/nft/2/8.png`} />
        <div className={s.videoWrapper}>
          <video autoPlay loop muted>
            <source src="images/nft/2/9_back.mp4" />
          </video>
          <img src={`images/nft/2/9.png`} className={s.png} />
        </div>
      </Carousel>
    </div>
  );
};

export default NftBanners;
