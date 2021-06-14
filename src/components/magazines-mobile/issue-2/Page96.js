import React from 'react'
import styles from './page96.module.scss'
import Link from 'next/link';

const Page96 = () => {
  return (
    <div className={styles.wrapper}>
      <video className={styles.image1} loop autoPlay>
        <source src="./magazine/1/127_128/video1.mp4" type="video/mp4" />
       </video>
       <Link href="www.luciidigital.com"><a className={styles.text1}>
       LUCII
        </a>
       </Link>
    </div>
  )
}

export default Page96