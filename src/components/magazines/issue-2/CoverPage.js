import React from 'react';
import styles from './coverpage.module.scss';

const CoverPage = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/2/images/home.png" width="960" />
      <div className={styles.deco}>
        DECO <br /> <br /> ONLY <br />
        <br /> FANS
      </div>
      <div className={styles.aimusic}>
        A I <br /> <br /> M U S I C
      </div>
      <div className={styles.en}>9EN</div>
      <div className={styles.text1}>
        Hedging
        <br /> Against
        <br /> Precarity
      </div>
      <div className={styles.text2}>
        Fauna
        <br /> dxDAO
        <br /> Flamingo
        <br /> Heapons
        <br /> Somnium Space
        <br /> Catalog
      </div>
      <div className={styles.text3}>How Soon Are DAOs? A primer on decentralized governance.</div>
      <div className={styles.text4}>OPEN SOURCED</div>
      <div className={styles.text5}>GLOBAL DESIGNER NETWORK</div>
      <div className={styles.text6}>D I G I F I Z Z Y</div>
      <div className={styles.text7}>D I G I F I Z Z Y</div>
      <div className={styles.text8}>D I G I F I Z Z Y</div>
      <div className={styles.text9}>Issue Two</div>
      <div className={styles.text10}>Issue Two</div>
      <div className={styles.text11}>The Open Commons & the Decentralised Aux</div>
    </div>
  );
};

export default CoverPage;
