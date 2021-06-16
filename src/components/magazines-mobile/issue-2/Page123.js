import React from 'react'
import styles from './page123.module.scss'
import Link from 'next/link';

const Page123 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/131_132/image2.png" className={styles.image2} />
      <p className={styles.text3}>Sourav Agarwala</p>
    </div>
  )
}

export default Page123