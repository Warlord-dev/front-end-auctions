import React, { useRef, useState } from 'react';
import styles from './page149150.module.scss';

const Page149150 = () => {
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const [isPlaying1, setIsPlaying1] = useState(false)
  const [isPlaying2, setIsPlaying2] = useState(false)
  const [isPlaying3, setIsPlaying3] = useState(false)
  const [isPlaying4, setIsPlaying4] = useState(false)
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
  const playVideo4 = () => {
    if(isPlaying4) {
      ref4.current.muted = true;
      setIsPlaying4(false)
    } else {
      ref4.current.muted = false;
      setIsPlaying4(true)
    }
  }
 
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/147_148/image1.png" className={styles.back} />
      <img src="./magazine/2/images/149_150/image1.png" className={styles.image2} />
      {/* <div className={styles.image1}>
        <video muted autoPlay loop className={styles.video1} ref={ref1}>
          <source src="./magazine/2/images/149_150/bts.mp4" type="video/mp4" />
        </video>
        <button onClick={()=>{playVideo1()}}><img src={`./magazine/2/images/149_150/${isPlaying1 ? 'pause' : 'play'}.png`} className={styles.playbutton1}/></button>
      </div>
      <div className={styles.image3}>
        <video muted autoPlay loop className={styles.video2} ref={ref2}>
          <source src="./magazine/2/images/149_150/video2.mp4" type="video/mp4" />
        </video>
        <button onClick={()=>{playVideo2()}}><img src={`./magazine/2/images/147_148/${isPlaying2 ? 'pause' : 'play'}.png`} className={styles.playbutton2}/></button>
      </div>
      <div className={styles.image4}>
        <video muted autoPlay loop className={styles.video3} ref={ref3}>
          <source src="./magazine/2/images/149_150/video3.mp4" type="video/mp4" />
        </video>
        <button onClick={()=>{playVideo3()}}><img src={`./magazine/2/images/147_148/${isPlaying3 ? 'pause' : 'play'}.png`} className={styles.playbutton3}/></button>
      </div> */}
      <div className={styles.image5}>
        <video muted autoPlay loop className={styles.video4} ref={ref4}>
          <source src="./magazine/2/images/149_150/video4.mp4" type="video/mp4" />
        </video>
        <button onClick={()=>{playVideo4()}}><img src={`./magazine/2/images/147_148/${isPlaying4 ? 'pause' : 'play'}.png`} className={styles.playbutton3}/></button>
      </div>
    </div>
  );
};

export default Page149150;
