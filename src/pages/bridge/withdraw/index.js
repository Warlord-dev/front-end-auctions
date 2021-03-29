import React, { useState } from 'react';
import Router from 'next/router';

import Hint from '@components/hint';
import { useMonaBalance } from '@hooks/useMonaBalance';

import styles from '../styles.module.scss';
import parentStyles from '../styles.module.scss';
import CurrencyInput from '@components/currency-input';
import Button from '@components/buttons/button';
import useApproveForMatic from '@hooks/useApproveForMatic';
import useWithdrawFromMatic from '@hooks/useERC20WithdrawFromMatic';

export default function Withdraw() {
  const [_, maticMonaBalance] = useMonaBalance();
  const [transferAmount, setTransferAmount] = useState('0');

  const { approved, approveCallback } = useApproveForMatic(transferAmount);

  const withdrawCallback = useWithdrawFromMatic();

  return (
    <div className={styles.depositWithdrawWrapper}>
      <div className={styles.bridgeTitle}>WITHDRAW $MONA TO ETHEREUM</div>
      <div>
      <div style={{ marginBottom: 15, display: 'flex', justifyContent: 'center' }}>
          <Hint
            title="BALANCE"
            hintText="WITHDRAWING TO ETHEREUM CAN TAKE A COUPLE OF HOURS (~2-3 HOURS). YOU MUST ALSO CLICK “CLAIM ON ETHEREUM” AFTER THE WITHDRAWAL IS COMPLETE."
          />
        </div>

        <div style={{ marginBottom: 30 }}>
          <div className={`${styles.amount} ${parentStyles.maticColor}`}>
            {parseFloat(maticMonaBalance).toFixed(6)} $MONA
          </div>
        </div>

        <CurrencyInput
          color={parentStyles.maticColor}
          placeHolder="$MONA"
          max={maticMonaBalance}
          value={transferAmount}
          setValue={setTransferAmount}
        />

        <button
          className={styles.transferButton}
          onClick={() => {
            if (!approved) {
              approveCallback();
            } else {
              withdrawCallback(transferAmount);
            }
          }}
          style={{ marginTop: 40 }}
        >
          <div className={styles.actionText}>
            {!approved ? 'APPROVE TRANSFER' : 'WITHDRAW TO ETHEREUM'}
          </div>
        </button>
      </div>
      <Button className={styles.backButton} background="#777777" onClick={() => Router.push(`/bridge`)}>
        <span>RETURN TO BRIDGE</span>
      </Button>
    </div>
  );
}
