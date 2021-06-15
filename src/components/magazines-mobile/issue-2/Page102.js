import React from 'react'
import styles from './page102.module.scss'
import Link from 'next/link';

const Page102 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/111_112/image2.png" className={styles.image3} />
      <img src="./magazine/2/images/111_112/image4.png" className={styles.image5} />
      <img src="./magazine/2/images/111_112/image3.png" className={styles.image4} />
      <img src="./magazine/2/images/111_112/image5.png" className={styles.image6} />
      <img src="./magazine/2/images/111_112/image1.gif" className={styles.image2} />
      <div className={styles.image7}></div>
      <Link href="https://marcellobaldari.artstation.com/"><a className={styles.text2}>
       Marcello Baldari
        </a>
       </Link>
    </div>
  )
}

export default Page102