import React, { useRef, useState }  from 'react'
import styles from './page4950.module.scss'

const Page4950 = () => {
  const audioRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)

  const startAudio = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  const pauseAudio = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.back1}></div>
      <img className={styles.image1} src='/magazine/4/images/4950_image1.png' />
      <img className={styles.image2} src='/magazine/4/images/4950_image2.png' />
      <img className={styles.image3} src='/magazine/4/images/4950_image3.png' />
      <div className={styles.text1}>
        Author of ERC-20 & ERC-725 Standard
      </div>
      <div className={styles.text2}>
        Fabian Vogelsteller
      </div>
      <div className={styles.text3}>
        Fabian Vogelsteller
      </div>
      <div className={styles.text4}>
        Witek Radomski
      </div>
      <div className={styles.text5}>
        The ERC Protocol Standards underwrite  all value exchange for Ethereum and beyond. They are what allow us to transact, interact, exchange, buy, sell, arbitrage, program, create and compound value.
      </div>
      <div className={styles.text6}>
        Ethereum request for comment
      </div>

      <div
        className={styles.playButton}
        onClick={() => {
          isPlaying ? pauseAudio() : startAudio()
        }}
      >
        {
          !isPlaying
          ? <img className={styles.imagePlay} src='/magazine/4/images/4950_playbutton.png' />
          : <img className={styles.imagePause} src='/magazine/4/images/4950_pausebutton.png' />
        }
      </div>

      <audio ref={audioRef} loop>
        <source src='./magazine/4/sounds/4950_sound1.mp3' type='audio/mpeg' />
      </audio>

      <div className={styles.text7}>
        I've been a gamer since I was a kid, and spent thousands of hours in so many online games. I started Enjin with Maxim in 2018 as a social community builder platform to allow guilds, clans, and eventually Minecraft servers to create communities easily without coding. Minecraft servers started taking off and we realized a lot of them were monetizing by selling in-game perks and items, so we created a plugin that gave users a way to donate to their servers and be credited in the game. This was very successful with thousands of popular servers, and it led to us thinking about how to use blockchain in gaming.
      </div>
      
      <div className={styles.text8}>
        Gaming is where cutting-edge technology becomes social, fun, and human. In games, someone can intuitively use their NFTs to solve game challenges, show off their digital fashion, or achieve an edge over other players. It's the most promising medium to explore creative applications of the idea of the metaverse, since games can be a canvas for both developers and gamers to experiment and play.
      </div>
      
      <div className={styles.text9}>
        When we started working on the early ERC-1155 standard, 721 didn't exist yet. We knew that games needed both fungible and non-fungible items, but ERC-20 was too simple to use in most games. ERC-721 is focused on single unique items, which is great for collectible art or a single collection of NFTs, but it's not robust enough to do everything a game would need. The ERC-1155 standard supports both Fungible tokens and NFTs, allowing you to create different categories of items that follow the same rules in a contract, and easily interoperate with each other. 
      </div>
      
      <div className={styles.text10}>
        There are also many improvements, like batch transfers, language localization, efficient metadata URI substitution, reliable events, and the ability for other smart contracts to react to direct transfers (ERC1155Receiver). You could create an entire game series' item economy using a single ERC-1155 contract, and operations like trading or crafting would be much more efficient than using separate contracts. It's generally a more powerful and carefully designed token standard.        
      </div>
      
      <div className={styles.text11}>
        The ERC-1155 standard is flexible enough to create any kind of digital asset on Ethereum. I encourage game developers to think beyond play-to-earn. Use the "open" aspect of blockchain assets to allow third-party development and modding. The "ownership" feature of these assets can create a new level of risk and reward for competitive games, or addictive potential in RPGs and similar games. Rarity, history and on-chain metadata can be used to provide prestige and a sense of real value to digital items.
      </div>

      <div className={styles.text12}>
        Finally, connections and collaboration with other games will build a network effect and give players a feeling that their digital assets are "real" and not simply ephemeral 2d images or 3d models in a fantasy world. There are so many other things game developers can harness when building these experiences, and I'm excited to be part of the journey with Enjin and ERC-1155.
      </div>

      <div className={styles.text13}>
        ERC-1155
      </div>

      <div className={styles.text14}>
        ERC-1155
      </div>

    </div>
  )
}

export default Page4950
