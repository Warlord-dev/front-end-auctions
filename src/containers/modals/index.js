import React, { memo } from "react";
import { useSelector } from "react-redux";
import ModalConnectWallet from "@containers/modals/modal-connect-wallet";
import ModalPlaceBid from "@containers/modals/modal-place-bid";
import ModalRaiseBid from "@containers/modals/modal-raise-bid";
import ModalWithdrawBid from "@containers/modals/modal-withdraw-bid";
import ModalSignup from "@containers/modals/modal-sign-up";
import BuyNow from "@containers/modals/buy-now";
import PreviewMaterial from "@containers/modals/preview-material";

const Modals = () => {
  const modals = useSelector((state) => state.modals.toJS());
  const {
    isShowModalConnectMetamask,
    isShowModalPlaceBid,
    isShowModalRaiseBid,
    isShowModalWithdrawBid,
    isShowModalSignup,
    isShowBuyNow,
    isShowPreviewMaterial,
  } = modals;

  return (
    <>
      {isShowModalConnectMetamask && <ModalConnectWallet />}
      {isShowModalPlaceBid && <ModalPlaceBid />}
      {isShowModalRaiseBid && <ModalRaiseBid />}
      {isShowModalWithdrawBid && <ModalWithdrawBid />}
      {isShowModalSignup && <ModalSignup />}
      {isShowBuyNow && <BuyNow />}
      {isShowPreviewMaterial && <PreviewMaterial />}
    </>
  );
};

export default memo(Modals);
