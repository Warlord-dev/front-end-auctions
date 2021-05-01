import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Modal from '@components/modal';
import { useDTXV1TokenIds } from '@hooks/useERC721V1TokenId';
import useERC721Upgrader from '@hooks/useERC721Upgrader';

import styles from './styles.module.scss';
import Button from '@components/buttons/button';
import { getEnabledNetworkByChainId } from '@services/network.service';
import { getChainId } from '@selectors/global.selectors';
import { useIsMainnet } from '@hooks/useIsMainnet';

export default function UpgradeNFTModal({ onClose, onLoading }) {
  const [dtxV1MaticIds] = useDTXV1TokenIds();
  const isMainnet = useIsMainnet();
  const chainId = useSelector(getChainId);
  const network = getEnabledNetworkByChainId(chainId);

  const upgraderCallback = useERC721Upgrader();
  const handleUpgrade = async () => {
    if (network.alias === (isMainnet ? 'matic' : 'mumbai')) {
      onLoading(true);
      await upgraderCallback(dtxV1MaticIds);
      onClose();
    } else {
      window.alert('Please change to Matic network!');
    }
  };

  return dtxV1MaticIds?.length ? (
    <Modal title="NFT Upgrade Required  " onClose={onClose} className={styles.modal}>
      <p className={styles.text}>
        You have {dtxV1MaticIds.length} V1 NFTs. To stake your NFTs you must upgrade to V2.Please
        confirm your {dtxV1MaticIds.length} transactions in metamask to approve the upgrader and
        perform the upgrade. Afterwards you may need to refresh the page to see your new balance
        reflected.
      </p>
      <Button onClick={handleUpgrade}>Approve and Upgrade All</Button>
    </Modal>
  ) : null;
}
