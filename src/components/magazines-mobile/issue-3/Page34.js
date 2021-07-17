import React from 'react'
import styles from './page34.module.scss'
import Link from 'next/link';

const Page34 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image2}></div>
      <div className={styles.image3}></div>
      <div className={styles.image4}></div>
      <img src="/magazine/3/images/39_40/image29.png" className={styles.image8}/>  
      <p className={styles.text1}>Hybrid Digital Physical NFT Fashion Collections. </p>  
      <p className={styles.text2}>With DeFi Functionality.</p>  
      <p className={styles.text3}>Designed by DIGITALAX and the Global Designer Network</p>  
      <p className={styles.text4}>DIGITALAX and the Global Designer Network DAO have partnered with top DeFi protocols creating hybrid digital-physical NFT fashion collections with DeFi functionality. Stake the NFTs for crypto yield. </p>  
      <Link href="https://drip.digitalax.xyz/">
        <a target="_blank">
          <img src="/magazine/3/images/39_40/image28.png" className={styles.image26}/>  
        </a>
      </Link>
      <p className={styles.text5}>Using fashion to onboard millions into DeFi by directly serving their desires. </p>  
      <img src="/magazine/3/images/39_40/image27.png" className={styles.image32}/>  
    </div>
  )
}

export default Page34