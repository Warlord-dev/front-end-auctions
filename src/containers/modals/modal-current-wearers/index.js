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
  getDigitalaxGarmentV2s,
  getDigitalaxNFTStakersByGarments,
  getGuildWhitelistedNFTStakersByGarments
} from '@services/api/apiService';
import digitalaxApi from '@services/api/espa/api.service'
import config from '@utils/config'
const POLYGON_CHAINID = 0x89

const getAllResultsFromQuery = async (query, resultKey, chainId, owner) => {
  let lastID = ''
  let isContinue = true
  const fetchCountPerOnce = 1000

  const resultArray = []
  while (isContinue) {
    const result = await query(chainId, owner, fetchCountPerOnce, lastID)
    if (!result[resultKey] || result[resultKey].length <= 0) isContinue = false
    else {
      resultArray.push(...result[resultKey])
      if (result[resultKey].length < fetchCountPerOnce) {
        isContinue = false
      } else {
        lastID = result[resultKey][fetchCountPerOnce - 1]['id']
      }
    }
  }
  
  return resultArray
}

const ModalCurrentWearers = ({ className, title }) => {
  const dispatch = useDispatch();
  const { tokenIds, v1, type } = useSelector(getModalParams);
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
        let soldItems = []
        let historyItems = []

        if (type === 1) {
          if (parseInt(tokenIds[0]) <= 4) {
            const { digitalaxGarmentAuctionHistories } =
              await getDigitalaxGarmentPurchaseHistories(chainId, tokenIds[0]);
            soldItems = digitalaxGarmentAuctionHistories.map(item => item.token.id)
            historyItems = digitalaxGarmentAuctionHistories
          } else {
            const { digitalaxGarmentV2AuctionHistories } =
              await getDigitalaxGarmentV2PurchaseHistories(chainId, tokenIds[0]);
            soldItems = digitalaxGarmentV2AuctionHistories.map(item => item.token.id)
            historyItems = digitalaxGarmentV2AuctionHistories
          }
          setLoading(false);
        } else {
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
        }

        const { digitalaxGarmentV2S } = await getDigitalaxGarmentV2s(chainId, soldItems)

        const digitalaxAllNFTStakersByGarments = await getAllResultsFromQuery(
          getDigitalaxNFTStakersByGarments, 
          'digitalaxNFTStakers', 
          POLYGON_CHAINID,
          soldItems
        )

        const guildAllNFTStakersByGarments = await getAllResultsFromQuery(
          getGuildWhitelistedNFTStakersByGarments, 
          'guildWhitelistedNFTStakers', 
          POLYGON_CHAINID,
          soldItems.map(item => config.DTX_ADDRESSES['matic'].toLowerCase() + '-' + item)
        )

        const digitalaxStakedGarments = {}
        digitalaxAllNFTStakersByGarments
          .filter(
            item => item.garments && item.garments.length > 0
          )
          .map(staker => {
            staker.garments.forEach(garment => {
              digitalaxStakedGarments[garment.id] = staker.id
            })
          })
        
        guildAllNFTStakersByGarments
          .filter(
            item => item.garments && item.garments.length > 0
          )
          .map(staker => {
            staker.garments.forEach(garment => {
              digitalaxStakedGarments[garment.id.split('-')[1]] = staker.id
            })
          })
        setWearers(digitalaxGarmentV2S.map(garment => {
          
          let actualOwner = garment.owner.toLowerCase()
          if (digitalaxStakedGarments && digitalaxStakedGarments[garment.id]) {
            actualOwner = digitalaxStakedGarments[garment.id].toLowerCase()
          }

          const user = allUsers.find(user => user.wallet && user.wallet.toLowerCase() == actualOwner)
          const history = historyItems.find(
            history =>
              (type ? history.token.id : history.id) == garment.id 
              && (type ? history.bidder.id : history.buyer).toLowerCase() == actualOwner
          )

          return {
            id: garment.id,
            owner: actualOwner,
            ownerAvatar: user ? user.avatar : null,
            ownerName: user ? user.username: null,
            timestamp: history ? history.timestamp : 0,
            transactionHash: history ? history.transactionHash : null
          }
        }))
        setLoading(false);        
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

  const onClickWearer = ownerInfo => {
    if (ownerInfo.ownerName !== null) {
      window.open(`/user/${ownerInfo.owner}`, '_self')
    }
  }

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
                      <tr key={index} onClick={() => onClickWearer(ownerInfo)}>
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
                        {
                          ownerInfo.ownerName
                          ? (
                            <td> {ownerInfo.timestamp ? new Date(parseInt(ownerInfo.timestamp) * 1000).toDateString() : ''} </td>
                          )
                          : (
                            <td colspan='2'> No active account with DIGITALAX </td>
                          )
                        }
                        {
                          ownerInfo.ownerName
                          && (
                            <td> {ownerInfo.transactionHash ? `${ownerInfo.transactionHash.slice(0, 8)}...` : ''} </td>
                          )
                        }
                         
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
  title: PropTypes.string
};

ModalCurrentWearers.defaultProps = {
  className: '',
  title: 'Current Wearers'
};

export default ModalCurrentWearers;
