import React from 'react'
import styles  from './page47.module.scss'

const Page47 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='/magazine/4/images/5354_image1_mobile.png' />
      <img className={styles.image2} src='/magazine/4/images/5354_image3_mobile.png' />

      <video autoPlay muted loop className={styles.video1}>
        <source src='/magazine/1/videos/moshed-05-02-1-15-28.mp4' type='video/mp4' />
      </video>

      <div className={styles.text1}>
        INTERNATIONAL PLAYERS
      </div>
      <div className={styles.text2}>
        PHILIPPINES
      </div>
    </div>
  )
}

export default Page47