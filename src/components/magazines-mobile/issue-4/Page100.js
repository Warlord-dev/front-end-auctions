import React from 'react'
import styles from './page100.module.scss'

const Page100 = () => {
  return (
    <div className={styles.wrapper}>
      <video autoPlay muted loop className={styles.video1}>
        <source src='/magazine/4/videos/107108_video1.mp4' type='video/mp4' />
      </video>
    </div>
  )
}

export default Page100