import React, { useRef, useState } from 'react'
import Link from 'next/link'
import styles from './page9394.module.scss'


const Page9394 = () => {
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
      <div className={styles.firstHalf}>
        <video autoPlay muted loop className={styles.video1}>
          <source src='/magazine/4/videos/9394_video1.mp4' type='video/mp4' />
        </video>
        <img className={styles.image1} src='./magazine/4/images/9394_image1.png' />
        <img className={styles.image5} src='/magazine/4/images/9394_image4.gif'/>

        
        
        <div className={styles.text2}>
          STRAWBERRY SITH
        </div>
        <div className={styles.text6}>
          Virtual commerce
        </div>
        <Link href='https://twitter.com/StrawberrySith'>
          <a target='_blank'>
            <img src='/magazine/4/images/9394_image5.png' className={styles.image6} />
          </a>
        </Link>

        <div
          className={styles.playButton}
          onClick={() => {
            isPlaying ? pauseAudio() : startAudio()
          }}
        >
          <div className={styles.circle1}></div>
          <div className={styles.text7}>
            { !isPlaying ? 'Listen in' : 'PAUSE' }
          </div>
        </div>

        <audio ref={audioRef} loop>
          <source src='/magazine/4/sounds/9394_sound1.mp3' type='audio/mpeg' />
        </audio>
      </div>

      <div className={[styles.textBack3, styles.musicFont, styles.blueColor].join(' ')}>
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

      <div className={[styles.textBack4, styles.musicFont, styles.blueColor].join(' ')}>
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

      <div className={[styles.textBack5, styles.musicFont, styles.blueColor].join(' ')}>
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

      <div className={[styles.textBack8, styles.musicFont, styles.whiteColor].join(' ')}>
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

      <img className={styles.image2} src='./magazine/4/images/9394_image2.png' />
      <img className={styles.image3} src='./magazine/4/images/9394_image3.png' />
      <img className={styles.image4} src='./magazine/4/images/9394_image3.png' />

      <div className={styles.rect1}></div>
      <img className={styles.image7} src='./magazine/4/images/99100_image3.png' />

      <div className={styles.text1}>
        20 years of San Francisco Dance Music
      </div>
      <Link href='https://soundcloud.com/doscmusic'>
        <a target='_blank'>
          <div className={styles.text3}>
            Nearly everyone who has regularly gone out in San Francisco over the last twenty years has seen, heard, and been moved by waves of change in some ways very different from all the others that came before.
          </div>
        </a>
      </Link>
      <Link href='https://soundcloud.com/doscmusic'>
        <a target='_blank'>
          <div className={styles.text4}>
            In the Bay Area, dance music artists have at times thrived in a mix of eclectic influences unlike almost any other, and yet more recently found it ever harder to survive, in cities and subcultures once defined by radical creativity. Rooted in a long legacy as a center of music, radical politics, and counterculture, it’s no surprise San Francisco & Oakland in particular became welcoming hotbeds for both underground and mainstream dance music scenes.  There are all these different kinds of people. From hip-hop streetwear kids throwing spontaneous events with Burning Man regulars, to old school EDM legends learning a few new tricks from up and coming young producers making the hottest digicore tracks from their bedrooms. 
          </div>
        </a>
      </Link>
      <Link href='https://soundcloud.com/doscmusic'>
        <a target='_blank'>
          <div className={styles.text5}>
            Like everything else in or anywhere near San Francisco, the tech boom of the past decade has driven one of the largest of those waves of change. At first by pushing artists out of no longer affordable event space, as a monoculture of new tech hires  without much appetite for underground music flooded the city, eager to spend on much higher rents and cookie cutter chain experiences you might find anywhere else across America. Meanwhile, San Francisco’s long time residents, many of them renters and more importantly voters, put considerable effort into ensuring a far flung web of restrictions on almost any housing alterations or development whatsoever remain in place. It’s said to protect the city, but mostly it’s to keep their slice of life protected from change. The impact this has had on music and creators is obvious sometimes, and at other times outright tragic. There simply isn’t enough affordable housing, let alone event space. It’s a Bay Area wide problem. As venues dried up one major event changed the dance music landscape here once again. In early December of 2016, Ghost Ship, a legendary 2 story warehouse and artist studio that had become one of the epicenters of local underground music activity in no small part because it was one of the few places left that hadn’t been shut down and replaced with expensive condos yet, burned down. The Ghost Ship fire, which claimed a few dozen lives, sent shockwaves not just through the communities of people who were connected to those lost or who had passed through the space and its parties at one point or another, but also through the enforcement of fire and safety codes for all other venues in the Bay Area.
            <br /><br />
            Somehow, in the few years following, despite the chilling effects and lack of space, EDM in SF & Oakland started to thrive in an entirely different way than it had before. It’s become a major destination again, likely owed in part to the heavy representation of many Burning Man tribes of music makers, welders, light installation specialists, visual artists, circus performers, and more. It all seemed to be on a major uptick, and this time helped along by a wave of newer tech industry hires, most in their early 20’s and 30’s, single, eager to socialize, and with money to burn. Then, of course, the entire world shut down in March of 2020. 
            <br /><br />
            Is it any wonder the dance music has started to transform here once again?
            <br /><br />
            While San Francisco had its first taste of music NFTs in 2018 when 3LAU launched Our Music Festival (a “blockchain-powered” festival including Zedd as a headliner), it was a bit ahead of its time. The NFT boom started in late 2020 and has grown tremendously through late summer 2021 so far. It has attracted longtime dance music artists and entirely new talent with a promise that this time it will actually be quite different. While audio NFTs trail behind 2d, 3d, and motion visual content with a wide variety of utility, there’s been more than enough success so far to shake up the scene.
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Page9394
