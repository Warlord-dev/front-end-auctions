import React from 'react'
import styles from './page119.module.scss'
import Link from 'next/link';

const Page119 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/127_128/image6.png" className={styles.image2} />
      <img src="./magazine/1/127_128/image3.png" className={styles.image3} />
       <img src="./magazine/1/127_128/image4.png" className={styles.image4} />
       <img src="./magazine/1/127_128/image5.png" className={styles.image5} />

       <Link href="http://instagram.com/onandno.project"><a className={styles.text2}>
       Onando Project
        </a>
       </Link>
    </div>
  )
}

export default Page119