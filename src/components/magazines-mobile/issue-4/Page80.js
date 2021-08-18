import React, { useRef, useState }  from 'react'
import Link from 'next/link'
import styles from './page80.module.scss'

const Page80 = () => {
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
      <img src='/magazine/4/images/8788_image1_mobile.png' className={styles.image1} />
      <img src='/magazine/4/images/8788_image3.png' className={styles.image2} />

      <Link href='https://github.com/Heapons'>
        <a target='_blank'>
          <div className={styles.text1}>
            Heapons Returns With An OG SoundTrack + the Story of Serider.         
          </div>
          <div className={styles.text2}>
            Heapons Returns With An OG SoundTrack + the Story of Serider.         
          </div>
        </a>
      </Link>
      
      <Link href='https://discord.gg/nUfHJX2yEF'>
        <a target='_blank'>
          <div className={styles.text3}>
            Heapons on founding Serider
          </div>
        </a>
      </Link>
      <div className={styles.text4}>
        Did it ever happen to you, to complain about a company, like, "do they even listen to us?", "man, I wish they did this" well. 

        I want to satisfy people who think like that. I want to push my imagination to its limits, and eventually give people what they'd need/enjoy and listen to them, of course. one another goal of mine was to provide resources to people whether because they need to conveniently find everything they may need in one place or because they just can't access them and thus, The Ultimate Resources Kit was born:
      </div>
      <Link href='https://github.com/Serider-Team/The-Ultimate-Resources-Kit'>
        <a target='_blank'>
          <div className={styles.text5}>
            ULTIMATE RESOURCE KIT
          </div>
        </a>
      </Link>
      <div className={styles.text6}>
        <span>Open Source Gaming</span><br />
        I'm always down for sharing knowledge and power. Like, in the remixing community, people's main argument for not sharing project files is "but there are people who never put any effort in their content, and we want to avoid the plague" but what I think is that it's inevitable you can't just restrict genuine people from making a good use of it, whenever possible, at least
      </div>

      <button 
        className={[styles.playButton, isPlaying ? styles.isPlaying : ''].join(' ')}
        onClick={() => {
          isPlaying ? pauseAudio() : startAudio()
        }}
      >
        {
          <img src={`./magazine/4/images/8788_${isPlaying ? 'pausebutton' : 'playbutton'}.png`} />
        }
        
      </button>

      <audio ref={audioRef} loop>
        <source src='./magazine/4/sounds/8788_sound1.mp3' type='audio/mpeg' />
      </audio>
    </div>
  )
}

export default Page80