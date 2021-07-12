import React, { useRef, useState } from 'react';
import styles from './page4748.module.scss';
import ReactAnime from 'react-animejs'


const Page4748 = () => {
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
      <img src="/magazine/3/images/47_48/image1.png" className={styles.image1}/>
      <div className={styles.image2}></div>
      <p className={styles.text1}>Anna was born in the Soviet Union a year after the collapse and grew up in a middle-class family in Odessa, Ukraine.  Her mother, who was from Siberia, met her father in Ukraine, where they fell in love and decided to live on the Black Sea. Odessa is a wonderful place to grow up. The kind of place where you can experience all 4 seasons, eat organic fruits and vegetables, breathe healing air and enjoy the Black Sea vibes.  Anna’s childhood was filled with creation and activities, and almost every summer she visited her grandparents in a Siberian village, where she learned some of the world’s wonders and the alchemy of connection with her Soul. 
<br/><br/>
At four years of age Anna created her first conscious self portrait.  “I will always remember how I painted my first portrait sitting in front of the mirror for several hours without stopping. I remember I was wearing pink earrings with a ruby and green flannel shirt.  Sleepy eyes with disheveled hair.  I was serious and a focused child who accepted herself with full embrace, true to herself in the moment.”  
When she turned six she went to after school art classes “ART studios” and met her teacher Maya Arsentievna. Here she studied all different art styles and techniques, and was encouraged to participate across a multitude of drawing competitions. This love for her craft inspired Anna to later go on to complete a bachelor and master degree from Odessa State Academy of Civil Engineering and Architecture. This educational experience opened up her potential in structuring and programming that she still to this day directly integrates into her art creation process. Her favorite disciplines are across academic art,  building design, and ecology. 
<br/><br/>
After her graduate studies, Anna worked three years in an architectural firm before setting off on a global nomadic pursuit from India to Thailand, Bali, Spain, Italy, and Bulgaria. Travelling the world by herself she finally settled in San Francisco, California. She is currently designing immersive Art life experiences and hosting open studio events across different venues throughout the Bay Area. </p> 
      <img src="/magazine/3/images/47_48/image2.png" className={styles.image3}/>
      <img src="/magazine/3/images/47_48/image5.png" className={styles.image4}/>
      <img src="/magazine/3/images/47_48/image2.png" className={styles.image5}/>
      <p className={styles.text2}>BLOCKCHAIN CYBERSECURITY</p> 
      <div className={styles.image6}></div>
      <div className={styles.image7}></div>
      <p className={styles.text3}>BLOCKCHAIN CYBERSECURITY</p> 
      <p className={styles.text4}>BLOCKCHAIN CYBERSECURITY</p> 
      <img src="/magazine/3/images/47_48/image3.png" className={styles.image6}/>
      <img src="/magazine/3/images/47_48/image4.png" className={styles.image7}/>
      <div className={styles.image8}>
        <div className={styles.image9}>
          <video ref={ref1} className={styles.image10} muted autoPlay loop>
            <source src="./magazine/3/images/47_48/video1.mp4" type="video/mp4" />
          </video>
        </div>
        <button onClick={()=>{playVideo1()}}><img src={`./magazine/3/images/47_48/${isPlaying1 ? 'pause' : 'play'}.png`} className={styles.playbutton1}/></button>
      </div>
      <p className={styles.text5}>Fairy House</p> 
      <div className={styles.image11}>
        <div className={styles.image12}>
          <video ref={ref2} className={styles.image13} muted autoPlay loop>
            <source src="./magazine/3/images/47_48/video2.mp4" type="video/mp4" />
          </video>
        </div>
        <button onClick={()=>{playVideo2()}}><img src={`./magazine/3/images/47_48/${isPlaying2 ? 'pause' : 'play'}.png`} className={styles.playbutton2}/></button>
      </div>
      <p className={styles.text6}>Palo Santo</p> 
      <div className={styles.image14}>
        <div className={styles.image15}>
          <video ref={ref3} className={styles.image16} muted autoPlay loop>
            <source src="./magazine/3/images/47_48/video3.mp4" type="video/mp4" />
          </video>
        </div>
        <button onClick={()=>{playVideo3()}}><img src={`./magazine/3/images/47_48/${isPlaying3 ? 'pause' : 'play'}.png`} className={styles.playbutton2}/></button>
      </div>
      <p className={styles.text7}>Light Body</p> 
    </div>
  );
};

export default Page4748;
