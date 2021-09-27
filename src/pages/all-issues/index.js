import React from 'react';
import IssueCard from '@components/IssueCard';
import styles from './styles.module.scss';
import { info } from '@constants/nft_subscription_issues';

const AllIssues = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bodyWrapper}>
        <div className={styles.mainText}>ALL ISSUES.</div>
        <div className={styles.subText}>DigiFizzy. Magazine for the Metaverse.</div>
        <div className={styles.issues}>
          {info.map((issue, index) => (
            <div className={styles.issue} key={issue.id}>
              <IssueCard
                image={issue.image}
                id={issue.id}
                title={issue.title}
                link1={`/magazines/${info.length - index}`}
                link2={`/unlockable/${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllIssues;
