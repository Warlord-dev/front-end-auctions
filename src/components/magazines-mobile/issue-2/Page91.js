import React from 'react'
import styles from './page91.module.scss'
import Link from 'next/link';

const Page91 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/121_122/image4.png" className={styles.image7} />
      <Link href="www.paolaguivel.com"><a className={styles.text3}>
       Paola Olaguivel
        </a>
       </Link>
    </div>
  )
}

export default Page91