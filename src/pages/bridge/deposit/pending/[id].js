import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import BridgeModal from '@components/bridge-modal';
import PendingTable from '@components/pending-table';
import { getUser } from '@helpers/user.helpers';
import styles from './styles.module.scss';

const Pending = () => {
  const router = useRouter();
  const id = parseInt(router.query.id);
  const user = useSelector(getUser);
  const [filter, setFilter] = useState('');
  const [pendingDepositTxs, setPendingDepositTxs] = useState([]);
  const [sort, setSort] = useState('1');

  const filterSortDeposits = () => {
    const deposits = [...pendingDepositTxs].sort((a, b) => {
      if (sort === '1') {
        const date1 = new Date(a.created),
          date2 = new Date(b.created);
        if (date1 > date2) return 1;
        if (date1 === date2) return 0;
        if (date1 < date2) return -1;
      } else {
        if (a.status > b.status) return 1;
        if (a.status === b.status) return 0;
        return -1;
      }
    });
    if (!filter.length) return deposits;
    return deposits.filter((tx) => {
      return tx.txHash.includes(filter) || tx.status.includes(filter);
    });
  };

  useEffect(() => {
    if (user?.depositTxs && user.depositTxs.length) {
      setPendingDepositTxs(user.depositTxs.filter((tx) => tx.amount));
    }
  }, [user]);

  return (
    <div className={styles.wrapper}>
      <BridgeModal
        title="Pending Deposits"
        headerHelper="IT TAKES UP TO 10 MINUTES FOR YOUR BALANCE TO BE REFLECTED ON MATIC, ONCE THE TRANSACTION IS CONFIRMED ON ETHEREUM."
        mode={2}
      >
        <PendingTable
          filter={filter}
          filterChanged={(e) => setFilter(e.target.value)}
          sort={sort}
          sortChanged={(e) => setSort(e.target.value)}
          data={filterSortDeposits()}
          mode={2}
          id={id}
        />
        <div className={styles.actions}>
          <Link href="/bridge">
            <a className={styles.return}>return</a>
          </Link>
        </div>
      </BridgeModal>
    </div>
  );
};

export default Pending;
