import BaseActions from '@actions/base-actions';
import reducer from '../reducers/history.reducer';
import {COMMON_RARITY, SEMI_RARE_RARITY} from "@constants/global.constants"

class HistoryActions extends BaseActions {

  mapData(digitalaxGarmentAuctionHistories) {
    return async (dispatch, getState) => {

      if (!digitalaxGarmentAuctionHistories.length) {
        return;
      }

      const state = getState();

      let historyByTokenId = state.history.get('historyByTokenId');

      digitalaxGarmentAuctionHistories.forEach((itemHistory) => {
        const tokenId = itemHistory.token.id;
        if (!historyByTokenId.get(tokenId)) {
          historyByTokenId = historyByTokenId.set(tokenId, []);
        }
        const tokenArray = historyByTokenId.get(tokenId);

        if (!tokenArray.find((item) => item.id === itemHistory.id)) {
          historyByTokenId = historyByTokenId.set(tokenId, [...tokenArray, itemHistory]);
        }

      });

      dispatch(this.setValue('historyByTokenId', historyByTokenId));

    };
  }

  updateMarketplaceHistories(digitalaxMarketplacePurchaseHistories) {
    return async (dispatch, getState) => {

      if (!digitalaxMarketplacePurchaseHistories.length) {
        return;
      }

      const state = getState();

      let commonHistoryByTokenId = state.history.get('commonHistoryByTokenId');
      let semiRareHistoryByTokenId = state.history.get('semiRareHistoryByTokenId');

      digitalaxMarketplacePurchaseHistories.forEach((itemHistory) => {
        const tokenId = itemHistory.garmentAuctionId;
        const tx = itemHistory.transactionHash;

        if (itemHistory.rarity === COMMON_RARITY) {
          if (!commonHistoryByTokenId.get(tokenId)) {
            commonHistoryByTokenId = commonHistoryByTokenId.set(tokenId, []);
          }
          const tokenArray = commonHistoryByTokenId.get(tokenId);

          if (!tokenArray.find((item) => item.transactionHash === tx)) {
            commonHistoryByTokenId = commonHistoryByTokenId.set(tokenId, [...tokenArray, itemHistory]);
          }
        }

        if (itemHistory.rarity === SEMI_RARE_RARITY) {
          if (!semiRareHistoryByTokenId.get(tokenId)) {
            semiRareHistoryByTokenId = semiRareHistoryByTokenId.set(tokenId, []);
          }
          const tokenArray1 = semiRareHistoryByTokenId.get(tokenId);

          if (!tokenArray1.find((item) => item.transactionHash === tx)) {
            semiRareHistoryByTokenId = semiRareHistoryByTokenId.set(tokenId, [...tokenArray1, itemHistory]);
          }
        }
      });

      dispatch(this.setValue('commonHistoryByTokenId', commonHistoryByTokenId));
      dispatch(this.setValue('semiRareHistoryByTokenId', semiRareHistoryByTokenId));

    };
  }

}

export default new HistoryActions(reducer);
