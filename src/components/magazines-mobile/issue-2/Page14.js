import React, { useRef, useState }  from 'react';
import styles from './page14.module.scss'
import Link from 'next/link';

const Page14 = () => {
  const ref1 = useRef()
  const ref2 = useRef()
  const [isPlaying1, setIsPlaying1] = useState(false)
  const [isPlaying2, setIsPlaying2] = useState(false)
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
  return (
    <div className={styles.wrapper}> 
      <img src="./magazine/2/images/15_16/mobile/image1.png" className={styles.image1} />
      <img src="./magazine/2/images/15_16/mobile/image2.png" className={styles.image2} />
      <img src="./magazine/2/images/15_16/mobile/image4.png" className={styles.image4} />
      <img src="./magazine/2/images/15_16/mobile/image1.png" className={styles.image12} />
      <img src="./magazine/2/images/15_16/mobile/image2.png" className={styles.image14} />
      <img src="./magazine/2/images/15_16/mobile/image14.png" className={styles.image13} />
      <div className={styles.image5}></div>
      <Link href="https://beta.catalog.works/"><a target="_blank">
      <img src="./magazine/2/images/15_16/mobile/image3.png" className={styles.image3} />
      </a>
      </Link>
      <p className={styles.text1 }>Web3 Music Bazaar</p>
      <p className={styles.text2 }>Jeremy Stern and Mike McCain met in college at Northeastern in Boston and were living together for a while, both making music or producing it in some form or another, when they started to think more about the problems in the music industry; from convoluted ownership structures to really weird payment systems and artists just generally not getting their fair share of the pie and not earning the value that they create. 
<br/><br/>
So, from there they started experimenting with a music web three app called loft radio— a 24 /7 chill beats radio, where you could tip the currently playing artists in small increments of Ether, and 100% of each tip  would go directly to the artists wallet. However, when it came to scaling this up, the model wasn’t really right. So, the pair started looking more into social tokens and the potential for artists to be able to launch their own currency, which could be used kind of like rewards points, but also with different staking mechanisms etc. However, the market seemed still too early. So, this is when the Catalog that we know of today was formed; an NFT platform and marketplace for music artists. 
<br/><br/>
The platform itself is still in BETA and advancing in its engineering day by day, where the team has been building ever since initiation. It’s one of the more authentic NFT music platforms out there, that is truly focused on empowering artists directly, not about introducing just another hybrid web2 gatekeeper model through larger studios trying to mold chokepoints, that don’t fit for web3, in this new market. 
<br/><br/>
Join their discord to get more involved. It’s a blank canvas for a new world of music ownership.</p>
      <Link href="https://beta.catalog.works/aer/medina"><a target="_blank">
      <p className={styles.text3 }>Medina | Aer</p>
      </a>
      </Link>
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
      <Link href="https://beta.catalog.works/maelstrom/maalish"><a target="_blank">
      <p className={styles.text4 }>Maalish | Maelstrom</p>
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
        <source src="./magazine/2/images/15_16/mobile/audio1.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={ref2} loop>
        <source src="./magazine/2/images/15_16/mobile/audio2.mp3" type="audio/mpeg" />
      </audio>
      </div>
    </div>
  )
}

export default Page14