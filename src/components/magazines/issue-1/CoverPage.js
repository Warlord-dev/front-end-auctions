import React from 'react'
import styles from './coverpage.module.scss'

const CoverPage = () => {
  return (
    <div className={styles.wrapper}>
      <img src='/magazine/1/images/cover.png' width='960'/>
    </div>
  )
}

export default CoverPage