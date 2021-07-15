import React, { useRef, useState } from 'react';
import styles from './page30.module.scss';
import Link from 'next/link';

const Page30 = () => {
  const ref1 = useRef();
  const [play, setPlay] = useState(false);
  return (
    <div className={styles.wrapper}>
       <img src="/magazine/3/images/35_36/image8.png" className={styles.image1}/>  
       <div className={styles.image2}>
        <img src="/magazine/3/images/35_36/image2.gif" className={styles.image3}/>   
      </div>
      <p className={styles.text1}>Upgrading Optionality. </p> 
      <Link href="https://www.opyn.co/">
        <a target="_blank">
        <p className={styles.text2}>opyn</p> 
        </a>
      </Link>
      <audio className={styles.audio} ref={ref1}>
        <source src="/magazine/3/images/35_36/audio1.mp3" type="audio/mp3" />
      </audio>
      <button className={styles.play} onClick={() => {
          setPlay(!play);
          if (!play) {
            ref1.current.play();
          } else {
            ref1.current.pause();
          }
        }}><img src={`./magazine/3/images/35_36/${play ? 'pause' : 'play'}.png`} className={styles}/></button>
      <img src="/magazine/3/images/35_36/arrow.png" className={styles.arrow}/>  
      <p className={styles.text23}>Alexis and Aparna!</p>  
      <div className={styles.image8}></div>
      <p className={styles.text3}>Get With the Greeks</p> 
      <p className={styles.text4}>OPYN = DECENTRALISED OPTIONS</p> 
      <p className={styles.text5}>Opyn is a capital efficient DeFi options protocol that allows users to buy, sell, and create options on ERC20s. DeFi users and products rely on Opyn’s smart contracts and interface to hedge themselves against DeFi risks or take positions on different cryptocurrencies.
<br/><br/>
Opyn v2 is built using Gamma Protocol, a capital efficient options protocol that allows DeFi users to trade option spreads and combos, create flash mints, auto-exercise at expiry, create new options on any whitelisted product, and is the only DeFi options platform to enable partially collateralized options.
<br/><br/>
Developers can take advantage of Gamma protocol to build applications using options, including automated options strategies, vesting call options, and liquidation bots and savers. Recently a number of projects have been building on Opyn including ribbon.finance, opeth.finance, optional.finance, fontis.finance and more, enabling users to simply earn yield and hedge using options.</p> 
      <p className={styles.text6}>JAM WITH THEM ON IDEAS xD</p> 
      <Link href="https://opyn.gitbook.io/opyn/">
        <a target="_blank">
          <img src="/magazine/3/images/35_36/image3.png" className={styles.image5}/>
        </a>
      </Link>
      <Link href="https://twitter.com/opyn_">
        <a target="_blank">
          <img src="/magazine/3/images/35_36/image4.png" className={styles.image6}/>
        </a>
      </Link>
      <Link href="tiny.cc/opyndiscord">
        <a target="_blank">
          <img src="/magazine/3/images/35_36/image5.png" className={styles.image7}/>
        </a>
      </Link>
      <div className={styles.image4}>
        <div className={[styles.animationFrame, styles.rightSideImageWrapper].join(' ')}>
          <img src="/magazine/3/images/35_36/image2.png" />
          <img src="/magazine/3/images/35_36/image2.png" />
          <img src="/magazine/3/images/35_36/image2.png" />
          <img src="/magazine/3/images/35_36/image2.png" />
        </div>
      </div>
    </div>
  );
};

export default Page30;
