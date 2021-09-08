import React, { useState, useRef } from 'react'
import styles from './page1516.module.scss'

const Page1516 = () => {
  return (
    <div className={styles.wrapper}>
      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/5/videos/1516_video1.mp4' type='video/mp4' />
      </video>
    </div>
  )
}

export default Page1516
