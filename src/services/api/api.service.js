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
} from '@services/api/gql.queries.api.service';
import {
  getAuctionContractsV2,
  getAuctionsByIdsV2,
  getAuctionsHistoryByIdsV2,
  getAuctionsHistoryByTimestampGtV2,
  getCollectorsByIdV2,
  getDesignersByIdsV2,
  getGarmentsByDesignerIdV2,
  getGarmentsByIdsV2,
  getLiveAuctionsV2,
  getResultedAuctionsByEndTimeGtV2,
  getDigitalaxGarmentsCollectionsV2,
  getDigitalaxCollectorV2,
} from './gql.queries.v2.api.service';

class APIService {
  constructor() {
    this.url = DEV_HTTP_NETWORK_URL;
  }

  setUrl(url) {
    this.url = url;
  }

  getQuery(query1, query2) {
    if (this.url.includes('matic') || this.url.includes('mumbai')) {
      return query2;
    } else {
      return query1;
    }
  }

  wrapRequest(args) {
    return request(...args).then((res) => {
      if (Object.keys(res).filter((key) => key.includes('V2')).length) {
        const keys = Object.keys(res);
        const parsedRes = {};
        for (let i = 0; i < keys.length; i += 1) {
          if (keys[i].includes('V2S')) {
            parsedRes[keys[i].replace('V2S', 's')] = res[keys[i]];
          } else if (keys[i].includes('V2')) {
            parsedRes[keys[i].replace('V2', '')] = res[keys[i]];
          }
        }
        console.log(parsedRes);
        return parsedRes;
      } else {
        return res;
      }
    });
  }

  async getResultedAuctionsByEndTimeGt(endTime) {
    return this.wrapRequest([
      this.url,
      this.getQuery(getResultedAuctionsByEndTimeGt, getResultedAuctionsByEndTimeGtV2),
      { endTime },
    ]);
  }

  async getAuctionsHistoryByTimestampGt(timestamp) {
    return this.wrapRequest([
      this.url,
      this.getQuery(getAuctionsHistoryByTimestampGt, getAuctionsHistoryByTimestampGtV2),
      { timestamp },
    ]);
  }

  async getLiveAuctions() {
    return this.wrapRequest([this.url, this.getQuery(getLiveAuctions, getLiveAuctionsV2)]);
  }

  async getGarmentsCollections() {
    return this.wrapRequest([
      this.url,
      this.getQuery(getDigitalaxGarmentsCollections, getDigitalaxGarmentsCollectionsV2),
    ]);
  }

  async getCollectorsById(address) {
    return this.wrapRequest([
      this.url,
      this.getQuery(getCollectorsById, getCollectorsByIdV2),
      {
        id: address,
      },
    ]);
  }

  // async getCollectorsV2ById(address) {
  //   return request(this.url, getCollectorsV2ById, { id: address });
  // }

  async getAuctionsByIds(ids) {
    return this.wrapRequest([
      this.url,
      this.getQuery(getAuctionsByIds, getAuctionsByIdsV2),
      { ids },
    ]);
  }

  async getDesignersByIds(ids) {
    return this.wrapRequest([
      this.url,
      this.getQuery(getDesignersByIds, getDesignersByIdsV2),
      { ids },
    ]);
  }

  async getGarmentsByIds(ids) {
    return this.wrapRequest([
      this.url,
      this.getQuery(getGarmentsByIds, getGarmentsByIdsV2),
      { ids },
    ]);
  }

  async getGarmentsByDesignerIds(ids) {
    return this.wrapRequest([
      this.url,
      this.getQuery(getGarmentsByDesignerId, getGarmentsByDesignerIdV2),
      {
        ids,
      },
    ]);
  }

  async getAuctionsHistoryByIds(ids) {
    return this.wrapRequest([
      this.url,
      this.getQuery(getAuctionsHistoryByIds, getAuctionsHistoryByIdsV2),
      {
        ids,
      },
    ]);
  }

  async getAuctionContracts() {
    return this.wrapRequest([this.url, this.getQuery(getAuctionContracts, getAuctionContractsV2)]);
  }

  // async getDigitalaxCollectorV2(address) {
  //   return request(this.url, this.getQuery(getDigitalaxCollectorV2, { id: address });
  // }

  async getDigitalaxCollector(address) {
    return this.wrapRequest([
      this.url,
      this.getQuery(getDigitalaxCollector, getDigitalaxCollectorV2),
      {
        id: address,
      },
    ]);
  }

  async getEthRate() {
    return fetch(`${config.EXCHANGE_API}/simple/price?ids=ethereum&vs_currencies=usd`).then(
      (response) => response.json(),
    );
  }
}

export default new APIService();
