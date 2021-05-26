import React from 'react';
import classnames from 'classnames';
import TimeAgo from 'react-timeago';
import styles from './styles.module.scss';
import StatusBar from './status-bar';

const PendingTable = ({ data, mode, id, onWithdraw, filter, filterChanged, sort, sortChanged }) => {
  const getStatusNumber = (row) => {
    if (mode === 1) {
      if ((Date.now() - new Date(row.created).getTime()) / 1000 >= 10800) {
        return 3;
      } else {
        return 2;
      }
    } else {
      if ((Date.now() - new Date(row.created).getTime()) / 1000 >= 900) {
        return 4;
      } else {
        return 3;
      }
    }
  };

  const shortenHash = (hash) => {
    return hash.slice(0, 4) + '...' + hash.slice(hash.length - 5, hash.length - 1);
  };

  return (
    <div className={classnames(styles.pendingWrapper, styles[`mode-${mode}`])}>
      <div className={styles.toolbar}>
        <div className={styles.filterLabel}> filter </div>
        <div className={styles.filterWrapper}>
          <input
            type="text"
            className={styles.filterInput}
            value={filter}
            onChange={filterChanged}
          />
          <img src="/images/filter.png" className={styles.filterIcon} />
        </div>
        <div className={styles.sortLabel}> sort by </div>
        <select className={styles.sortSelect} onChange={sortChanged} value={sort}>
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
          {data.map((row, index) => {
            return (
              <div className={styles.tr} key={row.txHash}>
                <div className={styles.info}>
                  <div className={styles.td} style={{ width: 150 }}>
                    {shortenHash(row.txHash)}
                  </div>
                  <div className={styles.td} style={{ width: 130 }}>
                    {row?.tokenType}
                  </div>
                  <div className={styles.td} style={{ width: 130 }}>
                    <TimeAgo date={new Date(row.created)} />
                  </div>
                  {mode === 1 && (
                    <div className={styles.td} style={{ width: 100 }}>
                      {row.status === 'success'
                        ? row.status
                        : (Date.now() - new Date(row.created).getTime()) / 1000 >= 10800
                        ? 'pending'
                        : 'processing'}
                    </div>
                  )}
                  {mode === 2 && (
                    <div className={styles.td} style={{ width: 100 }}>
                      {(Date.now() - new Date(row.created).getTime()) / 1000 >= 900
                        ? 'success'
                        : 'pending'}
                    </div>
                  )}
                  {mode === 1 && (Date.now() - new Date(row.created).getTime()) / 1000 >= 10800 ? (
                    <div className={styles.td} style={{ width: 150 }}>
                      {' '}
                      <button
                        type="button"
                        onClick={() => onWithdraw(row)}
                        className={styles.withdrawBtn}
                      >
                        {' '}
                        withdraw{' '}
                      </button>{' '}
                    </div>
                  ) : null}
                </div>
                <div className={styles.statusBar}>
                  <StatusBar mode={mode} status={getStatusNumber(row)} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PendingTable;
