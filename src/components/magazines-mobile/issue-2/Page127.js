import React from 'react'
import styles from './page127.module.scss'
import Link from 'next/link';

const Page127 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/135_136/image2.png" className={styles.image2} />
      <div className={styles.image3}>
        <p className={styles.text6}>Unlock More Hidden Content! </p>
        <p className={styles.text7}>All holders of our unlockable NFT content will receive access to additional dynamic hidden content and NFT airdrops! This content changes and is added to overtime throughout the month; new updates, insights, creative works. </p>
        <div className={styles.image4}>
        <img src="./magazine/1/135_136/image3.png" className={styles.image5}/>
        <p className={styles.text8}>Unlock</p>
        </div>
      </div>
    </div>
  )
}

export default Page127