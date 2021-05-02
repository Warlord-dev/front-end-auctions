import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import cn from 'classnames';
import axios from 'axios';
import TimeAgo from 'react-timeago';

import Hint from '@components/hint';
import Button from '@components/buttons/button';
import CheckBox from '@components/checkbox';
import Loader from '@components/loader';
import NFTProduct from '@components/nft-product';
import Modal from '@components/modal';

// import useMaticExitManager from '@hooks/useMaticExitManager';
import { useMonaBalance } from '@hooks/useMonaBalance';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '@helpers/user.helpers';
import useExitFromMatic from '@hooks/useExitFromMatic';
import { getChainId } from '@selectors/global.selectors';
import { getAccount } from '@selectors/user.selectors';
import { STORAGE_WALLET } from '@constants/storage.constants';
import { WALLET_ARKANE } from '@constants/global.constants';
import { useNFTs } from '@hooks/espa/user.hooks';
import { useEthMaticNFTs } from '@hooks/useEthMaticNFTs';
import useERC721ApproveForMatic from '@hooks/useERC721ApproveForMatic';
import useERC721DepositToMatic from '@hooks/useERC721DepositToMatic';
import useERC721WithdrawFromMatic from '@hooks/useERC721WithdrawToEthereum';
import useERC721ExitFromMatic from '@hooks/useERC721ExitFromMatic';
import { useDTXTokenIds } from '@hooks/useERC721TokenId';
import { useDTXV1TokenIds } from '@hooks/useERC721V1TokenId';
import useSendNFTsToRoot from '@hooks/useSendNFTsToRoot.hooks';
import userActions from '@actions/user.actions';
import styles from './styles.module.scss';
import UpgradeNFTModal from './UpgradeNFTModal';
import useDigitalaxRootTunnelReceiveMessage from '@hooks/useDigitalaxRootTunnelReceiveMessage';
import { getEnabledNetworkByChainId } from '@services/network.service';
import { useIsMainnet } from '@hooks/useIsMainnet';
import { useDTXV1Balance } from '@hooks/useERC721V1Balance';

