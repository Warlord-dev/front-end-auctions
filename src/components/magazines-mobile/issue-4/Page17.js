import React from 'react'
import styles from './page17.module.scss'

const Page17 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topSideFrame}></div>
      <img src='/magazine/4/images/1920_image1_mobile.png' className={styles.image1}/>
      <img src='/magazine/4/images/1920_image2_mobile.png' className={styles.image2}/>
      <img className={styles.image5} src='/magazine/4/images/1920_image4_mobile.png' />
      <img src='/magazine/4/images/1920_image2_mobile.png' className={styles.image3}/>
      <img src='/magazine/4/images/1920_image3_mobile.png' className={styles.image4}/>
      

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
      <div className={styles.text1}>
        Pinata Cloud        
      </div>
    </div>
  )
}

export default Page17