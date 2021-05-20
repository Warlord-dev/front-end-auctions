import { useRouter } from 'next/router';
import Link from 'next/link';
import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import BridgeModal from '@components/bridge-modal';
import styles from './styles.module.scss';
import { useMonaBalance } from '@hooks/useMonaBalance';
import useApproveForMatic from '@hooks/useApproveForMatic';
import useWithdrawFromMatic from '@hooks/useERC20WithdrawFromMatic';
import { useSelector } from 'react-redux';
import { getUser } from '@helpers/user.helpers';

const Withdraw = () => {
  const router = useRouter();
  const id = parseInt(router.query.id);
  const [amount, setAmount] = useState('0');
  const user = useSelector(getUser);
  const { approved, setApproved, approveCallback } = useApproveForMatic(amount);
  const [_, monaMaticBalance] = useMonaBalance();
  const withdrawCallback = useWithdrawFromMatic();
  const pendingWithdrawals = user.withdrawalTxs.filter((tx) => tx.status === 'pending');
  const titles = ['$MONA ERC-20', 'ESPA NFT SKINS', 'DIGIFIZZY ERC-998 BUNDLE', 'ERC-1155 NFTs'];

  const onBridge = async () => {
    if (!approved) {
      try {
        const res = await approveCallback();
        toast.success('Successfully approved!');
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      try {
        await withdrawCallback(amount);
        setApproved(false);
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  const erc20 = (
    <div className={styles.erc20ModalWrapper}>
      <div className={styles.priceLabel}> current $mona balance on matic </div>
      <div className={styles.price}> {parseFloat(monaMaticBalance).toFixed(2)} $MONA </div>
      <hr />
      <div className={styles.amountLabel}> select amount to withdraw </div>
      <div className={styles.bodyWrapper}>
        <div className={styles.amountWrapper}>
          <div className={styles.amountPrefix}> $MONA </div>
          <input
            type="text"
            className={styles.amount}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className={styles.amountMax}>
          <button type="button" onClick={() => setAmount(monaMaticBalance)}>
            {' '}
            Max{' '}
          </button>{' '}
        </div>
        <div className={styles.btnGroup}>
          <button
            type="button"
            className={classnames(styles.btn, { [styles.btnRightMar]: pendingWithdrawals.length })}
            onClick={onBridge}
          >
            {approved ? 'Bridge' : 'Approve'}
          </button>
          <Link href={`/bridge/withdraw/pending/${id}`}>
            <a
              className={classnames(styles.btn, { [styles.btnLeftMar]: pendingWithdrawals.length })}
            >
              Pending Withdrawals
            </a>
          </Link>
        </div>
      </div>
      <hr />
      <div className={styles.actions}>
        <Link href="/bridge">
          <a className={styles.return}>return</a>
        </Link>
      </div>
    </div>
  );

  const espaNft = <div className={styles.espaNftModalWrapper}></div>;

  return (
    <div className={styles.wrapper}>
      <BridgeModal title={`withdraw ${titles[id - 1]}`} mode={1}>
        {erc20}
      </BridgeModal>
    </div>
  );
};

export default Withdraw;
