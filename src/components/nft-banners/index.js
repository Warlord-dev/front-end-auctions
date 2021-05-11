import Link from 'next/link';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import s from "./index.module.scss";

const NftBanners = () => {
    return (
    <div className={s.bannerWrapper}>
        <Carousel showThumbs={false} showArrows={false} showStatus={false} infiniteLoop>
            <div className={s.firstBanner}>
                <img src="images/nft/Group 1187.png" />
                <Link href="/unlockable/">
                    <a className={s.viewBundles}> VIEW BUNDLES </a>
                </Link>
            </div>
            <img src="images/nft/1.png" />
            <img src="images/nft/2.png" />
            <img src="images/nft/3.png" />
            <img src="images/nft/4.png" />
            <img src="images/nft/5.png" />
            <img src="images/nft/6.png" />
            <img src="images/nft/Group 1188.png" />
            <div className={s.videoItem}>
                <img src="images/nft/8.png" />
                <img src="images/nft/8.gif" className={s.gif} />
            </div>
        </Carousel>
    </div>
    )
};

export default NftBanners;