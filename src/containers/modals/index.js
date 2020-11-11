import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import ModalConnectWallet from '@containers/modals/modal-connect-wallet';
import ModalPlaceBid from '@containers/modals/modal-place-bid';
import ModalRaiseBid from '@containers/modals/modal-raise-bid';
import ModalWithdrawBid from '@containers/modals/modal-withdraw-bid';


const Modals = () => {
  const modals = useSelector((state) => state.modals.toJS());
  const {
    isShowModalConnectMetamask, isShowModalPlaceBid, isShowModalRaiseBid, isShowModalWithdrawBid,
  } = modals;

  return (
    <>
      {isShowModalConnectMetamask && <ModalConnectWallet />}
      {isShowModalPlaceBid && <ModalPlaceBid />}
      {isShowModalRaiseBid && <ModalRaiseBid />}
      {isShowModalWithdrawBid && <ModalWithdrawBid />}
    </>
  );
};

export default memo(Modals);
