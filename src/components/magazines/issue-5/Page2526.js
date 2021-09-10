import React from 'react'
import MetamaskLogo from '@components/metamask-logo'
import styles from './page2526.module.scss'

const Page2526 = () => {
  return (
    <div className={styles.wrapper}>
      <img src='./magazine/5/images/2526_image2.png' className={styles.fox1} />
      <img src='./magazine/5/images/2526_image2.png' className={styles.fox2} />
      <img src='./magazine/5/images/2526_image2.png' className={styles.fox3} />
      <img src='./magazine/5/images/2526_image2.png' className={styles.fox4} />
      <img src='./magazine/5/images/2526_image2.png' className={styles.fox5} />
      <img src='./magazine/5/images/2526_image2.png' className={styles.fox6} />
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <img src='./magazine/5/images/2526_image1.png' className={styles.image1} />
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
      <MetamaskLogo className={styles.metaMask} />
    </div>
  )
}

export default Page2526
