import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Link from 'next/link';
import classnames from 'classnames';
import BridgeModal from '@components/bridge-modal';
import { getUser } from '@helpers/user.helpers';
import styles from './styles.module.scss';
import useApproveForMatic from '@hooks/useApproveForMatic';
import useDepositToMatic from '@hooks/useERC20DepositToMatic';
import { useMonaBalance } from '@hooks/useMonaBalance';
import { useEthMaticNFTs } from '@hooks/useEthMaticNFTs';
import NftTable from '@components/nft-table';

const Deposite = () => {
  const router = useRouter();
  const id = parseInt(router.query.id);
  const [amount, setAmount] = useState('0');
  const user = useSelector(getUser);
  const { approved, setApproved, approveCallback } = useApproveForMatic(amount);
  const [monaEthBalance] = useMonaBalance();
  const depositCallback = useDepositToMatic();
  const pendingDeposits = (user.depositTxs || []).filter((tx) => tx.status === 'pending');
  const titles = ['$MONA ERC-20', 'ESPA NFT SKINS', 'DIGIFIZZY ERC-998 BUNDLE', 'ERC-1155 NFTs'];
  const [ethNfts, __] = useEthMaticNFTs();

  const onDeposit = async () => {
    if (!approved) {
      try {
        await approveCallback();
        toast.success('Successfully approved!');
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      try {
        await depositCallback(amount);
        setApproved(false);
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  const erc20 = (
    <div className={styles.erc20ModalWrapper}>
      <div className={styles.priceLabel}> current $mona balance on ethereum </div>
      <div className={styles.price}> {parseFloat(monaEthBalance).toFixed(2)} $MONA </div>
      <hr />
      <div className={styles.amountLabel}> select amount to deposite </div>
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
          <button type="button" onClick={() => setAmount(monaEthBalance)}>
            {' '}
            Max{' '}
          </button>{' '}
        </div>
        <div className={styles.btnGroup}>
          <button
            type="button"
            className={classnames(styles.btn, { [styles.btnRightMar]: pendingDeposits.length })}
            onClick={onDeposit}
          >
            {!approved ? 'Approve' : 'Deposit'}
          </button>
          {pendingDeposits.length ? (
            <Link href={`/bridge/deposit/pending/${id}`}>
              <a className={classnames(styles.btn, styles.btnLeftMar)}>
                <span>Pending Deposits</span>
              </a>
            </Link>
          ) : null}
        </div>
      </div>
      <hr />
      <div className={styles.actions}>
        <Link href="/bridge">
          <a className={styles.return}> return </a>
        </Link>
      </div>
    </div>
  );

  const espaNft = (
    <div className={styles.espaNftModalWrapper}>
      <NftTable data={ethNfts} mode={2} />
      <hr />
      <div className={styles.actions}>
        <Link href="/bridge">
          <a className={styles.return}>return</a>
        </Link>
      </div>
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <BridgeModal title={`deposite ${titles[id - 1]}`} mode={2}>
        {id === 1 && erc20}
        {id === 2 && espaNft}
      </BridgeModal>
    </div>
  );
};

export default Deposite;
