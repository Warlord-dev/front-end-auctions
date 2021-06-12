import React, { useRef, useState } from 'react';
import styles from './page33.module.scss'
import Link from 'next/link';

const Page33 = () => {
  const audioRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)

  const startAudio = () => {
    audioRef.current.play()
    setIsPlaying(true)
  };

  const pauseAudio = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  };
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/59_60/image20.png" className={styles.image1} />
      <div className={styles.color1}></div>
      <div className={styles.color2}></div>
      <img src="./magazine/1/59_60/image6.png" className={styles.image6} />
      <div className={styles.color3}></div>
      <Link href="https://dxdao.eth.link/"><a>
        <img src="./magazine/1/59_60/image2.png" className={styles.image2} />
        </a>
       </Link>
      <img src="./magazine/1/59_60/image3.gif" className={styles.image3} />
      <img src="./magazine/1/59_60/image4.png" className={styles.image4} />
      <button 
        className={styles.image5}
        onClick={() => {
          isPlaying ? pauseAudio() : startAudio()
        }}
      >
        {
          <img src={`./magazine/1/59_60/${isPlaying ? 'image19' : 'image5'}.png`}/>
        }
      </button>
      <img src="./magazine/1/59_60/image8.png" className={styles.image8} />
      <img src="./magazine/1/59_60/image7.png" className={styles.image7} />
      <img src="./magazine/1/59_60/image9.png" className={styles.image9} />
      <Link href="https://swapr.eth.link/#/swap"><a>
        <img src="./magazine/1/59_60/image10.png" className={styles.image10} />
        </a>
       </Link>
       <Link href="https://dxdao.eth.link/#/"><a>
        <img src="./magazine/1/59_60/image10.png" className={styles.image11} />
        </a>
       </Link>
       <Link href="https://omen.eth.link/#/liquidity"><a>
        <img src="./magazine/1/59_60/image10.png" className={styles.image12} />
        </a>
       </Link>
       <Link href="https://discord.gg/4QXEJQkvHH"><a>
        <img src="./magazine/1/59_60/image11.png" className={styles.image13} />
        </a>
       </Link>
       <Link href="https://discord.gg/4QXEJQkvHH"><a>
        <img src="./magazine/1/59_60/image11.png" className={styles.image14} />
        </a>
       </Link>
       <Link href="https://discord.gg/4QXEJQkvHH"><a>
        <img src="./magazine/1/59_60/image11.png" className={styles.image15} />
        </a>
       </Link>
       <Link href="https://twitter.com/SwaprEth"><a>
        <img src="./magazine/1/59_60/image12.png" className={styles.image16} />
        </a>
       </Link>
       <Link href="https://twitter.com/DXdao_"><a>
        <img src="./magazine/1/59_60/image12.png" className={styles.image17} />
        </a>
       </Link>
       <Link href="https://twitter.com/Omen_eth"><a>
        <img src="./magazine/1/59_60/image12.png" className={styles.image18} />
        </a>
       </Link>
       <Link href="https://dxdao.medium.com/"><a>
        <img src="./magazine/1/59_60/image13.png" className={styles.image19} />
        </a>
       </Link>
       <Link href="hhttps://daotalk.org/c/dx-dao/15"><a>
        <img src="./magazine/1/59_60/image14.png" className={styles.image20} />
        </a>
       </Link>
      <p className={styles.text1}>DAO’ing Out With DXDAO Keenan + Caden</p>
      <p className={styles.text2}>A Real DAO. Swarm Knowledge. Open for Everyone. Information Symmetry. </p>
      <p className={styles.text3}>SOVEREIGNTY.<br/> ON-CHAIN. </p>
      <p className={styles.text4}>DECENTRALISATION MAXIMALISM.</p>
      <p className={styles.text5}>dxDAO is an ecosystem project developing across so many verticals that it is hard to really encompass it all in just a few words. However, with that said, some of the most important parts of dxDAO, and what truly makes it a real DAO is the fact that it isn’t a pay to vote/pay to participate ecosystem. This is bigger than it seems. With many DAOs (on-chain or not) you can go and purchase the token from the market, and, if you are a whale with enough buying power, you can purchase large enough amounts to sway the entire ecosystems vote or governance. This is not the case for dxDAO. You can ONLY get reputation, which is the voting power of dxDAO, by earning it. By actually contributing to the DAO in a way that supports, enhacces and furthers the collective mission of the DAO. . </p>
      <p className={styles.text6}>WANT TO START DAO’ING OUT WITH DXDAO AND GETTING REPUTATION?</p>
      <audio ref={audioRef} loop>
        <source src="./magazine/1/59_60/1.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default Page33