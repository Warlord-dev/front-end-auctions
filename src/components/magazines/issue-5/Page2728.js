import React  from 'react'
import styles from './page2728.module.scss'

const Page2728 = () => {
  return (
    <div className={styles.wrapper}>
      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/5/videos/2728_video1.mp4' type='video/mp4' />
      </video>
      <h1>SUSTAINABILITY PIONEERS</h1>
      <img src='./magazine/2/images/31_32_image.png' className={styles.image1} />
      <div className={styles.middleLine1} />
      <div className={styles.middleLine2} />
    </div>
  )
}

export default Page2728
