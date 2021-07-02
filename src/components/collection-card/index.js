import Link from 'next/link';
import React from 'react';
import CollectionInfoCard from './collection-info-card';
import styles from './styles.module.scss';

const CollectionCard = ({ collection }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>{collection?.name || 'COLLECTION NAME'}</div>
        <div className={styles.designerWrapper}>
          <img src="./images/Lorena-Bellow.jpeg" />
          <div className={styles.name}> {collection?.designer} </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.image}>
            <video autoPlay muted loop>
              <source
                src={collection?.animation.replace('gateway.pinata', 'digitalax.mypinata')}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <CollectionInfoCard collection={collection} />
      </div>
    </>
  );
};

export default CollectionCard;
