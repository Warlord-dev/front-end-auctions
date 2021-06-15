import React from 'react'
import styles  from './page67.module.scss'
import Link from 'next/link';

const Page67 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/71_72/image2.png" className={styles.image2} />
      <p className={styles.text4}>REFLECTION BLISS</p>
      <p className={styles.text5}><Link href="https://linktr.ee/soulyasa"><a className={styles.text6}>Soulyasa (Tirtayasa)</a></Link> is a freelance 3D artist and motion designer based in Indonesia. Soulyasa is currently focusing on their “Everyday Project”, since April 2020— pushing their creative bounds everyday. </p>
    </div>
  )
}

export default Page67