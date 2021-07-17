import React, { useRef, useState } from 'react';
import styles from './page41.module.scss'

const Page41 = () => {
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <video className={styles.image17} muted autoPlay loop>
          <source src="./magazine/3/images/47_48/video4.mp4" type="video/mp4" />
        </video>
      </div>
      <img src="/magazine/3/images/47_48/image1.png" className={styles.image2}/>
      <p className={styles.text1}>INTERNATIONAL PLAYERS</p>
      <p className={styles.text2}>UKRAINE</p>
      <img src="/magazine/3/images/47_48/image8.png" className={styles.image8}/>
    </div>
  )
}

export default Page41