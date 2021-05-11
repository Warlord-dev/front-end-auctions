import React from 'react'
import styles from './page2122.module.scss'

const LoremText = props => {
  const { left, top } = props;

  return (
    <div className={styles.loremTextWrapper} style={{
      left: left,
      top: top
    }}>
      <div className={styles.loremText1}>
        LOREM
      </div>
      <div className={styles.loremText2}>
        LOREM
      </div>
      <div className={styles.loremText3}>
        LOREM
      </div>
      <div className={styles.loremText4}>
        LOREM
      </div>
      <div className={styles.loremText5}>
        LOREM
      </div>
    </div>
  )
}

const Page2122 = () => {
  return (
    <div className={styles.wrapper}>
      <img src='./magazine/1/images/Group 1184.png' className={styles.backImage} />
      <img src='./magazine/1/images/Group 1195.png' className={styles.pathImage} />
      <div className={styles.text1}>
        Crypto Art        
      </div>
      <div className={styles.text2}>
        Hall of 
      </div>
      <div className={styles.text3}>
        Fame
      </div>
      <div className={styles.text4}>
        Sean Williams 
      </div>
      <div className={styles.text5}>
        FEB-10-2021
      </div>
      <div className={styles.text6}>
        IMPROPERLY PROCESSED EMÖTIONS
      </div>
      <div className={styles.text7}>
        APRIL-24-2021 
      </div>
      <div className={styles.text8}>
        POLY <br />ANNIE
      </div>
      <div className={styles.text9}>
        Tree Nouveau
      </div>
      <div className={styles.text10}>
        CHAOS
      </div>
      <div className={styles.text11}>
        APR-04-2021
      </div>
      <div className={styles.text12}>
        FRICK.LTD<br/>
        FRICK.LTD<br/>
        FRICK.LTD<br/>
      </div>

      <div className={styles.text13}>
        MARCH-11-2021
      </div>
      <div className={styles.text14}>
        IY
      </div>
      <div className={styles.text15}>
        CREATIVE BLOCK
      </div>
      <div className={styles.text16}>
        BakaArts
      </div>
      <div className={styles.text17}>
        The Ethertales - Acrophobia
      </div>
      <div className={styles.text18}>
        FEB-12-2021
      </div>
      <div className={styles.text19}>
        DEC-05-2020
      </div>
      <div className={styles.text20}>
        Tim Riopelle 
      </div>
      <div className={styles.text21}>
        LET GO
      </div>
      <div className={styles.text22}>
        Jeff Kraus
      </div>
      <div className={styles.text23}>
        FEB-27-2021
      </div>
      <div className={styles.text24}>
        Bom_Dia.05
      </div>
      <div className={styles.text25}>
        BURST TWO
      </div>
      <div className={styles.text26}>
        FEB-28-2021
      </div>
      <div className={styles.text27}>
        MAKERS
      </div>
      <div className={styles.text28}>
        CREATORS
      </div>

      <div className={styles.blueRect}>
      </div>
      <div className={styles.orangeRect}>
      </div>
      <div className={styles.purpleRect}>
      </div>
      <a href="https://foundation.app/iartsometimes/improperly-processed-emotions-229" target='_blank'>
        <img src='./magazine/1/images/21-01.jpg' className={styles.image1} />
      </a>
      <a href="https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:512984 " target='_blank'>
        <img src='./magazine/1/images/21-02.jpg' className={styles.image2} />
      </a>
      <a href="https://foundation.app/frickltd/chaos-19373" target='_blank'>
        <img src='./magazine/1/images/21-03.jpg' className={styles.image3} />
      </a>
      <a href="https://foundation.app/IY/creative-block-6168" target='_blank'>
        <img src='./magazine/1/images/21-04.jpg' className={styles.image4} />
      </a>
      <a href="https://superrare.co/artwork-v2/the-ethertales---acrophobia-19306" target='_blank'>
        <img src='./magazine/1/images/21-05.jpg' className={styles.image5} />
      </a>
      <a href="https://superrare.co/artwork-v2/let-go-16947" target='_blank'>
        <img src='./magazine/1/images/21-06.png' className={styles.image6} />
      </a>
      <a href="https://foundation.app/lorem/burst-two-1725" target='_blank'>
        <img src='./magazine/1/images/21-07.jpg' className={styles.image7} />
      </a>
      <a href="https://foundation.app/jeff.kraus/bom-dia-05-1442" target='_blank'>
        <video autoPlay muted loop className={styles.nftVideo}>
          <source src={`./magazine/1/videos/NFT.mp4`} type="video/mp4" />
        </video>
      </a>
      <LoremText
        left={'1284px'}
        top={'963px'}
      />
      <LoremText
        left={'1305px'}
        top={'1095px'}
      />
    </div>
  )
}

export default Page2122