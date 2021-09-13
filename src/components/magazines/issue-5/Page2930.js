import React from 'react'
import Link from 'next/link'
import styles from './page2930.module.scss'

const Page2930 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rect1}></div>
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
      <div className={styles.line3}></div>
      <div className={styles.line4}></div>
      <div className={styles.line5}></div>
      <div className={styles.line6}></div>
      <div className={styles.line7}></div>

      <img src='./magazine/5/images/2930_image5.png' className={styles.path1} />
      <img src='./magazine/5/images/2930_image5.png' className={styles.path2} />

      <div className={styles.circle1}></div>

      <Link href='https://www.hicetnunc.xyz/objkt/260507'>
        <a target='_blank'>
          <video autoPlay muted loop className={styles.video1}>
            <source src='./magazine/5/videos/2930_video1.mp4' type='video/mp4' />
          </video>
        </a>
      </Link>
      <Link href='https://www.hicetnunc.xyz/objkt/260556'>
        <a target='_blank'>
          <video autoPlay muted loop className={styles.video2}>
            <source src='./magazine/5/videos/2930_video2.mp4' type='video/mp4' />
          </video>
      </a>
      </Link>
      <Link href='https://superrare.com/kozachok'>
        <a target='_blank'>
          <img src='./magazine/5/images/2930_image1.png' className={styles.image1} />
        </a>
      </Link>
      
      <Link href='https://www.hicetnunc.xyz/objkt/260572'>
        <a target='_blank'>
          <img src='./magazine/5/images/2930_image2.gif' className={styles.image2} />
        </a>
      </Link>

      <Link href='https://superrare.com/artwork-v2/god-of-secret-mountain-23459'>
        <a target='_blank'>
        <img src='./magazine/5/images/2930_image3.png' className={styles.image3} />
        </a>
      </Link>
      <Link href='https://foundation.app/@riniifish/bug-s-funeral-m7-planet-80018'>
        <a target='_blank'>
          <img src='./magazine/5/images/2930_image4.png' className={styles.image4} />
        </a>
      </Link>
    </div>
  )
}

export default Page2930
