import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import UnlockPage from '../common/UnlockPage';
import styles from './page8788.module.scss';

const Page8788 = () => {
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const [isPlaying1, setIsPlaying1] = useState(false)
  const [isPlaying2, setIsPlaying2] = useState(false)
  const [isPlaying3, setIsPlaying3] = useState(false)
  const playVideo1 = () => {
    if(isPlaying1) {
      ref1.current.muted = true;
      setIsPlaying1(false)
    } else {
      ref1.current.muted = false;
      setIsPlaying1(true)
    }
  }
  const playVideo2 = () => {
    if(isPlaying2) {
      ref2.current.muted = true;
      setIsPlaying2(false)
    } else {
      ref2.current.muted = false;
      setIsPlaying2(true)
    }
  }
  const playVideo3 = () => {
    if(isPlaying3) {
      ref3.current.muted = true;
      setIsPlaying3(false)
    } else {
      ref3.current.muted = false;
      setIsPlaying3(true)
    }
  }
    return (
      <div className={styles.wrapper}>
      <img src="./magazine/1/87_88/image1.png" className={styles.image1} />
      <img src="./magazine/1/87_88/image2.png" className={styles.image2} />
      <img src="./magazine/1/87_88/image3.png" className={styles.image3} />
      <img src="./magazine/1/87_88/image4.png" className={styles.image4} />
      <img src="./magazine/1/87_88/image5.png" className={styles.image5} />
      <img src="./magazine/1/87_88/image7.gif" className={styles.image6} />
      <img src="./magazine/1/87_88/image8.png" className={styles.image6} />
      <div className={styles.image7}>
        <div className={styles.image9}>
        <video ref={ref1} className={styles.image8} muted autoPlay loop>
          <source src="./magazine/1/87_88/video1.mp4" type="video/mp4" />
        </video>
        </div>
        <button onClick={()=>{playVideo1()}}><img src={`./magazine/1/87_88/${isPlaying1 ? 'pause' : 'play'}.png`} className={styles.playbutton}/></button>
      </div>
      <div className={styles.image10}>
        <div className={styles.image11}>
        <video ref={ref2} className={styles.image12} muted autoPlay loop>
          <source src="./magazine/1/87_88/video2.mp4" type="video/mp4" />
        </video>
        </div>
        <button onClick={()=>{playVideo2()}}><img src={`./magazine/1/87_88/${isPlaying2 ? 'pause' : 'play'}.png`} className={styles.playbutton}/></button>
      </div>
      <div className={styles.image13}>
      <div className={styles.image18}>
        <video ref={ref3} className={styles.image19} muted autoPlay loop>
          <source src="./magazine/1/87_88/video3.mp4" type="video/mp4" />
        </video>
        </div>
        <button onClick={()=>{playVideo3()}}><img src={`./magazine/1/87_88/${isPlaying3 ? 'pause' : 'play'}.png`} className={styles.playbutton}/></button>
      </div>
      <div className={styles.image15}>
        <p className={styles.text5}>PORTAL</p>
        <p className={styles.text6}>9EN travels through different dimensions, virtual realms, and eventually makes it to Earth. A portal she uses through hyperspace travel is a symbol portrayed in this particular NFT. The symbol tends to stretch out due to a gravitational singularity in which there's a chaotic oscillation of the stretching and squeezing of space during an interstellar journey. </p>
      </div>
      <div className={styles.image16}>
        <p className={styles.text7}>SEE</p>
        <p className={styles.text8}>9EN is seen to be approaching a symbol she's curious to know more about. Her first encounter with the symbol feels like a magnetic effect that's pulling her closer and closer. She enters the portal. </p>
      </div>
      <div className={styles.image17}>
        <p className={styles.text9}>SAVAGE</p>
        <p className={styles.text10}>When 9EN is traveling through the virtual realms of the Earth she stumbles upon a song called 'Savage' by Megan Thee Stallion. This NFT presents a tunnel trip featuring 'Savage' remixed by 9EN. </p>
      </div>
      <p className={styles.text1}>

9EN (short for 9EN3TRIX) is the world’s first virtual DJ, Music Producer - artist. The project was born as an idea/concept to inspire people around the globe through immersive audio and video art installations that would enable a viewer/listener to dive in and experience various virtual realms of the metaverse followed by a storyline. Virtual presence of the 9EN project provides us with the audio and image development designed to truly transcend time and space. The project is aiming to launch its first audio and video art installation by the end of 2021. </p>
      <p className={styles.text2}>The 9EN Project</p>
      <p className={styles.text3}>9EN3TRIX derived from a Latin word “Genetrix” - She that produces, a mother (A Latin Dictionary. Founded on Andrews' edition of Freund's Latin dictionary. revised, enlarged, and in great part rewritten by. Charlton T. Lewis, Ph.D. and. Charles Short, LL.D. Oxford. Clarendon Press. 1879). The title of the project has been inspired by the notion of “Gaia Paradigm” - a hypothesis suggesting the unification of all living in the biosphere. In ancient history it was believed that if such an entity really exists and possesses self-awareness it might well have taken on the role of mother – Gaia (Aegean and Anatolian cultures), Genetrix (Greek mythology), Umai (Turkic cultures). </p>
      <p className={styles.text4}>9EN project is solely virtual and was born into the blockchain. Through digifizzy 9en is completing its very first nft drop with a mix of audio visual nfts.</p>
    </div>
  );
};

export default Page8788;
