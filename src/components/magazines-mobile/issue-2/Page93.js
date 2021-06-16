import React from 'react'
import styles from './page93.module.scss'
import Link from 'next/link';

const Page93 = () => {
  return (
    <div className={styles.wrapper}>     
      <img src="./magazine/2/images/101_102/image1.png" className={styles.image1} />
      <img src="./magazine/2/images/101_102/image2.png" className={styles.image2} />
      <img src="./magazine/2/images/101_102/image3.png" className={styles.image3} />
      <Link href="https://shwangerika.cargo.site/"><a className={styles.text1}>
      Shiu Studio
      </a>
      </Link>
    </div>
  )
}

export default Page93