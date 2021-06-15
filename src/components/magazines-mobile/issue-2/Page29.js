import React, { useRef, useState } from 'react';
import styles from './page29.module.scss';

const Page29 = () => {
  const [play, setPlay] = useState(false);
  const refAudio = useRef();

  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/33_34_mobile1.jpg" className={styles.back} />
      <div className={styles.text1}>FlamingoDAO</div>
      <div className={styles.borderDiv} />
      <div className={styles.text2}> Conversations with Pri Desai </div>
      <div className={styles.text3}> Conversations with Pri Desai </div>
      <div className={styles.text4}> Conversations with Pri Desai </div>
      <img
        src={`./magazine/2/images/33_34_${!play ? 'play' : 'pause'}.png`}
        className={styles.play}
        onClick={() => {
          if (!play) {
            refAudio.current.play();
          } else {
            refAudio.current.pause();
          }
          setPlay(!play);
        }}
      />
      <audio
        ref={refAudio}
        controls
        className={styles.audio}
        src="./magazine/2/images/33_34_audio.mp3"
      ></audio>
    </div>
  );
};

export default Page29;
