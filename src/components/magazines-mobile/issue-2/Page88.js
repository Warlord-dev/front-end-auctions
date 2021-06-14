import React from 'react'
import styles from './page88.module.scss'
import Link from 'next/link';

const Page88 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/119_120/image3.png" className={styles.image1} />
      <Link href="http://instagram.com/mysecunha"><a className={styles.text1}>
       Myse Cunha
        </a>
       </Link>
       <p className={styles.text2}>Essentia Collection</p>
    </div>
  )
}

export default Page88