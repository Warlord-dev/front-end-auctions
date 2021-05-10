import React from 'react';
import styles from './page6162.module.scss';

const Page6162 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/61_62/girl-and-panda 1.png" className={styles.right} />
      <div className={styles.text1}>
        COMIC WITH
        <br /> PIZZA GAME
      </div>
      <div className={styles.leftDiv}></div>
      <div className={styles.text2}>
        Page <br /> will be a <br /> jpeg <br /> image
      </div>
      <div className={styles.text3}>
        First TenshiGirl Collection on the
        <br /> blockchain. Featuring 50
        <br /> high-resolution trading cards with
        <br /> unique artwork from renowned
        <br /> anime artists and in-game
        <br /> functionality.
      </div>
      <div className={styles.textDiv}></div>
      <div className={styles.text4}>
        <a href="https://tenshigirl.io" target="_blank">
          TenshiGirl.io
        </a>{' '}
        is a new crypto trading platform and NFT collectible trading card project, built on
        Ethereum.
        <br />
        <br />
        They are bridging world renowned artists to create the world of Vestrian— a narrative filled
        with rich characters, storylines and battle between factions.
        <br />
        <br />
        Each artwork is presented in a collection of ERC721 NFT packs on Ethereum Mainnet. You can
        purchase an NFT pack with Tenshi coins— the digital currency used to purchase NFTs at
        TenshiGirl.io.
        <br />
        <br />
        Each trading card also has in-game functionality and dynamic scarcicty— holders can level up
        their cards as they move from through the narrative.
      </div>
      <img
        src="./magazine/61_62/Tenshigirl Main Logo RGB Light Background 1.png"
        className={styles.logo}
      />
    </div>
  );
};

export default Page6162;
