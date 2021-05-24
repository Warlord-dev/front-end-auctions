import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

const NftTable = ({ data, mode }) => {
  // const ;
  console.log('this is matic nfts', data);

  return (
    <div className={classnames(styles.wrapper, styles[`mode-${mode}`])}>
      <div className={styles.table}>
        <div className={styles.header}>
          <div className={styles.th} style={{ width: 200 }}>
            TOKEN URI
          </div>
          <div className={styles.th} style={{ width: 150 }}>
            CURRENT NETWORK
          </div>
          <div className={styles.th} style={{ width: 170 }}>
            SELECT TO WITHDRAW
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.tr}>
            <div className={styles.td} style={{ width: 200 }}>
              <img src="/images/burak photo.jpeg" />
            </div>
            <div className={styles.td} style={{ width: 150 }}>
              Matic
            </div>
            <div className={styles.td} style={{ width: 170 }}>
              <label className={styles.checkContainer}>
                <input type="checkbox" className={styles.check} />
                <span className={styles.checkmark} />
              </label>
            </div>
          </div>
          <div className={styles.tr}>
            <div className={styles.td} style={{ width: 200 }}>
              <img src="/images/burak photo.jpeg" />
            </div>
            <div className={styles.td} style={{ width: 150 }}>
              Matic
            </div>
            <div className={styles.td} style={{ width: 170 }}>
              <label className={styles.checkContainer}>
                <input type="checkbox" className={styles.check} />
                <span className={styles.checkmark} />
              </label>
            </div>
          </div>
          <div className={styles.tr}>
            <div className={styles.td} style={{ width: 200 }}>
              <img src="/images/burak photo.jpeg" />
            </div>
            <div className={styles.td} style={{ width: 150 }}>
              Matic
            </div>
            <div className={styles.td} style={{ width: 170 }}>
              <label className={styles.checkContainer}>
                <input type="checkbox" className={styles.check} />
                <span className={styles.checkmark} />
              </label>
            </div>
          </div>
          <div className={styles.tr}>
            <div className={styles.td} style={{ width: 200 }}>
              <img src="/images/burak photo.jpeg" />
            </div>
            <div className={styles.td} style={{ width: 150 }}>
              Matic
            </div>
            <div className={styles.td} style={{ width: 170 }}>
              <label className={styles.checkContainer}>
                <input type="checkbox" className={styles.check} />
                <span className={styles.checkmark} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftTable;
