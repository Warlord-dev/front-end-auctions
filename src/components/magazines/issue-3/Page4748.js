import React from 'react';
import styles from './page4748.module.scss';
import ReactAnime from 'react-animejs'


const Page4748 = () => {
  const {Anime, stagger} = ReactAnime
  const handleChange = () => {

  }
  return (
    <div className={styles.wrapper}>
      <section>
        <article>
        <Anime
        initial={[
          {
            targets: "#anim1",
            translateX: 160,
            scale: 1.9,
            rotate: -188,
            duration: 1400,
            loop: true,
            easing: "easeOutQuad"
          }
        ]}
      >
        <div className={styles.blue} id="anim1"></div>
      </Anime>
      <Anime
        initial={[
          {
            targets: "#anim2",
            translateX: 224,
            scale: 1.8,
            rotate: 349,
            duration: 1400,
            loop: true,
            easing: "easeOutQuad"
          }
        ]}
      >
        <div className={styles.green} id="anim2"></div>
        {/* <div className={styles.red} id="anim"></div> */}
      </Anime>
      <Anime
        initial={[
          {
            targets: "#anim3",
            translateX: 176,
            scale: 1.3,
            rotate: 230,
            duration: 1400,
            loop: true,
            easing: "easeOutQuad"
          }
        ]}
      >
        <div className={styles.red} id="anim3"></div>
      </Anime>
        </article>
          <input className={styles.progress} type="range" value="0" min="0" max="100" onChange={() => handleChange()}></input>
        <fieldset>
          <button className={styles.play}>Play</button>
          <button className={styles.pause}>Pause</button>
          <button className={styles.restart}>Restart</button>
        </fieldset>
      </section>
    </div>
  );
};

export default Page4748;
