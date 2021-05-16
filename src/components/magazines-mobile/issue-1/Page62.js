import React from 'react'
import styles from './page62.module.scss'

const Page62 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/images/mobile/page62-bg.png" className={styles.backImage} />
      <div className={styles.innerWrapper}>
        <div className={styles.section1}>
          <p>First TenshiGirl Collection on the blockchain. Featuring 50 high-resolution trading cards with unique artwork from renowned anime artists and in-game functionality.</p>
        </div>
        <div className={styles.section2}>
          <p>TenshiGirl.io is a new crypto trading platform and NFT collectible trading card project, built on Ethereum.</p>
          <p>They are bridging world renowned artists to create the world of Vestrian— a narrative filled with rich characters, storylines and battle between factions.</p>
          <p>Each artwork is presented in a collection of ERC721 NFT packs on Ethereum Mainnet. You can purchase an NFT pack with Tenshi coins— the digital currency used to purchase NFTs at TenshiGirl.io. </p>
        </div>
      </div>
    </div>
  )
}

export default Page62