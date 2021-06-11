import React, { useState, useRef } from 'react';
import styles from './page1516.module.scss';

const Page1516 = () => {
  const [play1, setPlay1] = useState(false);
  const [play2, setPlay2] = useState(false);
  const [play3, setPlay3] = useState(false);
  const [play4, setPlay4] = useState(false);
  const [play5, setPlay5] = useState(false);
  const [play6, setPlay6] = useState(false);
  const audio1 = useRef();
  const audio2 = useRef();
  const audio3 = useRef();
  const audio4 = useRef();
  const audio5 = useRef();
  const audio6 = useRef();

  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/15_16.png" className={styles.back} />
      <div className={styles.leftSideFrame}></div>
      <div className={[styles.animationFrame, styles.leftSideImageWrapper].join(' ')}>
        <img src="./magazine/2/images/howtogetintext 2.png" />
        <img src="./magazine/2/images/howtogetintext 2.png" />
        <img src="./magazine/2/images/howtogetintext 2.png" />
        <img src="./magazine/2/images/howtogetintext 2.png" />
      </div>
      <div className={styles.rightSideFrame}></div>
      <div className={[styles.animationFrame, styles.rightSideImageWrapper].join(' ')}>
        <img src="./magazine/2/images/howtogetintext 1.png" />
        <img src="./magazine/2/images/howtogetintext 1.png" />
        <img src="./magazine/2/images/howtogetintext 1.png" />
        <img src="./magazine/2/images/howtogetintext 1.png" />
      </div>
      <img src="./magazine/2/images/15_16_headphone.png" className={styles.headPhone} />
      <img src="./magazine/2/images/15_16_record1.png" className={styles.record1} />

      <img
        src={`./magazine/2/images/15_16_${!play5 ? 'play' : 'pause'}2.png`}
        className={styles.play5}
        onClick={() => {
          setPlay5(!play5);
          if (!play5) {
            audio5.current.play();
          } else {
            audio5.current.pause();
          }
        }}
      />
      <audio className={styles.audio} controls ref={audio5}>
        <source src="./magazine/2/images/15_16_play5.mp3" type="audio/mp3" />
      </audio>

      <a href="https://beta.catalog.works/">
        <img src="./magazine/2/images/15_16_logo.png" className={styles.logo} />
      </a>
      <div className={styles.textDiv1} />
      <div className={styles.text1}>
        Jeremy Stern and Mike McCain met in college at Northeastern in Boston and were living
        together for a while, both making music or producing it in some form or another, when they
        started to think more about the problems in the music industry; from convoluted ownership
        structures to really weird payment systems and artists just generally not getting their fair
        share of the pie and not earning the value that they create.
        <br />
        <br />
        So, from there they started experimenting with a music web three app called loft radio— a 24
        /7 chill beats radio, where you could tip the currently playing artists in small increments
        of Ether, and 100% of each tip would go directly to the artists wallet. However, when it
        came to scaling this up, the model wasn’t really right. So, the pair started looking more
        into social tokens and the potential for artists to be able to launch their own currency,
        which could be used kind of like rewards points, but also with different staking mechanisms
        etc. However, the market seemed still too early. So, this is when the Catalog that we know
        of today was formed; an NFT platform and marketplace for music artists.
        <br />
        <br />
        The platform itself is still in BETA and advancing in its engineering day by day, where the
        team has been building ever since initiation. It’s one of the more authentic NFT music
        platforms out there, that is truly focused on empowering artists directly, not about
        introducing just another hybrid web2 gatekeeper model through larger studios trying to mold
        chokepoints, that don’t fit for web3, in this new market.
        <br />
        <br />
        Join their{' '}
        <a href="https://catalog.community/" target="_blank">
          discord
        </a>{' '}
        to get more involved. It’s a blank canvas for a new world of music ownership.
      </div>
      <div className={styles.text2}>Web3 Music Bazaar</div>
      <div className={styles.text3}>Chatting with the Catalog Team; Jeremy and Mike</div>

      <img src="./magazine/2/images/15_16_vector1.png" className={styles.vector5} />
      <div className={styles.play6}> CLICK TO LISTEN </div>
      {/* <audio className={styles.audio} controls ref={audio2}>
        <source src="./magazine/2/images/15_16_play2.mp3" type="audio/mp3" />
      </audio> */}

      <img src="./magazine/2/images/15_16_footer.png" className={styles.footer} />
      <img src="./magazine/2/images/15_16_vector.png" className={styles.vector1} />
      <img src="./magazine/2/images/15_16_vector.png" className={styles.vector2} />
      <img src="./magazine/2/images/15_16_vector.png" className={styles.vector3} />
      <img src="./magazine/2/images/15_16_vector.png" className={styles.vector4} />
      <a href="https://beta.catalog.works/aer/medina" target="_blank" className={styles.text4}>
        {' '}
        Medina | Aer{' '}
      </a>
      <a
        href="https://beta.catalog.works/maelstrom/maalish"
        target="_blank"
        className={styles.text5}
      >
        {' '}
        Maalish | Maelstrom{' '}
      </a>
      <a
        href="https://beta.catalog.works/kaanbulak/falling-in-a-dream"
        target="_blank"
        className={styles.text6}
      >
        {' '}
        Falling In A Dream | Kaan Bulak{' '}
      </a>
      <a
        href="https://beta.catalog.works/cleareyes/growth-1615254797"
        target="_blank"
        className={styles.text7}
      >
        {' '}
        Growth | Clear Eyes{' '}
      </a>
      <img
        src={`./magazine/2/images/15_16_${!play1 ? 'play' : 'pause'}1.png`}
        className={styles.play1}
        onClick={() => {
          setPlay1(!play1);
          if (!play1) {
            audio1.current.play();
          } else {
            audio1.current.pause();
          }
        }}
      />
      <audio className={styles.audio} controls ref={audio1}>
        <source src="./magazine/2/images/15_16_play1.mp3" type="audio/mp3" />
      </audio>

      <img
        src={`./magazine/2/images/15_16_${!play2 ? 'play' : 'pause'}1.png`}
        className={styles.play2}
        onClick={() => {
          setPlay2(!play2);
          if (!play2) {
            audio2.current.play();
          } else {
            audio2.current.pause();
          }
        }}
      />
      <audio className={styles.audio} controls ref={audio2}>
        <source src="./magazine/2/images/15_16_play2.mp3" type="audio/mp3" />
      </audio>

      <img
        src={`./magazine/2/images/15_16_${!play3 ? 'play' : 'pause'}1.png`}
        className={styles.play3}
        onClick={() => {
          setPlay3(!play3);
          if (!play3) {
            audio3.current.play();
          } else {
            audio3.current.pause();
          }
        }}
      />
      <audio className={styles.audio} controls ref={audio3}>
        <source src="./magazine/2/images/15_16_play3.mp3" type="audio/mp3" />
      </audio>

      <img
        src={`./magazine/2/images/15_16_${!play4 ? 'play' : 'pause'}1.png`}
        className={styles.play4}
        onClick={() => {
          setPlay4(!play4);
          if (!play4) {
            audio4.current.play();
          } else {
            audio4.current.pause();
          }
        }}
      />
      <audio className={styles.audio} controls ref={audio4}>
        <source src="./magazine/2/images/15_16_play4.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Page1516;
