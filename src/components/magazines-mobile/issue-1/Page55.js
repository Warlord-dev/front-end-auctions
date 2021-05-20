import React from 'react'
import styles from './page55.module.scss'

const Page55 = () => {
  return (
    <div className={styles.wrapper}>      
      <div className={styles.section}>
        <img src="./magazine/1/images/mobile/page55/bg-1.png" className={styles.backImage1} />
        <img src="./magazine/1/images/mobile/page55/bg-2.png" className={styles.backImage2} />
        <p className={styles.text1}>
        First TenshiGirl Collection on the blockchain. Featuring 50 high-resolution trading cards with unique artwork from renowned anime artists and in-game functionality.
        </p>
        <p className={styles.text2}>
        TenshiGirl.io is a new crypto trading platform and NFT collectible trading card project, built on Ethereum.  
        </p>
        <p className={styles.text3}>
        They are bridging world renowned artists to create the world of Vestrian— a narrative filled with rich characters, storylines and battle between factions. 
        <br/><br/>
        Each artwork is presented in a collection of ERC721 NFT packs on Ethereum Mainnet. You can purchase an NFT pack with Tenshi coins— the digital currency used to purchase NFTs at TenshiGirl.io. 
        </p>
        <p className={styles.text4}>
        Each trading card also has in-game functionality and dynamic scarcicty— holders can level up their cards as they move from through the narrative. 
        </p>
      </div>
    </div>
  )
}

export default Page55