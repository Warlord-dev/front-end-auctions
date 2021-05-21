import React from 'react';
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
  const pendingDepositTxs = (user.depositTxs || []).filter((tx) => tx.status === 'pending');

  return (
    <div className={styles.wrapper}>
      <BridgeModal title="Pending Deposits" mode={2}>
        <PendingTable data={pendingDepositTxs} mode={2} />
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
