import React, { useRef, useState } from 'react';
import styles from './page71.module.scss'
import Link from 'next/link';

const Page71 = () => {
  const [play, setPlay] = useState(false);
  const [play1, setPlay1] = useState(false);
  const refAudio = useRef();
  const refAudio1 = useRef();
  return (
    <div className={styles.wrapper}>     
       <img src="/magazine/3/images/79_80/image2.png" className={styles.image3}/>
      <img src="/magazine/3/images/79_80/image3.png" className={styles.image2}/>
      <img src="/magazine/3/images/79_80/image9.png" className={styles.image15}/>
      <img src="/magazine/3/images/79_80/image5.png" className={styles.image5}/>
      <img
        src={`./magazine/3/images/79_80/${!play ? 'play1' : 'pause1'}.png`}
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
        <source src="./magazine/3/images/79_80/audio1.mp3" type="audio/mpeg" />
      </audio>
      <img src="/magazine/3/images/79_80/image10.png" className={styles.image6}/>
      <Link href="https://www.instagram.com/howiseedatworld/?hl=en">
        <a target="_blank">
          <div className={styles.image7}>
            <video className={styles.image8} muted loop autoPlay>
              <source src="./magazine/3/images/79_80/video1.mp4" type="video/mp4" />
            </video>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Page71