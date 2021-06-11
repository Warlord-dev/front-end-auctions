    import React, { useRef, useState } from 'react';
import styles from './page6364.module.scss';
import Link from 'next/link';

const Page6364 = () => {

  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/63_64/image1.png" className={styles.image1} />
      <div className={styles.image2}></div>
      <div className={styles.image3}></div>
      <div className={styles.image4}></div>
      <img src="./magazine/1/63_64/image8.gif" className={styles.image11} />
      <img src="./magazine/1/63_64/image2.png" className={styles.image5} />
      <Link href="https://soundcloud.com/heapons/main-menu"><a>
      <img src="./magazine/1/63_64/image9.svg" className={styles.image12} />
      </a>
      </Link>
      <p className={styles.text1}>HEAPONS</p>
      <Link href="https://soundcloud.com/heapons/witch-encounter-see-me-now"><a>
      <img src="./magazine/1/63_64/image3.png" className={styles.image6} /> 
      </a>
      </Link>
      <Link href="https://soundcloud.com/heapons/sets/timmyturnersgranddad"><a>
      <img src="./magazine/1/63_64/image5.png" className={styles.image8} />
      </a>
      </Link>
      <Link href="https://soundcloud.com/heapons/the-finalities"><a>
      <img src="./magazine/1/63_64/image6.png" className={styles.image9} />
      </a>
      </Link>
      <Link href="https://soundcloud.com/heapons/sparta-tetris"><a>
      <img src="./magazine/1/63_64/image7.png" className={styles.image10} />
      </a>
      </Link>
      <p className={styles.text2}>Witch Encounter & See Me Now have the same tempo</p>
      <p className={styles.text3}>Witch Encounter & See Me Now have the same tempo</p>
      <p className={styles.text4}>Witch Encounter & See Me Now have the same tempo</p>
      <p className={styles.text5}>I mean, it's true, right?</p>
      <img src="./magazine/1/63_64/image4.png" className={styles.image7} />
      <p className={styles.text6}>Check Out More of Heapons Music + Music Mods here! </p>
      <p className={styles.text7}>Heapons started out with MIDISlaps (downloading midis from the internet and slapping soundfonts in them) before moving on to learn more about music theory. </p>
      <p className={styles.text8}>Why does Heapons do it? Because he enjoys making melody swaps. Just like how SiIvaGunner does it. </p>
    </div>
  );
};

export default Page6364;
