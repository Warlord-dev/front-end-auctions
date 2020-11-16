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

      await new Promise((resolve, reject) => {

        contract.methods.placeBid(id).send({ from: account, value: weiValue })
          .on('error', (error) => reject(error))
          .on('transactionHash', (transactionHash) => resolve(transactionHash));

      });

    };

  }

  withdraw(id) {
    return async (_, getState) => {

      const account = getState().user.get('account');
      const auctionContractAddress = getState().global.get('auctionContractAddress');
      const contract = await getContract(auctionContractAddress);

      await new Promise((resolve, reject) => {

        contract.methods.withdrawBid(id).send({ from: account })
          .on('error', (error) => reject(error))
          .on('transactionHash', (transactionHash) => resolve(transactionHash));

      });

    };

  }

}

export default new BidActions(auctionReducer);
