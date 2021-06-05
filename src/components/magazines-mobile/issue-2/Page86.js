import React from 'react'
import styles from './page86.module.scss'

const Page86 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/images/mobile/page86-bg.png" className={styles.backImage} />
      <div className={styles.innerWrapper}>
        <h1>Unlock More Hidden Content! </h1>
        <p>All holders of our unlockable NFT content will receive access to additional dynamic hidden content and NFT airdrops! This content changes and is added to overtime throughout the month; new updates, insights, creative works. </p>
        <div className={styles.flexCenter}>
          <a href="#">Unlock</a>
        </div>
      </div>
    </div>
  )
}

export default Page86