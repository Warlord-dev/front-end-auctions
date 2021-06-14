import React from 'react'
import styles from './page90.module.scss'
import Link from 'next/link';

const Page90 = () => {
  return (
    <div className={styles.wrapper}>
       <img src="./magazine/1/121_122/image1.png" className={styles.image1} />
       <img src="./magazine/1/121_122/image1.png" className={styles.image2} />
       <img src="./magazine/1/121_122/image5.png" className={styles.image8} />

       <Link href="https://the-dots.com/users/tania-viegas-918782"><a className={styles.text1}>
       Mask of Sanity
        </a>
       </Link>
       <p className={styles.text2}>Tania Viegas</p>
    </div>
  )
}

export default Page90