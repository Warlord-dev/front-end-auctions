import BaseActions from '@actions/base-actions';
import userActions from '@actions/user.actions';
import globalReducer from '@reducers/global.reducer';
import { isMetamaskInstalled } from '@services/metamask.service';
import {
  getDefaultNetworkChainId, getEnabledNetworkByChainId, getAPIUrlByChainId, getWSUrlByChainId,
} from '@services/network.service';
import api from '@services/api/api.service';
import ws from '@services/api/ws.service';

import { convertToEth } from '@helpers/price.helpers';
import { STORAGE_IS_LOGGED_IN } from '@constants/storage.constants';

class GlobalActions extends BaseActions {

  initApp() {
    return async (dispatch) => {

      /**
       * Get eth/usd rate
       */
      try {
        const [rateItem] = await api.getEthRate();
        dispatch(this.setValue('exchangeRateETH', rateItem.rate.USD));
      } catch (e) {
        console.error(e);
      }

      /**
       * Check installed Metamask
       */
      if (!isMetamaskInstalled()) {
        dispatch(this.changeNetwork(getDefaultNetworkChainId()));
        await dispatch(this.setContractParams());
        dispatch(this.setValue('isInitialized', true));
        return;
      }

      const { ethereum } = window;
      /**
       * Init subscribers
       */
      ethereum.on('accountsChanged', (accounts) => {
        const [account] = accounts;
        if (localStorage.getItem(STORAGE_IS_LOGGED_IN)) {
          dispatch(userActions.setValue('account', account || null));
          localStorage.setItem(STORAGE_IS_LOGGED_IN, 1);
        }

      });

      ethereum.on('chainChanged', async (chainId) => {

        if (!chainId) {
          return;
        }

        if (getEnabledNetworkByChainId(chainId)) {
          await dispatch(this.setContractParams());
        } else {
          console.error('Wrong network. Contracts are not deployed yet');
        }

        dispatch(this.changeNetwork(chainId));

      });

      dispatch(this.changeNetwork(ethereum.chainId));
      await dispatch(this.setContractParams());
      dispatch(this.setValue('isInitialized', true));

    };

  }

  setContractParams() {
    return async (dispatch) => {
      const { digitalaxAuctionContracts } = await api.getAuctionContracts();

      const [{ minBidIncrement, id, bidWithdrawalLockTime }] = digitalaxAuctionContracts;

      dispatch(this.setValue('minBidIncrement', convertToEth(minBidIncrement)));
      dispatch(this.setValue('auctionContractAddress', id));
      dispatch(this.setValue('bidWithdrawalLockTime', bidWithdrawalLockTime));
    };
  }

  changeNetwork(chainId) {
    return async (dispatch) => {

      const url = getAPIUrlByChainId(chainId);
      const wsUrl = getWSUrlByChainId(chainId);

      api.setUrl(url);
      ws.setUrl(wsUrl);
      dispatch(this.setValue('chainId', chainId));


    };
  }

}

export default new GlobalActions(globalReducer);
