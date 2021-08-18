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
            <div className={styles.issue} key={info[details.length - index - 1].id}>
              <IssueCard
                video={issue[0].url[0]}
                id={info[details.length - 1 - index].id}
                title={info[details.length - 1 - index].title}
                link1={`unlockable/${details.length - index}`}
                link2={`unlockable/${details.length - index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Unlockables;
