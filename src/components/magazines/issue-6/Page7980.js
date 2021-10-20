import React from 'react';
import Link from 'next/link';
import styles from './page7980.module.scss';

const Page7980 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/6/images/79_80_back.png" className={styles.back} />
      <div className={styles.text1}>NFT BUNDLES</div>
      <div className={styles.text2}>
        Through DIGIFIZZY we are proving out a new publishing model with NFT based decentralised
        subscriptions. All of the content is free to read, and, people can subscribe to NFT bundles
        that bring together a mix of well known and upcoming/undervalued talent across music, art,
        fashion, gaming, other collectibles etc. This is not an auction or a typical drop, but
        unlike where if creators were featured on the cover of a magazine they would get nothing for
        it or sometimes have to pay for placement, here they get a share distributed across the
        contributors to the bundle, whilst the publication is still able to prove out the model
        through a majority share, being the core creator, engineer, distributor and contributor.
      </div>
      <div className={styles.text3}>ERC-998 BUNDLE</div>
      <div className={styles.text4}>
        BURN YOUR ERC-721 <a href='/unlockable/1/'>THROUGH THE DIGIFIZZY.XYZ WEBSITE</a> TO UNLOCK A COLLECTION OF ERC-1155 NFTs
        + HIDDEN MAGAZINE CONTENT AND DYNAMIC NFT AIRDROPS. 3 x BUNDLES: COMMON, SEMI-RARE,
        EXCLUSIVE.
      </div>
      <div className={styles.text5}>Web3 wizards collectibles</div>
      <div className={styles.text6}>Physical glitch drip</div>
      <div className={styles.text7}>TICKETS TO GET DRESSED BY THE GLOBAL DESIGNER NETWORK</div>
      <div className={styles.text8}>screensaver world community art feature</div>
      <img src="/magazine/6/images/79_80_image1.png" className={styles.image1} />
      <img src="/magazine/6/images/79_80_image2.png" className={styles.image2} />
      <a href="/unlockable/1/" target="_blank" className={styles.seeMoreLink}>
        <div className={styles.seeMore1}>SEE MORE</div>
        <div className={styles.seeMore2}>SEE MORE</div>
      </a>
    </div>
  );
};

export default Page7980;
