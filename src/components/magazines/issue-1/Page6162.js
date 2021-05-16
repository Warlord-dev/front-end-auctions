import React from 'react';
import styles from './page6162.module.scss';

const Page6162 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/61_62/Group 1193.png" className={styles.left} />
      <img src="./magazine/1/61_62/girl-and-panda 1.png" className={styles.right} />
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
        <a href="https://share.tenshigirl.io/ad8a23" target="_blank">
          TenshiGirl.io
        </a>{' '}
        is a new crypto trading platform and NFT collectible trading card project, built on
        Ethereum.
        <br />
        <br />
        They are bridging world renowned artists to create the world of Vestrian— a narrative filled
        with rich characters, storylines and battles between factions.
        <br />
        <br />
        Each artwork is presented in a collection of ERC721 NFT packs on Ethereum Mainnet. You can
        purchase an NFT pack with Tenshi coins— the digital currency used to purchase NFTs at
        TenshiGirl.io.
        <br />
        <br />
        Each trading card also has in-game functionality and dynamic scarcity— holders can level up
        their cards as they move through the narrative.
      </div>
      <img
        src="./magazine/1/61_62/Tenshigirl Main Logo RGB Light Background 1.png"
        className={styles.logo}
      />
    </div>
  );
};

export default Page6162;
