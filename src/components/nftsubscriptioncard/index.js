import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

const NftSubscriptionCard = ({ details, id, url }) => {
  const isVideo = (url) => {
    if (url.includes('mp4')) return true;
    return false;
  };

  return (
    <div className={styles.wrapper}>
      {/* <img src={details?.img} className={styles.thumbnail} /> */}
      {isVideo(url) ? (
        <video loop autoPlay muted className={styles.thumbnail} src={url}></video>
      ) : (
        <img src={url} className={styles.thumbnail} />
      )}
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
