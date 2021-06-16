import React from 'react'
import styles from './page16.module.scss'

const Page16 = () => {
  return (
    <div className={styles.wrapper}>
       <img src="./magazine/2/images/17_18/mobile/image1.png" className={styles.image1} />
       <img src="./magazine/2/images/17_18/mobile/image2.png" className={styles.image2} />
       <img src="./magazine/2/images/17_18/mobile/image3.gif" className={styles.image4} />
       <img src="./magazine/2/images/17_18/mobile/image4.png" className={styles.image5} />
       <div className={styles.image3}></div>
       <p className={styles.text1 }>The Tao of DAO Security</p>
       <p className={styles.text2 }>DC. Way</p>
    </div>
  )
}

export default Page16