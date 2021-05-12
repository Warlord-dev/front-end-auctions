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
      <div className={styles.animationForm}>
        <div className={styles.node}>
          {items.map((item, index) => <div className={styles.bottomItem} key={index} style={{color: borderWhite ? 'white' : 'black'}}>{item}</div>)}
        </div>
        <div className={styles.node}>
          {items.map((item, index) => <div className={styles.bottomItem} key={index} style={{color: borderWhite ? 'white' : 'black'}}>{item}</div>)}
        </div>
        <div className={styles.node}>
          {items.map((item, index) => <div className={styles.bottomItem} key={index} style={{color: borderWhite ? 'white' : 'black'}}>{item}</div>)}
        </div>
        <div className={styles.node}>
          {items.map((item, index) => <div className={styles.bottomItem} key={index} style={{color: borderWhite ? 'white' : 'black'}}>{item}</div>)}
        </div>
      </div>
    </div>
  );
};

export default BottomLine;
