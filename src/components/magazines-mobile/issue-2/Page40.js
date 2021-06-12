import React, { useRef, useState }  from 'react';
import styles from './page40.module.scss'
import Link from 'next/link';

const Page40 = () => {
  const audioRef1 = useRef()
  const audioRef2 = useRef()
  const [isPlayingAudio1, setIsPlayingAudio1] = useState(false)
  const [isPlayingAudio2, setIsPlayingAudio2] = useState(false)

  const startAudio1 = () => {
    audioRef1.current.play()
    setIsPlayingAudio1(true)
    pauseAudio2()
  };

  const pauseAudio1 = () => {
    audioRef1.current.pause()
    setIsPlayingAudio1(false)
  };

  const startAudio2 = () => {
    audioRef2.current.play()
    setIsPlayingAudio2(true)
    pauseAudio1()
  };

  const pauseAudio2 = () => {
    audioRef2.current.pause()
    setIsPlayingAudio2(false)
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.image2}></div>
      <div className={styles.image3}></div>
      <div className={styles.image4}></div>
      <img src="./magazine/1/65_66/image8.gif" className={styles.image11} />
      <img src="./magazine/1/65_66/image2.png" className={styles.image5} />
      <button 
       className={styles.image12}
        onClick={() => {
          isPlayingAudio1 ? pauseAudio1() : startAudio1()
        }}
      >
        {
          <img src={`./magazine/1/65_66/${isPlayingAudio1 ? 'image9.svg' : 'image11.png'}`} /> 
          
        }
      </button>
      <p className={styles.text1}>HEAPONS</p>
      <button 
       className={styles.image6}
        onClick={() => {
          isPlayingAudio2 ? pauseAudio2() : startAudio2()
        }}
      >
        {
          <img src={`./magazine/1/65_66/${isPlayingAudio2 ? 'image10' : 'image3'}.png`} className="w-full h-full"  /> 
        }
      </button>
      <Link href="https://soundcloud.com/heapons/witch-encounter-see-me-now"><a>
      
      </a>
      </Link>
      <Link href="https://soundcloud.com/heapons/sets/timmyturnersgranddad"><a>
      <img src="./magazine/1/65_66/image5.png" className={styles.image8} />
      </a>
      </Link>
      <Link href="https://soundcloud.com/heapons/the-finalities"><a>
      <img src="./magazine/1/65_66/image6.png" className={styles.image9} />
      </a>
      </Link>
      <Link href="https://soundcloud.com/heapons/sparta-tetris"><a>
      <img src="./magazine/1/65_66/image7.png" className={styles.image10} />
      </a>
      </Link>
      <p className={styles.text2}>Witch Encounter & See Me Now have the same tempo</p>
      <p className={styles.text3}>Witch Encounter & See Me Now have the same tempo</p>
      <p className={styles.text4}>Witch Encounter & See Me Now have the same tempo</p>
      <p className={styles.text5}>I mean, it's true, right?</p>
      <img src="./magazine/1/65_66/image13.png" className={styles.image7} />
      <p className={styles.text6}>Check Out More of Heapons Music + Music Mods here! </p>
      <p className={styles.text7}>Heapons started out with MIDISlaps (downloading midis from the internet and slapping soundfonts in them) before moving on to learn more about music theory. </p>
      <p className={styles.text8}>Why does Heapons do it? Because he enjoys making melody swaps. Just like how SiIvaGunner does it. </p>
      <audio ref={audioRef1} loop>
        <source src="./magazine/1/65_66/audio2.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={audioRef2} loop>
        <source src="./magazine/1/65_66/audio1.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default Page40