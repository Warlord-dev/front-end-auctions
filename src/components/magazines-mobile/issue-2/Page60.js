import React, { useRef, useState } from 'react';
import styles from './page60.module.scss'

const Page60 = () => {
  const ref1 = useRef()
  const ref2 = useRef()
  const [isPlaying1, setIsPlaying1] = useState(false)
  const [isPlaying2, setIsPlaying2] = useState(false)
  const playVideo1 = () => {
    if(isPlaying1) {
      ref1.current.pause();
      setIsPlaying1(false)
    } else {
      ref1.current.play();
      setIsPlaying1(true)
    }
  }
  const playVideo2 = () => {
    if(isPlaying2) {
      ref2.current.pause();
      setIsPlaying2(false)
    } else {
      ref2.current.play();
      setIsPlaying2(true)
    }
  }
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/87_88/image8.png" className={styles.image6} />
      <img src="./magazine/1/87_88/image7.gif" className={styles.image6} />
      <div className={styles.image7}>
        <div className={styles.image9}>
        <video ref={ref1} className={styles.image8} loop>
          <source src="./magazine/1/87_88/video1.MOV" type="video/mp4" />
        </video>
        </div>
        <button onClick={()=>{playVideo1()}} className={styles.playbutton}><img src={`./magazine/1/87_88/${isPlaying1 ? 'pause' : 'play'}.png`} /></button>
      </div>

      <div className={styles.image10}>
        <div className={styles.image11}>
        <video ref={ref2} className={styles.image12} loop>
          <source src="./magazine/1/87_88/video2.MOV" type="video/mp4" />
        </video>
        </div>
        <button onClick={()=>{playVideo2()}} className={styles.playbutton}><img src={`./magazine/1/87_88/${isPlaying2 ? 'pause' : 'play'}.png`} /></button>
      </div>
      <div className={styles.image13}>
      </div>
    </div>
  )
}

export default Page60