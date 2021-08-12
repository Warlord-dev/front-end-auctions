import React, { useRef, useState } from 'react'
import styles from './page22.module.scss'

const Page22 = () => {
  return (
    <div className={styles.wrapper}>
      <video autoPlay muted loop className={styles.video1}>
        <source src={`./magazine/4/videos/2324_background.mp4`} type='video/mp4' />
      </video>
      <img src='./magazine/2/images/31_32_image.png' className={styles.image1} />
      <div className={styles.line1}></div>
    </div>
  )
}

export default Page22