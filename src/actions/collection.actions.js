import BaseActions from '@actions/base-actions';
import collectionReducer from '@reducers/collection.reducer';

class CollectionActions extends BaseActions {

  mapData(digitalaxGarmentCollections) {
    return async (dispatch) => {
      dispatch(this.setValue('digitalaxGarmentCollections', digitalaxGarmentCollections));
    };
  }

  updateMarketplaceOffers(digitalaxMarketplaceOffers) {
    return async (dispatch) => {
      dispatch(this.setValue('marketplaceOffers', digitalaxMarketplaceOffers));
    };
  }

}

export default new CollectionActions(collectionReducer);
