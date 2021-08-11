import React, { useRef, useState } from 'react'
import Link from 'next/link'
import styles from './page8586.module.scss'


const Page8586 = () => {
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
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>
      <img className={styles.image1} src='/magazine/4/images/8586_image1.png' />
      <img className={styles.image2} src='/magazine/4/images/8586_image2.png' />
      <img className={styles.image3} src='/magazine/4/images/8586_image3.png' />

      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>

      <img className={styles.image4} src='/magazine/4/images/8586_image4.png' />
      <img className={styles.image5} src='/magazine/4/images/8586_image5.png' />
      <img className={styles.image6} src='/magazine/4/images/8586_image6.png' />
      <img className={styles.image7} src='/magazine/4/images/8586_image6.png' />

      <video autoPlay muted loop className={styles.video1}>
        <source src='/magazine/4/videos/8586_video1.mp4' type='video/mp4' />
      </video>
      <video autoPlay muted loop className={styles.video2}>
        <source src='/magazine/4/videos/8586_video2.mp4' type='video/mp4' />
      </video>

      <Link href='https://github.com/Heapons'>
        <a target='_blank'>
          <div className={styles.textWrapper}>
            <div className={styles.text1}>
              Heapons Returns With An OG SoundTrack + the Story of Serider.         
            </div>
            <div className={styles.text2}>
              Heapons Returns With An OG SoundTrack + the Story of Serider.         
            </div>
          </div>
        </a>
      </Link>
      <div className={styles.text3}>
        Wanderer
      </div>
      <div className={styles.text4}>
        KEY: E MINOR
      </div>
      <div className={styles.text5}>
        Heapons on founding Serider
      </div>
      <Link href='https://discord.gg/nUfHJX2yEF'>
        <a target='_blank'>
          <div className={styles.text6}>
            SERIDER
          </div>
        </a>
      </Link>
      <div className={styles.text7}>
        I was 12-13 years old at the time. I was bored as usual, but then I remembered about a game named Gang Garrison 2. Being hesitant at first, I decided to give it a shot anyway. I played and had a bit of fun. But then I saw how empty the game was, and I thought of making my own server. Thing is I didn't even know how to create my own server, especially on my own laptop like that. But one day, I've 'accidentally' managed to make my server visible to the public, and a guy joined, sounds cliché, Ikr lol/ I was happy so I decided to host more often. As time went on my server was one of the most popular and even more players were playing the game afterwards, I've met AKVARI. 
        <br /><br />
        <span>
          Actually wait, something happened before that, I named my server 'Serider' 
          because I wanted something that sounded like a 'server'...so I thought 'Server + Side', and then I had Serider. 
        </span>
        <br /><br />
        So back to the tracks, as I was saying I met AKVARI not too long after we eventually became really good friends and then I thought of making my own clan, heck, even community. I decided to stick to the 'Serider' name so it 'globalizes' everything. My clan, my community, and my server. I made AKVARI the co-leader of Serider, and he was doing a pretty good job at it, he even recruited people and organized events, then more and more members came, people started to hear of us and then I met even more people, made even more friends, etc.
      </div>
      <div className={styles.text8}>
        Did it ever happen to you, to complain about a company, like, 'do they even listen to us?', 'man, I wish they did this' well. 
        <br /><br />
        I want to satisfy people who think like that. I want to push my imagination to its limits, and eventually give people what they'd need/enjoy and listen to them, of course. one another goal of mine was to provide resources to people whether because they need to conveniently find everything they may need in one place or because they just can't access them and thus, The Ultimate Resources Kit was born:
      </div>
      <Link href='https://github.com/Serider-Team/The-Ultimate-Resources-Kit'>
        <a target='_blank'>
          <div className={styles.text9}>
            ULTIMATE RESOURCE KIT
          </div>
        </a>
      </Link>
      <div className={styles.text10}>
        <span>Open Source Gaming</span><br />
        I'm always down for sharing knowledge and power. Like, in the remixing community, people's main argument for not sharing project files is 'but there are people who never put any effort in their content, and we want to avoid the plague' but what I think is that it's inevitable you can't just restrict genuine people from making a good use of it, whenever possible, at least
      </div>
      <div className={styles.text11}>
        The First Dungeon        
      </div>
      <div className={styles.text12}>
        Open Source 2D Battle Royale
      </div>
      <div className={styles.text13}>
        Ideated & Engineered by&nbsp;
        <Link href='https://github.com/ThijmenHappy'>
          <a target='_blank'>
            Thijmen Happy 
          </a>
        </Link>
      </div>
      <div className={styles.text14}>
        Survive as the last man standing. The timer is on; every 1 minute a part of the dungeon will close & become dangerous to be in, dealing you damage. You can pickup weapons and ammo all over the dungeon and you will get the loot that other players drop if you eliminate them.
      </div>
      <div className={styles.text15}>
        Hello I am Thijmen Happy. I am a indie game developer who is currently working on a battle royale game named The First Dungeon. I use the Unity Game Engine and have been for the last couple of years.
      </div>
      <div className={styles.text16}>
        Thijmen Happy 
      </div>
      <div className={styles.text17}>
        Unique Collectible PFP Avatars (Also Featured During W3FW...get a unique avatar with every Fashion Week NFT Purchase!)
      </div>
      <div className={styles.text18}>
        LAUNCHING WITH ESPA. COMING SOON!
      </div>

       <button 
        className={[styles.playButton, isPlaying ? styles.isPlaying : ''].join(' ')}
        onClick={() => {
          isPlaying ? pauseAudio() : startAudio()
        }}
      >
        {
          <img src={`./magazine/4/images/8586_${isPlaying ? 'pausebutton' : 'playbutton'}.png`} />
        }
        
      </button>

      <audio ref={audioRef} loop>
        <source src='./magazine/4/sounds/8586_sound1.mp3' type='audio/mpeg' />
      </audio>
    </div>
  )
}

export default Page8586
