import React from 'react';
import styles from './page9596.module.scss';
import Link from 'next/link';

const Page9596 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/95_96/left.png" className={styles.leftBack} />
      <img src="./magazine/1/95_96/right.png" className={styles.rightBack} />
      <img src="./magazine/1/95_96/right-top.png" className={styles.rightTop} />
      <video autoPlay muted loop className={styles.leftBottom}>
        <source src="./magazine/1/95_96/Automata-Turntable.mp4" type="video/mp4" />
      </video>
      <Link href="https://twitter.com/rudeoolph"><a className={styles.text1}>
      Rudeolph
      </a>
      </Link>
      <p className={styles.text2}>
      Automata
      </p>
      <div className={styles.text3}>
      Lost in Space
      </div>
      <Link href="https://www.instagram.com/yekaterinab/"><a className={styles.text4}>
      YeKaterina Burmatnova
      </a>
      </Link>
    </div>
  );
};

export default Page9596;
