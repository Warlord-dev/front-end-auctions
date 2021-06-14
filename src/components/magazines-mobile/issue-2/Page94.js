import React from 'react'
import styles from './page94.module.scss'
import Link from 'next/link';

const Page94 = () => {
  return (
    <div className={styles.wrapper}>
     <img src="./magazine/1/101_102/image4.png" className={styles.image4} />
     <Link href="https://instagram.com/veletagram"><a className={styles.text2}>
      DOMINGO BETTE ENCOUR
      </a>
      </Link>
    </div>
  )
}

export default Page94