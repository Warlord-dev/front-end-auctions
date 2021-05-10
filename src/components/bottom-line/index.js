import React from 'react';
import cn from 'classnames';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './styles.module.scss';

const BottomLine = ({borderWhite = true}) => {
  const items = [
    'UNLOCKABLE NFT BUNDLES',
    'FIRST MAGAZINE FOR THE METAVERSE',
    'FASHION, GAMING, ART, CRYPTO, NFTs, WEB3 ',
    'BRIDGING DIGI-PHYSICAL',
  ];

  return (
    <div className={styles.bottomLine} style={{borderColor: borderWhite ? 'white' : 'black'}}>
      <Carousel centerMode centerSlidePercentage={30} autoPlay showThumbs={false} showArrows={false} showStatus={false} showIndicators={false} infiniteLoop>
        {items.map((item, index) => <div className={styles.bottomItem} key={index}>{item}</div>)}
      </Carousel>
    </div>
  );
};

export default BottomLine;
