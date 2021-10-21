import React from 'react';
import styles from './page4344.module.scss';

const Page4344 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/6/images/43_44_back.jpg" className={styles.back} />
      <a href="https://www.instagram.com/realparent.co/" target="_blank">
        <div className={styles.link1}>REAL</div>
      </a>
      <a href="instagram.com/jeanbaptiste.gaeng/" target="_blank">
        <div className={styles.link2}>Jean-Baptiste Gaeng</div>
      </a>
      <div className={styles.text1}>
        Jean-Baptiste Gaeng is a freelance 3D & VFX artist from Paris. He is a 100% self-taught
        artist interested in a wide range of CG fields, from the creation of ultra-realistic
        characters to abstract spatial simulations and the creation of large-scale environments. His
        tools of choice are Zbrush, Maya and Houdini.
        <br />
        <br />
        In his spare time you might find him reading a good book at the park, or eating a delicious
        burger on one of the many Parisian terraces.
        <br />
        <br />
        You can also find his NFTs on Makersplace{' '}
        <a href="https://makersplace.com/jeanbaptistegaeng/" target="_blank">
          here.
        </a>
      </div>
    </div>
  );
};

export default Page4344;
