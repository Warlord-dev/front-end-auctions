import React from 'react';
import styles from './styles.module.scss';

const Filters = ({ filter, filterChange, sortByChange }) => {
  return (
    <>
      <div className={styles.actions}>
        <div className={styles.filterWrapper}>
          <div className={styles.filterLabel}>filter</div>
          <div className={styles.filterInput}>
            <input
              className={styles.filter}
              value={filter}
              onChange={(e) => filterChange(e.target.value)}
            />
            <img src="/images/filter1.png" />
          </div>
        </div>
        <div className={styles.sortWrapper}>
          <div className={styles.sortLabel}>sort by</div>
          <div className={styles.sortInput}>
            <select className={styles.sort} onChange={(e) => sortByChange(e.target.value)}>
              <option value="1"> most recent </option>
              <option value="2"> highest price </option>
              <option value="3"> lowest price </option>
              <option value="4"> sold </option>
              <option value="5"> auction </option>
              <option value="6"> instant buy </option>
              <option value="7"> exclusive rarity </option>
              <option value="8"> semi-rare rarity </option>
              <option value="9"> common rarity </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
