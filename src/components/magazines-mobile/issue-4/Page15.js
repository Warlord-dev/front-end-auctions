import React, { useRef, useState }  from 'react';
import styles from './page15.module.scss'
import Link from 'next/link';

const Page15 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/17_18/image1.png" className={styles.image1}/> 
      <div className={styles.image2}>
        <video className={styles.image3} muted loop autoPlay>
          <source src="./magazine/3/images/17_18/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.image4}>
        <video className={styles.image5} muted loop autoPlay>
          <source src="./magazine/3/images/17_18/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.image6}>
        <video className={styles.image7} muted loop autoPlay>
          <source src="./magazine/3/images/17_18/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <img src="/magazine/3/images/17_18/image2.png" className={styles.image8}/> 
      <img src="/magazine/3/images/17_18/image2.png" className={styles.image9}/> 
      <img src="/magazine/3/images/17_18/image2.png" className={styles.image10}/> 
      <p className={styles.text1}>The Intersection of NFTs and DeFi</p>
      <p className={styles.text2}>Peezy R.</p>
    </div>
  )
}

export default Page15