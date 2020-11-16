import BaseActions from '@actions/base-actions';
import { mapImmuatableDataById } from '@helpers/map.helpers';
import reducer from '../reducers/designer.reducer';

class DesignerActions extends BaseActions {

  mapData(designers) {
    return async (dispatch, getState) => {
      const state = getState();
      let designersById = state.designer.get('designersById');
      designersById = mapImmuatableDataById(designers, designersById);
      dispatch(this.setValue('designersById', designersById));
    };
  }

}

export default new DesignerActions(reducer);
