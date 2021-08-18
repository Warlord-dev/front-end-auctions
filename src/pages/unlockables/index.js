import React, { memo } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import NftBanners from '@components/nft-banners';
import IssueCard from '@components/IssueCard';
import { info, details } from '@constants/nft_subscription_issues';

const Unlockables = () => {
  const router = useRouter();

  return (
    <div className={styles.mainWrapper}>
      <NftBanners />
      <div className={styles.bodyWrapper}>
        <div className={styles.issues}>
          {details.reverse().map((issue, index) => (
            <div className={styles.issue} key={info[index].id}>
              <IssueCard
                video={issue[0].url[0]}
                id={info[index].id}
                title={info[index].title}
                link1={`unlockable/${index + 1}`}
                link2={`unlockable/${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Unlockables;
