import React, { useRef, useState }  from 'react'
import styles from './page99100.module.scss'

const Page99100 = () => {
  const audioRef1 = useRef()
  const [isPlaying1, setIsPlaying1] = useState(false)
  

  const startAudio1 = () => {
    audioRef1.current.play()
    setIsPlaying1(true)
  }

  const pauseAudio1 = () => {
    audioRef1.current.pause()
    setIsPlaying1(false)
  }
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.back1}></div>
      <img className={styles.image1} src='./magazine/4/images/99100_image1.png' />
      <img className={styles.image2} src='./magazine/4/images/99100_image2.png' />
      <div className={[styles.textBack, styles.musicFont, styles.yellowColor].join(' ')}>
        <div>
          Rhythm to the verse
        </div>
        <div>
          Rhythm to the verse
        </div>
        <div>
          Rhythm to the verse
        </div>
        <div>
          Rhythm to the verse
        </div>
        <div>
          Rhythm to the verse
        </div>
        <div>
          Rhythm to the verse
        </div>
      </div>

      <div className={[styles.textBack2, styles.musicFont, styles.yellowColor].join(' ')}>
        <div>
          Rhythm to the verse
        </div>
        <div>
          Rhythm to the verse
        </div>
        <div>
          Rhythm to the verse
        </div>
        <div>
          Rhythm to the verse
        </div>
        <div>
          Rhythm to the verse
        </div>
        <div>
          Rhythm to the verse
        </div>
      </div>

      <img className={styles.radial1} src='./magazine/4/images/99100_image4.png' />
      <img className={styles.radial2} src='./magazine/4/images/99100_image5.png' />

      <img className={styles.image3} src='./magazine/4/images/99100_image3.png' />

      <div className={[styles.textBack3, styles.musicFont, styles.whiteColor].join(' ')}>
        <div>
          Rhythm to the verse
        </div>
        <div>
          Rhythm to the verse
        </div>
        <div>
          Rhythm to the verse
        </div>
        <div>
          Rhythm to the verse
        </div>
        <div>
          Rhythm to the verse
        </div>
      </div>

      <div className={[styles.textBack4, styles.musicFont, styles.whiteColor].join(' ')}>
        <div>
          Rhythm to the verse
        </div>
        <div>
          Rhythm to the verse
        </div>
        <div>
          Rhythm to the verse
        </div>
        <div>
          Rhythm to the verse
        </div>
        <div>
          Rhythm to the verse
        </div>
      </div>

      <div className={styles.text1}>
        nlink
      </div>
      <div className={styles.text2}>
        Chainlink
      </div>
      <div className={styles.text3}>
        Chainlink
      </div>
      <div className={styles.text4}>
        Chainlink
      </div>
      <div className={styles.text5}>
        Chainlink
      </div>
      <div className={styles.text6}>
        ainlink
      </div>
      <div className={styles.text7}>
        Chainlink
      </div>
      <div className={styles.text8}>
        Chainli
      </div>

      <div className={[styles.animationFrame, styles.rightSideImageWrapper].join(' ')}>
        <img src='./magazine/4/images/99100_image6.png' />
        <img src='./magazine/4/images/99100_image6.png' />
      </div>

      <div className={styles.rect1}></div>
      <img className={styles.image4} src='./magazine/4/images/99100_image8.gif' />
      <img className={styles.image5} src='./magazine/4/images/99100_image8.gif' />

      <img className={styles.image6} src='./magazine/4/images/99100_image7.png' />

      <div className={styles.text9}>
        J-KIND is a DJ/Producer residing in San Francisco Bay Area of California. His diverse and eclectic style transcends many genres and is currently focused on his burning passion for techno. Listening to a J-KIND mix is inevitably a deep journey through various moods, and listeners are guaranteed a thrilling exploration of various emotions set to relentless, stomping and oftentimes, funky beats. Whether or not it's deep, introspective, jazzy, urgent, or imperative, your neck is guaranteed to move to the beat once he works the dance floor into a frenzy with the bottomless crate of jewels in his crate.        
      </div>

      <div className={styles.text10}>
        J-KIND's style is a derivation of many influences coming from the 1990's era: Daniel Bell, Terry Francis, Richie Hawtin, Sven Vath and Mark Farina being just a few of the many creative artists that helped shape his passion for electronic music. His career started with underground raves and parties all over the San Francisco Bay in 2001 and has taken him to Europe and beyond. He pioneered many underground parties in San Francisco, including a ground-breaking residency at Bad Habits, Temple, Bubble Lounge and Tanil, as well as guest appearances with Uniting Souls based in Seattle. 
        <br /><br />
        He is a resident DJ with the Airpusher Collective Burning Man group, and also held an 8-year residency at Wish Bar & Lounge. As he continues his quest for new sounds, you can be assured that whether or not he's spinning vinyl or using CDJs, you will notice what he calls "the beauty and power of DJ'ng - the ability to mix two tracks so creatively and uniquely, that a new song is created from the merger." His first EP, "Beautiful Life" was released in 2015 on Mioli Music and is available on Beatport, Spotify and iTunes.
        <br /><br />
        As his sound continues to resonate through the San Francisco Bay and beyond, be assured any party with J-KIND on the bill will be an event not to miss.        
      </div>

      <div className={styles.text11}>
        Don’t Let Go
      </div>

      <div
        className={styles.playButton1}
        onClick={() => {
          isPlaying1 ? pauseAudio1() : startAudio1()
        }}
      >
        <img className={styles.imageBack} src='/magazine/4/images/9596_button_back.png' />
        {
          !isPlaying1
          ? <img className={styles.imagePlay} src='/magazine/4/images/9798_playbutton.png' />
          : <img className={styles.imagePause} src='/magazine/4/images/9798_pausebutton.png' />
        }
      </div>
      <audio ref={audioRef1} loop>
        <source src='/magazine/4/sounds/99100_sound1.mp3' type='audio/mpeg' />
      </audio>

      <div className={styles.text12}>
        Alot of us know Chainlink for it’s oracles, bridging real world data into the blockchain realms. However, one of the protocols most significant innovations to date is probably it’s most overlooked and unusued product; Dynamic NFTs. 
        <br /><br />          
        That might twist some delicate part of the inside of your skull. Because, NFTs are immutable right? I mean everything in blockchain ultimately is. Yet, data flows don’t have to be. Securing the pipes shouldn’t preclude the flow of what’s within. And Chainlink is providing a very real solution to this. In fact, it goes beyond providing some cool generative art metadata.
        <br /><br />
        Imagine NFT metadata changing programmatically as real world info about goods, from sales numbers and shipping times to the latest market updates and weather reports shift the context an NFT lives within. It enables a rich metastory as derivative layers of value far beyond the original tracking and timestamping of a good into one unique digital representation has ever allowed for before. 
        <br /><br />
        Synthetic data of NFTs is a completely new paradigm and something that not many projects have been able to comprehend yet alone tap into. The tools just didn’t exist until recently. Think about how revolutionary a very simple mechanistic tool the ticker tape was for economics because by radically simplifying the expression of information through a visual representation, a vast leap in the number and quality of decisions made is enabled. 
        <br /><br />
        And coordinating industry level translations to web3 won’t be possible if the spectrum of visual experience remains static. It’s not enough to have pretty moving images on a loop. It needs to come alive with data. And that’s exactly how we underwrite vitality within the metaverse. We combine the digital with the physical, the on-chain with the off chain. Dynamic NFTs are one of these tools that thread the gap to provide our entry into serving real world use cases. 
      </div>

      <img className={styles.image7} src='/magazine/4/images/99100_image9.png' />
      <div className={styles.text13}>
        Body temperature drops which is read by body thermal sensor. This activates programmable fashion tech jacket to increase heat packets.         
      </div>
      <div className={styles.text14}>
        The paired digital fashon jacket NFT is notified on-chain from the physical jacket’s heat sensor oracles.
      </div>
      <div className={styles.text15}>
        Digital fashion jacket is updated visually to show sleeves of fire. And, keeps track of the history of updates on the ledger for additional in-game stats and health bar data analysis. 
      </div>
    </div>
  )
}

export default Page99100
