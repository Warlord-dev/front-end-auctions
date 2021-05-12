import React, { memo } from "react";
import { useSelector } from "react-redux";
import ModalConnectWallet from "@containers/modals/modal-connect-wallet";
import ModalPlaceBid from "@containers/modals/modal-place-bid";
import ModalRaiseBid from "@containers/modals/modal-raise-bid";
import ModalWithdrawBid from "@containers/modals/modal-withdraw-bid";
import ModalSignup from "@containers/modals/modal-sign-up";
import BuyNow from "@containers/modals/buy-now";
import PreviewMaterial from "@containers/modals/preview-material";
import ModalESPAReady from "./modal-espa-ready";
import ModalConnectMatic from "./modal-connect-matic";
import BuyNowNftSubscription from './buy-now-nft-subscription';
import ModalNftSubscriptionAReady from './modal-nft-subscription-ready';

const Modals = () => {
  const modals = useSelector((state) => state.modals.toJS());
  const {
    isShowModalConnectMetamask,
    isShowModalPlaceBid,
    isShowModalRaiseBid,
    isShowModalWithdrawBid,
    isShowModalSignup,
    isShowModalConnectMatic,
    isShowBuyNow,
    isShowBuyNowNftSubscription,
    isShowPreviewMaterial,
    isShowModalESPAReady,
    isNftSubscriptionReady,
  } = modals;

  return (
    <>
      {isShowModalConnectMetamask && <ModalConnectWallet />}
      {isShowModalPlaceBid && <ModalPlaceBid />}
      {isShowModalRaiseBid && <ModalRaiseBid />}
      {isShowModalWithdrawBid && <ModalWithdrawBid />}
      {isShowModalSignup && <ModalSignup />}
      {isShowModalESPAReady && <ModalESPAReady />}
      {isShowModalConnectMatic && <ModalConnectMatic />}
      {isShowBuyNow && <BuyNow />}
      {isShowPreviewMaterial && <PreviewMaterial />}
      {isShowBuyNowNftSubscription && <BuyNowNftSubscription />}
      {isNftSubscriptionReady && <ModalNftSubscriptionAReady />}
    </>
  );
};

export default memo(Modals);
