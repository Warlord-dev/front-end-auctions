import React from 'react'
import styles from './page74.module.scss'
import Link from 'next/link';

const Page74 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/79_80/image2.png" className={styles.image2} />
      <Link href="https://www.instagram.com/ditadivita/"><a>
          <p className={styles.text3}>DITA</p>
        </a>
      </Link>
      <p className={styles.text4}>DITA is a YouTube-taught 3D designer with a background in fashion and graphic design. What fascinates DITA the most about digital art is the endless creative possibilities without real life restrictions. DITA enjoys expanding their knowledge of general 3D techniques and combining this with apparel design.</p>
    </div>
  )
}

export default Page74