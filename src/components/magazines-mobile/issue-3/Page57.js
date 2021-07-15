import React, { useRef, useState } from 'react'
import styles from './page57.module.scss'
import Link from 'next/link';

const Page57 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <video className={styles.image2} muted loop autoPlay>
          <source src="./magazine/3/images/65_66/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <Link href="https://www.instagram.com/howiseedatworld/?hl=en">
        <a target="_blank">
          <p className={styles.text1}>Hellion</p>   
        </a>
      </Link>
      <p className={styles.text2}>howiseedatworld</p>  
    </div>
  )
}

export default Page57