import NewButton from '@components/buttons/newbutton';
import React from 'react';
import styles from './styles.module.scss';

const ImageCard = ({ libon = 0, data }) => {
  const libons = [
    './images/metaverse/exc-libon.png',
    './images/metaverse/semi-libon.png',
    './images/metaverse/common-libon.png',
  ];

  return (
    <>
      <div className={styles.wrapper}>
        {libon ? <img src={libons[libon - 1]} className={styles.libon} /> : null}
        <video autoPlay muted loop className={styles.video}>
          <source
            src="https://digitalax.mypinata.cloud/ipfs/QmTfYwLRhqpYBaSoFFGKUJcYU6XSbHpsQvRen2dWQZ8WKH"
            type="video/mp4"
          />
        </video>
        <div className={styles.buyNow}>
          <NewButton text="Buy Now" />
        </div>
      </div>
    </>
  );
};

export default ImageCard;
