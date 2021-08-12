import React from 'react'
import styles from './page35.module.scss'

const Page35 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='./magazine/4/images/3940_image3.png' />
      <video autoPlay muted loop className={styles.video1} >
        <source src='./magazine/4/videos/3940_video1.mp4' type='video/mp4' />
      </video>
      <img className={styles.image2} src='./magazine/4/images/3940_image2_mobile.png' />
    </div>
  )
}

export default Page35