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
import NftTable from '@components/nft-table';
import { useEthMaticNFTs } from '@hooks/useEthMaticNFTs';
import useApproveForChildTunnel from '@hooks/useApproveForChildTunnel';
import useSendNFTsToRootChildTunnel from '@hooks/useSendNftsToRootChildTunnel';
import { useDTXTokenIds } from '@hooks/useERC721TokenId';
import { getMaticNfts } from '@selectors/global.selectors';

const Withdraw = () => {
  const router = useRouter();
  const id = parseInt(router.query.id);
  const [pendingWithdrawals, setPendingWithdrawals] = useState([]);
  const [amount, setAmount] = useState('0');
  const [nftIds, setNftIds] = useState([]);
  const [ethDtxTokenIds, maticDtxTokenIds] = useDTXTokenIds();
  const user = useSelector(getUser);
  const maticNfts = useSelector(getMaticNfts).toJS();
  const { approved, setApproved, approveCallback } = useApproveForMatic(amount);
  const { approvedChildTunnel, setApprovedChildTunnel, approveForChildTunnel } =
    useApproveForChildTunnel();
  const sendNTFsToRootChildTunnel = useSendNFTsToRootChildTunnel();
  const withdrawCallback = useWithdrawFromMatic();
  const [_, monaMaticBalance] = useMonaBalance();
  const [__, fetchNfts] = useEthMaticNFTs();

  useEffect(() => {
    if (user) {
      const pendings = (user.withdrawalTxs || []).filter((tx) => tx.status.includes('pending'));
      setPendingWithdrawals(pendings);
    }
  }, [user]);

  useEffect(() => {
    fetchNfts();
  }, [maticDtxTokenIds]);

  const titles = ['$MONA ERC-20', 'ESPA NFT SKINS', 'DIGIFIZZY ERC-998 BUNDLE', 'ERC-1155 NFTs'];

  const onBridgeErc20 = async () => {
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

  const onBridgeNft = async () => {
    if (!approvedChildTunnel) {
      try {
        const res = await approveForChildTunnel();
        toast.success('Successfully approved!');
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      try {
        await sendNTFsToRootChildTunnel(nftIds);
        setNftIds([]);
        setApprovedChildTunnel(false);
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
      <div className={styles.amountLabel}>
        select amount to withdraw
        <div className={styles.help}>
          {' '}
          ?
          <span className={styles.tooltip}>
            WITHDRAWING TO ETHEREUM CAN TAKE A COUPLE OF HOURS (~2-3 HOURS). YOU MUST ALSO CLICK
            “CLAIM ON ETHEREUM” AFTER THE WITHDRAWAL IS COMPLETE.
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
          <button type="button" onClick={() => setAmount(monaMaticBalance)}>
            {' '}
            Max{' '}
          </button>{' '}
        </div>
        <div className={styles.btnGroup}>
          <button
            type="button"
            className={classnames(styles.btn, { [styles.btnRightMar]: pendingWithdrawals.length })}
            onClick={onBridgeErc20}
          >
            {approved ? 'Bridge' : 'Approve'}
          </button>
          {pendingWithdrawals.length ? (
            <Link href={`/bridge/withdraw/pending/${id}`}>
              <a className={classnames(styles.btn, styles.btnLeftMar)}>Pending Withdrawals</a>
            </Link>
          ) : null}
        </div>
      </div>
      <div className={styles.actions}>
        <Link href="/bridge">
          <a className={styles.return}>return</a>
        </Link>
      </div>
    </div>
  );

  const espaNft = (
    <div className={styles.espaNftModalWrapper}>
      <NftTable
        data={maticNfts}
        mode={1}
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
        {pendingWithdrawals.length ? (
          <Link href={`/bridge/withdraw/pending/${id}`}>
            <a className={styles.pendingWithdrawalsBtn}> pending withdrawals </a>
          </Link>
        ) : null}
        {nftIds.length ? (
          <button className={styles.bridgeBtn} onClick={onBridgeNft}>
            {approvedChildTunnel ? 'Bridge' : 'Approve'}
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
      <BridgeModal title={`withdraw ${titles[id - 1]}`} mode={1}>
        {id === 1 && erc20}
        {id === 2 && espaNft}
      </BridgeModal>
    </div>
  );
};

export default Withdraw;
