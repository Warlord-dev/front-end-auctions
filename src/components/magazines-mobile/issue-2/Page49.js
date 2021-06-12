import React from 'react'
import styles  from './page49.module.scss'
import Link from 'next/link';

const Page49 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/77_78/image1.png" className={styles.image1} />
      <div className={styles.image3}>     
      </div>
      <Link href="https://linktr.ee/_kenneth3ze_"><a>
          <p className={styles.text1}>Kenneth Eze</p>
        </a>
      </Link>
      <p className={styles.text2}>Art is such a broad concept. Everyone makes art for different reasons, however, I pour my feelings and thoughts into the pieces I make because it's the best way I can tell you how I feel.</p>
    </div>
  )
}

export default Page49