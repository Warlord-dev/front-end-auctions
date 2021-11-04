import React, { useState } from 'react';
import NewButton from '@components/buttons/newbutton';
import ImageCard from '@components/image-card';
import styles from './styles.module.scss';

const SecondaryProduct = ({ product }) => {
  const [monaPrice, setMonaPrice] = useState(0);
  const [sellType, setSellType] = useState(0);
  const [startTime, setStartTime] = useState(new Date().getTime());
  const [endTime, setEndTime] = useState(new Date().getTime());

  return (
    <div className={styles.wrapper}>
      <div className={styles.topSection}>
        <ImageCard showCollectionName data={product} showButton={false} />
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.title}>Choose the Sale Type</div>
        <div className={styles.buttonTab}>
          <NewButton
            className={sellType === 2 && styles.deactive}
            onClick={() => {
              setSellType(1);
            }}
            text="AUCTION"
          />
          <NewButton
            className={sellType === 1 && styles.deactive}
            onClick={() => {
              setSellType(2);
            }}
            text="INSTANT BUY"
          />
        </div>
        {!!sellType && (
          <>
            <div className={styles.formGroup}>
              <div className={styles.formLabel}>what reserve price would you like to set?</div>
              <div className={styles.inputGroup}>
                <div className={styles.prefix}> $MONA </div>
                <input type="text" value={monaPrice} onChange={(e) => setMonaPrice(e.target.value)} />
              </div>
            </div>
            {sellType === 2 && (
              <div className={styles.formGroup}>
                <div className={styles.formLabel}>when would you like the auction to end?</div>
                <div className={styles.inputGroup}>
                  <div className={styles.prefix}> $MONA </div>
                  <input type="text" value={monaPrice} onChange={(e) => setMonaPrice(e.target.value)} />
                </div>
              </div>
            )}
            <button type="button" className={styles.listBtn}>
              list on marketplace
            </button>
          </>
        )}
        {/* <div className={styles.actions}>
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
                <DatetimeInput
                  timestamp={startTime}
                  timeStampChanged={(v) => setStartTime(v)}
                />
              </div>
              <div className={styles.formInput}>
                <div className={styles.label}> end time </div>
                <DatetimeInput timestamp={endTime} timeStampChanged={(v) => setEndTime(v)} />
              </div>
            </>
          )}
          <NewButton mode="1" text="LIST" onClick={onList} />
        </div> */}
      </div>
    </div>
  );
};

export default SecondaryProduct;
