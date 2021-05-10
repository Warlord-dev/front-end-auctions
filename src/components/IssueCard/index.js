import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

const IssueCard = ({ image, id, title }) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} className={styles.thumbnail} />
      <div className={styles.actions}>
        <div className={styles.titles}>
          <div className={styles.issueIdTitle}>ISSUE {id}</div>
          <div className={styles.actionTitle}> UNLOCKABLE NFT BUNDLES </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.issueTitle}> {title} </div>
          <Link href="/unlockable">
              <a className={styles.button}>
            {' '}
            VIEW{' '}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
