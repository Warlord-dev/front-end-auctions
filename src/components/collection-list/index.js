import CollectionCard from '@components/collection-card';
import React from 'react';
import styles from './styles.module.scss';

const CollectionList = () => {
	const array = [1, 2];
  return (
		<>
			<div className={styles.wrapper}>
				{array.map((item) => (
					<CollectionCard />
				))}
			</div>
		</>
	);
};

export default CollectionList;