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
      <BridgeModal
        title="Pending Deposits"
        headerHelper="IT TAKES UP TO 10 MINUTES FOR YOUR BALANCE TO BE REFLECTED ON MATIC, ONCE THE TRANSACTION IS CONFIRMED ON ETHEREUM."
        mode={2}
      >
        <PendingTable data={pendingDepositTxs} mode={2} id={id} />
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
