import BridgeModal from '@components/bridge-modal';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';

const Bridge = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <BridgeModal title="matic-eth bridge" mode={0}>
        <div className={styles.modalBodyWrapper}>
          <div className={styles.bodyWrapper}>
            <Link href={`/bridge/options/1`}>
              <a className={styles.mainBtn}> withdraw to ethereum </a>
            </Link>
            <Link href={`/bridge/options/2`}>
              <a className={styles.mainBtn}> deposit to matic </a>
            </Link>
          </div>
        </div>
      </BridgeModal>
    </div>
  );
};

export default Bridge;
