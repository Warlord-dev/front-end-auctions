import BaseActions from '@actions/base-actions';
import api from '@services/api/api.service';
import reducer from '../reducers/garment.page.reducer';
import garmentActions from './garment.actions';
import historyActions from './history.actions';
import auctionActions from './auction.actions';
import designerActions from './designer.actions';

class GarmentPageActions extends BaseActions {

  fetchGarmentByIds(ids) {
    return async (dispatch) => {
      const { digitalaxGarments } = await api.getGarmentsByIds(ids);

      dispatch(garmentActions.mapData(digitalaxGarments));
    };
  }

  reset() {
    return async (dispatch) => {
      dispatch(historyActions.clear());
      dispatch(garmentActions.clear());
      dispatch(auctionActions.clear());
      dispatch(designerActions.clear());
    };
  }

}

export default new GarmentPageActions(reducer);
