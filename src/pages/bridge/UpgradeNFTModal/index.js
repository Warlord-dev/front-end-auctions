import React, { useEffect, useState } from 'react';

import Modal from '@components/modal';
import { useDTXTokenIds } from '@hooks/useERC721TokenId';
import useERC721Upgrader from '@hooks/useERC721Upgrader';

import styles from './styles.module.scss';
import Button from '@components/buttons/button';

export default function UpgradeNFTModal({ onClose }) {
  const [_, maticDtxTokenIds] = useDTXTokenIds();
  const upgraderCallback = useERC721Upgrader();
  const handleUpgrade = async () => {
    await upgraderCallback(maticDtxTokenIds);
  };

  return (
    <Modal title="NFT Upgrade Required  " onClose={onClose} className={styles.modal}>
      <p className={styles.text}>
        You have {maticDtxTokenIds.length} V1 NFTs. To stake your NFTs you must upgrade to V2.
      </p>
      <Button onClick={handleUpgrade}>Upgrade</Button>
    </Modal>
  );
}
