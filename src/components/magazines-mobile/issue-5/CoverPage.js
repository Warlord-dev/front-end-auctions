import React from 'react'
import styles from './coverpage.module.scss'

const CoverPage = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.back} src='/magazine/4/images/cover_background.png'/>
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>
      <div className={styles.rect4}></div>
      <div className={styles.rect5}></div>
      <div className={styles.rect6}></div>
      <img className={styles.image1} src='/magazine/4/images/cover_image1.png'/>

      <div className={styles.text1}>
        The Infinite Bazaar        
      </div>
      <div className={styles.text2}>
        A return to hope, exuberance, artisanship, and trust in decentralized technological commerce.
      </div>
      <div className={styles.text3}>
        ERC
        <br/><br/>
        PROTOCOL     
      </div>
      <div className={styles.text4}>
        S
        T
        A
        N
        D
        A
        RD
        S    
      </div>
      <div className={styles.text5}>
        GDN DAO      
      </div>
      <div className={styles.text6}>
        web3 <br />
        fashion week       
      </div>
      <div className={styles.text7}>
        Decentralised data with pinata    
      </div>
      <div className={styles.text8}>
        Philippines       
      </div>
      <div className={styles.text9}>
        Play to Earn Economy       
      </div>
      <div className={styles.text10}>
        PAYC      
      </div>
      <div className={styles.text11}>
        Pirate Ape Yacht Club      
      </div>
      <div className={styles.text12}>
        D
        I
        G
        I
        F
        I
        Z
        Z
        Y
      </div>
      <div className={styles.text13}>
        D
        I
        G
        I
        F
        I
        Z
        Z
        Y      
      </div>
      <div className={styles.text14}>
        D
        I
        G
        I
        F
        I
        Z
        Z
        Y
      </div>
      <div className={styles.text15}>
        IssueFour
      </div>
      <div className={styles.text16}>
        IssueFour
      </div>
    </div>
  )
}

export default CoverPage
