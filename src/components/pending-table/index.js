import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import StatusBar from './status-bar';

const PendingTable = ({ data, mode }) => {
  return (
    <div className={classnames(styles.pendingWrapper, styles[`mode-${mode}`])}>
      <div className={styles.toolbar}>
        <div className={styles.filterLabel}> filter </div>
        <div className={styles.filterWrapper}>
          <input type="text" className={styles.filterInput} />
          <img src="/images/filter.png" className={styles.filterIcon} />
        </div>
        <div className={styles.sortLabel}> sort by </div>
        <select className={styles.sortSelect}>
          <option value="1"> Time Lapsed </option>
          <option value="2"> Status </option>
        </select>
      </div>
      <div className={styles.table}>
        <div className={styles.header}>
          <div className={styles.th} style={{ width: 150 }}>
            all transactions
          </div>
          <div className={styles.th} style={{ width: 130 }}>
            {' '}
            token type{' '}
          </div>
          <div className={styles.th} style={{ width: 130 }}>
            {' '}
            time lapsed{' '}
          </div>
          <div className={styles.th} style={{ width: 100 }}>
            {' '}
            status{' '}
          </div>
          {mode === 1 ? (
            <div className={styles.th} style={{ width: 150 }}>
              {' '}
              withdraw{' '}
            </div>
          ) : null}
        </div>
        <div className={styles.body}>
          <div className={styles.tr}>
            <div className={styles.info}>
              <div className={styles.td} style={{ width: 150 }}>
                0x43...DEF5
              </div>
              <div className={styles.td} style={{ width: 130 }}>
                ERC-20
              </div>
              <div className={styles.td} style={{ width: 130 }}>
                8 hours
              </div>
              <div className={styles.td} style={{ width: 100 }}>
                pending
              </div>
              {mode === 1 ? (
                <div className={styles.td} style={{ width: 150 }}>
                  {' '}
                  <button type="button" className={styles.withdrawBtn}>
                    {' '}
                    withdraw{' '}
                  </button>{' '}
                </div>
              ) : null}
            </div>
            <div className={styles.statusBar}>
              <StatusBar mode={mode} status={2} />
            </div>
          </div>
          <div className={styles.tr}>
            <div className={styles.info}>
              <div className={styles.td} style={{ width: 150 }}>
                0x43...DEF5
              </div>
              <div className={styles.td} style={{ width: 130 }}>
                ERC-20
              </div>
              <div className={styles.td} style={{ width: 130 }}>
                8 hours
              </div>
              <div className={styles.td} style={{ width: 100 }}>
                pending
              </div>
              {mode === 1 ? (
                <div className={styles.td} style={{ width: 150 }}>
                  {' '}
                  <button type="button" className={styles.withdrawBtn}>
                    {' '}
                    withdraw{' '}
                  </button>{' '}
                </div>
              ) : null}
            </div>
            <div className={styles.statusBar}>
              <StatusBar mode={mode} status={3} />
            </div>
          </div>
          <div className={styles.tr}>
            <div className={styles.info}>
              <div className={styles.td} style={{ width: 150 }}>
                0x43...DEF5
              </div>
              <div className={styles.td} style={{ width: 130 }}>
                ERC-20
              </div>
              <div className={styles.td} style={{ width: 130 }}>
                8 hours
              </div>
              <div className={styles.td} style={{ width: 100 }}>
                pending
              </div>
              {mode === 1 ? (
                <div className={styles.td} style={{ width: 150 }}>
                  {' '}
                  <button type="button" className={styles.withdrawBtn}>
                    {' '}
                    withdraw{' '}
                  </button>{' '}
                </div>
              ) : null}
            </div>
            <div className={styles.statusBar}>
              <StatusBar mode={mode} status={4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingTable;
