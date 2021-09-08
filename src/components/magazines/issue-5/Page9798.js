import React, { useRef, useState }  from 'react'
import Link from 'next/link'
import styles from './page9798.module.scss'


const Page9798 = () => {
  const audioRef1 = useRef()
  const audioRef2 = useRef()
  const audioRef3 = useRef()

  const [isPlaying1, setIsPlaying1] = useState(false)
  const [isPlaying2, setIsPlaying2] = useState(false)
  const [isPlaying3, setIsPlaying3] = useState(false)

  const startAudio1 = () => {
    audioRef1.current.play()
    setIsPlaying1(true)
  }

  const pauseAudio1 = () => {
    audioRef1.current.pause()
    setIsPlaying1(false)
  }
  
  const startAudio2 = () => {
    audioRef2.current.play()
    setIsPlaying2(true)
  }

  const pauseAudio2 = () => {
    audioRef2.current.pause()
    setIsPlaying2(false)
  }
  
  const startAudio3 = () => {
    audioRef3.current.play()
    setIsPlaying3(true)
  }

  const pauseAudio3 = () => {
    audioRef3.current.pause()
    setIsPlaying3(false)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.back1}></div>
      <div className={[styles.textBack1, styles.musicFont, styles.redColor].join(' ')}>
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
      <div className={[styles.textBack2, styles.musicFont, styles.redColor].join(' ')}>
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
      <div className={[styles.textBack3, styles.musicFont, styles.redColor].join(' ')}>
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
      <div className={[styles.textBack4, styles.musicFont, styles.redColor].join(' ')}>
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
      <div className={[styles.textBack5, styles.musicFont, styles.redColor].join(' ')}>
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
      
      <div className={[styles.textBack6, styles.musicFont, styles.whiteColor].join(' ')}>
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

      <div className={[styles.textBack7, styles.musicFont, styles.whiteColor].join(' ')}>
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


      <img className={styles.image1} src='./magazine/4/images/9798_image2.png' />
      <img className={styles.image2} src='./magazine/4/images/9798_image1.png' />
      <img className={styles.image3} src='./magazine/4/images/9798_image2.png' />

      <img className={styles.image4} src='./magazine/4/images/99100_image3.png' />
      <img className={styles.image5} src='./magazine/4/images/99100_image3.png' />

      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <img className={styles.circle1} src='./magazine/4/images/9394_image3.png' />

      <img className={styles.image6} src='./magazine/4/images/9798_image3.png' />
      <img className={styles.image7} src='./magazine/4/images/9798_image4.gif' />
      <img className={styles.image8} src='./magazine/4/images/9798_image4.gif' />
      <img className={styles.image9} src='./magazine/4/images/9798_image4.gif' />
      <img className={styles.image10} src='./magazine/4/images/9798_image4.gif' />
      <img className={styles.image11} src='./magazine/4/images/9798_image4.gif' />

      <img className={styles.image12} src='./magazine/4/images/9798_image5.png' />

      <Link href='https://soundcloud.com/elgato9'>
        <a target='_blank'>
          <h1>
            Arturo Garces
          </h1>
        </a>
      </Link>
      <h2>
        With a solid collection of tracks, Arturo's music has helped define the unique and emerging Silicon Valley sound. This approach blends the driving, beat-laden beauty of techno with the soulful, deep melodies of house.
        <br /><br />
        Born and raised in San Jose, California, Arturo Garces has been surrounded by dance music his entire life. The son of a serious collector of funk, soul and disco records, Arturo grew up listening to the roots of house music. These early influences are evident in his works as a DJ and producer today. Interested in making his own music, Arturo got hold of a sampler in 1995 and hasn't looked back since.
        <br /><br />
        He has released on both established & strictly underground labels like Robsoul, Cross Section, Henry Street Music, Magnetic, Kolour, Oomph, Jump Recordings, MoodyHouse Recordings, Solid Trax. 
        <br /><br />
        Today Arturo is the label manager for San Jose's house imprint Jump Recordings, Beat Bum Music, and techno label Resource Records. He also holds a Tuesday night residency in downtown San Jose, Ca called Rhythm Ritual. With his hard work, dedication and passion for dance music, Arturo is definitely one to watch.
      </h2>

      {/* <Link href='https://soundcloud.com/elgato9'>
        <a target='_blank'> */}
      <h3>
        DOSC
      </h3>
        {/* </a>
      </Link> */}
      <div className={styles.text1}>
        Hailing from San Francisco, Dosc (Jason Urbina) is creating his artistic foothold in the dance music industry by blending genre-specific sounds to produce tracks that unite divisions of music. With his releases on San Francisco's own Mioli Music - 'Constant' and 'Kimono' , Dosc delivers a unique, bold flavor of Techno and House. His technical style pushes the boundaries of music production as a result of his influences throughout his musical career.
        <br /><br />
        Dosc got his first door opened in the industry in 2008 working as a Sound Engineer at 17 Hertz Studios formerly based in Hayward, CA. He recorded, mixed, and mastered a vast array of Rap, Hyphy, RnB and Hip-Hop projects; from artists such as The Jacka, AP9, E-40, Husalah, Dem Hoodstarz, Big Rich, J-Diggs, Jimmie Reign, Shad-Gee, D-Lo, Philthy Rich, and Larry June. This exposure yielded a reflection of the Bay Area's signature raw percussion and heavy bass in Dosc's track composition.
      </div>
      <div className={styles.text2}>
        Included in this decade, Dosc was attending Ex'Pression College for the Digital Arts. There he became acquaintances with Rodrigo Quinonez and Stephen Campodonico (RQ&SC) of the label RE-SET Audio. Dosc was introduced to the world         
      </div>
      <div className={styles.text3}>
        of Minimal Techno and grew to love the complexity and technicality of the sound. The micro-timbre drum patterns and dark tonal synths of this genre became a huge element in Dosc's arsenal; synonymous in style with artists like Dubfire, Richie Hawtin, Worakls, and Stephan Bodzin.
        <br /><br />
        Additionally in the same network, he met two of his early mentors - Cove and Daegon of the label Frucht headquartered in Berlin, Germany. Through Cove and Daegon, Dosc was exposed to the world of Techno and Tech-House as well as his first dip into the performance side of the industry: mixing and DJ'ing. This new knowledge of Techno & Tech-House led Dosc to love artists such as Format: B, Paco Osuna, Pan-Pot, Carl Cox, Joseph Capriarti, Oscar L, ANNA, Nicole Moudaber and Maceo Plex.
        <br /><br />
        Collectively, this spectrum of influences has shaped Dosc's sound into his releases you hear today. However, it doesn't stop there - the very same experiences molded the appeal of his set performances.
        <br /><br />
        Curation and delivery are fundamental to Dosc and reverberate in the energy of his shows. He can be heard at San Francisco's Great Northern, 1015 Folsom, Monarch, The End Up, and many underground gigs. Along with Mioli, Dosc has partnered with Housepitality, Techno Bunker, Bassment Sessions, Studio, Infected Frequencies, Red Monkey, G-Code and more to create a synergistic, cross-genre, multidimensional sound experience.
        <br /><br />
        Dosc lives outside of the box, and embodies a full creative spectrum; making you aware of that is his passion.      
      </div>
      
      <div className={styles.nestingText1}>
        NESTING BERLIN        
      </div>
      <div className={styles.nestingText2}>
        NESTING BERLIN        
      </div>
      <div className={styles.nestingText3}>
        NESTING BERLIN        
      </div>
      <div className={styles.nestingText4}>
        NESTING BERLIN        
      </div>
      <div className={styles.nestingText5}>
        NESTING BERLIN        
      </div>
      <div className={styles.nestingText6}>
        NESTING BERLIN        
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

      <div
        className={styles.playButton2}
        onClick={() => {
          isPlaying2 ? pauseAudio2() : startAudio2()
        }}
      >
        <img className={styles.imageBack} src='/magazine/4/images/9596_button_back.png' />
        {
          !isPlaying2
          ? <img className={styles.imagePlay} src='/magazine/4/images/9798_playbutton.png' />
          : <img className={styles.imagePause} src='/magazine/4/images/9798_pausebutton.png' />
        }
      </div>

      <div
        className={styles.playButton3}
        onClick={() => {
          isPlaying3 ? pauseAudio3() : startAudio3()
        }}
      >
        <img className={styles.imageBack} src='/magazine/4/images/9596_button_back.png' />
        {
          !isPlaying3
          ? <img className={styles.imagePlay} src='/magazine/4/images/9798_playbutton.png' />
          : <img className={styles.imagePause} src='/magazine/4/images/9798_pausebutton.png' />
        }
      </div>

      <audio ref={audioRef1} loop>
        <source src='/magazine/4/sounds/9798_sound1.mp3' type='audio/mpeg' />
      </audio>
      <audio ref={audioRef2} loop>
        <source src='/magazine/4/sounds/9798_sound2.mp3' type='audio/mpeg' />
      </audio>
      <audio ref={audioRef3} loop>
        <source src='/magazine/4/sounds/9798_sound3.mp3' type='audio/mpeg' />
      </audio>
    </div>
  )
}

export default Page9798
