import React from 'react'
import styles from './page69.module.scss'
import Link from 'next/link';

const Page69 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftBack}></div> 
      <img src="./magazine/1/99_100/leftImg1.png" className={styles.left1} />
      <img src="./magazine/1/99_100/leftImg2.png" className={styles.left2} />
      <img src="./magazine/1/99_100/leftImg3.png" className={styles.left3} />
      <Link href="https://www.instagram.com/abigneonglitter/"><a className={styles.text1}>
      ABigNeonGlitter
      </a>
      </Link>
      <p className={styles.text2}>
      MERETRIXXX
      </p>
    </div>
  )
}

export default Page69