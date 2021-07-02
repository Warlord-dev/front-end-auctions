import { gql } from 'graphql-request';

export const COLLECTIONS = gql`
  query collections {
    digitalaxGarmentCollections(first: 1000) {
      id
      garmentAuctionID
      rarity
    }
  }
`;

export const COLLECTIONSV2 = gql`
  query collectionsv2 {
    digitalaxGarmentV2Collections(first: 1000) {
      id
      garmentAuctionID
      rarity
      valueSold
    }
  }
`;

export const COLLECTION_GROUPS = gql`
  query digitalaxCollectionGroups {
    digitalaxCollectionGroups(first: 1000) {
      id
      collections(first: 1) {
        id
        garments(first: 1) {
          id
          animation
          image
          name
          designer
        }
      }
      digiBundle {
        id
        garments(first: 1) {
          id
          animation
          image
          name
          designer
        }
      }
    }
  }
`;

export const COLLECTION_GROUP_BY_ID = gql`
  query digitalaxCollectionGroup($id: ID!) {
    digitalaxCollectionGroup(id: $id) {
      id
      auctions {
        id
        garment {
          id
          animation
          image
          name
          designer
          description
        }
      }
      collections {
        id
        garments(first: 1) {
          id
          animation
          image
          name
          designer
          description
        }
        rarity
      }
    }
  }
`;

export const GARMENTV2_BY_COLLECTION_ID = gql`
  query digitalaxGarmentV2Collection($id: ID!) {
    digitalaxGarmentV2Collection(id: $id) {
      id
      garments(first: 1) {
        id
        name
        animation
        description
        primarySalePrice
        designer
      }
    }
  }
`;

export const GARMENTV2_BY_AUCTION_ID = gql`
  query digitalaxGarmentV2Auction($id: ID!) {
    digitalaxGarmentV2Auction(id: $id) {
      id
      garment {
        id
        name
        animation
        description
        primarySalePrice
      }
    }
  }
`;
