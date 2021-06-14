import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

const IssueCard = ({ image, video = null, id, title, link1, link2 }) => {
  return (
    <div className={styles.wrapper}>
      <Link href={link1}>
        <a>
          {video ? (
            <video autoPlay muted loop className={styles.thumbnail}>
              <source src={video} />
            </video>
          ) : (
            <img src={image} className={styles.thumbnail} />
          )}
        </a>
      </Link>
      <div className={styles.actions}>
        <div className={styles.titles}>
          <div className={styles.issueIdTitle}>ISSUE {id}</div>
          <div className={styles.actionTitle}> UNLOCKABLE NFT BUNDLES </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.issueTitle}> {title} </div>
          <Link href={link2}>
            <a className={styles.button}> VIEW </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
