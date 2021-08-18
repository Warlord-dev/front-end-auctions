import React from 'react'
import styles from './page51.module.scss'

const Page51 = () => {
  
  return (
    <div className={styles.wrapper}>
      <img src='/magazine/4/images/5758_background1_mobile.png' className={styles.image1}/> 
      <img src='/magazine/4/images/5758_image3_mobile.png' className={styles.image2}/> 
      <img src='/magazine/4/images/5758_image1.png' className={styles.image3}/> 
      <img src='/magazine/4/images/5758_image2.png' className={styles.image4}/>

      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>

      <div className={styles.text1}>
        <span>
          Why do you think players in the Philippines have taken up the lead in adopting play2earn? Is there something different about the culture, economy, or infrastructure?
          <br /><br />
          Filipinos have always been a core part of any social network, game or application in the last 20 years. Filipinos are inherently social, speak good English, and love to congregate in groups. This makes them an early adopter of many social networks including Friendster, Facebook, Instagram, Tiktok, and many game applications.
        </span>
      </div>
      <div className={styles.text2}>
        <span>
          How do you think p2e reinforces defi composability and a player building a robust digital identity?
          <br /><br />
          Play-to-earn as a concept is a combination of NFTs (permanent assets that hold value) and Defi (generating yield). Guilds take advantage of composability by purchasing assets in different play-to-earn games and adding value to the game economy by bringing their communities over to these games. Players can express their identity either explicitly (as a cross-world compatible avatar), or implicitly (via on- and off-chain reputation tied to identity).
        </span>
      </div>
      <div className={styles.text3}>
        <span>
          How long do you think it will be before the play2earn model becomes a realistic alternative to traditional sources of income in the US and other leading economies?
          <br /><br />
          This will happen in the next 5-10 years where people can start expressing their creativity inside games and virtual worlds that have blockchain-based economies, and people can get paid for their creative work inside of these games.
        </span>
      </div>
    </div>
  )
}

export default Page51