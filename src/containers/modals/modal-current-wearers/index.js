import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';

import Modal from '@components/modal';
import Loader from '@components/loader';
import {
  closeCurrentWearersModal,
} from '@actions/modals.actions';
import { getModalParams } from '@selectors/modal.selectors';
import { getChainId, getAllUsers } from '@selectors/global.selectors';
import {
  getDigitalaxGarmentPurchaseHistories,
  getDigitalaxGarmentV2PurchaseHistories,
  getDigitalaxMarketplacePurchaseHistories,
  getDigitalaxMarketplaceV2PurchaseHistories,
  getDigitalaxGarmentV2s
} from '@services/api/apiService';
import digitalaxApi from '@services/api/espa/api.service'

const ModalCurrentWearers = ({ className, title, type }) => {
  const dispatch = useDispatch();
  const { tokenIds, v1 } = useSelector(getModalParams);
  const chainId = useSelector(getChainId);
  // const [history, setHistory] = useState([]);
  const [wearers, setWearers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClose = () => {
    dispatch(closeCurrentWearersModal())
  };

  const allUsers = useSelector(getAllUsers).toJS();

  useEffect(() => {
    if (tokenIds.length) {
      const fetchHistories = async () => {
        if (type === 1) {
          if (parseInt(tokenIds[0]) <= 4) {
            const { digitalaxGarmentAuctionHistories } =
              await getDigitalaxGarmentPurchaseHistories(chainId, tokenIds[0]);
          } else {
            const { digitalaxGarmentV2AuctionHistories } =
              await getDigitalaxGarmentV2PurchaseHistories(chainId, tokenIds[0]);
          }
          setLoading(false);
        } else {
          let soldItems = []
          let historyItems = []
          if (!v1) {
            const { digitalaxMarketplaceV2PurchaseHistories } =
              await getDigitalaxMarketplaceV2PurchaseHistories(chainId, tokenIds);
            soldItems = digitalaxMarketplaceV2PurchaseHistories.map(item => item.id)
            historyItems = digitalaxMarketplaceV2PurchaseHistories
          } else {
            const { digitalaxMarketplacePurchaseHistories } = await getDigitalaxMarketplacePurchaseHistories(chainId, tokenIds);
            soldItems = digitalaxMarketplacePurchaseHistories.map(item => item.id)
            historyItems = digitalaxMarketplacePurchaseHistories
          }

          const { digitalaxGarmentV2S } = await getDigitalaxGarmentV2s(chainId, soldItems)

          setWearers(digitalaxGarmentV2S.map(garment => {
            const user = allUsers.find(user => user.wallet && user.wallet.toLowerCase() == garment.owner.toLowerCase())
            const history = historyItems.find(
              history =>
                history.id == garment.id 
                && history.buyer.toLowerCase() == garment.owner.toLowerCase()
            )

            return {
              id: garment.id,
              owner: garment.owner,
              ownerAvatar: user ? user.avatar : null,
              ownerName: user ? user.username: null,
              timestamp: history ? history.timestamp : 0,
              transactionHash: history ? history.transactionHash : null
            }
          }))
          setLoading(false);
        }

        
      };

      fetchHistories();
    }
  }, []);

  const sortByTime = (data) => {
    return data.sort((a, b) => {
      if (parseInt(a.timestamp) == parseInt(b.timestamp)) return 0;
      if (parseInt(a.timestamp) == 0) return 1;
      if (parseInt(b.timestamp) == 0) return -1;
      if (parseInt(a.timestamp) > parseInt(b.timestamp)) return 1;
      return -1;
    })
  }

  console.log('wearers: ', sortByTime(wearers))



  return (
    <>
      {loading ? (
        <Loader active={loading} />
      ) : (
        <>
          {createPortal(
            <Modal
              onClose={() => handleClose()}
              title={`${title}`}
              titleStyle={styles.textCenter}
              className={className}
            >
              <div className={styles.tableWrapper}>
                <table className={styles.historyTable}>
                  <thead>
                    <th></th>
                    <th> Meta ID </th>
                    <th> Purchase Date </th>
                    <th> Transaction ID </th>
                  </thead>
                  <tbody>
                    {sortByTime(wearers).map((ownerInfo, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            className={styles.ownerAvatar}
                            src={`${ownerInfo.ownerAvatar ? ownerInfo.ownerAvatar : '/images/user-profile/user-avatar-black.png'}`}
                          />
                        </td>
                        <td>
                          {' '}
                          {ownerInfo.ownerName ? ownerInfo.ownerName : `${ownerInfo.owner.slice(0, 8)}...`}
                        </td>
                        <td> {ownerInfo.timestamp ? new Date(parseInt(ownerInfo.timestamp) * 1000).toDateString() : ''} </td>
                        <td> {ownerInfo.transactionHash ? `${ownerInfo.transactionHash.slice(0, 8)}...` : ''} </td>
                      </tr>
                    ))}
                    {!wearers.length && <tr> <td colSpan="4">No Wearers</td> </tr>}
                  </tbody>
                </table>
              </div>
            </Modal>,
            document.body,
          )}
        </>
      )}
    </>
  );
};

ModalCurrentWearers.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

ModalCurrentWearers.defaultProps = {
  className: '',
  title: 'Current Wearers',
};

export default ModalCurrentWearers;
