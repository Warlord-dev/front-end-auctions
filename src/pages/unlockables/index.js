import React, { memo } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import NftBanners from '@components/nft-banners';
import IssueCard from '@components/IssueCard';

const Unlockables = () => {
  const router = useRouter();

  return (
    <div className={styles.mainWrapper}>
      <NftBanners />
      <div className={styles.bodyWrapper}>
        <div className={styles.issues}>
          <div className={styles.issue}>
            <IssueCard
              video="/images/nft/1/common/Untitled (24).mp4"
              id="ONE"
              title="DIGIFIZZY"
              link1="unlockable/1"
              link2="unlockable/1"
            />
          </div>
          <div className={styles.issue}>
            <IssueCard
              video="/images/nft/1/common/Untitled (24).mp4"
              id="TWO"
              title="DIGIFIZZY"
              link1="unlockable/2"
              link2="unlockable/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unlockables;
