import React from 'react'
import styles from './page95.module.scss'
import Link from 'next/link';

const Page95 = () => {
  return (
    <div className={styles.wrapper}>
      <video className={styles.image1} loop autoPlay>
        <source src="./magazine/1/125_126/video2.mp4" type="video/mp4" />
       </video>
       <Link href="http://joannahir.com/"><a className={styles.text2}>
       JOANNA HIR
        </a>
       </Link>
    </div>
  )
}

export default Page95