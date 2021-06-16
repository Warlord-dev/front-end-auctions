import React, { memo } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import NftBanners from '@components/nft-banners';
import IssueCard from '@components/IssueCard';
import details from '@constants/nft_subscription_issue1';

const Unlockables = () => {
  const router = useRouter();

  return (
    <div className={styles.mainWrapper}>
      <NftBanners />
      <div className={styles.bodyWrapper}>
        <div className={styles.issues}>
          <div className={styles.issue}>
            <IssueCard
              video={details[0][0].url[0]}
              id="ONE"
              title="DIGIFIZZY"
              link1="unlockable/1"
              link2="unlockable/1"
            />
          </div>
          <div className={styles.issue}>
            <IssueCard
              video={details[1][0].url[0]}
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
