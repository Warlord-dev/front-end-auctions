import Link from 'next/link';
import React from 'react';
import styles from './page7576.module.scss';

const Page7576 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/75_76/image1.png" className={styles.image1} />
      <img src="./magazine/1/75_76/image2.png" className={styles.image2} />
      <div className={styles.image3}>     
      </div>
      <Link href="https://linktr.ee/_kenneth3ze_"><a>
          <p className={styles.text1}>Kenneth Eze</p>
        </a>
      </Link>
      <p className={styles.text2}>Art is such a broad concept. Everyone makes art for different reasons, however, I pour my feelings and thoughts into the pieces I make because it's the best way I can tell you how I feel.</p>
      <Link href="https://www.instagram.com/serahreikka/"><a>
          <p className={styles.text3}>Serah reikka</p>
        </a>
      </Link>
      <p className={styles.text4}>MIA LOCKLACE</p>
      <p className={styles.text5}>Mia is a CG Artist and the manager of Serah Reikka. Serah (Fei) Reikka is a French Canadian virtual influencer & model. She is know for her role as Serah Alec in the short animated movie Beyond Polaris and had the privilege of modeling at the prestigious Russian Fashion Week last year with Mercedes-Benz. Serah has also been featured on Forbes Magazine as one of the 12 most famous virtual influencer in the world for 2020.
Serah has a weekly vlog; covering everything about her way of life as an Artificial Intelligence virtual model navigating the real world.</p>
    </div>
  );
};

export default Page7576;
