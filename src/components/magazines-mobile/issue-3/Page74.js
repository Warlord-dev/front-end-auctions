import React, { useEffect, useState, useRef } from 'react';
import styles from './page74.module.scss'
import ReactAnime from 'react-animejs'

const Page74 = () => {
  const {Anime, stagger} = ReactAnime
  const ref1 = useRef();
  
  const handleProgress = () => {
    ref1.current.onplay = () => {
      ref1.current.addEventListener('timeupdate', () => {
        document.getElementById("myRange").value = Math.floor(ref1.current.currentTime / ref1.current.duration * 100)
        // setProgressValue(Math.floor(ref1.current.currentTime / ref1.current.duration * 100))
      }, true)
    }
  }
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/83_84/image4.png" className={styles.image1}/>
     <p className={styles.text1}>Consent & Decentralisation </p>
     <p className={styles.text2}>Miko Matsumura</p>
     <audio className={styles.audio} ref={ref1} onLoadedData={() => handleProgress()}>
        <source src="/magazine/3/images/83_84/audio1.mp3" type="audio/mp3" />
      </audio>
     <div className={styles.anim}>
      <Anime
        initial={[
          {
            targets: "#blue",
            translateX: 220,
            loop: true,
            easing: 'easeOutQuad',
            autoPlay: false,
            scale: 1,
            rotate: 99,
            duration: 1500,
          }
        ]}
      >
        <div
          className={styles.blue} id="blue"
        />
      </Anime>
      <Anime
        initial={[
          {
            targets: "#green",
            translateX: 268,
            loop: true,
            easing: 'easeOutQuad',
            scale: 1.6,
            rotate: -184,
            duration: 1500,
          }
        ]}
      >
        <div
          className={styles.green} id="green"
        />
      </Anime>
      <Anime
        initial={[
          {
            targets: "#red",
            translateX: 220,
            loop: true,
            easing: 'easeOutQuad',
            scale: 1.7,
            rotate: 150,
            duration: 1500,
          }
        ]}
      >
        <div
          className={styles.red} id="red"
        />
      </Anime>
      <input
        type="range"
        min="1"
        max="100"
        className={styles.slider}
        id="myRange"
        value={0}
        onChange={e => console.log(setControl(["seek", e.currentTarget.value]))}
      />
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => {
            console.log("play")
            ref1.current.play();
          }}
        >
          Play
        </button>
        <button
          className={styles.button}
          onClick={() => {
            console.log("pause");
            ref1.current.pause();
          }}
        >
          Pause
        </button>
        <button
          className={styles.button}
          onClick={() => {
            ref1.current.pause();
            ref1.current.currentTime = 0;
            ref1.current.play();
          }}
        >
          Restart
        </button>
        </div>
      
      </div>
    </div>
  )
}

export default Page74