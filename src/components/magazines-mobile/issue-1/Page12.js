import React from 'react'
import styles from './page12.module.scss'

const Page12 = () => {
  return (
    <div className={styles.wrapper}>
       <img src='./magazine/1/images/mobile/page1314-bg.png' className={styles.backImage1}/>
      <div className={styles.topSideFrame}></div>
      <img src='./magazine/1/images/mobile/howtogetintext.png' className={styles.topTextImage}/>
      <div className={styles.bottomSideFrame}></div>
      <img src='./magazine/1/images/mobile/howtogetintext.png' className={styles.bottomTextImage}/>
    
    </div>
  )
}

export default Page12