import React, { useRef, useState }   from 'react'
import Link from 'next/link'
import styles from './page75.module.scss'

const Page75 = () => {
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
      <img className={styles.image1} src='/magazine/4/images/8182_image2_mobile.png' />
      <img className={styles.image2} src='/magazine/4/images/8182_image21_mobile.png' />
      <img className={styles.image3} src='/magazine/4/images/8182_image2_mobile.png' />
      <img className={styles.image4} src='/magazine/4/images/8182_image21_mobile.png' />
      <div className={styles.circle1}></div>
      <img className={styles.image5} src='/magazine/4/images/8182_image7.png' />
      <img className={styles.image6} src='/magazine/4/images/8182_image8.png' />
      <img className={styles.image7} src='/magazine/4/images/8182_image10.png' />
      <img className={styles.image8} src='/magazine/4/images/8182_image11.png' />

      <div className={styles.catacText1}>CATACLYSM</div>
      <div className={styles.catacText2}>CATACLYSM</div>
      <div className={styles.catacText3}>CATACLYSM</div>
      <div className={styles.catacText4}>CATACLYSM</div>
      <div className={styles.catacText5}>CATACLYSM</div>
      <div className={styles.catacText6}>CATACLYSM</div>

      <div className={styles.text1}>This was an EP I produced — inspired by the events of 9/11 which had a pretty big impact on my life.</div>
      <div className={styles.text2}>
        ESCAPE INTO XENOTECH’S IMMERSIVE CONTENT EXPERIENCEs
      </div>
      <div className={styles.text3}>
        XENOTECH
      </div>
      <div className={styles.text4}>
        I am focused on developing a roadmap for XENOTECH to ultimately become a blockchain based social commerce virtual world geared towards Digital / Physical clothing designers and brands. It is essential for this virtual world to exist in an Open and interoperable Metaverse where it can serve as a hub for digital fashion related products (garments, game-skins, etc.) and experiences (fashion shows, events, games, etc.) to take place and ultimately be distributed across the wider interoperable Metaverse.
      </div>
      <Link href='https://digifizzy.xyz/unlockable/1/'>
        <a target='_blank'>
          <div>
            <div className={styles.text6}>
              Go Behind the Scenes with Exclusive NFT Content and Experiences
            </div>
            <div className={styles.text5}>
              Go Behind the Scenes with Exclusive NFT Content and Experiences
            </div>
          </div>
        </a>
      </Link>
      <div className={styles.text7}>
        DECO<br />
        ONLY FANS
      </div>
      <div className={styles.text8}>
        DECO<br />
        ONLY FANS
      </div>

      <div
        className={styles.playButton}
        onClick={() => {
          isPlaying ? pauseAudio() : startAudio()
        }}
      >
        {
          !isPlaying
          ? <img src='/magazine/4/images/8182_playbutton.png' />
          : <img src='/magazine/4/images/8182_pausebutton.png' />
        }
        
      </div>

      <audio ref={audioRef} loop>
        <source src='/magazine/4/sounds/8182_sound1.mp3' type='audio/mpeg' />
      </audio>
      
    </div>
  )
}

export default Page75