import React from 'react';
import styles from './styles.module.scss';

const PriceCard = ({ mode = 0, mainText, subText }) => {
  const images = [
    '',
    './images/metaverse/gray_button3.png',
    './images/metaverse/yellow_price_card.png'
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainWrapper}>
        {
          images[mode] !== '' &&
          <img src={images[mode]} className={styles.backImage} />
        }
        <div className={styles.mainText}>
          <p style={{color: mode ? 'black' : 'white'}}> {mainText} </p>
        </div>
      </div>
      {subText ? <p className={styles.subText}> {subText} </p> : null}
    </div>
  );
};

export default PriceCard;
