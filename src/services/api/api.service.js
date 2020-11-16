import { request } from 'graphql-request';
import config from '@utils/config';
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
} from '@services/api/gql.queries.api.service';


class APIService {

  constructor() {
    this.url = 'https://api.thegraph.com/subgraphs/name/digitalax/digitalaxropsten'; // TODO::rm default url
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
    return fetch(`https://api.apikey.io/api/v1/rates/eth?token=${config.RATE_API_KEY}`).then((response) => response.json());
  }

}

export default new APIService();
