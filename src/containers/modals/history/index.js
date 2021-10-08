import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '@components/modal';
import styles from './styles.module.scss';
import {
  closeBidHistoryModal,
  closeBuynowModal,
  closePurchaseHistoryModal,
} from '@actions/modals.actions';
import { getModalParams } from '@selectors/modal.selectors';
import {
  getDigitalaxGarmentPurchaseHistories,
  getDigitalaxGarmentV2PurchaseHistories,
  getDigitalaxMarketplacePurchaseHistories,
  getDigitalaxMarketplaceV2PurchaseHistories,
} from '@services/api/apiService';
import { getChainId } from '@selectors/global.selectors';
import Loader from '@components/loader';

const History = ({ className, title, type }) => {
  const dispatch = useDispatch();
  const { tokenIds, v1 } = useSelector(getModalParams);
  const chainId = useSelector(getChainId);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClose = () => {
    if (type === 1) {
      dispatch(closeBidHistoryModal());
    } else {
      dispatch(closePurchaseHistoryModal());
    }
  };

  useEffect(() => {
    if (tokenIds.length) {
      const fetchHistories = async () => {
        if (type === 1) {
          if (parseInt(tokenIds[0]) <= 4) {
            const { digitalaxGarmentAuctionHistories } = await getDigitalaxGarmentPurchaseHistories(
              chainId,
              tokenIds[0],
            );
            setHistory(digitalaxGarmentAuctionHistories);
          } else {
            const { digitalaxGarmentV2AuctionHistories } =
              await getDigitalaxGarmentV2PurchaseHistories(chainId, tokenIds[0]);
            setHistory(digitalaxGarmentV2AuctionHistories);
          }
          setLoading(false);
        } else {
          if (!v1) {
            const { digitalaxMarketplaceV2PurchaseHistories } =
              await getDigitalaxMarketplaceV2PurchaseHistories(chainId, tokenIds);
            setHistory(digitalaxMarketplaceV2PurchaseHistories);
          } else {
            const { digitalaxMarketplacePurchaseHistories } =
              await getDigitalaxMarketplacePurchaseHistories(chainId, tokenIds);
            setHistory(digitalaxMarketplacePurchaseHistories);
          }
          setLoading(false);
        }
      };

      fetchHistories();
    }
  }, []);

  const sortHistory = (data) => {
    return data.sort((a, b) => {
      if (parseInt(a.timestamp) > parseInt(b.timestamp)) return 1;
      if (parseInt(a.timestamp) == parseInt(b.timestamp)) return 0;
      return -1;
    });
  };

  return (
    <>
      {loading ? (
        <Loader active={loading} />
      ) : (
        <>
          {createPortal(
            <Modal
              onClose={() => handleClose()}
              title={`${type === 1 ? 'Bid' : 'Purchase'} ${title}`}
              titleStyle={styles.textCenter}
              className={className}
            >
              <div className={styles.tableWrapper}>
                <table className={styles.historyTable}>
                  <thead>
                    <th> {type === 1 ? 'BID' : 'PURCHASE'} </th>
                    <th> FROM </th>
                    <th> TX </th>
                    <th> DATE </th>
                  </thead>
                  <tbody>
                    {sortHistory(history).map((tx) => (
                      <tr>
                        <td> {tx.value / 10 ** 18} $MONA </td>
                        <td>
                          {' '}
                          {type === 1 ? tx.bidder?.id.slice(0, 8) : tx.buyer.slice(0, 8)}...{' '}
                        </td>
                        <td>
                          {' '}
                          <a
                            href={`https://polygonscan.com/tx/${tx.transactionHash}`}
                            target="_blank"
                          >
                            {' '}
                            {tx.transactionHash.slice(0, 8)}...{' '}
                          </a>{' '}
                        </td>
                        <td> {new Date(parseInt(tx.timestamp) * 1000).toDateString()} </td>
                      </tr>
                    ))}
                    {!history.length && (
                      <tr>
                        {' '}
                        <td colSpan="4">No History</td>{' '}
                      </tr>
                    )}
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

History.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

History.defaultProps = {
  className: '',
  title: 'History',
};

export default History;
