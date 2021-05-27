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
import useRootTunnelReceiveMessage from '@hooks/useRootTunnelV2ReceiveMessage';

const Pending = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [pendingWithdrawals, setPendingWithdrawals] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('1');
  const id = parseInt(router.query.id);
  const user = useSelector(getUser);
  const erc20ExitCallback = useExitFromMatic();
  const rootTunnelReceiveMessage = useRootTunnelReceiveMessage();

  useEffect(() => {
    if (user?.withdrawalTxs && user.withdrawalTxs.length) {
      setPendingWithdrawals(user.withdrawalTxs.filter((tx) => tx.amount));
    }
  }, [user]);

  const onWithdraw = async (data) => {
    if (id === 1) {
      try {
        await erc20ExitCallback(data.rows[0].txHash);
      } catch (err) {
        toast.error(err.message);
      }
    } else if (id === 2) {
      try {
        await rootTunnelReceiveMessage(data.rows);
      } catch (err) {
        toast.error(err.message);
      }
    }
    // if (data.amount < 100000) {
    // } else if (data.amount > 100000) {
    //   // erc20Exit(hash);
    // }
  };

  const filterSortWithdrawals = () => {
    const withdrawals = [...pendingWithdrawals];
    withdrawals.sort((a, b) => {
      if (sort === 1) {
        const date1 = new Date(a.created),
          date2 = new Date(b.created);
        if (date1 > date2) return 1;
        if (date1 === date2) return 0;
        if (date1 < date2) return -1;
      } else {
        if (a.status > b.status) return 1;
        if (a.status === b.status) return 0;
        return -1;
      }
    });
    if (!filter.length) return withdrawals;
    return withdrawals.filter((tx) => {
      return tx.txHash.includes(filter) || tx.status.includes(filter);
    });
  };

  return (
    <div className={styles.wrapper}>
      <BridgeModal
        title="Pending Withdrawals"
        headerHelper="WITHDRAWING TO ETHEREUM CAN TAKE A COUPLE OF HOURS (~2-3 HOURS). YOU MUST ALSO CLICK “CLAIM ON ETHEREUM” AFTER THE WITHDRAWAL IS COMPLETE."
        mode={1}
      >
        <PendingTable
          filter={filter}
          filterChanged={(e) => setFilter(e.target.value)}
          sort={sort}
          sortChanged={(e) => setSort(e.target.value)}
          data={filterSortWithdrawals()}
          id={id}
          mode={1}
          onWithdraw={onWithdraw}
        />
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
