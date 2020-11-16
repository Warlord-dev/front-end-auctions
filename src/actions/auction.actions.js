import BaseActions from '@actions/base-actions';
import historyActions from '@actions/history.actions';
import designerActions from '@actions/designer.actions';
import garmentActions from '@actions/garment.actions';
import { mapImmuatableDataById } from '@helpers/map.helpers';
import api from '@services/api/api.service';
import auctionReducer from '@reducers/auction.reducer';

class AuctionActions extends BaseActions {

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
      dispatch(this.mapData(digitalaxGarmentAuctions));
      dispatch(this.setValue('weekResultedAuctions', weekResultedAuctions.digitalaxGarmentAuctions));
      dispatch(this.setValue('monthResultedAuctions', monthResultedAuctions.digitalaxGarmentAuctions));
      dispatch(this.setValue('auctions', digitalaxGarmentAuctions));

    };

  }

  mapData(digitalaxGarmentAuctions) {
    return async (dispatch, getState) => {

      const state = getState();
      let auctionsById = state.auction.get('auctionsById');

      auctionsById = mapImmuatableDataById(digitalaxGarmentAuctions, auctionsById);

      dispatch(this.setValue('auctionsById', auctionsById));

    };
  }

}

export default new AuctionActions(auctionReducer);
