import BaseActions from '@actions/base-actions';
import historyActions from '@actions/history.actions';
import api from '@services/api/api.service';
import auctionPageReducer from '../reducers/auction.page.reducer';
import designerActions from './designer.actions';
import auctionActions from './auction.actions';
import garmentActions from './garment.actions';

class AuctionPageActions extends BaseActions {

  updateAuctions(digitalaxGarmentAuctions) {
    return async (dispatch) => {

      const date = new Date();
      date.setDate(date.getDate() - 7); // now - 7 days

      const weekResultedAuctions = await api.getResultedAuctionsByEndTimeGt(parseInt(date / 1000, 10));

      const dateMonth = new Date();
      dateMonth.setDate(dateMonth.getDate() - 30); // now - 30 days

      const monthResultedAuctions = await api.getResultedAuctionsByEndTimeGt(parseInt(date / 1000, 10));

      const [{ digitalaxGarments }, { digitalaxGarmentAuctionHistories }] = await Promise.all([
        api.getGarmentsByIds(digitalaxGarmentAuctions.map((auction) => auction.id)),
        api.getAuctionsHistoryByIds(digitalaxGarmentAuctions.map((auction) => auction.id)),
      ]);
      const { digitalaxGarmentDesigners } = await api.getDesignersByIds(digitalaxGarments.map((garment) => garment.designer));

      dispatch(historyActions.mapData(digitalaxGarmentAuctionHistories));
      dispatch(designerActions.mapData(digitalaxGarmentDesigners));
      dispatch(garmentActions.mapData(digitalaxGarments));
      dispatch(auctionActions.mapData(digitalaxGarmentAuctions));
      dispatch(auctionActions.setValue('weekResultedAuctions', weekResultedAuctions.digitalaxGarmentAuctions));
      dispatch(auctionActions.setValue('monthResultedAuctions', monthResultedAuctions.digitalaxGarmentAuctions));
      dispatch(auctionActions.setValue('auctions', digitalaxGarmentAuctions));

    };

  }

  reset() {
    return async (dispatch) => {
      dispatch(historyActions.clear());
      dispatch(designerActions.clear());
      dispatch(auctionActions.clear());
    };
  }

}

export default new AuctionPageActions(auctionPageReducer);
