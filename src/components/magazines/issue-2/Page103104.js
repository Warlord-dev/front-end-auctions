import React from 'react';
import styles from './page103104.module.scss';
import Link from 'next/link';

const Page103104 = () => {
  return (
    <div className={styles.wrapper}>
       <img src="./magazine/1/103_104/image1.png" className={styles.image1} />
       <img src="./magazine/1/103_104/image2.png" className={styles.image2} />
       <img src="./magazine/1/103_104/image3.png" className={styles.image3} />
       <img src="./magazine/1/103_104/image4.png" className={styles.image4} />
       <img src="./magazine/1/103_104/image5.png" className={styles.image5} />
       <img src="./magazine/1/103_104/image6.png" className={styles.image6} />
       <img src="./magazine/1/103_104/image7.png" className={styles.image7} />
       <img src="./magazine/1/103_104/image8.png" className={styles.image8} />
       <img src="./magazine/1/103_104/image9.png" className={styles.image9} />
       <img src="./magazine/1/103_104/image10.png" className={styles.image10} />
       <p className={styles.text1}>Jelly</p>
       <p className={styles.text2}>Closely connected to the concept and definition of life— death is an eluctable fate that affects every living organism on Earth, condemned to cease biological functions and end existence. However, this fate escapes Turritopsis Nutricula; a hydrozoan with the extraordinary ability to regress to the polyp stage from the jellyfish stage. So, here we see an infinite cycle which has the potentiality to influence biological immortality. </p>
       <Link href="https://www.instagram.com/lnvvld/"><a className={styles.text3}>
       Luna Vivaldi
        </a>
       </Link>
       <p className={styles.text4}>Maria Pulido</p>
       <p className={styles.text5}>Poison Ivy</p>
       <p className={styles.text6}>She is a warrior and she is Nature, she is the sea and the forest. A kind and powerful soul fighting to keep the balance.  Sustainable fashion for a sustainable world. </p>
    </div>
  );
};

export default Page103104;
