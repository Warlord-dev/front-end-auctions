import React, { memo, useCallback, useEffect, useState } from 'react';
import BottomLine from '@components/bottom-line';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import NftBanners from '@components/nft-banners';
import { info, details } from '@constants/nft_subscription_issues';

const Unlockable = () => {
  const router = useRouter();
  const { id } = router.query;
  const issueId = parseInt(id) - 1;

  const onUnlockableDetails = (id) => {
    router.push(`/purchase/${issueId + 1}/${id}`);
  };

  const onUnlock = (id) => {
    onUnlockableDetails(id);
  };

  return (
    <div className={styles.mainWrapper}>
      <NftBanners />
      <div className={styles.wrapper}>
        <div className={styles.mainText}>UNLOCKABLE NFT BUNDLES</div>
        <div className={styles.panels}>
          <div className={styles.panel}>
            <video
              loop
              autoPlay
              muted
              className={styles.thumbnail}
              src={details[issueId][0].url[0]}
            ></video>
            <div className={`${styles.overlay} ${styles.overlay1}`}>
              <button type="button" onClick={() => onUnlock(1)}>
                {' '}
                COMMON UNLOCK{' '}
              </button>
            </div>
          </div>
          <div className={styles.panel}>
            <video
              loop
              autoPlay
              muted
              className={styles.thumbnail}
              src={details[issueId][1].url[0]}
            ></video>
            <div className={`${styles.overlay} ${styles.overlay2}`}>
              <button type="button" onClick={() => onUnlock(2)}>
                {' '}
                SEMI-RARE UNLOCK{' '}
              </button>
            </div>
          </div>
          <div className={styles.panel}>
            <video
              loop
              autoPlay
              muted
              className={styles.thumbnail}
              src={details[issueId][2].url[0]}
            ></video>
            <div className={`${styles.overlay} ${styles.overlay3}`}>
              <button type="button" onClick={() => onUnlock(3)}>
                {' '}
                EXCLUSIVE UNLOCK{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
      <BottomLine transparent={true} />
    </div>
  );
};

export default memo(Unlockable);
