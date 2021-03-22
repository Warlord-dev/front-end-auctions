import React from 'react';
import Router from 'next/router';
import TimeAgo from 'react-timeago';

import Hint from '@components/hint';

import styles from './styles.module.scss';
import { useMonaBalance } from '@hooks/useMonaBalance';
import { useSelector } from 'react-redux';
import { getUser } from '@helpers/user.helpers';
import { useCheckInclusion } from '@hooks/useCheckInclusion';
import useExitFromMatic from '@hooks/useExitFromMatic';

export default function Bridge() {
  const [monaEthBalance, monaMaticBalance] = useMonaBalance();
  const profile = useSelector(getUser);
  const withdrawalTxs = (profile?.withdrawalTxs || []).filter((p) => p.amount);

  // console.log(withdrawalTxs);

  // const withdrawalStatuses = useCheckInclusion(withdrawalTxs.map((w) => w.txHash));

  const exitCallback = useExitFromMatic();

  return (
    <div classNam={styles.bridgeContainer}>
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

      <div className={styles.withdrawalWrapper}>
        <div className={styles.bridgeTitle}>Pending Withdrawals</div>
        <div className={styles.withdrawalHeader}>
          <div className={styles.withdrawalRowItem}>Created</div>
          <div className={styles.withdrawalRowItem}>Amount</div>
          <div className={styles.withdrawalRowItem}>Status</div>
          <div className={styles.withdrawalRowItem}>Withdraw</div>
        </div>
        {withdrawalTxs.map((tx) => (
          <div className={styles.withdrawalRow}>
            <div className={styles.withdrawalRowItem}>
              <TimeAgo date={new Date(tx.created)} />
            </div>
            <div className={styles.withdrawalRowItem}>{tx.amount}</div>
            <div className={styles.withdrawalRowItem}>
              {Date.now() - new Date(tx.created).getTime() >= 10800
                ? 'Pending Withdrawal'
                : 'Processing'}
            </div>
            {Date.now() - new Date(tx.created).getTime() >= 10800 && (
              <div className={styles.withdrawalRowItem}>
                <button
                  className={styles.withdrawButton}
                  onClick={() => {
                    exitCallback(tx.txHash);
                  }}
                >
                  <div className={styles.withdrawText}>Withdraw</div>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
