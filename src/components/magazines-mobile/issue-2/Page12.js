import React from 'react'
import styles from './page12.module.scss'

const Page12 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>  </div>
      <img src="./magazine/2/images/13_14/mobile/image1.png" className={styles.image2} />
      <img src="./magazine/2/images/13_14/mobile/image2.png" className={styles.image3} />
      <p className={styles.text1 }><span className={styles.text2}>RUG</span><span className={styles.text3}>PULLS</span><span className={styles.text5}> & </span><span className={styles.text4}>SCAMS</span></p>
      <p className={styles.text6 }>What classifies decentralisation?</p>
      <p className={styles.text7 }>It’s not enough to say something is decentralised just because it uses a blockchain as the underlying infrastructure. Decentralisation is so much more than just a label or newage dub. </p>
    </div>
  )
}

export default Page12