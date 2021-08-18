import React from 'react'
import Link from 'next/link'
import styles  from './page45.module.scss'

const Page45 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='/magazine/4/images/5152_background1_mobile.png' />
      <img className={styles.image2} src='/magazine/4/images/5152_zero.png' />
      <img className={styles.image3} src='/magazine/4/images/5152_zero.png' />
      <img className={styles.image4} src='/magazine/4/images/5152_zero.png' />
      <img className={styles.image5} src='/magazine/4/images/5152_zero.png' />
      <img className={styles.image6} src='/magazine/4/images/5152_zero.png' />
      <img className={styles.image7} src='/magazine/4/images/5152_zero.png' />
      <Link href='https://www.originprotocol.com/en'>
        <a target='_blank'>
          <div className={styles.text1}>
            ORIGIN PROTOCOL        
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Page45