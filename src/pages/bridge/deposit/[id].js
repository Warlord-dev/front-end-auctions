import React, { useEffect, useState } from 'react';
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
import useApproveForRootTunnel from '@hooks/useApproveForRootTunnel';
import useSendNftsToChildRootTunnel from '@hooks/useSendNftsToChildRootTunnel';
import { getEthNfts } from '@selectors/global.selectors';
import { useDTXTokenIds } from '@hooks/useERC721TokenId';

const Deposite = () => {
  const router = useRouter();
  const id = parseInt(router.query.id);
  const [amount, setAmount] = useState('0');
  const [nftIds, setNftIds] = useState([]);
  const [ethDtxTokenIds, maticDtxTokenIds] = useDTXTokenIds();
  const [pendingDeposits, setPendingDeposits] = useState([]);
  const ethNfts = useSelector(getEthNfts).toJS();
  const user = useSelector(getUser);
  const { approved, setApproved, approveCallback } = useApproveForMatic(amount);
  const { approvedRootTunnel, setApprovedRootTunnel, approveForRootTunnel } =
    useApproveForRootTunnel();
  const [monaEthBalance] = useMonaBalance();
  const depositCallback = useDepositToMatic();
  const sendNftsToChildRootTunnel = useSendNftsToChildRootTunnel();
  const titles = ['$MONA ERC-20', 'ESPA NFT SKINS', 'DIGIFIZZY ERC-998 BUNDLE', 'ERC-1155 NFTs'];
  const [fetchEthNfts] = useEthMaticNFTs();

  useEffect(() => {
    if (user) {
      const pendings = (user?.depositTxs || []).filter((tx) => tx.status.includes('pending'));
      setPendingDeposits(pendings);
    }
  }, [user]);

  useEffect(() => {
    fetchEthNfts();
  }, [ethDtxTokenIds]);

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

  const onDepositNft = async () => {
    if (!approvedRootTunnel) {
      try {
        const res = await approveForRootTunnel();
        toast.success('Successfully approved!');
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      try {
        const res = await sendNftsToChildRootTunnel(nftIds);
        setNftIds([]);
        setApprovedRootTunnel(false);
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  const erc20 = (
    <div className={styles.erc20ModalWrapper}>
      <div className={styles.priceLabel}> current $mona balance on ethereum </div>
      <div className={styles.price}> {parseFloat(monaEthBalance).toFixed(2)} $MONA </div>
      <div className={styles.amountLabel}>
        select amount to deposite
        <div className={styles.help}>
          {' '}
          ?
          <span className={styles.tooltip}>
            IT TAKES UP TO 10 MINUTES FOR YOUR BALANCE TO BE REFLECTED ON MATIC, ONCE THE
            TRANSACTION IS CONFIRMED ON ETHEREUM.
          </span>
        </div>
      </div>
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
      <div className={styles.actions}>
        <Link href="/bridge">
          <a className={styles.return}> return </a>
        </Link>
      </div>
    </div>
  );

  const espaNft = (
    <div className={styles.espaNftModalWrapper}>
      <NftTable
        data={ethNfts}
        mode={2}
        nftIds={nftIds}
        onChange={(id) => {
          if (nftIds.indexOf(id) >= 0) {
            setNftIds(nftIds.filter((nftId) => nftId !== id));
          } else {
            setNftIds([...nftIds, id]);
          }
        }}
      />
      <div className={styles.actions}>
        {pendingDeposits.length ? (
          <Link href={`/bridge/deposit/pending/${id}`}>
            <a className={styles.pendingDepositsBtn}> pending deposits </a>
          </Link>
        ) : null}
        {nftIds.length ? (
          <button className={styles.bridgeBtn} onClick={onDepositNft}>
            {approvedRootTunnel ? 'Deposit' : 'Approve'}
          </button>
        ) : null}
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
