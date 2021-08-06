import CollectionCard from '@components/collection-card';
import React from 'react';
import styles from './styles.module.scss';

const CollectionList = ({ items, isBundle = false }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {items.map((item) => (
          <CollectionCard collection={item} isBundle={isBundle} />
        ))}
      </div>
    </>
  );
};

export default CollectionList;
