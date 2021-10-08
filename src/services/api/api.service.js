import { request } from 'graphql-request';
import config from '@utils/config';
import { DEV_HTTP_NETWORK_URL } from '@constants/global.constants';
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
  getDigitalaxCollector,
  getDigitalaxGarmentsCollections,
  getCollectorsById,
  getDigitalaxMarketplacePurchaseHistory,
} from '@services/api/gql.queries.api.service';
import {
  getDigitalaxGarmentNFTV2GlobalStat,
  getDigitalaxGarmentsCollectionsV2,
  getDigitalaxMarketplaceV2PurchaseHistory,
  getLiveAuctionsV2,
  getCollectorsByIdV2,
  getDigitalaxCollectorV2,
} from './gql.queries.v2.api.service';

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

  async getAuctionsHistoryByTimestampGt(timestamp) {
    return request(this.url, getAuctionsHistoryByTimestampGt, { timestamp });
  }

  async getLiveAuctions() {
    return request(this.url, getLiveAuctions);
  }

  async getGarmentsCollections() {
    return request(this.url, getDigitalaxGarmentsCollections);
  }

  async getCollectorsById(address) {
    return request(this.url, getCollectorsById, { id: address });
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

  async getDigitalaxCollector(address) {
    return request(this.url, getDigitalaxCollector, { id: address });
  }

  async getMarketplacePurchaseHistory(address, id) {
    return request(this.url, getDigitalaxMarketplacePurchaseHistory, {
      buyer: address,
      garmentId: id,
    });
  }

  // v2

  async getLiveAuctionsV2() {
    return request(this.url, getLiveAuctionsV2);
  }

  async getDigitalaxCollectorV2(address) {
    return request(this.url, getDigitalaxCollectorV2, { id: address });
  }

  async getGarmentsCollectionsV2() {
    return request(this.url, getDigitalaxGarmentsCollectionsV2);
  }

  async getCollectorsV2ById(address) {
    return request(this.url, getCollectorsByIdV2, { id: address });
  }

  async getMarketplacePurchaseHistoryV2(address, id) {
    return request(this.url, getDigitalaxMarketplaceV2PurchaseHistory, {
      buyer: address,
      garmentId: id,
    });
  }

  async getMonaPerEth() {
    return request(config.API_URLS['mumbai'], getDigitalaxGarmentNFTV2GlobalStat);
  }

  async getEthRate() {
    return fetch(`${config.EXCHANGE_API}/simple/price?ids=ethereum&vs_currencies=usd`).then(
      (response) => response.json(),
    );
  }
}

export default new APIService();
