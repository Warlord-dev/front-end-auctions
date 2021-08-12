import React, { useRef, useState }  from 'react'
import styles from './page14.module.scss'
import Link from 'next/link'

const Page14 = () => {
  return (
    <div className={styles.wrapper}> 
      <img className={styles.image1} src='./magazine/4/images/1516_image2_mobile.png' />
      <img className={styles.image2} src='./magazine/4/images/1516_image4.png' />
      <img className={styles.image3} src='./magazine/4/images/1516_image4.png' />
      <img className={styles.image4} src='./magazine/4/images/1516_image4.png' />
      <img className={styles.image5} src='./magazine/4/images/1516_image4.png' />
      <img className={styles.image6} src='./magazine/4/images/1516_image4.png' />
      <img className={styles.image7} src='./magazine/4/images/1516_image4.png' />
      <img className={styles.image8} src='./magazine/4/images/1516_image4.png' />
      <img className={styles.image9} src='./magazine/4/images/1516_image3_mobile.png' />
    </div>
  )
}

export default Page14