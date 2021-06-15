import React from 'react'
import styles from './page10.module.scss'

const Page10 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/11_12/mobile/image1.png" className={styles.image1} />
      <p className={styles.text1 }>hybrid multimodal database to bridge web2 into web3</p>
      <div className={styles.image2}></div>
      <div className={styles.image3}></div>
      <div className={styles.image4}></div>
      <div className={styles.image5}></div>
      <div className={styles.image6}></div>
      <div className={styles.image7}></div>
      <div className={styles.image8}></div>
      <p className={styles.text2 }>Why was Fauna founded? What motivates the team?</p>
      <p className={styles.text2 }>Fauna was created with the mission to make working with operational data productive, scalable, and secure for every software development team. Our founders built the distributed storage systems that scaled Twitter, and set out to create the “data API” that they would've wanted. We built on that foundation to deliver the serverless database to power the next generation of applications.</p>
    </div>
  )
}

export default Page10