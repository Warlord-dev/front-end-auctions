import BaseActions from '@actions/base-actions';
import { mapImmuatableDataById } from '@helpers/map.helpers';
import auctionReducer from '@reducers/auction.reducer';

class AuctionActions extends BaseActions {

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
