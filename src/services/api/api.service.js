import { request } from 'graphql-request';
import config from '@utils/config';
import { DEV_HTTP_NETWORK_URL, MATIC_HTTP_NFT_NETWORK_URL } from '@constants/global.constants';
import {
  getAuctionsByIds,
  getAuctionsHistoryByTimestampGt,
  getResultedAuctionsByEndTimeGt,
  getLiveAuctions,
  getGarmentsByIds,
  getGarmentsByDesignerId,
  getDesignersByIds,
  getAuctionsHistoryByIds,
  getAuctionContracts,
  getDigitalaxSubscriptionCollectorSimple,
  getDigitalaxSubscriptionPurchaseHistory,
  getDigitalaxSubscriptionMarketplaceOffer
} from '@services/api/gql.queries.api.service';

class APIService {
  constructor() {
    this.url = DEV_HTTP_NETWORK_URL;
  }

  setUrl(url) {
    this.url = url;
  }

  async getResultedAuctionsByEndTimeGt(endTime) {
    return request(this.url, getResultedAuctionsByEndTimeGt, { endTime });
  }

  async getSubscriptionNftStatus(address) {
    return request(MATIC_HTTP_NFT_NETWORK_URL, getDigitalaxSubscriptionCollectorSimple, { address });
  }

  async getDigitalaxSubscriptionPurchase(tokenId) {
    return request(MATIC_HTTP_NFT_NETWORK_URL, getDigitalaxSubscriptionPurchaseHistory, { tokenId });
  }

  async getAuctionsHistoryByTimestampGt(timestamp) {
    return request(this.url, getAuctionsHistoryByTimestampGt, { timestamp });
  }

  async getDigitalaxSubscriptionOffer(tokenId) {
    return request(MATIC_HTTP_NFT_NETWORK_URL, getDigitalaxSubscriptionMarketplaceOffer, { tokenId });
  }

  async getLiveAuctions() {
    return request(this.url, getLiveAuctions);
  }

  async getAuctionsByIds(ids) {
    return request(this.url, getAuctionsByIds, { ids });
  }

  async getDesignersByIds(ids) {
    return request(this.url, getDesignersByIds, { ids });
  }

  async getGarmentsByIds(ids) {
    return request(this.url, getGarmentsByIds, { ids });
  }

  async getGarmentsByDesignerIds(ids) {
    return request(this.url, getGarmentsByDesignerId, { ids });
  }

  async getAuctionsHistoryByIds(ids) {
    return request(this.url, getAuctionsHistoryByIds, { ids });
  }

  async getAuctionContracts() {
    return request(this.url, getAuctionContracts);
  }

  async getEthRate() {
    return fetch(
      `${config.EXCHANGE_API}/simple/price?ids=ethereum&vs_currencies=usd`
    ).then((response) => response.json());
  }
}

export default new APIService();
