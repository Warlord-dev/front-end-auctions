import React from 'react'
import styles from './page72.module.scss'
import Link from 'next/link';

const Page72 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/77_78/image3.png" className={styles.image2} />
      <Link href="https://www.instagram.com/serahreikka/"><a>
          <p className={styles.text3}>Serah reikka</p>
        </a>
      </Link>
      <p className={styles.text4}>MIA LOCKLACE</p>
      <p className={styles.text5}>Mia is a CG Artist and the manager of Serah Reikka. Serah (Fei) Reikka is a French Canadian virtual influencer & model. She is know for her role as Serah Alec in the short animated movie Beyond Polaris and had the privilege of modeling at the prestigious Russian Fashion Week last year with Mercedes-Benz. Serah has also been featured on Forbes Magazine as one of the 12 most famous virtual influencer in the world for 2020.
Serah has a weekly vlog; covering everything about her way of life as an Artificial Intelligence virtual model navigating the real world.</p>
    </div>
  )
}

export default Page72