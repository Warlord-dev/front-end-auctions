import { createModule } from 'redux-modules';
import cloneDeep from 'lodash.clonedeep';
import { Map, List } from 'immutable';

const DEFAULT_FIELDS = Map({
  isSignIn: false,
  userPhoto: 'images/user-photo.png',
  userHashAddress: 'aX0034edDaX0034edD',
  bids: List([]),
  activeProductInModal: Map({}),
  activeValueEthInInputInModal: null,
});


export default createModule({
  name: 'user',
  initialState: cloneDeep(DEFAULT_FIELDS),
  transformations: {
    setValue: {
      reducer: (state, { payload }) => {
        // debugger;
        state = state.set(payload.field, payload.value);
        return state;
      },
    },
  },
});
