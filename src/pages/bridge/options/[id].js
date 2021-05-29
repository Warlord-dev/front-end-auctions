import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import BridgeModal from '@components/bridge-modal';
import styles from './styles.module.scss';

const Options = () => {
  const router = useRouter();
  const id = parseInt(router.query.id);
  const title = id === 1 ? 'withdraw to ethereum' : 'deposit to matic';

  return (
    <div className={styles.wrapper}>
      <BridgeModal title={title} mode={id} isAction>
        <div className={classnames(styles.modalBodyWrapper, styles[`mode-${id}`])}>
          <div className={styles.bodyWrapper}>
            <Link href={`/bridge/${id === 1 ? 'withdraw' : 'deposit'}/1`}>
              <a className={styles.mainBtn}> $MONA ERC-20 </a>
            </Link>
            <Link href={`/bridge/${id === 1 ? 'withdraw' : 'deposit'}/2`}>
              <a className={styles.mainBtn}> ESPA NFT SKINS </a>
            </Link>
            {/* <Link href={`/bridge/${id === 1 ? 'withdraw' : 'deposit'}/3`}>
              <a className={styles.mainBtn}> DIGIFIZZY ERC-998 BUNDLE </a>
            </Link>
            <Link href={`/bridge/${id === 1 ? 'withdraw' : 'deposit'}/4`}>
              <a className={styles.mainBtn}> ERC-1155 NFTs </a>
            </Link> */}
            {/* <Link> */}
            <a className={styles.mainBtn}> DIGIFIZZY ERC-998 BUNDLE COMING SOON </a>
            {/* </Link> */}
            {/* <Link> */}
            <a className={styles.mainBtn}> ERC-155 NFTS COMING SOON </a>
            {/* </Link> */}
          </div>
          <div className={styles.actions}>
            <Link href="/bridge">
              <a className={classnames(styles.return, styles[`return-${id}`])}> return </a>
            </Link>
          </div>
        </div>
      </BridgeModal>
    </div>
  );
};

export default Options;
