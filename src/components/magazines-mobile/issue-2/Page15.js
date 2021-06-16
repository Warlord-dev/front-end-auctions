import React, { useRef, useState }  from 'react';
import styles from './page15.module.scss'
import Link from 'next/link';

const Page15 = () => {
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const [isPlaying1, setIsPlaying1] = useState(false)
  const [isPlaying2, setIsPlaying2] = useState(false)
  const [isPlaying3, setIsPlaying3] = useState(false)
  const [isPlaying4, setIsPlaying4] = useState(false)
  const startAudio1 = () => {
    ref1.current.play()
    setIsPlaying1(true)
  };
  const pauseAudio1 = () => {
    ref1.current.pause()
    setIsPlaying1(false)
  };
  const startAudio2 = () => {
    ref2.current.play()
    setIsPlaying2(true)
  };
  const pauseAudio2 = () => {
    ref2.current.pause()
    setIsPlaying2(false)
  };
  const startAudio3 = () => {
    ref3.current.play()
    setIsPlaying3(true)
  };
  const pauseAudio3 = () => {
    ref3.current.pause()
    setIsPlaying3(false)
  };
  const startAudio4 = () => {
    ref4.current.play()
    setIsPlaying4(true)
  };
  const pauseAudio4 = () => {
    ref4.current.pause()
    setIsPlaying4(false)
  };
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/15_16/mobile/image1.png" className={styles.image1} />
      <img src="./magazine/2/images/15_16/mobile/image2.png" className={styles.image2} />
      <img src="./magazine/2/images/15_16/mobile/image4.png" className={styles.image4} />
      <img src="./magazine/2/images/15_16/mobile/image1.png" className={styles.image12} />
      <img src="./magazine/2/images/15_16/mobile/image2.png" className={styles.image22} />
      <img src="./magazine/2/images/15_16/mobile/image11.png" className={styles.image13} />
      <img src="./magazine/2/images/15_16/mobile/image12.png" className={styles.image14} />
      <img src="./magazine/2/images/15_16/mobile/image14.png" className={styles.image18} />
      <p className={styles.text5 }>Chatting with the Catalog Team; Jeremy and Mike</p>
      <Link href="https://beta.catalog.works/"><a target="_blank">
      <img src="./magazine/2/images/15_16/mobile/image8.png" className={styles.image3} />
      </a>
      </Link>
      
      <Link href="https://beta.catalog.works/kaanbulak/falling-in-a-dream"><a target="_blank">
      <p className={styles.text3 }>Falling In A Dream | Kaan Bulak</p>
      </a>
      </Link>
      <div className={styles.image19} >
      <button 
       className={styles.image21}
        onClick={() => {
          isPlaying4 ? pauseAudio4() : startAudio4()
        }}
      >
        {
          <img src={`./magazine/2/images/15_16/mobile/${isPlaying4 ? 'image10.png' : 'image9.png'}`} /> 
          
        }
      </button>
      </div>
      <div className={styles.image6} >
      <img src="./magazine/2/images/15_16/mobile/image5.png" className={styles.image7} />
      <button 
       className={styles.image8}
        onClick={() => {
          isPlaying1 ? pauseAudio1() : startAudio1()
        }}
      >
        {
          <img src={`./magazine/2/images/15_16/mobile/${isPlaying1 ? 'image7.png' : 'image6.png'}`} /> 
          
        }
      </button>
      </div>
      <div className={styles.image15} >
      <img src="./magazine/2/images/15_16/mobile/image13.png" className={styles.image16} />
      <button 
       className={styles.image17}
        onClick={() => {
          isPlaying3 ? pauseAudio3() : startAudio3()
        }}
      >
        {isPlaying3 ? 
        <p>PAUSE</p>
        :
        <p>CLICK TO LISTEN</p>
        }
      </button>
      </div>
      <Link href="https://beta.catalog.works/cleareyes/growth-1615254797"><a target="_blank">
      <p className={styles.text4 }>Growth | Clear Eyes</p>
      </a>
      </Link>
      <div className={styles.image9} >
      <img src="./magazine/2/images/15_16/mobile/image5.png" className={styles.image10} />
      <button 
       className={styles.image11}
        onClick={() => {
          isPlaying2 ? pauseAudio2() : startAudio2()
        }}
      >
        {
          <img src={`./magazine/2/images/15_16/mobile/${isPlaying2 ? 'image7.png' : 'image6.png'}`} /> 
          
        }
      </button>
      <audio ref={ref1} loop>
        <source src="./magazine/2/images/15_16/mobile/audio3.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={ref2} loop>
        <source src="./magazine/2/images/15_16/mobile/audio4.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={ref3} loop>
        <source src="./magazine/2/images/15_16/mobile/audio6.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={ref4} loop>
        <source src="./magazine/2/images/15_16/mobile/audio5.mp3" type="audio/mpeg" />
      </audio>
      </div>
    </div>
  )
}

export default Page15