import React, { useRef, useState } from 'react';
import styles from './page31.module.scss';

const Page31 = () => {
  const ref = useRef();
  const [play, setPlay] = useState(false);

  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/35_36_mobile1.jpg" className={styles.back} />
      <div className={styles.text1}>BUILDING THE OPEN FABRIC OF A NEW</div>
      <div className={styles.text2}>DIGITAL FASHION MOVEMENT</div>
      <div className={styles.text3}>USING WEB3, CRYPTO, NFTS, OPEN SOURCE</div>
      <div className={styles.text4}>
        TO EMPOWER AN ENTIRE DECENTRALISED TRIBE OF CREATORS ACROSS THE REALMS
      </div>
      <video ref={ref} muted={true} autoPlay loop className={styles.video}>
        <source src="./magazine/2/images/35_36_video.mp4" type="video/mp4" />
      </video>
      <img
        src={`./magazine/2/images/35_36_${!play ? 'play' : 'pause'}.png`}
        className={styles.play}
        onClick={() => {
          setPlay(!play);
          ref.current.muted = play;
        }}
      />
    </div>
  );
};

export default Page31;
