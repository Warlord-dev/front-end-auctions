import React from 'react';
import Router from 'next/router';

import Hint from '@components/hint';

import styles from './styles.module.scss';
import { useMonaBalance } from '@hooks/useMonaBalance';

export default function Bridge() {
  const [monaEthBalance, monaMaticBalance] = useMonaBalance();

  return (
    <div className={styles.bridgeWrapper}>
      <div className={styles.bridgeTitle}>MATIC-ETH BRIDGE</div>
      <div>
        <Hint
          title="DEPOSITS"
          hintText="IT TAKES UP TO 10 MINUTES FOR YOUR BALANCE TO BE REFLECTED ON MATIC, ONCE THE TRANSACTION IS CONFIRMED ON ETHEREUM."
        />
        <div className={`${styles.amount} ${styles.ethColor}`}>{monaEthBalance} $MONA</div>
        <button className={styles.actionButton} onClick={() => Router.push('/bridge/deposit')}>
          <div className={styles.actionText}>DEPOSIT TO MATIC</div>
        </button>
      </div>

      <div className={styles.orText}>OR</div>

      <div>
        <Hint
          title="WITHDRAWALS"
          hintText="WITHDRAWING TO ETHEREUM CAN TAKE A COUPLE OF HOURS (~2-3 HOURS). YOU MUST ALSO CLICK “CLAIM ON ETHEREUM” AFTER THE WITHDRAWAL IS COMPLETE."
        />
        <div className={`${styles.amount} ${styles.maticColor}`}>{monaMaticBalance} $MONA</div>
        <button className={styles.actionButton} onClick={() => Router.push('/bridge/withdraw')}>
          <div className={styles.actionText}>WITHDRAW TO ETHERIUM</div>
        </button>
      </div>
    </div>
  );
}
