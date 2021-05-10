import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

const NftSubscriptionCard = ({ details, id }) => {
  return (
    <div className={styles.wrapper}>
      {/* <img src={details?.img} className={styles.thumbnail} /> */}
      <video loop autoPlay muted className={styles.thumbnail} src={details?.url}>
      </video>
      <div className={styles.actions}>
        <div className={styles.title}> {details.title} </div>
        <div className={styles.details}>
          <div className={styles.issueIndex}> {details.issueIndex} </div>
          <Link href={`/paywall/hidden_content_1/${id}`}>
            <a className={styles.hiddenLink}> HIDDEN CONTENT </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NftSubscriptionCard;
