import React from 'react'
import styles from './page1920.module.scss'

const Page1920 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSideFrame}></div>
      <div className={[styles.animationFrame, styles.leftSideImageWrapper].join(' ')}>
        <img src='./magazine/1/images/howtogetintext 2.png' />
        <img src='./magazine/1/images/howtogetintext 2.png' />
        <img src='./magazine/1/images/howtogetintext 2.png' />
        <img src='./magazine/1/images/howtogetintext 2.png' />
      </div>
      <div className={styles.rightSideFrame}></div>
      <div className={[styles.animationFrame, styles.rightSideImageWrapper].join(' ')}>
        <img src='./magazine/1/images/howtogetintext 1.png' />
        <img src='./magazine/1/images/howtogetintext 1.png' />
        <img src='./magazine/1/images/howtogetintext 1.png' />
        <img src='./magazine/1/images/howtogetintext 1.png' />
      </div>
      <img src='/magazine/4/images/1920_image1.png' className={styles.image1}/>
      <div className={styles.text1}>Pinata Cloud</div>
    </div>
  )
}

export default Page1920
