import React from 'react'
import styles from './page52.module.scss'

const Page52 = () => {
  return (
    <div className={styles.wrapper}>
      <img src='/magazine/4/images/5758_background2_mobile.png' className={styles.image1}/> 
      <img src='/magazine/4/images/5556_image3_mobile.png' className={styles.image2}/>

      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>

      <div className={styles.text1}>
        <span>
          What role do you think DAOs will play as gamers form more modern decentralized guilds, merchant houses, and other simplified social structures  as we pioneer new economies in the metaverse
          <br /><br />
          DAOs are a group coordination structure that is a very flexible way to organize people that are working towards a common goal. There will be DAOs of all sizes, structures (such as tokenized vs. non-tokenized) and goals (from the fleeting to world-changing), but the common thread is that DAOs will change the nature of group coordination itself.
        </span>
      </div>
      <div className={styles.text2}>
        <span>
          Where’s it going next, beyond p2e, etc, how’s it going to change participation and ownership IRL?
          <br /><br />
          As more and more value shift into the digital world, the notion of what is value itself will permeate back to the physical world. Will luxury goods now have NFTs minted as a certificate of authenticity? Are we going to have house and land titles minted as NFTs on chain, and can be collateralized and composable with Defi? Can I have an NFT representing ownership of my house and then represent that house in an online world such as Cryptovoxels? Only the future can tell! 
        </span>
      </div>
    </div>
  )
}

export default Page52