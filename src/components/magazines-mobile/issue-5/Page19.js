import React from 'react'
import styles from './page19.module.scss'

const Page19 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rect1}></div>
      <img src='/magazine/4/images/2122_image1_mobile.png' className={styles.image1}/>
      <img src='/magazine/4/images/2122_image2.png' className={styles.image2}/>
      <h1>
        RUG
        <span className={styles.impact1}>PULLS </span>
        <span className={styles.impact2}>&</span>
        <span className={styles.impact3}> SCAMS</span>
      </h1>
      <p className={styles.text2}>Incentivising inactive voters to get to quorum</p>
      <p className={styles.text3}>
        One of the most extraordinary features of decentralisation is the right and responsibility that anyone can have to influence the roadmap and direction of a protocol. However, is it asking too much?        
      </p>
      <p className={styles.text4}>
        Executing on Quorum.         
      </p>
    </div>
  )
}

export default Page19