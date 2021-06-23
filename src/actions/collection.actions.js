import BaseActions from '@actions/base-actions';
import collectionReducer from '@reducers/collection.reducer';
import garmentActions from './garment.actions';

class CollectionActions extends BaseActions {
  mapData(digitalaxGarmentCollections) {
    return async (dispatch) => {
      let garments = [];
      digitalaxGarmentCollections.forEach((collection) => {
        garments = garments.concat(collection.garments);
      });
      dispatch(garmentActions.mapData(garments));
      dispatch(this.setValue('digitalaxGarmentCollections', digitalaxGarmentCollections));
    };
  }

  updateMarketplaceOffers(digitalaxMarketplaceOffers) {
    return async (dispatch) => {
      dispatch(this.setValue('marketplaceOffers', digitalaxMarketplaceOffers));
    };
  }

  updateMarketplaceOffersV1(digitalaxMarketplaceOffersV1) {
    return async (dispatch) => {
      dispatch(this.setValue('marketplaceOffersV1', digitalaxMarketplaceOffersV1));
    }
  }
}

export default new CollectionActions(collectionReducer);
