import React from 'react'
import styles from './backcover.module.scss'

const Backcover = () => {
  return (
    <div className={styles.wrapper}>
      <img src='./magazine/5/images/backcover.jpg' className={styles.background} />
    </div>
  )
}

export default Backcover
