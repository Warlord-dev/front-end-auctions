import React from 'react'
import styles from './page27.module.scss'

const Page27 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blackBack}></div>
      <video autoPlay muted loop >
        <source src='./magazine/1/videos/moshed-05-02-1-15-28.mp4' type="video/mp4" />
      </video>
      <img src='./magazine/1/images/Group 1180.png' className={styles.leftImage} />
      <img src='./magazine/1/images/moshed-05-02-10-1-44 1.png' className={styles.rightImage} />
      <img src='./magazine/1/images/Attachment_1620297307 1.png' className={styles.palaceImage} />
      
    </div>
  )
}

export default Page27