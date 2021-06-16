import React from 'react'
import styles  from './page68.module.scss'
import Link from 'next/link';

const Page68 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/73_74/image1.png" className={styles.image1} />
      <p className={styles.text1}>LANCY</p>
      <Link href="https://linktr.ee/soulyasa"><a>
      <p className={styles.text2}>Soulyasa.</p>
      </a>
      </Link>
    </div>
  )
}

export default Page68