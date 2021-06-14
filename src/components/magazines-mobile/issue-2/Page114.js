import React from 'react'
import styles from './page114.module.scss'
import Link from 'next/link';

const Page114 = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="www.instagram.com/pr.esc/"><a>
       <img src="./magazine/1/123_124/image1.png" className={styles.image1} />
       </a>
       </Link>
       <Link href="www.instagram.com/pr.esc/"><a>
       <p className={styles.text3}>Nicole Savitskaya</p>
       </a>
       </Link>
    </div>
  )
}

export default Page114