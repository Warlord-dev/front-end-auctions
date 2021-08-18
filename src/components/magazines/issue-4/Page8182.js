import React, { useRef, useState }  from 'react'
import Link from 'next/link'
import styles from './page8182.module.scss'

const Page8182 = () => {
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
      <img className={styles.image1} src='/magazine/4/images/8182_image1.png' />
      <img className={styles.image2} src='/magazine/4/images/8182_image2.png' />
      <img className={styles.image21} src='/magazine/4/images/8182_image21.png' />
      <img className={styles.image3} src='/magazine/4/images/8182_image3.png' />
      <img className={styles.image4} src='/magazine/4/images/8182_image4.png' />
      <img className={styles.image5} src='/magazine/4/images/8182_image5.png' />
      <img className={styles.image6} src='/magazine/4/images/8182_image6.png' />
      <img className={styles.image7} src='/magazine/4/images/8182_image7.png' />
      <img className={styles.image9} src='/magazine/4/images/8182_image9.png' />
      <img className={styles.image8} src='/magazine/4/images/8182_image8.png' />

      <div className={styles.circle}></div>

      <img className={styles.image10} src='/magazine/4/images/8182_image10.png' />
      <img className={styles.image11} src='/magazine/4/images/8182_image11.png' />
      
      <Link href='https://digifizzy.xyz/unlockable/1/'>
        <a target='_blank'>
          <div>
            <div className={styles.text1}>
              Go Behind the Scenes with Exclusive NFT Content and Experiences
            </div>
            <div className={styles.text2}>
              Go Behind the Scenes with Exclusive NFT Content and Experiences
            </div>
          </div>
        </a>
      </Link>

      <div className={styles.text3}>
        DECO <br />
        ONLY FANS
      </div>
      <div className={styles.text4}>
        XENOTECH
      </div>
      <div className={styles.text5}>
        XENOTECH
      </div>
      <div className={styles.text6}>
        We are continuing on with our DECO “Decentralised Commerce” Only Fans with the DIGITALAX Ambassadors; using native web3 distribution models and creator monetisation paths, all underwritten by NFTs.
        <br /><br />
        <span>
          In web2 it’s entirely altruistic, you are depending on a one way incentive where the giver feels good for an obscure reason enough so to give to you. It’s a shot in the dark, and there is no clear path from 0 to 1, no clear solution to the cold start problem. In the web3 model, mutual incentives are aligned, where the creator can actually implement sustainability without excessive and unnecessary blocking points like paywalls and ad based models. It allows them to spin up personalised decentralised channels and invite people behind the scenes for exclusive content, unlockable drops and experience based backstage passes.
        </span>
      </div>
      <div className={styles.text7}>
        This content is not directly related to Digital Fashion, but since I've been traveling I haven't had access to my computer to 3D model. Instead, with my laptop, I started working on a side project based around what I think the Metaverse version of GoodReads would look like. This project was inspired by how limited and outdated the UI of GoodReads is and how I desperately I want a book management / tracking tool that exist spatially—one that is accessible through web browsers, VR, and AR. 
      </div>
      <div className={styles.text8}>
        The 3D Bookshelf
      </div>
      <div className={styles.text81}>
        The 3D Bookshelf
      </div>
      <div className={styles.text82}>
        The 3D Bookshelf
      </div>
      <div className={styles.text83}>
        The 3D Bookshelf
      </div>
      <div className={styles.text84}>
        The 3D Bookshelf
      </div>
      <div className={styles.text9}>
        Another thing I have been practicing is modeling ancient Roman/Greek and Renaissance inspired architecture.
      </div>

      <div className={styles.text10}>
        DECO<br />
        ONLY FANS
      </div>
      <div className={styles.text11}>
        DECO<br />
        ONLY FANS
      </div>
      <Link href='https://digifizzy.xyz/unlockable/1/'>
        <a target='_blank'>
          <div>
            <div className={styles.text12}>
              Go Behind the Scenes with Exclusive NFT Content and Experiences
            </div>
            <div className={styles.text13}>
              Go Behind the Scenes with Exclusive NFT Content and Experiences
            </div>
          </div>
        </a>
      </Link>
      <div className={styles.text14}>
        This was an EP I produced — inspired by the events of 9/11 which had a pretty big impact on my life.
      </div>
      <div className={styles.text15}>
        ESCAPE INTO XENOTECH’S IMMERSIVE CONTENT EXPERIENCEs 
      </div>
      <div className={styles.text16}>
        I am focused on developing a roadmap for XENOTECH to ultimately become a blockchain based social commerce virtual world geared towards Digital / Physical clothing designers and brands. It is essential for this virtual world to exist in an Open and interoperable Metaverse where it can serve as a hub for digital fashion related products (garments, game-skins, etc.) and experiences (fashion shows, events, games, etc.) to take place and ultimately be distributed across the wider interoperable Metaverse.
      </div>
      <div className={styles.text17}>
        XENOTECH
      </div>

      <div className={styles.textCatac1}>
        CATACLYSM        
      </div>

      <div className={styles.textCatac2}>
        CATACLYSM        
      </div>

      <div className={styles.textCatac3}>
        CATACLYSM        
      </div>

      <div className={styles.textCatac4}>
        CATACLYSM        
      </div>

      <div className={styles.textCatac5}>
        CATACLYSM        
      </div>

      <div className={styles.textCatac6}>
        CATACLYSM        
      </div>

      <div className={styles.textCatac7}>
        CATACLYSM        
      </div>

      <div className={styles.textCatac8}>
        CATACLYSM        
      </div>
      
      <div className={styles.textCatac9}>
        CATACLYSM        
      </div>

      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/4/videos/8182_video1.mp4' />
      </video>

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

export default Page8182
