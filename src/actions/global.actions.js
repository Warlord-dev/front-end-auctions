import { toast } from 'react-toastify';
import BaseActions from '@actions/base-actions';
import userActions from '@actions/user.actions';
import auctionActions from '@actions/auction.actions';
import auctionPageActions from '@actions/auction.page.actions';
import designerActions from '@actions/designer.actions';
import designerPageActions from '@actions/designer.page.actions';
import garmentActions from '@actions/garment.actions';
import garmentPageActions from '@actions/garment.page.actions';
import historyActions from '@actions/history.actions';
import globalReducer from '@reducers/global.reducer';
import { isMetamaskInstalled } from '@services/metamask.service';
import {
  // getRewardContractAddressByChainId,
  getMonaContractAddressByChainId,
  getDefaultNetworkChainId,
  getEnabledNetworkByChainId,
  getAPIUrlByChainId,
  getWSUrlByChainId,
} from '@services/network.service';
import { getTokenPrice } from '@services/contract.service';

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
        const rateItem = await api.getEthRate();
        dispatch(this.setValue('exchangeRateETH', rateItem.ethereum.usd));
      } catch (e) {
        toast.error(`Set USD rate error: ${JSON.stringify(e)}`);
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

      if (
        ethereum.selectedAddress
        && localStorage.getItem(STORAGE_IS_LOGGED_IN)
      ) {
        dispatch(userActions.setValue('account', ethereum.selectedAddress));
      }

      ethereum.on('chainChanged', async (chainId) => {
        if (!chainId) {
          return;
        }

        dispatch(auctionPageActions.clear());
        dispatch(auctionActions.clear());
        dispatch(historyActions.clear());
        dispatch(garmentActions.clear());
        dispatch(garmentPageActions.clear());
        dispatch(designerPageActions.clear());
        dispatch(designerActions.clear());

        dispatch(this.resetContratParams());
        dispatch(this.changeNetwork(chainId));

        if (getEnabledNetworkByChainId(chainId)) {
          await dispatch(this.setContractParams());
        } else {
          console.error('Wrong network. Contracts are not deployed yet');
        }
      });

      dispatch(this.changeNetwork(ethereum.chainId));
      await dispatch(this.setContractParams());
      dispatch(this.setValue('isInitialized', true));
    };
  }

  setContractParams() {
    return async (dispatch, getState) => {
      try {
        const chainId = getState().global.get('chainId');
        // const address = getRewardContractAddressByChainId(chainId);
        // const rewardContract = await getRewardContract(address);

        const monaContractAddress = await getMonaContractAddressByChainId(
          chainId,
        );

        // parentRewards is not working properly!!!

        // const [rewards, monaPerEth] = await Promise.all([
        //   rewardContract.methods
        //     .parentRewards(moment().unix(), moment().add(1, 'days').unix())
        //     .call(),
        //   getTokenPrice(monaContractAddress),
        // ]);

        // added constant value for now
        const [monaPerEth] = await Promise.all([
          getTokenPrice(monaContractAddress),
        ]);

        dispatch(this.setValue('rewards', 5));
        dispatch(this.setValue('monaPerEth', monaPerEth));
      } catch (e) {
        console.error(e);
        dispatch(this.setValue('rewards', 0));
        dispatch(this.setValue('monaPerEth', 0));
      }

      try {
        const { digitalaxAuctionContracts } = await api.getAuctionContracts();

        const [
          { minBidIncrement, id, bidWithdrawalLockTime },
        ] = digitalaxAuctionContracts;

        dispatch(
          this.setValue('minBidIncrement', convertToEth(minBidIncrement)),
        );
        dispatch(this.setValue('auctionContractAddress', id));
        dispatch(this.setValue('bidWithdrawalLockTime', bidWithdrawalLockTime));
      } catch (e) {
        toast.error(`Set contract params error: ${JSON.stringify(e)}`);
      }
    };
  }

  resetContratParams() {
    return async (dispatch) => {
      dispatch(this.setValue('minBidIncrement', 0));
      dispatch(this.setValue('auctionContractAddress', null));
      dispatch(this.setValue('bidWithdrawalLockTime', 0));
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
