import React from 'react'
import styles from './page34.module.scss'

const Page34 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image2}></div>
      <div className={styles.image3}></div>
      <div className={styles.image4}></div>
      <div className={styles.image8}>
        <video className={styles.image9} muted loop autoPlay>
          <source src="./magazine/3/images/39_40/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <p className={styles.text1}>Hybrid Digital Physical NFT Fashion Collections. </p>  
      <p className={styles.text2}>With DeFi Functionality.</p>  
      <p className={styles.text3}>Designed by DIGITALAX and the Global Designer Network</p>  
      <p className={styles.text4}>DIGITALAX and the Global Designer Network DAO have partnered with top DeFi protocols creating hybrid digital-physical NFT fashion collections with DeFi functionality. Stake the NFTs for crypto yield. </p>  
    </div>
  )
}

export default Page34