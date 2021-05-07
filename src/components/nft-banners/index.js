import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import s from "./index.module.scss";

const NftBanners = () => {
    return (
    <div className={s.bannerWrapper}>
        <Carousel showThumbs={false} showArrows={false} showStatus={false}>
            <img src="images/nft/1.png" />
            <img src="images/nft/2.png" />
            <img src="images/nft/3.png" />
            <img src="images/nft/4.png" />
            <img src="images/nft/5.png" />
            <img src="images/nft/6.png" />
            <div className={s.videoItem}>
                <img src="images/nft/8.png" />
                <img src="images/nft/8.gif" className={s.gif} />
            </div>
        </Carousel>
    </div>
    )
};

export default NftBanners;