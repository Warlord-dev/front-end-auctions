import { createModule } from 'redux-modules';
import cloneDeep from 'lodash.clonedeep';
import { Map, List } from 'immutable';
import TransformModules from '../utils/transform-modules';

const DEFAULT_FIELDS = Map({
  auctions: List([]),
  weekResultedAuctions: List(),
  monthResultedAuctions: List(),
  auctionsById: Map({}),
  designersById: Map({}),
  historyByTokenId: Map({}),
});

export default createModule({
  name: 'auction',
  initialState: cloneDeep(DEFAULT_FIELDS),
  transformations: cloneDeep(TransformModules(DEFAULT_FIELDS)),
});
