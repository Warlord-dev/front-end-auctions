import React, { useRef, useState } from 'react';
import Link from 'next/link';
import styles from './page4950.module.scss';

const Page4950 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/6/images/49_50_back.png" className={styles.back} />
      <a href="" target="_blank">
        <img src="/magazine/6/images/49_50_image1.png" className={styles.link1} />
      </a>
      <a href="https://twitter.com/0xjacobean" target="_blank">
        <img src="/magazine/6/images/49_50_image2.png" className={styles.link2} />
      </a>
      <a href="https://twitter.com/FeliramiArt" target="_blank">
        <img src="/magazine/6/images/49_50_image3.png" className={styles.link3} />
      </a>
      <div className={styles.text1}>
        Screensaver.world is an authentic art community and marketplace platform on Polygon Network.
        <br />
        <br />
        Community run and built since day one; it’s empowering artists globally to explore the web3
        and NFT space, where through SSW, high minting fees & curated invite only marketplaces are
        no longer large barriers to onboarding the masses and giving them a first taste of what this
        new world is all about.
      </div>
      <div className={styles.text2}>
        Check out the conversation with instigator and lead engineer Jacob Smalls, and community
        lead and artist, Felirami.
      </div>
      <div className={styles.text3}>
        Building real community is no easy task. And, in NFTs, it can be overwhelming as a new
        artist or creator bridging into this space, understanding what’s what, who’s who, the common
        lingo and strange new system requirements like gas fees.
        <br />
        <br />
        If you haven’t already joined the SSW{' '}
        <a href="https://discord.gg/fAGHysxKux" target="_blank">
          discord
        </a>{' '}
        and really checked out what they are doing, you definitely should! The community that has
        been built is a testament to where they are going and how far they have come. Plus, all the
        code is open sourced and vibes are strong!
      </div>
      <a href="https://twitter.com/Burb8873" target="_blank">
        <img src="/magazine/6/images/49_50_image6.png" className={styles.link4} />
      </a>
      <div className={styles.text4}>SquintDev</div>
      <div className={styles.text5}>Dreams of Disconnection</div>
      <div className={styles.text6}>
        This piece represents my subconscious desire to disconnect from everything and everyone and
        just isolate. By creating pieces like this, it helps me stay self-aware that my thinking can
        go in this direction and I can be vigilant about it.
      </div>
      <a href="https://twitter.com/Bens_Lab" target="_blank">
        <video autoPlay muted loop className={styles.link5}>
          <source src="/magazine/6/images/49_50_video1.mp4" />
        </video>
      </a>
      <div className={styles.text7}>Ben Roberts </div>
      <div className={styles.text8}> Reactor Upgrade </div>
      <div className={styles.text9}>
        {' '}
        A mysterious machine appears in the city. It is opening a doorway to somewhere....{' '}
      </div>
      <a href="https://twitter.com/letsglitchit" target="_blank">
        <img src="/magazine/6/images/49_50_image7.png" className={styles.link6} />
      </a>
      <div className={styles.text10}>Dawnia Darkstone aka Letsglitchit</div>
      <div className={styles.text11}>Ensnared</div>
      <div className={styles.text12}>
        A classic (2016) Letsglitchit .FBX format 3D glitch Turn on screen reader support
      </div>
      <div className={styles.text13}>SquintDev</div>
      <div className={styles.text14}>Dreams of Disconnection</div>
      <div className={styles.text15}>
        This piece represents my subconscious desire to disconnect from everything and everyone and
        just isolate. By creating pieces like this, it helps me stay self-aware that my thinking can
        go in this direction and I can be vigilant about it.
      </div>
    </div>
  );
};

export default Page4950;
