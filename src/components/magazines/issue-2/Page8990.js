import React from 'react';
import { useSelector } from 'react-redux';
import UnlockPage from '../common/UnlockPage';
import styles from './page8990.module.scss';
import cn from 'classnames';
import Router, { useRouter } from 'next/router'

const Page8990 = () => {
  const handleSeeMore = () => {
    Router.push('/unlockable/2')
  }
  return (
    <div className={styles.wrapper}>
      <img async src="./magazine/2/images/89_90/image1.png" className={styles.image1} />
      <img async src="./magazine/2/images/89_90/image2.png" className={styles.image2} />
      <img async src="./magazine/2/images/89_90/image2.png" className={styles.image3} />
      <img async src="./magazine/2/images/89_90/image3.png" className={styles.image4} />
      <img async src="./magazine/2/images/89_90/image4.png" className={styles.image5} />
      <img async src="./magazine/2/images/89_90/image5.png" className={styles.image6} />
      <img async src="./magazine/2/images/89_90/image6.png" className={styles.image7} />
      <img async src="./magazine/2/images/89_90/image7.png" className={styles.image8} />
      <img async src="./magazine/2/images/89_90/image8.png" className={styles.image9} />
      <img async src="./magazine/2/images/89_90/image9.png" className={styles.image10} />
      <img async src="./magazine/2/images/89_90/image10.png" className={styles.image11} />
      <img async src="./magazine/2/images/89_90/image11.png" className={styles.image12} />
      <img async src="./magazine/2/images/89_90/image12.png" className={styles.image13} />
      <img async src="./magazine/2/images/89_90/image29.png" className={styles.image24} />
      <img async src="./magazine/2/images/89_90/image13.png" className={styles.image14} />
      <img async src="./magazine/2/images/89_90/image14.png" className={styles.image15} />
      <img async src="./magazine/2/images/89_90/image15.png" className={styles.image16} />
      <img async src="./magazine/2/images/89_90/image16.png" className={styles.image17} />
      <img async src="./magazine/2/images/89_90/image17.png" className={styles.image18} />
      <img async src="./magazine/2/images/89_90/image18.png" className={styles.image19} />
      <img async src="./magazine/2/images/89_90/image19.png" className={styles.image20} />
      <img async src="./magazine/2/images/89_90/image20.png" className={styles.image21} />
      <img async src="./magazine/2/images/89_90/image22.png" className={styles.image23} />
      <img async src="./magazine/2/images/89_90/image30.png" className={styles.image25} />
      <p className={styles.text1}>NFT BUNDLES</p>
      <p className={styles.text2}>Through DIGIFIZZY we are proving out a new publishing model with NFT based decentralised subscriptions. All of the content is free to read, and, people can subscribe to NFT bundles that bring together a mix of well known and upcoming/undervalued talent across music, art, fashion, gaming, other collectibles etc. This is not an auction or a typical drop, but unlike where if creators were featured on the cover of a magazine they would get nothing for it or sometimes have to pay for placement, here they get a share distributed across the contributors to the bundle, whilst the publication is still able to prove out the model through a majority share, being the core creator, engineer, distributor and contributor.</p>
      <p className={styles.text3}>ERC-998 BUNDLE</p>
      <p className={styles.text4}>BURN YOUR ERC-721 TO UNLOCK A COLLECTION OF ERC-1155 NFTs + HIDDEN MAGAZINE CONTENT AND DYNAMIC NFT AIRDROPS. 3 x BUNDLES: COMMON, SEMI-RARE, EXCLUSIVE. </p>
      <p className={styles.text5}>Human RIGHTS FOUNDATION WEAR YOUR VALUES.</p>
      <p className={styles.text6}>#FLEXYOURFLARE DIGITAL FASHION COLLECTION</p>
      <p className={styles.text7}>DRIP Minecraft espa casual esports guild LINE.</p>
      <p className={styles.text8}>WEB3 Wiazrds COLLECTiBLES.</p>
      <p className={styles.text9}>AUDIO visual NFTS from AI ROBOT ARTIST 9EN.</p>
      <p className={styles.text10}>DECO ONLY FANS UNLOCKABLE EXCLUSIVE CONTENT & EXPERIENCES</p>
      <p className={styles.text11}>ARJAY SOUL</p>
      <p className={styles.text12}>XENOTECH</p>
      <p className={styles.text13} onClick={() => handleSeeMore()}>SEE MORE</p>
    </div>
  );
};

export default Page8990;
