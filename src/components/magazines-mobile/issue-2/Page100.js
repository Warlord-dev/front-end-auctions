import React from 'react'
import styles from './page100.module.scss'
import Link from 'next/link';

const Page100 = () => {
  return (
    <div className={styles.wrapper}>
      <video className={styles.image1} loop autoPlay>
        <source src="./magazine/1/131_132/video1.mp4" type="video/mp4" />
       </video>
       <p className={styles.text1}>Like A Statue</p>
       <p className={styles.text2}>IMPSSBL</p>
    </div>
  )
}

export default Page100