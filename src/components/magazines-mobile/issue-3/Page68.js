import React, { useRef, useState } from 'react';
import styles from './page68.module.scss'
import Link from 'next/link';

const Page68 = () => {
  const [play, setPlay] = useState(false);
  const [play1, setPlay1] = useState(false);
  const refAudio = useRef();
  const refAudio1 = useRef();
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/77_78/image2.png" className={styles.image3}/>
      <img src="/magazine/3/images/77_78/image3.png" className={styles.image2}/>
      <img src="/magazine/3/images/77_78/image9.png" className={styles.image15}/>
      <img src="/magazine/3/images/77_78/image5.png" className={styles.image5}/>
      <img
        src={`./magazine/3/images/77_78/${!play ? 'play1' : 'pause1'}.png`}
        className={styles.play1}
        onClick={() => {
          if (!play) {
            refAudio.current.play();
          } else {
            refAudio.current.pause();
          }
          setPlay(!play);
        }}
      />

      <audio className={styles.audio} ref={refAudio}>
        <source src="./magazine/3/images/77_78/audio1.mp3" type="audio/mpeg" />
      </audio>
      <img src="/magazine/3/images/77_78/image10.png" className={styles.image6}/>
      <Link href="https://www.instagram.com/howiseedatworld/?hl=en">
        <a target="_blank">
          <div className={styles.image7}>
            <video className={styles.image8} muted loop autoPlay>
              <source src="./magazine/3/images/77_78/video1.mp4" type="video/mp4" />
            </video>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Page68