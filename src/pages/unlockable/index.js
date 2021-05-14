import React, { memo, useCallback, useEffect, useState } from 'react';
import BottomLine from '@components/bottom-line';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import NftBanners from '@components/nft-banners';
import details from '@constants/nft_subscription_issue1';

const Unlockable = () => {
  const router = useRouter();

  const onUnlockableDetails = (id) => {
    router.push(`/purchase/${id}`);
  };

  const onUnlock = (id) => {
    onUnlockableDetails(id);
  };

  return (
    <div className={styles.mainWrapper}>
      <NftBanners />
      <div className={styles.wrapper}>
        <div className={styles.mainText}>
          UNLOCKABLE NFT BUNDLES
        </div>
        <div className={styles.panels}>
          <div className={styles.panel}>
            <video loop autoPlay muted className={styles.thumbnail} src={details[0].url}>
            </video>
            <div className={styles.overlay}>
              <button type="button" onClick={() => onUnlock(1)}>
                {' '}
                COMMON UNLOCK{' '}
              </button>
            </div>
          </div>
          <div className={styles.panel}>
            <video loop autoPlay muted className={styles.thumbnail} src={details[1].url}>
            </video>
            <div className={styles.overlay}>
              <button type="button" onClick={() => onUnlock(2)}>
                {' '}
                SEMI-RARE UNLOCK{' '}
              </button>
            </div>
          </div>
          <div className={styles.panel}>
            <video loop autoPlay muted className={styles.thumbnail} src={details[2].url}>
            </video>
            <div className={styles.overlay}>
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
