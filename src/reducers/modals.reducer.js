import { createModule } from 'redux-modules';
import cloneDeep from 'lodash.clonedeep';
import { Map } from 'immutable';

const DEFAULT_FIELDS = Map({
  isShowModalConnectMetamask: false,
  isShowModalPlaceBid: false,
  isShowModalRaiseBid: false,
  isShowModalWithdrawBid: false,
  isShowModalSignup: false,
  isShowNotificationConnectMetamask: false,
  isShowBuyNow: false,
  isShowPreviewMaterial: false,
  isCoolDown: false,
  isLimit: false,
  isBidHistory: false,
  isPurchaseHistory: false,
  isSwitchNetwork: false,
  isPurchaseSuccess: false,
  params: null,
});


export default createModule({
  name: 'modals',
  initialState: cloneDeep(DEFAULT_FIELDS),
  transformations: {
    setValue: {
      reducer: (state, { payload }) => {
        state = state.set(payload.field, payload.value);
        return state;
      },
    },
  },
});
