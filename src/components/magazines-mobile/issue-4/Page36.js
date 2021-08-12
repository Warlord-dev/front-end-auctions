import React from 'react'
import styles from './page36.module.scss'

const Page36 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='./magazine/4/images/4142_image1.png' />
      <img className={styles.image2} src='./magazine/4/images/4142_image3.png' />
      <img className={styles.image3} src='./magazine/4/images/4142_image3.png' />
      <img className={styles.image4} src='./magazine/4/images/4142_image3.png' />
      <video autoPlay muted loop className={styles.video1} >
        <source src='./magazine/4/videos/4142_video1.mp4' type='video/mp4' />
      </video>
    </div>
  )
}

export default Page36