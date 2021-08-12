import React from 'react'
import Link from 'next/link'
import styles from './page30.module.scss'

const Page30 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='/magazine/4/images/3536_background2_mobile.png' />
      <img className={styles.image2} src='/magazine/4/images/3536_image2.png' />
      <img className={styles.image3} src='/magazine/4/images/3536_image2.png' />
      <img className={styles.image4} src='/magazine/4/images/3536_image2.png' />
      <img className={styles.image5} src='/magazine/4/images/3536_image2.png' />
      <img className={styles.image6} src='/magazine/4/images/3536_image2.png' />
      <img className={styles.image7} src='/magazine/4/images/3536_image2.png' />
      <Link href='https://zora.co/'>
        <a target='_blank'>
          <h1>OURZORA</h1>
        </a>
      </Link>
    </div>
  )
}

export default Page30
