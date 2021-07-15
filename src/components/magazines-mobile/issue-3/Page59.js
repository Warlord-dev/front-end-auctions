import React from 'react'
import styles from './page59.module.scss'
import Link from 'next/link';

const Page59 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <video className={styles.image2} muted loop autoPlay>
          <source src="./magazine/3/images/67_68/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <Link href="https://www.instagram.com/hugorichel/">
        <a target="_blank">
        <p className={styles.text1}>Hugo Richel</p> 
        </a>
      </Link>
      <p className={styles.text2}>SUTAN FILTER</p> 
    </div>
  )
}

export default Page59