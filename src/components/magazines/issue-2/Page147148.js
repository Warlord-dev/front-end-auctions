import React, { useRef, useState } from 'react';
import styles from './page147148.module.scss';

const Page147148 = () => {
  const ref1 = useRef()
  const ref2 = useRef()
  const [isPlaying1, setIsPlaying1] = useState(false)
  const [isPlaying2, setIsPlaying2] = useState(false)
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
 
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/147_148/image1.png" className={styles.image1} />
      <img src="./magazine/2/images/147_148/image2.png" className={styles.image3} />
      <div className={styles.image2}></div>
      <div className={styles.image4}>
        <p className={styles.text1}>After dropping out of college after his first year, Arjay was homeless and working double shifts just to get time in the studio but going back to his old life was never an option. While confident in his own sound and calling as an artist, he finds inspiration from Grammy Award winning artists like H.E.R., Drake, and Jhené Aiko. He also lives by the quote, “Luck is just being prepared at all times, so when the door opens you’re ready”, stated by one of the most illustrious artists in rap history – Nipsey Hussle who Arjay references in his single “Numb Rant”.</p>
      </div>
      <div className={styles.image6}></div>
      <div className={styles.image5}>
        <video muted autoPlay loop className={styles.video1} ref={ref1}>
          <source src="./magazine/2/images/147_148/video1.mp4" type="video/mp4" />
        </video>
        <button onClick={()=>{playVideo1()}}><img src={`./magazine/2/images/147_148/${isPlaying1 ? 'pause' : 'play'}.png`} className={styles.playbutton1}/></button>
      </div>
      <div className={styles.image7}>
        <video muted autoPlay loop className={styles.video2} ref={ref2}>
          <source src="./magazine/2/images/147_148/video2.mp4" type="video/mp4" />
        </video>
        <button onClick={()=>{playVideo2()}}><img src={`./magazine/2/images/147_148/${isPlaying2 ? 'pause' : 'play'}.png`} className={styles.playbutton1}/></button>
      </div>
      <img src="./magazine/2/images/147_148/image3.png" className={styles.image8} />
      <img src="./magazine/2/images/147_148/image4.png" className={styles.image9} />
      <img src="./magazine/2/images/147_148/image5.png" className={styles.image10} />
      <img src="./magazine/2/images/147_148/image6.png" className={styles.image11} />
      <p className={styles.text2}>ARJAY SOUL</p>
      <p className={styles.text3}>Not your regular R&B singer – the versatile and independent artist – ArjaySoul is not afraid to take risks when creating his own waves in music. The Arizona-native is no stranger to turning heartbreak to breakthrough and adapting to his environment. At 13 years old his father was shot, but as he expresses in his single, “Worst Behavior”, he knew a shift in his emotions was necessary to level up his mindset.</p>
      <p className={styles.text4}>Go Behind the Scenes for Arjay’s FIRST SOLD OUT CONCERT. </p>
    </div>
  );
};

export default Page147148;
