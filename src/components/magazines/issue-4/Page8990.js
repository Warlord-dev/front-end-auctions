import React, { useRef, useState } from 'react'
import Link from 'next/link'
import styles from './page8990.module.scss'

const Page8990 = () => {
  return (
    <div className={styles.wrapper}>
      <img src='/magazine/4/images/8990_background1.png' className={styles.back1} />

      <video autoPlay muted loop className={styles.video1}>
        <source src='/magazine/4/videos/8990_video1.mp4' type='video/mp4' />
      </video>

      <img src='/magazine/4/images/8990_image1.png' className={styles.image1} />
      <img src='/magazine/4/images/8990_image2.png' className={styles.image2} />
      <img src='/magazine/4/images/8990_image3.gif' className={styles.image3} />
      <Link href='https://mirror.xyz/'>
        <a target='_blank'>
          <div className={styles.text1}>
            MIRROR.XYZ        
          </div>
        </a>
      </Link>
      <div className={styles.text2}>
        Decentralising publishing
      </div>
      <div className={styles.text3}>
        $write
      </div>
      <div className={styles.text4}>
        $write
      </div>
      <div className={styles.text5}>
        write
      </div>
      <div className={styles.text6}>
        write
      </div>
      <div className={styles.text7}>
        $write
      </div>
      <div className={styles.text8}>
        $write
      </div>
      <div className={styles.text9}>
        $write
      </div>
      <div className={styles.text10}>
        $write
      </div>

      <div className={styles.circle1}></div>
      <div className={styles.text11}>
        Listen in
      </div>
      <div className={styles.text12}>
        STRAWBERRY SITH
      </div>
      <div className={styles.text13}>
        Virtual commerce
      </div>
      <Link href='https://twitter.com/StrawberrySith'>
        <a target='_blank'>
          <img src='/magazine/4/images/8990_image4.png' className={styles.image4} />
        </a>
      </Link>
    </div>
  )
}

export default Page8990