export default function Bridge() {
  const [tabIndex, setTabIndex] = useState(0);
  const [erc721TabIndex, setERC721TabIndex] = useState(0);
  const [nftIds, setNftIds] = useState([]);

  const [showTxConfirmModal, setShowTxConfirmModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalBody, setModalBody] = useState('');
  const sendNTFsToRoot = useSendNFTsToRoot();
  const [showUpgradeNFTModal, setShowUpgradeNFTModal] = useState(false);

  const [monaEthBalance, monaMaticBalance] = useMonaBalance();
  const profile = useSelector(getUser);
  const withdrawalTxs = (profile?.withdrawalTxs || []).filter((p) => p.amount);
  const headers = [
    'bridge $mona erc-20',
    'Bridge ERC-721 NFTs (ERC-998 Compatible)',
    'bridge erc-1155 nfts',
  ];
  const dispatch = useDispatch();
  const account = useSelector(getAccount);
  const nfts = useNFTs(account);
  const exitCallback = useExitFromMatic();
  const erc721ExitCallback = useERC721ExitFromMatic();
  const digitalaxRootTunnelReceiveMessage = useDigitalaxRootTunnelReceiveMessage();
  const chainId = useSelector(getChainId);
  const network = getEnabledNetworkByChainId(chainId);
  const isMainnet = useIsMainnet();
  const [loading, setLoading] = useState(false);
  // const [exitMgr] = useMaticExitManager();

  const [ethNfts, maticNfts] = useEthMaticNFTs();

  const { approved, approveCallback } = useERC721ApproveForMatic();
  const depositCallback = useERC721DepositToMatic();
  const withdrawCallback = useERC721WithdrawFromMatic();
  const [_, maticDtxTokenIds] = useDTXTokenIds();
  // const [_, maticDtxTokenIds] = useDTXTokenIds();
  const [garmentMaticV1Balance] = useDTXV1Balance();

  const handleDepositNFT = async () => {
    if (network.alias === (isMainnet ? 'mainnet' : 'goerli')) {
      setLoading(true);
      await depositCallback(nftIds[0])
        .then(() => {
          setLoading(false);
          setModalTitle('Moving to Matic!');
          setModalBody(
            'Your token is on its way to Matic Network! Please check back in 10-15 minutes.',
          );
          setShowTxConfirmModal(true);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      window.alert('Please change to mainnet network!');
    }
  };
  const handleWithdrawNFT = async () => {
    if (network.alias === (isMainnet ? 'matic' : 'mumbai')) {
      setLoading(true);
      if (nftIds[0] > 100000) {
        await sendNTFsToRoot([nftIds[0]])
          .then((res) => {
            setLoading(false);
            if (res.success) {
              setModalTitle('Congrats!');
              setModalBody(
                'Sent NFT to Root successfully. Your withdrawal will be available to exit onto the main network in approximately 3 hours. Please check back then to initiate the final transaction.',
              );
              setShowTxConfirmModal(true);

              // const sendNftsToRootBytes = exitMgr.buildPayloadForExit(
              //   res.result.transactionHash,
              //   '0x8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b036',
              // );
              dispatch(
                userActions.updateProfile({
                  withdrawalTxs: [
                    ...withdrawalTxs,
                    {
                      txHash: res.result.transactionHash,
                      amount: nftIds[0],
                      status: 'pending-721',
                      created: new Date(),
                      // sendNftsToRootBytes: ,
                      sendNftsToRootTokenIds: [nftIds[0]],
                    },
                  ],
                }),
              );
            }
          })
          .catch((err) => {
            setLoading(false);
            setModalTitle('Error!');
            setModalBody(`Send NFT To Root Failed - ${err.message ? err.message : err}`);
            setShowTxConfirmModal(true);
            console.log('Send NFT To Root Failed - ', err);
          });
      } else {
        await withdrawCallback(nftIds[0])
          .then(() => {
            setLoading(false);
            setModalTitle('In Motion to Etherium!  ');
            setModalBody(
              'Your withdrawal will be available to exit onto the main network in approximately 3 hours. Please check back then to initiate the final transaction.',
            );
            setShowTxConfirmModal(true);
          })
          .catch(() => {
            setLoading(false);
          });
      }
    } else {
      window.alert('Please change to matic network!');
    }
  };

  const handleDigitalaxRootTunnelReceiveMessage = (hash) => {
    setLoading(true);
    const network = isMainnet ? 'matic' : 'mumbai';
    axios
      .get(
        `https://apis.matic.network/api/v1/${network}/exit-payload/${hash}/?eventSignature=0x8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b036`,
      )
      .then((res) => {
        const { data } = res;
        digitalaxRootTunnelReceiveMessage(data.result)
          .then((res) => {
            setLoading(false);
            setModalTitle('Success!');
            setModalBody('Please check out your mainnet wallet');

            const updatedWithdrawals = [...withdrawalTxs];
            for (let i = 0; i < updatedWithdrawals.length; i += 1) {
              if (updatedWithdrawals[i].txHash === hash) {
                updatedWithdrawals[i].status = 'complete';
              }
            }
            dispatch(
              userActions.updateProfile({
                withdrawalTxs: updatedWithdrawals,
              }),
            );
            setShowTxConfirmModal(true);
          })
          .catch((e) => {
            setLoading(false);
            setModalTitle('Error!');
            setModalBody(`${e.message ? e.message : e}`);
            setShowTxConfirmModal(true);
          });
      })
      .catch(() => {});
  };

  useEffect(() => {
    if (parseInt(garmentMaticV1Balance) > 0) {
      setShowUpgradeNFTModal(true);
    }
  }, [garmentMaticV1Balance]);

  if (localStorage.getItem(STORAGE_WALLET) === WALLET_ARKANE) {
    return (
      <div className={styles.bridge}>
        <div className={styles.bridgeWrapper}>Please connect with metamask to use our bridge.</div>
      </div>
    );
  }

  const onClickTab = (index) => {
    if (index === 2) {
      return;
    }
    setTabIndex(index);
    if (index === 1) {
      setERC721TabIndex(0);
    }
  };

  const renderERC20Bridge = () => (
    <div>
      <div className={styles.bridgeWrapper}>
        <div>
          <Hint
            title="DEPOSITS"
            hintText="IT TAKES UP TO 10 MINUTES FOR YOUR BALANCE TO BE REFLECTED ON MATIC, ONCE THE TRANSACTION IS CONFIRMED ON ETHERIUM."
          />
          <div className={`${styles.amount} ${styles.ethColor}`}>
            {parseFloat(monaEthBalance).toFixed(6)} $MONA
          </div>
          <button className={styles.actionButton} onClick={() => Router.push('/bridge/deposit')}>
            <div className={styles.actionText}>DEPOSIT TO MATIC</div>
          </button>
        </div>

        <div className={styles.orText}>OR</div>

        <div>
          <Hint
            title="WITHDRAWALS"
            hintText="WITHDRAWING TO ETHERIUM CAN TAKE A COUPLE OF HOURS (~2-3 HOURS). YOU MUST ALSO CLICK “CLAIM ON ETHERIUM” AFTER THE WITHDRAWAL IS COMPLETE."
          />
          <div className={`${styles.amount} ${styles.maticColor}`}>
            {parseFloat(monaMaticBalance).toFixed(6)} $MONA
          </div>
          <button className={styles.actionButton} onClick={() => Router.push('/bridge/withdraw')}>
            <div className={styles.actionText}>WITHDRAW TO ETHERIUM</div>
          </button>
        </div>
      </div>
    </div>
  );

  const renderERC721Bridge = () => {
    if (erc721TabIndex == 0) {
      return (
        <div className={styles.bridgeWrapper}>
          <span className={styles.tabTitle}>ERC-721 FASHION GARMENT NFT BRIDGE</span>
          <div className={styles.underline} />
          <div className={styles.flexRow}>
            <Button
              className={styles.actionButton721}
              background="black"
              onClick={() => {
                setERC721TabIndex(1);
              }}
            >
              <span>DEPOSIT TO MATIC</span>
            </Button>
            <Button
              className={styles.actionButton721}
              background="black"
              onClick={() => {
                setERC721TabIndex(2);
              }}
            >
              <span>WITHDRAW TO ETHERIUM</span>
            </Button>
          </div>
        </div>
      );
    }
    return (
      <div className={cn(styles.bridgeWrapper, styles.erc721Wrapper)}>
        <div className={styles.bridgeTable}>
          <div className={styles.header}>
            <span>NFTS</span>
            <span>CURRENT NETWORK</span>
            <span>{erc721TabIndex === 1 ? 'SELECT TO DEPOSIT' : 'SELECT TO WITHDRAW'}</span>
          </div>
          <div className={styles.underline} />
          <div className={cn(styles.tableBody, styles.scroll)}>
            {(erc721TabIndex === 2 ? maticNfts : ethNfts).map((nft, index) => (
              <div className={styles.nftRow} key={`${nft}${index}`}>
                <div className={styles.item}>
                  <NFTProduct key={`nft_${nft.id}`} nft={nft} nftId={parseInt(nft.id)} />
                  <h4>Token ID is: {nft.id}</h4>
                </div>
                <span>{erc721TabIndex === 2 ? 'MATIC' : 'ETHERIUM'}</span>
                <div className={styles.nftCheckWrapper}>
                  <CheckBox checked={nftIds[0] === nft.id} onChange={() => onToggleChecked(nft)} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button
          className={styles.confirmButton721}
          background="black"
          isDisabled={!nftIds.length}
          onClick={() => {
            if (!approved) {
              approveCallback(nftIds[0]);
            } else if (erc721TabIndex === 1) {
              handleDepositNFT();
            } else {
              handleWithdrawNFT();
            }
          }}
        >
          <span>
            {!approved
              ? 'APPROVE'
              : erc721TabIndex === 1
              ? 'DEPOSIT TO MATIC'
              : 'WITHDRAW TO ETHERIUM'}
          </span>
        </Button>
        <Button
          className={styles.backButton}
          // background="#777777"
          onClick={() => setERC721TabIndex(0)}
        >
          <span>RETURN TO BRIDGE</span>
        </Button>
      </div>
    );
  };

  const onToggleChecked = (nft) => {
    if (nftIds.includes(nft.id)) {
      setNftIds(nftIds.filter((id) => id !== nft.id));
    } else {
      setNftIds([nft.id]);
    }
  };

  // console.log(ethNfts, maticNfts);

  return (
    <>
      {loading ? <Loader size="large" className={styles.loader} /> : null}
      <div className={styles.bridge}>
        <div className={styles.bridgeTitle}>MATIC-ETH BRIDGE</div>
        <div className={styles.container}>
          <div className={styles.headers}>
            {headers.map((header, index) => (
              <div
                className={`${index === tabIndex ? styles.active : ''} ${styles.header}`}
                onClick={() => onClickTab(index)}
                key={`${header}${index}`}
              >
                {header}
                {index === 2 && <span>Coming soon</span>}
                {index === 1 && (
                  <span className={styles.tooltip}>First Ever Multi-Token Bridge</span>
                )}
              </div>
            ))}
          </div>
          {tabIndex === 0 ? renderERC20Bridge() : tabIndex === 1 ? renderERC721Bridge() : ''}

          <div className={styles.withdrawalWrapper}>
            <div className={styles.bridgeTitle}>Pending Withdrawals</div>
            <div className={styles.withdrawalHeader}>
              <div className={styles.withdrawalRowItem}>Created</div>
              <div className={styles.withdrawalRowItem}>
                {tabIndex === 0 ? 'Amount' : 'Token Id'}
              </div>
              <div className={styles.withdrawalRowItem}>Status</div>
              <div className={styles.withdrawalRowItem}>Withdraw</div>
            </div>
            {withdrawalTxs
              .filter((tx) => tx.status === (tabIndex === 0 ? 'pending' : 'pending-721'))
              .map((tx) => (
                <div className={styles.withdrawalRow}>
                  <div className={styles.withdrawalRowItem}>
                    <TimeAgo date={new Date(tx.created)} />
                  </div>
                  <div className={styles.withdrawalRowItem}>{tx.amount}</div>
                  <div className={styles.withdrawalRowItem}>
                    {(Date.now() - new Date(tx.created).getTime()) / 1000 >= 10800
                      ? 'Pending Withdrawal'
                      : 'Processing'}
                  </div>
                  {(Date.now() - new Date(tx.created).getTime()) / 1000 >= 10800 && (
                    <div className={styles.withdrawalRowItem}>
                      <button
                        className={styles.withdrawButton}
                        onClick={() => {
                          if (tabIndex === 0) {
                            exitCallback(tx.txHash);
                          } else {
                            if (tx.amount < 100000) {
                              if (network.alias !== (isMainnet ? 'mainnet' : 'goerli')) {
                                window.alert('Please switch to matic network!');
                              } else {
                                erc721ExitCallback(tx.txHash);
                              }
                            } else if (tx.amount > 100000) {
                              if (network.alias !== (isMainnet ? 'mainnet' : 'goerli')) {
                                window.alert('Please switch to mainnet network!');
                              } else {
                                handleDigitalaxRootTunnelReceiveMessage(tx.txHash);
                              }
                            }
                          }
                        }}
                      >
                        <div className={styles.withdrawText}>Withdraw</div>
                      </button>
                    </div>
                  )}
                </div>
              ))}
          </div>

          {showTxConfirmModal && (
            <Modal title={modalTitle} onClose={() => setShowTxConfirmModal(false)}>
              <p>{modalBody}</p>
            </Modal>
          )}
          {showUpgradeNFTModal && (
            <UpgradeNFTModal
              garmentMaticV1Balance={garmentMaticV1Balance}
              onClose={() => {
                setShowUpgradeNFTModal(false);
              }}
              onLoading={(value) => setLoading(value)}
            />
          )}
        </div>
      </div>
    </>
  );
}
