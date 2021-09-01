import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

const NftSubscriptionCard = ({ details, id, burn721 }) => {
  const strs = details.name.split(' ');

  const issueIndex = [strs[1], strs[2]].join(' ');
  const issueName = strs.slice(3, -1).join(' ');

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        {details.animation ? (
          <video loop autoPlay muted className={styles.thumbnail} src={details.animation}></video>
        ) : (
          <img src={details.image} className={styles.thumbnail} />
        )}
        <button type="button" className={styles.burn721Button} onClick={() => burn721(details.id)}>
          {' '}
          BURN 721 AND UNLOCK{' '}
        </button>
      </div>
      <div className={styles.actions}>
        <div className={styles.title}> {issueName} </div>
        <div className={styles.details}>
          <div className={styles.issueIndex}> {issueIndex} </div>
          <Link href={`/magazines/${id}/hidden`}>
            <a className={styles.hiddenLink}> HIDDEN CONTENT </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NftSubscriptionCard;
