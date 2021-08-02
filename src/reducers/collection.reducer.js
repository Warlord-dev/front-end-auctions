import { createModule } from 'redux-modules';
import cloneDeep from 'lodash.clonedeep';
import { Map, List } from 'immutable';
import TransformModules from '../utils/transform-modules';

const DEFAULT_FIELDS = Map({
  digitalaxGarmentCollections: List([]),
  marketplaceOffers: List([]),
  marketplaceOffersV1: List([]),
});

export default createModule({
  name: 'collection',
  initialState: cloneDeep(DEFAULT_FIELDS),
  transformations: cloneDeep(TransformModules(DEFAULT_FIELDS)),
});
