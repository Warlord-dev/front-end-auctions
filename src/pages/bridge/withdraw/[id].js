import { useRouter } from 'next/router';
import Link from 'next/link';
import classnames from 'classnames';
import React from 'react';
import BridgeModal from '@components/bridge-modal';
import styles from './styles.module.scss';

const Withdraw = () => {
  const router = useRouter();
  const id = parseInt(router.query.id);
  const titles = ['$MONA ERC-20', 'ESPA NFT SKINS', 'DIGIFIZZY ERC-998 BUNDLE', 'ERC-1155 NFTs'];

  const erc20 = (
    <div className={styles.erc20ModalWrapper}>
      <div className={styles.priceLabel}> current $mona balance on matic </div>
      <div className={styles.price}> 0.34 $MONA </div>
      <hr />
      <div className={styles.amountLabel}> select amount to withdraw </div>
      <div className={styles.bodyWrapper}>
        <div className={styles.amountWrapper}>
          <div className={styles.amountPrefix}> $MONA </div>
          <input type="text" className={styles.amount} placeholder={0} />
        </div>
        <div className={styles.amountMax}> Max </div>
        <div className={styles.btnGroup}>
          <button type="button" className={classnames(styles.btn, { [styles.btnRightMar]: true })}>
            {' '}
            Bridge{' '}
          </button>
          <Link href="/bridge/withdraw/pending">
            <a className={classnames(styles.btn, { [styles.btnLeftMar]: true })}>
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
