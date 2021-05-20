import { createModule } from 'redux-modules';
import cloneDeep from 'lodash.clonedeep';
import { Map } from 'immutable';
import TransformModules from '../utils/transform-modules';

const DEFAULT_FIELDS = Map({
  isInitialized: false,
  chainId: null,
  exchangeRateETH: 0,
  minBidIncrement: 0,
  auctionContractAddress: null,
  bidWithdrawalLockTime: 0,
  rewards: 0,
  monaPerEth: 0,
  monaMaticBalance: 0,
  monaEthBalance: 0,
  isLoading: false,
});

export default createModule({
  name: 'global',
  initialState: cloneDeep(DEFAULT_FIELDS),
  transformations: cloneDeep(TransformModules(DEFAULT_FIELDS)),
});
