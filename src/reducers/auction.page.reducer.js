import { createModule } from 'redux-modules';
import cloneDeep from 'lodash.clonedeep';
import { Map } from 'immutable';
import TransformModules from '../utils/transform-modules';

const DEFAULT_FIELDS = Map({
  auctionsIsLoaded: false,
});

export default createModule({
  name: 'auctionPage',
  initialState: cloneDeep(DEFAULT_FIELDS),
  transformations: cloneDeep(TransformModules(DEFAULT_FIELDS)),
});
