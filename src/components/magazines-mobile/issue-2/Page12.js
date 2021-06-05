import React from 'react'
import styles from './page12.module.scss'

const Page12 = () => {
  return (
    <div className={styles.wrapper}>
       <img src='./magazine/1/images/mobile/page1314-bg.png' className={styles.backImage1}/>
       <div className={styles.topSideFrame}></div>
        <div className={[styles.animationFrame, styles.topSideImageWrapper].join(' ')}>
          <img src="./magazine/1/images/mobile/howtogetintext.png" />
          <img src="./magazine/1/images/mobile/howtogetintext.png" />
          <img src="./magazine/1/images/mobile/howtogetintext.png" />
          <img src="./magazine/1/images/mobile/howtogetintext.png" /> 
        </div>
        <div className={styles.bottomSideFrame}></div>
        <div className={[styles.animationFrame, styles.bottomSideImageWrapper].join(' ')}>
          <img src="./magazine/1/images/mobile/howtogetintext.png" />
          <img src="./magazine/1/images/mobile/howtogetintext.png" />
          <img src="./magazine/1/images/mobile/howtogetintext.png" />
          <img src="./magazine/1/images/mobile/howtogetintext.png" />
        </div>
    
    </div>
  )
}

export default Page12