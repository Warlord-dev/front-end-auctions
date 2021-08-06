import React from 'react';
import styles from './page6768.module.scss';
import Link from 'next/link';

const Page6768 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='/magazine/4/images/6768_background1.png' />
      <img className={styles.image2} src='/magazine/4/images/6768_background2.png' />
      <img className={styles.image3} src='/magazine/4/images/6768_image1.png' />

      <div className={styles.text1}>
        Throughout the Metaverse        
      </div>
      <div className={styles.text2}>
        ABOVE THE CLOUDS. Inspired by the desire to travel and the feeling when you look out the window on a plane, a weightless chiffon dress with an angelic undertone.      
      </div>
      <Link href='https://www.instagram.com/lovetomorrow3d/'>
        <a target='_blank'>
          <div className={styles.text3}>
            Love, Tomorrow
          </div>
        </a>
      </Link>

      <div className={styles.text4}>
        Woodland. Meadow of romantic dresses. 
      </div>
    </div>
  );
};

export default Page6768;
