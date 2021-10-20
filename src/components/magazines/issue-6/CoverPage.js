import React from 'react'
import styles from './coverpage.module.scss'
const CoverPage = () => {
  console.log('this is loaded.')
  return (
    <div className={styles.wrapper}>
      <img className={styles.background} src='/magazine/6/images/frontcover_background.jpg' />
      <img className={styles.image1} src='/magazine/6/images/backcover_image1.png' />
      <div className={styles.text1}>
        Web3 Wayfinding with Open Token Communities         
      </div>
      <div className={styles.text2}>
        GDN PURVEYORS
      </div>
      <div className={styles.text3}>
        Growing Inter and Intra DAO Connections
      </div>
      <div className={styles.text4}>
        nicholas.sol + Sharkdao
      </div>
      <div className={styles.text5}>
        pORTUGAL AND EMERGING TECH
      </div>
      <div className={styles.text6}>
        Josh Quittner
      </div>
      <div className={styles.text7}>
        Social tokens for Community & More. 
      </div>
      <div className={styles.text8}>
        Composable Metaversal Communities w/ Loot
      </div>

      <div className={styles.circle1}></div>
      <div className={styles.circleText1}>
        6      
      </div>
      <div className={styles.circleText2}>
        POAPS TO COLLECT INSIDE!   
      </div>
      <a href='https://poap.website/identityacrossthemetaverse' target='_blank'>
        <img src='/images/poap-logo.png' className={styles.poapImage} />
      </a>
    </div>
  )
}

export default CoverPage
