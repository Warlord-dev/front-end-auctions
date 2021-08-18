import React, { useRef, useState } from 'react'
import Link from 'next/link'
import styles from './page89.module.scss'

const Page89 = () => {
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
      <div className={styles.textPatternWrapper}>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
        <div className={styles.textPattern}>
          Rhythm to the verse  Rhythm to the verse
        </div>
      </div>

      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      <div className={styles.rect1}></div>

      <img className={styles.image1} src='/magazine/4/images/99100_image3.png' />
      <img className={styles.image2} src='/magazine/4/images/9798_image4.gif' />
      <img className={styles.image3} src='/magazine/4/images/9798_image4.gif' />
      <img className={styles.image4} src='/magazine/4/images/9798_image4.gif' />

      <img className={styles.image5} src='/magazine/4/images/9798_image3.png' />

      <Link href='https://soundcloud.com/elgato9'>
        <a target='_blank'>
          <div className={styles.text1}>
            Arturo Garces        
          </div>
        </a>
      </Link>

      <div className={styles.text2}>
        With a solid collection of tracks, Arturo's music has helped define the unique and emerging Silicon Valley sound. This approach blends the driving, beat-laden beauty of techno with the soulful, deep melodies of house.
        <br /><br />
        Born and raised in San Jose, California, Arturo Garces has been surrounded by dance music his entire life. The son of a serious collector of funk, soul and disco records, Arturo grew up listening to the roots of house music. These early influences are evident in his works as a DJ and producer today. Interested in making his own music, Arturo got hold of a sampler in 1995 and hasn't looked back since.
        <br /><br />
        He has released on both established & strictly underground labels like Robsoul, Cross Section, Henry Street Music, Magnetic, Kolour, Oomph, Jump Recordings, MoodyHouse Recordings, Solid Trax. 
        <br /><br />
        Today Arturo is the label manager for San Jose's house imprint Jump Recordings, Beat Bum Music, and techno label Resource Records. He also holds a Tuesday night residency in downtown San Jose, Ca called Rhythm Ritual. With his hard work, dedication and passion for dance music, Arturo is definitely one to watch.
      </div>

      <div className={styles.text3}>
        COMMUNICATION
      </div>
      
      <div className={styles.text4}>
        MOOD
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

      <audio ref={audioRef1} loop>
        <source src='/magazine/4/sounds/9798_sound1.mp3' type='audio/mpeg' />
      </audio>
      <audio ref={audioRef2} loop>
        <source src='/magazine/4/sounds/9798_sound2.mp3' type='audio/mpeg' />
      </audio>
    </div>
  )
}

export default Page89