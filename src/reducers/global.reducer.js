import { createModule } from 'redux-modules';
import cloneDeep from 'lodash.clonedeep';
import { Map } from 'immutable';

const DEFAULT_FIELDS = Map({
  exchangeRateETH: 462.70,
});


export default createModule({
  name: 'global',
  initialState: cloneDeep(DEFAULT_FIELDS),
});
