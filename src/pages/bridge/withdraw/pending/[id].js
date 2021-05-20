import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import BridgeModal from '@components/bridge-modal';
import PendingTable from '@components/pending-table';
import { getUser } from '@helpers/user.helpers';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

const Pending = () => {
  const router = useRouter();
  const id = parseInt(router.query.id);
  const user = useSelector(getUser);
  const pendingWithdrawals = user.withdrawalTxs.filter((tx) => tx.status === 'pending');

  return (
    <div className={styles.wrapper}>
      <BridgeModal title="Pending Withdrawals" mode={1}>
        <PendingTable data={pendingWithdrawals} id={id} mode={1} />
        <hr />
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
