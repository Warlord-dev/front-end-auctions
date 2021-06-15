import React from 'react';
import styles from './page99100.module.scss';
import Link from 'next/link';

const Page99100 = () => {
  return (
    <div className={styles.wrapper}>
       <div className={styles.leftBack}></div>
      <img src="./magazine/2/images/99_100/leftImg1.png" className={styles.left1} />
      <img src="./magazine/2/images/99_100/leftImg2.png" className={styles.left2} />
      <img src="./magazine/2/images/99_100/leftImg3.png" className={styles.left3} />
      <img src="./magazine/2/images/99_100/rightImg1.png" className={styles.right1} />
      <img src="./magazine/2/images/99_100/rightImg2.png" className={styles.right2} />
      <video className={styles.right3} muted loop autoPlay>
        <source src="./magazine/2/images/99_100/video1.mp4" type="video/mp4" />
       </video>
      <img src="./magazine/2/images/99_100/rightImg4.png" className={styles.right4} />
      <Link href="https://www.instagram.com/abigneonglitter/"><a className={styles.text1}>
      ABigNeonGlitter
      </a>
      </Link>
      <p className={styles.text2}>
      MERETRIXXX
      </p>
      <Link href="https://www.icakostika.com/"><a className={styles.text3}>
      ICA & KOSTIKA
      </a>
      </Link>
      <p className={styles.text4}>
      The Ctenophora Dress
      </p>
      <p className={styles.text5}>
      This dress is inspired by deep sea creatures called Ctenophora. Such beings belong to a phylum of invertebrate animals that live in marine waters worldwide. 
<br/><br/>
Their biolumniescent properties allow them to glow in the dark, bringing light to the deepest ends of our oceans. 
<br/><br/>
“Instead of fighting the darkness, you bring in the light.” A quote by Eckhart Tolle, reminding us of our deepest inner light of hope, love and infinite energy. 
<br/><br/>
The dress, headpiece and heels are all made from plastic waste, extracted from our oceans.
      </p>
    </div>
  );
};

export default Page99100;
