import React from 'react'
import styles from './page53.module.scss'
import Link from 'next/link';

const Page53 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/81_82/image2.png" className={styles.image1} />
      <p className={styles.text2}>Hedging Against Precarity</p>
      <p className={styles.text3}>F. Check</p>
      <Link href="https://www.instagram.com/robottostudio/"><a>
          <p className={styles.text4}>Art by Robotto Studio</p>
        </a>
      </Link>
    </div>
  )
}

export default Page53