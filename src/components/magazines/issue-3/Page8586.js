import React from 'react';
import styles from './page8586.module.scss';
import Link from 'next/link';

const Page8586 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}></div>
        <div className={styles.image2}></div>
        <img src="/magazine/3/images/85_86/image1.png" className={styles.image3}/>
        <div className={styles.image4}>
          <video className={styles.image5} muted loop autoPlay>
            <source src="./magazine/3/images/85_86/video1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.image6}></div>
        <Link href="https://github.com/XtraCube">
          <a target="_blank">
            <p className={styles.text1}>XTRACUBE</p> 
          </a>
        </Link>
        <img src="/magazine/3/images/85_86/image2.png" className={styles.image7}/>
        <div className={styles.image8}></div>
        <p className={styles.text2}>I've been modding since around November 2020</p>
        <p className={styles.text3}>and started because 1) I had an interest in programming | 2) I saw mods on youtube and wanted to make some myself. 
<br/><br/>
I'm not really sure where I want to go in terms of modding. I want to try keeping AOU alive, and I wouldn't mind making some more money off of mods if I ever get back into that.</p> 
      <p className={styles.text4}>Among Us Spectators Feature for Ghosts; Scan the Entire Crew</p>
      <p className={styles.text5}>THE COLOR SWAP</p>
      <p className={styles.text6}>COOLIO</p>
      <p className={styles.text7}>COOLIO</p>
      <p className={styles.text8}>COOLIO</p>
      <p className={styles.text9}>XTRACUBE Mod Featured by De Nogla!</p>
      <img src="/magazine/3/images/85_86/image3.gif" className={styles.image9}/>
      <img src="/magazine/3/images/85_86/image4.gif" className={styles.image15}/>
      <div className={styles.image10}>
        <video className={styles.image11} muted loop autoPlay>
          <source src="https://www.youtube.com/watch?v=wIwCeexQoxQ" type="video/mp4" />
        </video>
      </div>
      <div className={styles.image10}>
        <iframe width="496" height="236" src="https://www.youtube.com/embed/wIwCeexQoxQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      <img src="/magazine/3/images/85_86/image4.png" className={styles.image12}/>
      <img src="/magazine/3/images/85_86/image4.png" className={styles.image13}/>
      <img src="/magazine/3/images/85_86/image4.png" className={styles.image14}/>
    </div>
  );
};

export default Page8586;
