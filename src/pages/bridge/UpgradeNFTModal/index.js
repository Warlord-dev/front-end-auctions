import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Modal from '@components/modal';
import { useDTXV1TokenIds } from '@hooks/useERC721V1TokenId';
import useERC721Upgrader from '@hooks/useERC721Upgrader';

import styles from './styles.module.scss';
import Button from '@components/buttons/button';

export default function UpgradeNFTModal({ onClose }) {
  const [_, maticDtxTokenIds] = useDTXV1TokenIds();

  const upgraderCallback = useERC721Upgrader();
  const handleUpgrade = async () => {
    await upgraderCallback(maticDtxTokenIds);
    onClose();
  };

  return maticDtxTokenIds?.length ? (
    <Modal title="NFT Upgrade Required  " onClose={onClose} className={styles.modal}>
      <p className={styles.text}>
        You have {maticDtxTokenIds.length} V1 NFTs. To stake your NFTs you must upgrade to V2.
      </p>
      <Button onClick={handleUpgrade}>Approve and Upgrade All</Button>
    </Modal>
  ) : null;
}
