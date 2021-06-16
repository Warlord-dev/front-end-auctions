import React from 'react';
import styles from './page32.module.scss';

const Page32 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/35_36_mobile.jpg" className={styles.back} />
      <img src="./magazine/2/images/35_36_image1.png" className={styles.image1} />
      <img src="./magazine/2/images/35_36_image2.png" className={styles.image2} />
      <img src="./magazine/2/images/35_36_image3.png" className={styles.image3} />
      <div className={styles.text1}>
        <b>
          DIGITALAX introduced Fractional Garment Ownership (FGO) at the inception of the project in
          2020.
        </b>{' '}
        FGO sets forth the standard and dress code for the manufacture of digital fashion along the
        digital content supply chain. It leverages ERC Protocol standards across the Ethereum
        Blockchain and Polygon (Matic Network) for breaking down a master ERC-721 digital garment
        into its programmable and composable ERC-1155 elements of materials, patterns and textures.
        <br />
        <br />
        Here, we are using a variant on the ERC-998 standard, where each ERC-721 token can hold a
        balance of ERC-1155 NFTs. We coin this respectively the Parent and Child NFTs. This allows
        for other designers to leverage off of the open source digital libraries, incorporating the
        patterns, materials and textures into their master garments, whilst still ensuring that all
        original contributors to the digital fashion item can have their IP authenticated and
        effectively traced across the entire journey through the digital fashion supply chain.
        <br />
        <br />
        FGO directly enables individual artists, designers to create and issue the modular building
        blocks and components to a master digital fashion garment, with complete on-chain
        verification. This directly allows for;
        <ul>
          <li>Completely new models of monetisation</li>
          <li>An Open Source spirit injection</li>
          <li>Authenticated and transparent tracking at each stage of the supply chain</li>
          <li>A more complete framework for valuing and assessing native digital goods</li>
        </ul>
      </div>
    </div>
  );
};

export default Page32;
