import { getAPIUrlByChainId } from '@services/network.service';
import { request } from 'graphql-request';
import {
  COLLECTIONS,
  COLLECTIONSV2,
  COLLECTION_GROUPS,
  COLLECTION_GROUP_BY_ID,
  GARMENTV2_BY_AUCTION_ID,
  GARMENTV2_BY_COLLECTION_ID,
} from './gql.apiService';

const apiRequest = (chainId, gql, params) => request(getAPIUrlByChainId(chainId), gql, params);

export const getCollections = async (chainId) => apiRequest(chainId, COLLECTIONS);

export const getCollectionsV2 = async (chainId) => apiRequest(chainId, COLLECTIONSV2);

export const getCollectionGroups = async (chainId) => apiRequest(chainId, COLLECTION_GROUPS);

export const getCollectionGroupById = async (chainId, id) =>
  apiRequest(chainId, COLLECTION_GROUP_BY_ID, { id });

export const getGarmentV2ByCollectionId = async (chainId, id) =>
  apiRequest(chainId, GARMENTV2_BY_COLLECTION_ID, { id });

export const getGarmentV2ByAuctionId = async (chainId, id) =>
  apiRequest(chainId, GARMENTV2_BY_AUCTION_ID, { id });