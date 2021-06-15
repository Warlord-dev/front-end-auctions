import React, { useRef, useState } from 'react';
import styles from './page30.module.scss';

const Page30 = () => {
  const ref1 = useRef();
  const [play, setPlay] = useState(false);
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/33_34_mobile.jpg" className={styles.back} />
      <video ref={ref1} muted={true} autoPlay loop className={styles.video}>
        <source src="./magazine/2/images/33_34_video.mp4" type="video/mp4" />
      </video>
      <img
        src={`./magazine/2/images/15_16_${!play ? 'play1' : 'pause1'}.png`}
        className={styles.play}
        onClick={() => {
          setPlay(!play);
          ref1.current.muted = play;
        }}
      />
      <div className={styles.text1}>
        DIGITALAX has collaborated with Maria Ruano and the Human Rights Foundation for the first
        digital fashion social asset NFT sale.
      </div>
      <div className={styles.text2}>
        THE Wear Your Values campaign BRINGS voice to both the exploitation, tyranny and oppression
        of workers along the supply chain, unseen Creators and more broadly highlighting the power
        of Fashion throughout all of this.
      </div>
      <div className={styles.text3}>
        Collaborating with DIGITALAX to draw attention to human rights concerns in closed societies,
        voice the importance of a globally transparent supply chain and bridge the Digi-Fizzy
        (Digital-Physical) realms for promoting positive compounding action & distributed content
        generation native to movements for social & economic change.
      </div>
      <div className={styles.text4}>Maria ruano</div>
      <div className={styles.text5}>
        We are embarking on this campaign with three 3d glitched digital fashion scenes highlighting
        the tension between the cross over from the physical to the digital and how Creators of all
        kinds summon the courage to leap into the unknown and take a stance against exploitation.
      </div>
      <div className={styles.textDiv1} />
      <div className={styles.text6}>Anyone can wear their values. Anyone can wear the mask.</div>
      <div className={styles.text7}>
        The Hecor Warrior Collection was designed by esteemed digital fashion designer, Maria Ruano,
        and animation, scenes and renders performed by DIGITALAX.
      </div>
    </div>
  );
};

export default Page30;
