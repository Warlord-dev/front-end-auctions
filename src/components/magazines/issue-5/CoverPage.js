import React from 'react'
import styles from './coverpage.module.scss'
const CoverPage = () => {
  console.log('this is loaded.')
  return (
    <div className={styles.wrapper}>         
      <img className={styles.background} src='/magazine/5/images/cover_background.png' />
      <div className={styles.text1}>
        The Metaverse 
      </div>
      <div className={styles.text2}>
        The Metaverse 
      </div>
      <div className={styles.text3}>
        Multipass 
      </div>
      <div className={styles.text4}>
        Multipass 
      </div>
      <div className={styles.text5}>
        METAMASK. <br />
        The Face of Web3
      </div>
      <div className={styles.text6}>
        Crypto, DeFi & US Regulations
      </div>
      <div className={styles.text7}>
        BAYC with OHHSHINY
      </div>
      <div className={styles.text8}>
        This Outfit Does Not Exist
      </div>
      <div className={styles.text9}>
        Santiago Siri and Web3 Authentication
      </div>
      <div className={styles.text10}>
        PFP
        <br /><br />
        S<br />
        O<br />
        C<br />
        I<br />
        A<br />
        L<br />
        <br />
        CLUBS
      </div>
      <div className={styles.text12}>
        DIGIFIZZY
      </div>
      <div className={styles.text13}>
        DIGIFIZZY
      </div>
      <div className={styles.text14}>
        DIGIFIZZY
      </div>
      <div className={styles.text15}>
        IssueFive
      </div>
      <div className={styles.text16}>
        IssueFive
      </div>

      <div className={styles.circle1}></div>
      <div className={styles.circleText1}>
        6       
      </div>
      <div className={styles.circleText2}>
        POAPS TO COLLECT INSIDE!    
      </div>
      <a href='https://digifizzy.xyz/magazines/5/' target='_blank'>
        <img src='/images/poap-logo.png' className={styles.poapImage} />
      </a>
    </div>
  )
}

export default CoverPage
