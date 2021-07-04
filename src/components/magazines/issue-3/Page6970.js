import React from 'react';
import styles from './page6970.module.scss';
import Link from 'next/link';

const Page6970 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <video className={styles.image2} muted loop autoPlay>
          <source src="./magazine/3/images/69_70/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <Link href="https://www.instagram.com/hugorichel/">
        <a target="_blank">
        <p className={styles.text1}>Hugo Richel</p> 
        </a>
      </Link>
      <p className={styles.text2}>SUTAN FILTER</p> 
      <img src="/magazine/3/images/69_70/image1.png" className={styles.image3}/> 
      <p className={styles.text3}> Blue Averan</p> 
      <p className={styles.text4}>
I’m Tiago Filipe (or James Phillip). I’m a self taught  3D artist living in Portugal. I love fashion, but I don’t have any background in it.
 <br/><br/>
I discovered DazStudio in 2018 and, since I didn’t own many assets, I decided to learn how to create 3D clothes to use in my characters when creating art. I've learnt Marvelous Designer and Autodesk Maya to create 3D Outfits for DazStudio.
<br/><br/>
Now I'm a PA (Published Artist) at Renderosity always looking to improve my store with new outfits. I look for inspiration in the web in sites like Pinterest and sometimes i try to recreate designs from known Fashion Designers like Dior, Versace or Alexander McQueen</p> 
      <Link href="https://www.instagram.com/tiago.filipe.silva/?hl=en">
        <a target="_blank">
        <p className={styles.text5}>Tiago Filipe</p>  
        </a>
      </Link>
    </div>
  );
};

export default Page6970;
