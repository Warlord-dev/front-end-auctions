import React from 'react'
import styles from './page39.module.scss'

const Page39 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/45_46/image12.png" className={styles.image6}/>
      <img src="/magazine/3/images/45_46/image9.png" className={styles.image3}/>
      <p className={styles.text3}>Anya Chilli</p>
      <img src="/magazine/3/images/45_46/image4.png" className={styles.image4}/>
      <img src="/magazine/3/images/45_46/image10.png" className={styles.image2}/>
      <p className={styles.text4}>Art in Virtual Reality</p>
      <p className={styles.text5}>Anna Chili is a visual artist/entrepreneur/art shaman/ muralist/3d VR digital artist who lives in the San Francisco Bay Area.  She is originally from Odessa, Ukraine. </p>
      <p className={styles.text6}>Anna is working in VR on a series of NFT artworks. </p>
      <img src="/magazine/3/images/45_46/image5.png" className={styles.image5}/>
      <img src="/magazine/3/images/45_46/image11.png" className={styles.image1}/>
      <div className={styles.image9}>
        <video className={styles.image10} muted loop autoPlay>
          <source src="./magazine/3/images/45_46/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.image13}>
        <video className={styles.image14} muted autoPlay loop>
          <source src="./magazine/3/images/45_46/video2.mp4" type="video/mp4" />
        </video>
      </div>
      <p className={styles.text7}>As the Virtual Reality Industry grows so does the art world within it.</p>
      <div className={styles.image15}>
        <video className={styles.image16} muted autoPlay loop>
          <source src="./magazine/3/images/45_46/video3.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Page39