import BaseActions from '@actions/base-actions';
import { mapImmuatableDataById } from '@helpers/map.helpers';
import reducer from '../reducers/garment.reducer';

class GarmentActions extends BaseActions {

  mapData(digitalaxGarments) {
    return async (dispatch, getState) => {
      const state = getState();
      let garmentsById = state.garment.get('garmentsById');
      garmentsById = mapImmuatableDataById(digitalaxGarments, garmentsById);
      dispatch(this.setValue('garmentsById', garmentsById));
    };
  }

}

export default new GarmentActions(reducer);
