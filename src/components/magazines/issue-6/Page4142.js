import React from 'react';
import Link from 'next/link';
import styles from './page4142.module.scss';

const Page4142 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/6/images/41_42_back.jpg" className={styles.back} />
      <img src="/magazine/6/images/41_42_image1.png" className={styles.image1} />
      <div className={styles.text1}>Throughout the Metaverse</div>
      <div className={styles.text2}> #realparent </div>
      <a href="https://www.instagram.com/realparent.co/" target="_blank">
        <div className={styles.link1}>REAL</div>
      </a>
      <a href="https://twitter.com/thedholesmotion" target="_blank">
        <div className={styles.link2}>Thedholes</div>
      </a>
      <div className={styles.text3}>
        3D Artist known for its glossy pink eyes, music videos, and brand collaborations. Sensual,
        romantic and vaporwave vibes combined with fashion and surrealism.
      </div>
    </div>
  );
};

export default Page4142;
