import React from 'react'
import styles from './page29.module.scss'

const Page29 = () => {
  return (
    <div className={styles.wrapper}>
      <video autoPlay muted loop>
        <source src="./magazine/1/videos/moshed-05-02-1-15-28.mp4" type="video/mp4" />
      </video>
      <img src="./magazine/1/images/Group 1180.png" className={styles.leftImage} />
      <img src="./magazine/1/images/Attachment_1620297307 1.png" className={styles.palaceImage} />
      <h2>I N D I A</h2>
      <h1>INTERNATIONAL PLAYERS</h1>
    </div>
  )
}

export default Page29