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
            <IssueCard
              image="/images/nft/1/main_magazine.png"
              id="ONE"
              title="DIGIFIZZY"
              link1="/magazines/1"
              link2="/unlockable/1"
            />
          </div>
          <div className={styles.issue}>
            <IssueCard
              image="/images/nft/2/home.png"
              id="TWO"
              title="DIGIFIZZY"
              link1="/magazines/2"
              link2="/unlockable/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllIssues;
