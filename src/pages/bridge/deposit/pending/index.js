import BridgeModal from '@components/bridge-modal';
import PendingTable from '@components/pending-table';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

const Pending = () => {
  return (
    <div className={styles.wrapper}>
      <BridgeModal title="Pending Deposits" mode={2}>
        <PendingTable data={{}} mode={2} />
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
