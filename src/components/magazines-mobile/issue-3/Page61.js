import React from 'react'
import styles from './page61.module.scss'
import Link from 'next/link';

const Page61 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/69_70/image1.png" className={styles.image1}/>
      <Link href="https://www.instagram.com/lilium.labs/">
        <a target="_blank">
        <p className={styles.text1}>Lilium Labs</p> 
        </a>
      </Link>
    </div>
  )
}

export default Page61