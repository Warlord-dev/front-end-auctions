import React from 'react'
import styles from './backcover.module.scss'

const Backcover = () => {
  return (
    <div className={styles.wrapper}>
      <img src='./magazine/6/images/backcover.jpg' className={styles.background} />
      <img src='./magazine/6/images/backcover_image1.png' className={styles.image1} />

      <div className={styles.text1}>
        DIGIFIZZY
      </div>
      <div className={styles.text2}>
        DIGIFIZZY
      </div>
      <div className={styles.text3}>
        DIGIFIZZY
      </div>
    </div>
  )
}

export default Backcover
