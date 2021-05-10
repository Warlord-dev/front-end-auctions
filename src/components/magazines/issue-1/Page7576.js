import Link from 'next/link';
import React from 'react';
import styles from './page7576.module.scss';

const Page7576 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/75_76/left1.png" className={styles.left} />
      <img src="./magazine/75_76/RIGHT5.png" className={styles.right} />
      <Link href="/unlockable">
        <a className={styles.seeMoreLink}>SEE MORE</a>
      </Link>
      <div className={styles.text1}>
        Through DIGIFIZZY we are proving out a new publishing model with NFT based decentralised
        subscriptions. All of the content is free to read, and, people can subscribe to NFT bundles
        that bring together a mix of well known and upcoming/undervalued talent across music, art,
        fashion, gaming, other collectibles etc. This is not an auction or a typical drop, but
        unlike where if creators were featured on the cover of a magazine they would get nothing for
        it or sometimes have to pay for placement, here they get a share distributed across the
        contributors to the bundle, whilst the publication is still able to prove out the model
        through a majority share, being the core creator and contributor.
      </div>
      <div className={styles.text2}>
        BURN YOUR ERC-721 TO UNLOCK A COLLECTION OF ERC-1155 NFTs + HIDDEN MAGAZINE CONTENT. 3 x
        BUNDLES: COMMON X 500, SEMI-RARE X 200, EXCLUSIVE X 50.
      </div>
    </div>
  );
};

export default Page7576;
