import NewButton from '@components/buttons/newbutton';
import Link from 'next/link';
import React from 'react';
import CollectionInfoCard from './collection-info-card';
import styles from './styles.module.scss';

const CollectionCard = ({ collection }) => {
  const collectionNames = [
    'Among Us',
    'MineCraft',
    '',
    'GDN DAO Endowment Auction',
    'Haute Couture',
    'Crazy Shoes',
    'DeFi Fashion',
    'Wild Web3',
    'Web3 Digi Models',
    'Jewelry and Accessories',
    'International',
    'Fashion x Art',
  ];

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>{collectionNames[parseInt(collection?.id)]}</div>
        <div className={styles.imageWrapper}>
          {collection.id === '3' ? <NewButton
            className={styles.soldOut}
            text="Sold out"
            disable
          /> : null}
          <Link href={parseInt(collection?.id) <= 1 ? `/marketplace/all/${collection.id}` : collection?.isAuction ? `/marketplace/auctions/${collection.id}` : `/marketplace/collections/${collection.id}`}>
            <a target="_blank">
              <div className={styles.image}>
                {collection?.animation ? (
                  <video autoPlay muted loop>
                    <source src={collection?.animation} type="video/mp4" />
                  </video>
                ) : (
                  <img src={collection?.image} className={styles.innerImage} />
                )}
              </div>
            </a>
            </Link>
        </div>
        <CollectionInfoCard collection={collection} />
      </div>
    </>
  );
};

export default CollectionCard;
