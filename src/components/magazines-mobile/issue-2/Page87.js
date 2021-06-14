import React from 'react'
import styles from './page87.module.scss'
import Link from 'next/link';

const Page87 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/117_118/image2.png" className={styles.image2} />
      <img src="./magazine/1/117_118/image3.png" className={styles.image3} />
      <Link href="http://instagram.com/di.universe"><a className={styles.text3}>
        Di.universe 
        </a>
       </Link>
       <p className={styles.text4}>RELAX</p>
    </div>
  )
}

export default Page87