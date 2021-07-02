import React from 'react';
import styles from './styles.module.scss';

const PriceCard = ({ mode = 0, mainText, subText }) => {
  const images = [
    './images/metaverse/red_price_card.png',
    './images/metaverse/yellow_price_card.png'
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainWrapper}>
        <img src={images[mode]} className={styles.backImage} />
        <div className={styles.mainText}>
          <p> {mainText} </p>
        </div>
      </div>
      {subText ? <p className={styles.subText}> {subText} </p> : null}
    </div>
  );
};

export default PriceCard;
