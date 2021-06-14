import React from 'react'
import styles from './page94.module.scss'
import Link from 'next/link';

const Page94 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/125_126/image6.png" className={styles.image1} />
      <Link href="https://www.instagram.com/ava3ddesigners/"><a className={styles.text1}>
       AVA Designers
        </a>
       </Link>
       <video className={styles.image3} loop autoPlay>
        <source src="./magazine/1/125_126/video4.mp4" type="video/mp4" />
       </video>
       <video className={styles.image4} loop autoPlay>
        <source src="./magazine/1/125_126/video3.mp4" type="video/mp4" />
       </video>
       <video className={styles.image5} loop autoPlay>
        <source src="./magazine/1/125_126/video1.mp4" type="video/mp4" />
       </video>
    </div>
  )
}

export default Page94