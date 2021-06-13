import React from 'react'
import styles from './page63.module.scss'
import cn from 'classnames';

const Page63 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/93_94/image1.png" className={styles.leftBack} />
      <div className={cn(styles.text, styles.text1)}>
      WHAT ARE YOU WEARING?
      </div>
      <div className={cn(styles.text, styles.text2)}>
      WHAT ARE YOU WEARING?
      </div>
      <div className={cn(styles.text, styles.text3)}>
      WHAT ARE YOU WEARING?
      </div>
      <div className={cn(styles.text, styles.text4)}>
      WHAT ARE YOU WEARING?
      </div>
      <div className={cn(styles.text, styles.text5)}>
      WHAT ARE YOU WEARING?
      </div>
      <div className={styles.text6}>
      FASHION FOR THE METAVERSE
      </div>
    </div>
  )
}

export default Page63