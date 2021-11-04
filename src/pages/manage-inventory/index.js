import React, { useState } from 'react';
import Container from '@components/container';
import SecondaryImageCard from '@components/secondary-image-card';
import styles from './styles.module.scss';
import HeroSection from '@components/hero-section';

const ManageInventory = () => {
  const products = [{}, {}, {}, {}, {}, {}];
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState(null);

  return (
    <div className={styles.wrapper}>
      <HeroSection
        title="Manage"
        subTitle="WEB3 FASHION INVENTORY"
        filter={filter}
        setFilter={(v) => setFilter(v)}
        setSortBy={(v) => setSortBy(v)}
      />
      <Container>
        <div className={styles.productsWrapper}>
          {products.map((product, index) => (
            <SecondaryImageCard
              key={index}
              product={product}
              price={product?.topBid || product?.primarySalePrice}
              showRarity
              showCollectionName
              sold={product?.sold}
              isAuction={product?.auction}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ManageInventory;
