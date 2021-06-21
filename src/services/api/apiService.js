import { getAPIUrlByChainId } from '@services/network.service';
import { request } from 'graphql-request';
import { COLLECTIONS, COLLECTIONSV2 } from './gql.apiService';

const apiRequest = (chainId, gql) => request(getAPIUrlByChainId(chainId), gql);

export const getCollections = async (chainId) => apiRequest(chainId, COLLECTIONS);

export const getCollectionsV2 = async (chainId) => apiRequest(chainId, COLLECTIONSV2);
