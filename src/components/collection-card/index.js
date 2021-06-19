import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

const CollectionCard = ({ collection }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          {collection?.title || 'COLLECTION NAME'}
        </div>
        <div className={styles.designerWrapper}>
          <img src="./images/Lorena-Bellow.jpeg" />
          <div className={styles.name}> {'artist/creator'} </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.image}>
            <video autoPlay muted loop>
              <source src="https://digitalax.mypinata.cloud/ipfs/QmTfYwLRhqpYBaSoFFGKUJcYU6XSbHpsQvRen2dWQZ8WKH" type="video/mp4" />
            </video>
          </div>
        </div>
        <Link href="/">
          <a className={styles.link}>
            view collection
            <img src="./images/metaverse/yellow-right-arrow.png" />
          </a>
        </Link>
      </div>
    </>
  );
};

export default CollectionCard;