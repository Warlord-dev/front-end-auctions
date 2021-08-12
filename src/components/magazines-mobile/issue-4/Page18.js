import React from 'react'
import styles from './page18.module.scss'

const Page18 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topSideFrame}></div>
      <img src='/magazine/4/images/1920_image1_mobile.png' className={styles.image1}/>
      <img src='/magazine/4/images/1920_image2_mobile.png' className={styles.image2}/>
      <img src='/magazine/4/images/1920_image2_mobile.png' className={styles.image3}/>

      <div className={[styles.animationFrame, styles.topSideImageWrapper].join(' ')}>
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
        <img src='./magazine/1/images/mobile/howtogetintext.png' /> 
      </div>
      <div className={styles.bottomSideFrame}></div>
      <div className={[styles.animationFrame, styles.bottomSideImageWrapper].join(' ')}>
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
      </div>
    </div>
  )
}

export default Page18