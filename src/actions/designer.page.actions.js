import BaseActions from '@actions/base-actions';
import garmentActions from '@actions/garment.actions';
import designerActions from '@actions/designer.actions';
import auctionActions from '@actions/auction.actions';
import api from '@services/api/api.service';
import reducer from '../reducers/designer.reducer';

class DesignerPageActions extends BaseActions {

  update(designers) {
    return async (dispatch) => {
      if (!designers.length) {
        return;
      }

      const [designer] = designers;

      const { digitalaxGarments } = await api.getGarmentsByDesignerIds([
        designer.id,
      ]);

      const designerGarmentIds = digitalaxGarments.map((garmet) => garmet.id);
      dispatch(this.setValue('designerGarmentIds', designerGarmentIds));
      dispatch(designerActions.mapData(designers));
      dispatch(garmentActions.mapData(digitalaxGarments));
    };
  }

  reset() {
    return async (dispatch) => {
      dispatch(designerActions.clear());
      dispatch(garmentActions.clear());
      dispatch(auctionActions.clear());
    };
  }

}

export default new DesignerPageActions(reducer);
