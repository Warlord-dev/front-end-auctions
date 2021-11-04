import NewButton from '@components/buttons/newbutton';
import Container from '@components/container';
import DatetimeInput from '@components/datetime-input';
import Dropdown from '@components/dropdown';
import HeroSection from '@components/hero-section';
import ImageCard from '@components/image-card';
import SecondaryProduct from '@components/secondary-product';
import React, { useState } from 'react';
import styles from './styles.module.scss';

const AddSecondaryProduct = () => {
  const [type, setType] = useState();
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const product = {
    name: 'Test',
    image: '',
  };

  const onList = () => {};

  return (
    <div className={styles.wrapper}>
      <HeroSection
        title="Manage"
        subTitle="WEB3 FASHION INVENTORY"
        filter={filter}
        setFilter={(v) => setFilter(v)}
        setSortBy={(v) => setSortBy(v)}
      />
      <div className={styles.description}>
        YOU can list your nft for sale on the marketplace. The DESIGNER WILL RECEIVE An
        automated 10% ROYALTY ON THE SALE OF THE ITEM, PERPETUALLY. IN ADDITION, A 3% royalty
        from the final secondary sale price is also awarded to the digitalax treasury and $mona,
        $mona lp + Genesis mona nft stakers issued through the revenue disrtibution
        contracts.PROFITS FROM SALES WILL BE SENT TO YOUR WALLET ADDRESS CONNECTED UNDER YOUR
        USER ACCOUNT.
      </div>
      <SecondaryProduct product={product} />
    </div>
  );
};

export default AddSecondaryProduct;
