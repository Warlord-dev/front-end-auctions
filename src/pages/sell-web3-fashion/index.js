import NewButton from '@components/buttons/newbutton';
import Container from '@components/container';
import DatetimeInput from '@components/datetime-input';
import Dropdown from '@components/dropdown';
import ImageCard from '@components/image-card';
import React, { useState } from 'react';
import styles from './styles.module.scss';

const SellWeb3Fashion = () => {
  const [type, setType] = useState();
  const product = {
    name: 'Test',
    image: '',
  };

  const onList = () => {};

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.innerWrapper}>
          <div className={styles.title}>
            <h1> Sell Web3 Fashion </h1>
          </div>
          <div className={styles.description}>
            YOU can list your nft for sale on the marketplace. The DESIGNER WILL RECEIVE An
            automated 15% ROYALTY ON THE SALE OF THE ITEM, PERPETUALLY. PROFITS FROM SALES WILL BE
            SENT TO YOUR WALLET ADDRESS CONNECTED UNDER YOUR USER ACCOUNT.
          </div>
          <div className={styles.itemName}> {product.name} </div>
          <div className={styles.body}>
            <ImageCard data={product} showButton={false} />
            <div className={styles.actions}>
              <div className={styles.options}>
                <div className={styles.formInput}>
                  <div className={styles.label}>Type</div>
                  <Dropdown
                    options={['AUCTION', 'INSTANT BUY']}
                    value={type}
                    onChange={(v) => setType(v)}
                  />
                </div>
                <div className={styles.formInput}>
                  <div className={styles.label}>List Price ($Mona)</div>
                  <input type="text" className={styles.input} />
                </div>
              </div>
              {type === 'AUCTION' && (
                <>
                  <div className={styles.formInput}>
                    <div className={styles.label}> start time </div>
                    <DatetimeInput timestamp={0} />
                  </div>
                  <div className={styles.formInput}>
                    <div className={styles.label}> end time </div>
                    <DatetimeInput timestamp={0} />
                  </div>
                </>
              )}
              <NewButton mode="1" text="LIST" onClick={onList} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SellWeb3Fashion;
