import React from 'react';
import IssueCard from '@components/IssueCard';
import styles from './styles.module.scss';

const AllIssues = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bodyWrapper}>
        <div className={styles.mainText}>ALL ISSUES.</div>
        <div className={styles.subText}>DigiFizzy. Magazine for the Metaverse.</div>
        <div className={styles.issues}>
          <div className={styles.issue}>
            <IssueCard image="/images/nft/main_magazine.png" id="ONE" title="DIGIFIZZY" />
          </div>
          <div className={styles.issue}>
            <IssueCard image="/images/nft/2/home.png" id="TWO" title="DIGIFIZZY" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllIssues;
