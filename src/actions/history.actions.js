import BaseActions from '@actions/base-actions';
import reducer from '../reducers/history.reducer';

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

}

export default new HistoryActions(reducer);
