import React from 'react'
import styles from './page121.module.scss'
import Link from 'next/link';

const Page121 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/129_130/image3.png" className={styles.image3} />
       <img src="./magazine/2/images/129_130/image4.png" className={styles.image3} />
       <img src="./magazine/2/images/129_130/image5.png" className={styles.image3} />
       <p className={styles.text4}>Take Charge Boot</p>
       <Link href="https://www.instagram.com/vicke_jones/"><a className={styles.text5}>
       Vicky Gonzalez Boerr
        </a>
       </Link>

       <img src="./magazine/2/images/129_130/image6.png" className={styles.image4} />
    </div>
  )
}

export default Page121