import React from 'react'
import styles from './page108.module.scss'
import Link from 'next/link';

const Page108 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/117_118/image1.png" className={styles.image1} />
      <Link href="https://www.instagram.com/cryptsie/"><a className={styles.text1}>
       Cryptsie Art
        </a>
       </Link>
       <p className={styles.text2}>Space Adventures</p>
    </div>
  )
}

export default Page108