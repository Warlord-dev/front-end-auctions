import React from 'react'
import styles from './page113.module.scss'
import Link from 'next/link';

const Page113 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/121_122/image4.png" className={styles.image7} />
      <Link href="www.paolaguivel.com"><a className={styles.text3}>
       Paola Olaguivel
        </a>
       </Link>
    </div>
  )
}

export default Page113