import React from 'react'
import styles from './page105.module.scss'
import Link from 'next/link';

const Page105 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/113_114/image2.png" className={styles.image2} />
      <p className={styles.text3}>Model: Serah Reikka</p>
      <Link href="https://www.instagram.com/serahreikka/"><a className={styles.text4}>
       MIA LOCKLACE
        </a>
       </Link>
    </div>
  )
}

export default Page105