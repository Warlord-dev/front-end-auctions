import React from 'react';
import styles from './page9596.module.scss';
import Link from 'next/link';

const Page9596 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/95_96/left.png" className={styles.leftBack} />
      <img src="./magazine/2/images/95_96/right.png" className={styles.rightBack} />
      <Link href="https://twitter.com/BladeRunway"><a className={styles.text1}>
      BLADE RUNWAY
      </a>
      </Link>
      <p className={styles.text2}>
      Welcome to the Meta-Jungle
      </p>
      <div className={styles.text3}>
      Sheantoz Story
      </div>
      <p className={styles.text4}>
Sheantoz is an intergalactic alien singer from a distant future. She has an unique and powerful voice that can both fascinate  and enchant the audience with just a single song. She is originally from a planet called Saquarious, where her species has blue color skin and the ability to breath under water— her planet is 60% liquid water and 30% iced water. Only %10 of the planet is solid land, where the enemy species rules. 
<br/>
<br/>
Sheantoz was once captured by enemy forces for their own amusement, however, her voice was able to enchant the soldiers, allowing her to escape via space craft. 
<br/>
<br/>
Ever since, she has been roaming from one planet to the next, travelling across galaxies. She plans one day to also visit Earth, giving a concert to her fans and using her voice for the greater good. 
      </p>
      <Link href="https://www.instagram.com/burak.dahan/"><a className={styles.text5}>
      Burak Dahan
      </a>
      </Link>
    </div>
  );
};

export default Page9596;
