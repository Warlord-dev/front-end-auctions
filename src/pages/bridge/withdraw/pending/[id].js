import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import BridgeModal from '@components/bridge-modal';
import PendingTable from '@components/pending-table';
import { getUser } from '@helpers/user.helpers';
import styles from './styles.module.scss';
import useERC20Exit from '@hooks/useERC20Exit';
import useExitFromMatic from '@hooks/useExitFromMatic';
import { toast } from 'react-toastify';

const Pending = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const id = parseInt(router.query.id);
  const user = useSelector(getUser);
  // const erc20Exit = useERC20Exit();
  const erc20ExitCallback = useExitFromMatic();
  const [pendingWithdrawals, setPendingWithdrawals] = useState([]);
  // let pendingWithdrawals = user.withdrawalTxs.filter((tx) => tx.status === 'pending');

  useEffect(() => {
    console.log('this is user change');
    if (user.withdrawalTxs && user.withdrawalTxs.length) {
      console.log('this is user change -- inside', user.withdrawalTxs);
      setPendingWithdrawals(user.withdrawalTxs.filter((tx) => tx.status === 'pending'));
    }
  }, [user]);

  const onWithdraw = async (data) => {
    console.log('this is on withdraw', data);
    if (id === 1) {
      try {
        await erc20ExitCallback(data.txHash);
      } catch (err) {
        toast.error(err.message);
      }
    }
    // if (data.amount < 100000) {
    // } else if (data.amount > 100000) {
    //   // erc20Exit(hash);
    // }
  };

  return (
    <div className={styles.wrapper}>
      <BridgeModal title="Pending Withdrawals" mode={1}>
        <PendingTable data={pendingWithdrawals} id={id} mode={1} onWithdraw={onWithdraw} />
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
