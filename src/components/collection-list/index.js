import CollectionCard from '@components/collection-card';
import React from 'react';
import styles from './styles.module.scss';

const CollectionList = ({ items }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {items.map((item) => (
          <CollectionCard collection={item} />
        ))}
      </div>
    </>
  );
};

export default CollectionList;
