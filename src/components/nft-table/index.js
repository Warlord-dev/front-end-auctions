import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

const NftTable = ({ data, mode, onChange, nftIds }) => {
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
          {data.map((nft) => (
            <div className={styles.tr} key={nft.id}>
              <div className={styles.td} style={{ width: 200 }}>
                <div className={styles.tdWrapper}>
                  <div className={styles.title}> {nft.name} </div>
                  <img src={nft.image?.replace('gateway.pinata', 'digitalax.mypinata')} />
                </div>
              </div>
              <div className={styles.td} style={{ width: 150 }}>
                {mode === 1 ? 'Matic' : 'Ethereum'}
              </div>
              <div className={styles.td} style={{ width: 170 }}>
                <label className={styles.checkContainer}>
                  <input
                    type="checkbox"
                    className={styles.check}
                    onChange={(e) => onChange(nft.id)}
                  />
                  <span className={styles.checkmark} />
                </label>
              </div>
            </div>
          ))}
          {!data.length ? <p className={styles.noData}> No Data </p> : null}
        </div>
      </div>
    </div>
  );
};

export default NftTable;
