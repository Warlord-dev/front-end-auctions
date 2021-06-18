import React, { useRef, useState }  from 'react';
import styles from './page6566.module.scss';
import Link from 'next/link';

const Page6566 = () => {
  const audioRef1 = useRef()
  const audioRef2 = useRef()
  const audioRef3 = useRef()
  const audioRef4 = useRef()
  const audioRef5 = useRef()
  const [isPlayingAudio1, setIsPlayingAudio1] = useState(false)
  const [isPlayingAudio2, setIsPlayingAudio2] = useState(false)
  const [isPlayingAudio3, setIsPlayingAudio3] = useState(false)
  const [isPlayingAudio4, setIsPlayingAudio4] = useState(false)
  const [isPlayingAudio5, setIsPlayingAudio5] = useState(false)

  const startAudio1 = () => {
    audioRef1.current.play()
    setIsPlayingAudio1(true)
    pauseAudio2()
    pauseAudio3()
    pauseAudio4()
    pauseAudio5()
  };

  const pauseAudio1 = () => {
    audioRef1.current.pause()
    setIsPlayingAudio1(false)
  };

  const startAudio2 = () => {
    audioRef2.current.play()
    setIsPlayingAudio2(true)
    pauseAudio1()
    pauseAudio3()
    pauseAudio4()
    pauseAudio5()
  };

  const pauseAudio2 = () => {
    audioRef2.current.pause()
    setIsPlayingAudio2(false)
  };

  const startAudio3 = () => {
    audioRef3.current.play()
    setIsPlayingAudio3(true)
    pauseAudio1()
    pauseAudio2()
    pauseAudio4()
    pauseAudio5()
  };

  const pauseAudio3 = () => {
    audioRef3.current.pause()
    setIsPlayingAudio3(false)
  };

  const startAudio4 = () => {
    audioRef4.current.play()
    setIsPlayingAudio4(true)
    pauseAudio1()
    pauseAudio2()
    pauseAudio3()
    pauseAudio5()
  };

  const pauseAudio4 = () => {
    audioRef4.current.pause()
    setIsPlayingAudio4(false)
  };

  const startAudio5 = () => {
    audioRef5.current.play()
    setIsPlayingAudio5(true)
    pauseAudio1()
    pauseAudio2()
    pauseAudio3()
    pauseAudio4()
  };

  const pauseAudio5 = () => {
    audioRef5.current.pause()
    setIsPlayingAudio5(false)
  };
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/65_66/image1.png" className={styles.image1} />
      <div className={styles.image2}></div>
      <div className={styles.image3}></div>
      <div className={styles.image4}></div>
      <img src="./magazine/2/images/65_66/image8.gif" className={styles.image11} />
      <img src="./magazine/2/images/65_66/image2.png" className={styles.image5} />
      <img src="./magazine/2/images/65_66/image20.png" className={styles.image16} />
      <button 
       className={styles.image12}
        onClick={() => {
          isPlayingAudio1 ? pauseAudio1() : startAudio1()
        }}
      >
        {
          <img src={`./magazine/2/images/65_66/${isPlayingAudio1 ? 'image9.svg' : 'image11.png'}`} /> 
          
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
          <img src={`./magazine/2/images/65_66/${isPlayingAudio2 ? 'image10' : 'image3'}.png`} className="w-full h-full"  /> 
        }
      </button>
      <Link href="https://soundcloud.com/heapons/witch-encounter-see-me-now"><a>
      
      </a>
      </Link>
      <Link href="https://soundcloud.com/heapons/sets/timmyturnersgranddad"><a>
      <img src="./magazine/2/images/65_66/image5.png" className={styles.image8} />
      </a>
      </Link>
      <Link href="https://soundcloud.com/heapons/the-finalities"><a>
      <img src="./magazine/2/images/65_66/image6.png" className={styles.image9} />
      </a>
      </Link>
      <Link href="https://soundcloud.com/heapons/sparta-tetris"><a>
      <img src="./magazine/2/images/65_66/image7.png" className={styles.image10} />
      </a>
      </Link>
      <p className={styles.text2}>Witch Encounter & See Me Now have the same tempo</p>
      <p className={styles.text3}>Witch Encounter & See Me Now have the same tempo</p>
      <p className={styles.text4}>Witch Encounter & See Me Now have the same tempo</p>
      <p className={styles.text5}>I mean, it's true, right?</p>
      <img src="./magazine/2/images/65_66/image4.png" className={styles.image7} />
      <p className={styles.text6}>Check Out More of Heapons Music + Music Mods <Link href="https://soundcloud.com/heapons"><a target="_blank" className={styles.text9}>here!</a></Link> </p>
      <p className={styles.text7}>Heapons started out with MIDISlaps (downloading midis from the internet and slapping soundfonts in them) before moving on to learn more about music theory. </p>
      <p className={styles.text8}>Why does Heapons do it? Because he enjoys making melody swaps. Just like how SiIvaGunner does it. </p>
      <audio ref={audioRef1} loop>
        <source src="./magazine/2/images/65_66/audio2.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={audioRef2} loop>
        <source src="./magazine/2/images/65_66/audio1.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={audioRef3} loop>
        <source src="./magazine/2/images/65_66/audio3.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={audioRef4} loop>
        <source src="./magazine/2/images/65_66/audio4.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={audioRef5} loop>
        <source src="./magazine/2/images/65_66/audio5.mp3" type="audio/mpeg" />
      </audio>
      <button 
       className={styles.image13}
        onClick={() => {
          isPlayingAudio3 ? pauseAudio3() : startAudio3()
        }}
      >
        {
          <img src={`./magazine/2/images/65_66/${isPlayingAudio3 ? 'image17.png' : 'image15.png'}`} /> 
          
        }
      </button>

      <button 
       className={styles.image14}
        onClick={() => {
          isPlayingAudio4 ? pauseAudio4() : startAudio4()
        }}
      >
        {
          <img src={`./magazine/2/images/65_66/${isPlayingAudio4 ? 'image18.png' : 'image14.png'}`} /> 
          
        }
      </button>

      <button 
       className={styles.image15}
        onClick={() => {
          isPlayingAudio5 ? pauseAudio5() : startAudio5()
        }}
      >
        {
          <img src={`./magazine/2/images/65_66/${isPlayingAudio5 ? 'image19.png' : 'image16.png'}`} /> 
          
        }
      </button>
    </div>
  );
};

export default Page6566;
