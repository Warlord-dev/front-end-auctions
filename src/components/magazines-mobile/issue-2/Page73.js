import React from 'react'
import styles from './page73.module.scss'
import Link from 'next/link';

const Page73 = () => {
  return (
    <div className={styles.wrapper}>
      <video className={styles.image1} muted loop autoPlay>
        <source src="./magazine/2/images/79_80/video1.mp4" type="video/mp4" />
       </video>
      <p className={styles.text1}><Link href="https://www.instagram.com/aaaronkaufman/"><a className={styles.text2}>Aaron Kaufman</a></Link> is a multidisciplinary graphic artist currently living and working in Montreal, Canada. With a background in traditional arts, Aaron applies his artistic vision to contemporary mediums and creates visually striking work. His work has been part of award winning campaigns, gallery exhibits worldwide, and concerts for major acts. He enjoys exploring juxtapositions between forms, colors, patterns, environments and ideas to create dynamic and thought-provoking imagery.</p>
    </div>
  )
}

export default Page73