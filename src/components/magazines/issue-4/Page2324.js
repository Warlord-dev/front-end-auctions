import React from 'react'
import styles from './page2324.module.scss'


const Page2324 = () => {
  return (
    <div className={styles.wrapper}>
      <video autoPlay muted loop className={styles.backVideo}>
        <source src="./magazine/4/videos/2324_background.mp4" />
      </video>
      <div className={styles.text10}>SUSTAINABILITY PIONEERS</div>
      <img src="./magazine/2/images/31_32_image.png" className={styles.image1} />
      <div className={styles.middleLine1} />
      <div className={styles.middleLine2} />
    </div>
  )
}

export default Page2324
