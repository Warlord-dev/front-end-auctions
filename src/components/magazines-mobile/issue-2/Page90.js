import React from 'react'
import styles from './page68.module.scss'
import Link from 'next/link';

const Page90 = () => {
  return (
    <div className={styles.wrapper}>
     <img src="./magazine/1/97_98/right.png" className={styles.image1} />
     <img src="./magazine/1/97_98/right-top.png" className={styles.image2} />
     <div className={styles.image3}></div>
     <div className={styles.text3}>
      Lost in Space
      </div>
      <Link href="https://www.instagram.com/yekaterinab/"><a className={styles.text4}>
      YeKaterina Burmatnova
      </a>
      </Link>
    </div>
  )
}

export default Page90