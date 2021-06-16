import React from 'react'
import { useSelector } from 'react-redux'
import styles from './page101.module.scss'
import UnlockPage from '../common/UnlockPage'

const Page101 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/109_110/image6.png" className={styles.image6} />
      <img src="./magazine/2/images/109_110/image8.png" className={styles.image7} />
      <img src="./magazine/2/images/109_110/image10.png" className={styles.image10} />
      <img src="./magazine/2/images/109_110/image11.png" className={styles.image11} />
      <img src="./magazine/2/images/109_110/image7.png" className={styles.image8} />
      <p className={styles.text4}>Maria Pulido</p>
       <p className={styles.text5}>Poison Ivy</p>
       <p className={styles.text6}>She is a warrior and she is Nature, she is the sea and the forest. A kind and powerful soul fighting to keep the balance.  Sustainable fashion for a sustainable world. </p>
    </div>
  )
}

export default Page101