import React from 'react'
import styles from './page64.module.scss'
import Link from 'next/link';

const Page64 = () => {
  return (
    <div className={styles.wrapper}>
     <img src="/magazine/3/images/71_72/image1.png" className={styles.image1}/>
      <Link href="https://www.instagram.com/lilium.labs/">
        <a target="_blank">
        <p className={styles.text1}>Lilium Labs</p> 
        </a>
      </Link>
    </div>
  )
}

export default Page64