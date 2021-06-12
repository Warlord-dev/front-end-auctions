import React from 'react'
import styles  from './page48.module.scss'
import Link from 'next/link';

const Page48 = () => {
  return (
    <div className={styles.wrapper}>
       <img src="./magazine/1/75_76/image1.png" className={styles.image1} />
        <Link href="https://www.instagram.com/retlagem/"><a>
        <p className={styles.text1}>retlagem</p>
        </a>
        </Link>
    </div>
  )
}

export default Page48