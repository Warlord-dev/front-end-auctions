import BaseActions from '@actions/base-actions';
import historyActions from '@actions/history.actions';
import auctionPageReducer from '../reducers/auction.page.reducer';
import designerActions from './designer.actions';
import auctionActions from './auction.actions';
import garmentActions from './garment.actions';

class AuctionPageActions extends BaseActions {
  updateAuctions(digitalaxGarmentAuctions) {
    return async (dispatch) => {
      dispatch(
        designerActions.mapData(digitalaxGarmentAuctions.map((auction) => auction.designer)),
      );
      dispatch(
        garmentActions.mapData(
          digitalaxGarmentAuctions.map((auction) => ({
            ...auction.garment,
            resulted: auction.resulted,
          })),
        ),
      );
      dispatch(auctionActions.mapData(digitalaxGarmentAuctions));
      dispatch(auctionActions.setValue('auctions', digitalaxGarmentAuctions));
      dispatch(this.setValue('auctionsIsLoaded', true));
    };
  }

  updateHistory(items) {
    return async (dispatch) => {
      dispatch(historyActions.mapData(items));
    };
  }

  updateMonthStats(items) {
    return async (dispatch) => {
      dispatch(auctionActions.setValue('monthResultedAuctions', items));
    };
  }

  updateWeekStats(items) {
    return async (dispatch) => {
      dispatch(auctionActions.setValue('weekResultedAuctions', items));
    };
  }

  updateGlobalStats(stats) {
    return async (dispatch) => {
      dispatch(auctionActions.setValue('globalStats', stats));
    };
  }

  reset() {
    return async (dispatch) => {
      dispatch(historyActions.clear());
      dispatch(designerActions.clear());
      dispatch(auctionActions.clear());
      dispatch(this.setValue('auctionsIsLoaded', false));
    };
  }
}

export default new AuctionPageActions(auctionPageReducer);
