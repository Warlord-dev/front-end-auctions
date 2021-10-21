import React from 'react';
import Container from '@components/container';
import SecondaryImageCard from '@components/secondary-image-card';
import styles from './styles.module.scss';

const ManageInventory = () => {
  const products = [{}, {}, {}, {}, {}, {}];

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.innerWrapper}>
          <div className={styles.topSection}>
            <h1> Manage Inventory </h1>
          </div>
          <div className={styles.productsWrapper}>
            {products.map((product, index) => (
              <SecondaryImageCard data={product} showButton shwoSecondButton={!!(index % 2)} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ManageInventory;
