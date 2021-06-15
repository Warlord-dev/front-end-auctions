import React from 'react'
import styles from './page100.module.scss'
import Link from 'next/link';

const Page100 = () => {
  return (
    <div className={styles.wrapper}>
       <img src="./magazine/2/images/109_110/image1.png" className={styles.image1} />
       <img src="./magazine/2/images/109_110/image4.png" className={styles.image4} />
       <img src="./magazine/2/images/109_110/image3.png" className={styles.image3} />
       <p className={styles.text1}>Jelly</p>
       <p className={styles.text2}>Closely connected to the concept and definition of life— death is an eluctable fate that affects every living organism on Earth, condemned to cease biological functions and end existence. However, this fate escapes Turritopsis Nutricula; a hydrozoan with the extraordinary ability to regress to the polyp stage from the jellyfish stage. So, here we see an infinite cycle which has the potentiality to influence biological immortality. </p>
       <Link href="https://www.instagram.com/lnvvld/"><a className={styles.text3}>
       Luna Vivaldi
        </a>
       </Link>
    </div>
  )
}

export default Page100