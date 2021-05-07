import React from 'react'
import styles from './coverpage.module.scss'

const CoverPage = () => {
  return (
    <div className={styles.wrapper}>
      <img src='/images/magazine/1/cover.jpg' width='960'/>
    </div>
  )
}

export default CoverPage