import React from 'react'
import styles from './page120.module.scss'
import Link from 'next/link';

const Page120 = () => {
  return (
    <div className={styles.wrapper}>
     <img src="./magazine/2/images/129_130/image1.png" className={styles.image1} />
     <img src="./magazine/2/images/129_130/image2.png" className={styles.image2} />
     <Link href="https://www.instagram.com/sasa3dimensions/"><a className={styles.text1}>
       SASA3DIMENSIONS
        </a>
       </Link>
       <p className={styles.text2}>SUBSTANCE</p>
       <p className={styles.text3}>An organic sculpture that represents a change of form: all the particles break down and reassemble to form a new element— a change occuring constantly on our own planet.</p>
    </div>
  )
}

export default Page120