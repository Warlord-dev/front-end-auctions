import React, { useEffect, useState, useRef } from 'react';
import styles from './page8182.module.scss';
import Link from 'next/link';
import ReactAnime from 'react-animejs'

const Page8182 = () => {
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
      <img src="/magazine/3/images/81_82/image1.png" className={styles.image1}/>
      <div className={styles.image2}>
        <video className={styles.image3} muted loop autoPlay>
          <source src="./magazine/3/images/81_82/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <p className={styles.text1}>Gatekeeper Gardens</p>
      <p className={styles.text2}>Destroy the wall</p>
      <p className={styles.text3}>Sifting through the web2 weeds— spotlighting stories from the walled gardens where they love to tangle and lurk. </p>
      <p className={styles.text4}>These days, it seems that there is no end to the constant hurdles being put in place to separate customers from compassionate, intellectually sound humans for customer service agents.  Instead, most of us are used to interacting with some AI chatbot that in almost everyway is a complete black box— this is made abundantly clear when any question outside a generic conversation A/B decision tree is injected. </p>
      <p className={styles.text5}>This is not the bitter complaint of a customer who has been burned once. Rather, it’s much more of a look into an insidious, looming and almost invisible problem. The very algorithms that we see at work everyday in the world around us, directly shape and influence the constraints and limits to our capacity. It might have once made sense to be hopeful about how extreme logical automation could actually improve the experience of humanity, but this is naive. Because, who designs these algorithms? At this point it’s shitty algorithms designing more shitty algorithms. And the problem has come that now these shitty algorithms are eating the internal workings and decision making processes of global and international mega companies.
<br/><br/>
One of those is the everything store; Amazon. And at the heart of this is its all powerful physical and digital cloud brain trust— AWS. The entire customer service and support supply chain is black boxed to the point where it is unlikely that any human being has any idea how the full system works.</p>
      <p className={styles.text6}>And with so many global interactions and transactions taking place every minute within this system, it’s scary to think of the scale of impact that a centralised line of code with near zero human oversight can have in dominating control on the outcomes of so many people and lives. More problems are being created than being solved, and it only further reinforces that while some algorithms attempt to eat the world it is really decentralisation that needs to eat them. Bon Appétit! </p>
      <img src="/magazine/3/images/81_82/image2.png" className={styles.image4}/>
      <img src="/magazine/3/images/81_82/image3.png" className={styles.image5}/>
      <img src="/magazine/3/images/81_82/image5.png" className={styles.image6}/>
      <p className={styles.text7}>AWS.</p>
      <p className={styles.text8}>Consent & Decentralisation</p>
      <Link href="https://twitter.com/mikojava">
        <a target="_blank">
        <p className={styles.text9}>Miko Matsumura</p>
        </a>
      </Link>
      
      <audio className={styles.audio} ref={ref1} onLoadedData={() => handleProgress()}>
        <source src="/magazine/3/images/81_82/audio1.mp3" type="audio/mp3" />
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
            ref1.current.play();
          }}
        >
          Play
        </button>
        <button
          className={styles.button}
          onClick={() => {
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
  );
};

export default Page8182;
