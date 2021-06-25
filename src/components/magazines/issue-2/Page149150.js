import React, { useRef, useState } from 'react';
import styles from './page149150.module.scss';

const Page149150 = () => {
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
      <img src="./magazine/2/images/147_148/image1.png" className={styles.back} />
      <img src="./magazine/2/images/149_150/image1.png" className={styles.image2} />
      <div className={styles.image1}>
        <video muted autoPlay loop className={styles.video1} ref={ref1}>
          <source src="./magazine/2/images/149_150/video1.mp4" type="video/mp4" />
        </video>
        <button onClick={()=>{playVideo1()}}><img src={`./magazine/2/images/149_150/${isPlaying1 ? 'pause' : 'play'}.png`} className={styles.playbutton1}/></button>
      </div>
      <div className={styles.image3}>
        <video muted autoPlay loop className={styles.video2} ref={ref2}>
          <source src="./magazine/2/images/149_150/video2.mp4" type="video/mp4" />
        </video>
        <button onClick={()=>{playVideo2()}}><img src={`./magazine/2/images/147_148/${isPlaying2 ? 'pause' : 'play'}.png`} className={styles.playbutton2}/></button>
      </div>
    </div>
  );
};

export default Page149150;
