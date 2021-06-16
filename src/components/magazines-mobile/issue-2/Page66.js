import React from 'react'
import styles  from './page66.module.scss'
import Link from 'next/link';

const Page66 = () => {
  return (
    <div className={styles.wrapper}>
     <img src="./magazine/2/images/71_72/image1.png" className={styles.image1} />
     <img src="./magazine/2/images/71_72/image3.png" className={styles.image3} />
     <div className={styles.image4}></div>
      <p className={styles.text1}>Throughout the Metaverse</p>
      <p className={styles.text2}><Link href="https://www.elijahthurstonportfolio.com/"><a className={styles.text3}>Elijah Thurston </a></Link> is a 3D Render Artist based in Vermont. He has worked with DAZ Studio for over eight years and focuses on creating high fashion 3d renders.</p>
    </div>
  )
}

export default Page66