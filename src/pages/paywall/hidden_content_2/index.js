import React from 'react';
import BottomLine from '@components/bottom-line';
import styles from './styles.module.scss';

const HiddenContent2 = () => {
  const state = 1;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.bodyWrapper}>
          <div className={styles.panel}>
            <div className={styles.mediumTitle}>
              We Are Bringing Together Frontline Insights Across the Metaverse.
            </div>
            <div className={styles.largeTitle}>Have A Story to Share? Want to Contribute?</div>
            <div className={styles.mediumTitle}>Please Reach out.</div>
            <div className={styles.mediumTitle}>GENERAL</div>
            <div className={styles.smallTitle}>
              Have a general enquiry? Please reach out to general@digifizzy.xyz
            </div>
            <div className={styles.mediumTitle}>CRYPTO ART HALL OF FAME</div>
            <div className={styles.smallTitle}>
              Want to nominate someone or even nominate yourself?! We are always on the look out for
              featuring verteran and up and coming artists in the crypto space. Send us an email at
              cryptoart@digifizzy.xyz and make sure to attach some work samples and more info about
              yourself or the artist up for nomination!{' '}
            </div>
            <div className={styles.mediumTitle}>SUBMIT YOUR TUNES</div>
            <div className={styles.smallTitle}>
              Got a playlist for the metaverse that you want featured or music artists making waves in
              the audio NFT space? Contact us at rhythm@digifizzy.xyz and please attach some groovy
              samples!{' '}
            </div>
            <div className={styles.mediumTitle}>SEEN WITH </div>
            <div className={styles.smallTitle}>
              Have a look that should be featured or an immersive event that needs to be highlighted
              or announced? Give us a shout at seenwith@digifizzy.xyz :)
            </div>
            <div className={styles.mediumTitle}>META LOOKS</div>
            <div className={styles.smallTitle}>
              Got an awesome look from the metaverse you want featured? Awesome digital fashion shots?
              Unique digital identity? Reach us at metalooks@digifizzy.xyz and make sure to attach the
              pieces you want featured! The more story and details you can give us the better!{' '}
            </div>
            <div className={styles.mediumTitle}>INTERNATIONAL PLAYERS</div>
            <div className={styles.smallTitle}>
              Each Issue we feature a new region, highlighting builders, creators, artists, designers
              from that region that are contributing to the space, bringing a change maker attitude!
              Would you like your region featured or can you suggest a voice that must be heard??
              Email us at international@digifizzy.xyz{' '}
            </div>
          </div>
        </div>
        <BottomLine />
      </div>
    </>
  );
};

export default HiddenContent2;