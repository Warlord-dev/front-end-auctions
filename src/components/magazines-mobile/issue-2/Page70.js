import React from 'react'
import styles  from './page70.module.scss'
import Link from 'next/link';

const Page70 = () => {
  return (
    <div className={styles.wrapper}>
       <img src="./magazine/2/images/75_76/image1.png" className={styles.image1} />
        <Link href="https://www.instagram.com/retlagem/"><a>
        <p className={styles.text1}>retlagem</p>
        </a>
        </Link>
    </div>
  )
}

export default Page70