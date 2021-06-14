import React from 'react'
import styles from './page75.module.scss'
import Link from 'next/link';

const Page75 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/105_106/image6.png" className={styles.image6} />
      <img src="./magazine/1/105_106/image7.png" className={styles.image7} />
      <img src="./magazine/1/105_106/image9.png" className={styles.image9} />
      <img src="./magazine/1/105_106/image10.png" className={styles.image10} />
      <img src="./magazine/1/105_106/image8.png" className={styles.image8} />
      <p className={styles.text2}>Ahu Agu</p>
       <Link href="https://twitter.com/tonychizzyibe?lang=en"><a className={styles.text3}>
       Anthony Ibegbulem
        </a>
       </Link>
    </div>
  )
}

export default Page75