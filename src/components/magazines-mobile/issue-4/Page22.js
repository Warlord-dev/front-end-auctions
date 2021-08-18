import React, { useRef, useState } from 'react'
import styles from './page22.module.scss'

const Page22 = () => {
  return (
    <div className={styles.wrapper}>
      <video autoPlay muted loop className={styles.video1}>
        <source src={`./magazine/4/videos/2324_background.mp4`} type='video/mp4' />
      </video>
      <img src='./magazine/2/images/31_32_image.png' className={styles.image1} />
      
      <div className={styles.line1}></div>
      <div className={styles.rect1}></div>
      <img src='./magazine/4/images/2324_image2.png' className={styles.image2} />
      <img src='./magazine/4/images/2324_image3.png' className={styles.image3} />
      <img src='./magazine/4/images/2324_image1.png' className={styles.image4} />
      <img src='./magazine/4/images/2324_image1.png' className={styles.image5} />

      <div className={styles.text1}>
        CLIMATE NEUTRAL        
      </div>
      <div className={styles.text2}>
        This year, the Protocol committed to becoming climate neutral. NEAR’s carbon footprint is now fully compensated with CO2 offsetting projects under global climate solutions provider, South Pole. NEAR has always taken an energy aware approach, being a PoS blockchain from the start and around 200,000 times more carbon efficient than Bitcoin. 
        <br /><br />
        The Protocol’s current carbon footprint generates 174 tons of CO2 per year, compared to roughly 34, 800, 000 from that of Bitcoin. But now, every time that you transact on NEAR you are also contributing directly to reforestation; planting trees in Colombia, Zimbabwe, and the United States. The markets certainly love the green!
      </div>
      <div className={styles.text3}>
        Enjin— the home of all things NFTs, gaming and 1155s has recently announced their membership under the United Nations Global Compact ( a nonbinding pact aimed at encouraging businesses to adopt sustainable, socially responsible policies). Enjin is flipping the narrative on environmental sustainability x NFTs and showing the media and naysayers how it’s done— action over 5,000 word articles xD.
        <br /><br />
        They are directly exploring and implementing new ways that NFTs can be used to promote sustainability and equality. Leveraging off of the unique, transparent and immutable tracking that issuing an NFT can provide, Enjin plans to assist in employing NFTs in carbon-capture companies and reducing the global wealth gap by allowing creators around the world permissionless access to NFT markets.
      </div>
    </div>
  )
}

export default Page22