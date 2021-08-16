import React, { useRef, useState } from 'react'
import Link from 'next/link'
import styles from './page9596.module.scss'


const Page9596 = () => {
  const audioRef1 = useRef()
  const audioRef2 = useRef()

  const [isPlaying1, setIsPlaying1] = useState(false)
  const [isPlaying2, setIsPlaying2] = useState(false)

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

  return (
    <div className={styles.wrapper}>
      <div className={styles.back1}></div>
      <div className={[styles.textBack1, styles.musicFont, styles.greenColor].join(' ')}>
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
      <div className={[styles.textBack2, styles.musicFont, styles.greenColor].join(' ')}>
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
      <div className={[styles.textBack3, styles.musicFont, styles.greenColor].join(' ')}>
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
      <div className={[styles.textBack4, styles.musicFont, styles.greenColor].join(' ')}>
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
      <div className={[styles.textBack5, styles.musicFont, styles.greenColor].join(' ')}>
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

      <img className={styles.image1} src='./magazine/4/images/9596_image1.png' />
      <img className={styles.image2} src='./magazine/4/images/9596_image2.png' />
      <img className={styles.image3} src='./magazine/4/images/9596_image1.png' />
      <img className={styles.image4} src='./magazine/4/images/9596_image3.png' />

      <img className={styles.image5} src='./magazine/4/images/99100_image3.png' />
      <img className={styles.image6} src='./magazine/4/images/99100_image3.png' />

      <div className={styles.rect1}></div>

      <div className={styles.text1}>
        Christopher Leath aka "el gato #9" is a DJ/Producer of various genres electronic - <br />
        Techno, DnB, House, Dub, Down-tempo, Dancehall, Ambient, and Experimental.  
        <br /><br />
        He is the label owner of El Otro Mundo Recordings and Bloo Neko Recordings based out of the South Bay Area of San Francisco, California.   
        <br /><br />
        Some of his other releases were included on the labels Resource Records, Kitchen Whore Records, and Black Catalogue.  Several remix collaborations have included artists Lisa Dewey, Max Gardner,  Chris Jackson, Paul Leath, Monty Luke, Mossmoss, The Rhythmist, DJ Spun, and Jay Tripwire.   Many of his musical influences range from Stevie Wonder, James Brown, Prince, Brian Eno,  Cocteau Twins, Kraftwerk, Depeche Mode, Sade, Harold Budd, Mozart, Bjork, Aphex Twin, Jeff Mills,  Drexciya, Robert Rich, and Steve Roach.  
        <br /><br />
        He also has several monikers that developed over the years:  <br />
        - Leathal (which is the b2b DJ duo team with his brother Paul Leath)<br />
        - blu c<br />
        - space kitty (which is the production collaboration with the late Uchuu Saru)
        <br /><br />
        * A legendary radio show host Jackie O from the Big Love Show on KZSU 90.1 FM / Stanford put together this additional bio for him:  
        <br /><br />
        "I want to frame this artist's bio as a cat in its 9th life. 
        <br /><br />
        Thus, the bio should be a list of the 8 previous lives of El Gato (the cat). 
        <br /><br />
        I would need the 8 'influences' or 'identities' of Christopher Leath, and a short description of each one. All of these 8 prior lives of the cat will eventually lead to what Chris is now, as El Gato #9. 
        <br /><br />
        For example: Life #1: Parents' influence Life  #2: The 80s Life  #3: San Francisco Bay Area Life #4: Acid Life  #5: Techno Life  #6: Leathal Life  #7: EOM Life #8: Experimentation etc., etc. The idea is to have 'The 8 previous [identities] of El Gato and now, we have El Gato #9 - a cat on its 9th incarnation, and it is all of these things and more.  " 
      </div>

      <Link href='https://soundcloud.com/elgato9'>
        <a target='_blank'>
          <div className={styles.text2}>
            Christopher Leath
          </div>
        </a>
      </Link>

      <div className={styles.rect2}></div>
      
      <img className={styles.circle1} src='./magazine/4/images/9394_image3.png' />
      <img className={styles.circle2} src='./magazine/4/images/9394_image3.png' />

      <img className={styles.image7} src='./magazine/4/images/9596_image4.png' />
      <img className={styles.image8} src='./magazine/4/images/9596_image5.gif' />
      <img className={styles.image9} src='./magazine/4/images/9596_image5.gif' />

      <Link href='https://www.mixcloud.com/paulleath/'>
        <a target='_blank'>
          <div className={styles.text3}>
            PAUL LEATH
          </div>
        </a>
      </Link>

      <div className={styles.text4}>
        Paul Leath has taken on several roles with his involvement in the electronic community, promoter, agent, manager and record distribution. During this entire span, always producing and deejaying.
        <br /><br />
        New projects currently involve the development and expansion of El Otro Mundo Productions. The "umbrella" of every project involves members of the collective.
        <br /><br />
        El Otro Mundo Recordings is the original label from El Otro Mundo Productions started by his brother, Christopher aka El Gato.  Friction Recordings is a sub-label created by Paul, focusing on the driving aspects of techno and house. The concept of Friction is used in our design and production. It is part of this world that stimulates while keeping us "grounded.
        <br /><br />
        Currently working with DJ Emma Jean for a DJ/Producer project named Black Boxx.
      </div>
      
      <div className={styles.mindText1}>MINDMELD</div>
      <div className={styles.mindText2}>MINDMELD</div>
      <div className={styles.mindText3}>MINDMELD</div>
      <div className={styles.mindText4}>MINDMELD</div>
      <div className={styles.mindText5}>MINDMELD</div>
      <div className={styles.mindText6}>MINDMELD</div>
      <div className={styles.mindText7}>MINDMELD</div>
      <div className={styles.mindText8}>MINDMELD</div>

      <div
        className={styles.playButton1}
        onClick={() => {
          isPlaying1 ? pauseAudio1() : startAudio1()
        }}
      >
        <img className={styles.imageBack} src='/magazine/4/images/9596_button_back.png' />
        {
          !isPlaying1
          ? <img className={styles.imagePlay} src='/magazine/4/images/9596_playbutton.png' />
          : <img className={styles.imagePause} src='/magazine/4/images/9596_pausebutton.png' />
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
          ? <img className={styles.imagePlay} src='/magazine/4/images/9596_playbutton.png' />
          : <img className={styles.imagePause} src='/magazine/4/images/9596_pausebutton.png' />
        }
      </div>

      <audio ref={audioRef1} loop>
        <source src='/magazine/4/sounds/9596_sound1.mp3' type='audio/mpeg' />
      </audio>
      <audio ref={audioRef2} loop>
        <source src='/magazine/4/sounds/9596_sound2.mp3' type='audio/mpeg' />
      </audio>
    </div>
  )
}

export default Page9596
