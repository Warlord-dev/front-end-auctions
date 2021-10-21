import React, { useRef, useState } from 'react';
import Link from 'next/link';
import styles from './page6768.module.scss';

const Page6768 = () => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const startAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className={styles.wrapper}>
      <img src="/magazine/6/images/67_68_back.jpg" className={styles.back} />
      <a href="" target="_blank">
        <div className={styles.text1}>João Pereira</div>
      </a>
      <div className={styles.rect1} />
      <a href="https://twitter.com/nnnnicholas" target="_blank">
        <div className={styles.text2}>nicholas.sol</div>
      </a>
      <div className={styles.text3}>
        TUNE IN FOR EVERYTHING crypto art, nfts, building communities in web3, awesome daos to check
        out and more!
      </div>
      <div className={styles.text4}>
        <span>
          Can you tell us more about how you got into 3D design and what inspired you to go down
          that path?
        </span>
        <br />
        I've always been doing Visual effects and art since I got a computer, I followed a different
        path down the road when I got into college though. The moment I built my portfolio and sent
        it to the biggest Company in Portugal and got a job offer everything changed for me, I quit
        college and started working on the area I love.
        <br />
        <br />
        <span>
          Do you have any cool stories that you can share behind any of the artworks/pieces that you
          have released?
        </span>
        <br />
        I'm in Love with Real world Simulations, I love all the process of converting natural
        phenomena onto Mathematical equations. Doing it in a visual form makes it even more
        satisfying.
        <br />
        <br />
        <span>
          How did you find about NFTs and what's your process for ideating the story behind an art
          NFT? Is it different to how you've ideated art concepts/pieces outside of web3?
        </span>
        <br />
        Found it though a friend, told me about it and I was instantly in love with the idea. I
        don't see a difference to the process to be honest, I just create it as it was for myself or
        my company.
        <br />
        <br />
        <span>
          Can you tell us more about the art/NFT scene in Portugal? Are there many artists that you
          know of exploring more of web3 and going down this rabbit hole?{' '}
        </span>
        <br />
        In Portugal Art in general is really underrated and under invested. People here don't look
        at Art like it's worth the time or money, they take it for granted. We have talented Artists
        here, Vhils is one of them, pushing it thorough the NFT and real world space! For sure an
        inpiration!
        <br />
        <br />
        <span>
          Lisbon is a very active tech and innovation hub and this nexus has accelerated a lot
          during the pandemic, do you know of more artists/entrepreneurs/creators moving to the city
          over the past year? Would you suggest for more creators to check out the location?{' '}
        </span>
        <br />
        If you are into it and plan to come here, for sure you need to come to Web-summit. Outside
        that, Lisbon is a beautiful city, you find so much of everything, people, architecture,
        food, culture...
        <br />
        <br />
        <span>
          Do you hope/plan to move into selling NFTs as a full time thing or are you already doing
          this or instead are eager to move full time into other parts of web3 i.e. DAOs etc.?
        </span>
        <br />I don't plan to, I just really love the tech and people behind this new space! I love
        my job doing commercials, doing a NFT for me is a question of time and standards. I don't
        like to rush things, It may take me 1 week or 1 year to finish a piece, I just need to make
        sure it makes sense for me and I'm truly happy with it.
        <br />
        <br />
        <span>
          A tough question— any advice for new creators/artists exploring NFTs for the first time?
        </span>
        <br />
        Don't give up, don't rush things, don't lose focus. If you love your art and you stay
        consistent you'll eventually make it!
      </div>
      <video autoPlay muted loop className={styles.video1}>
        <source src="/magazine/6/images/67_68_video1.mp4" />
      </video>
      <video autoPlay muted loop className={styles.video2}>
        <source src="/magazine/6/images/67_68_video2.mp4" />
      </video>
      <video autoPlay muted loop className={styles.video3}>
        <source src="/magazine/6/images/67_68_video3.mp4" />
      </video>

      <a href="" target="_blank" className={styles.link1}>
        SHARKDAO
      </a>
      <img
        src={`/magazine/6/images/67_68_${!isPlaying ? 'play' : 'pause'}.png`}
        onClick={() => {
          isPlaying ? pauseAudio() : startAudio();
        }}
        className={!isPlaying ? styles.play : styles.pause}
      />
      <audio ref={audioRef} loop>
        <source src="./magazine/6/images/67_68_audio.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Page6768;
