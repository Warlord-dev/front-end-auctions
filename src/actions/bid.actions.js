import BaseActions from '@actions/base-actions';
import { convertToWei } from '@helpers/price.helpers';

import auctionReducer from '../reducers/auction.reducer';
import { getContract } from '../services/contract.service';

class BidActions extends BaseActions {

  bid(id, value) {
    return async (_, getState) => {

      const account = getState().user.get('account');
      const auctionContractAddress = getState().global.get('auctionContractAddress');
      const contract = await getContract(auctionContractAddress);
      const weiValue = convertToWei(value);
      const listener = contract.methods.placeBid(id).send({ from: account, value: weiValue });
      const promise = new Promise((resolve, reject) => {
        listener.on('error', (error) => reject(error));
        listener.on('transactionHash', (transactionHash) => resolve(transactionHash));
      });
      return {
        promise,
        unsubscribe: () => {
          listener.off('error');
          listener.off('transactionHash');
        },
      };

    };

  }

  withdraw(id) {
    return async (_, getState) => {

      const account = getState().user.get('account');
      const auctionContractAddress = getState().global.get('auctionContractAddress');
      const contract = await getContract(auctionContractAddress);
      const listener = contract.methods.withdrawBid(id).send({ from: account });
      const promise = new Promise((resolve, reject) => {
        listener.on('error', (error) => reject(error));
        listener.on('transactionHash', (transactionHash) => resolve(transactionHash));
      });

      return {
        promise,
        unsubscribe: () => {
          listener.off('error');
          listener.off('transactionHash');
        },
      };
    };

  }

}

export default new BidActions(auctionReducer);
