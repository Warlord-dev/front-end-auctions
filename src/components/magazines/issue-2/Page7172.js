import React from 'react';
import styles from './page7172.module.scss';
import Link from 'next/link';

const Page7172 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/71_72/image1.png" className={styles.image1} />
      <img src="./magazine/1/71_72/image2.png" className={styles.image2} />
      <img src="./magazine/1/71_72/image3.png" className={styles.image3} />
      <p className={styles.text1}>Throughout the Metaverse</p>
      <p className={styles.text2}><Link href="https://www.elijahthurstonportfolio.com/"><a className={styles.text3}>Elijah Thurston </a></Link> is a 3D Render Artist based in Vermont. He has worked with DAZ Studio for over eight years and focuses on creating high fashion 3d renders.</p>
      <p className={styles.text4}>REFLECTION BLISS</p>
      <p className={styles.text5}><Link href="https://linktr.ee/soulyasa"><a className={styles.text6}>Soulyasa (Tirtayasa)</a></Link> is a freelance 3D artist and motion designer based in Indonesia. Soulyasa is currently focusing on their “Everyday Project”, since April 2020— pushing their creative bounds everyday. </p>
    </div>
  );
};

export default Page7172;
