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
    digitalaxCollectionGroups(first: 100, skip: 1) {
      id
      auctions {
        id
        topBid
        startTime
        endTime
        designer {
          id
          name
          image
        }
        garment {
          id
          animation
          image
          name
        }
      }
      collections {
        id
        rarity
        garments(first: 1) {
          id
          animation
          image
          name
        }
        designer {
          id
          name
          image
        }
        valueSold
      }
      digiBundle {
        id
        rarity
        garments(first: 1) {
          id
          animation
          image
          name
        }
        designer {
          id
          name
          image
        }
        valueSold
      }
    }
  }
`;

export const DIGITALAX_GARMENT_COLLECTIONS = gql`
query digitalaxGarmentCollections {
  digitalaxGarmentCollections(first:10) {
    id
    rarity
    valueSold
    garments(first: 1) {
      id
      animation
      name
    }
  }
}
`;

export const DIGITALAX_MARKETPLACE_OFFERS = gql`
query digitalaxMarketplaceOffers {
  digitalaxMarketplaceOffers(first: 10) {
    id
    primarySalePrice
    garmentCollection {
      id,
      garments {
        id,
        owner
      }
    }
  }
}
`

export const COLLECTION_GROUP_BY_ID = gql`
  query digitalaxCollectionGroup($id: ID!) {
    digitalaxCollectionGroup(id: $id) {
      id
      auctions {
        id
        designer {
          id
          name
          image
        }
        developer {
          id
          name
          image
        }
        garment {
          id
          animation
          image
          name
          designer
          description
        }
        topBid
        startTime
        endTime
      }
      collections {
        id
        designer {
          id
          name
          image
        }
        developer {
          id
          name
          image
        }
        garments(first: 1) {
          id
          animation
          image
          name
          designer
          description
          primarySalePrice
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
        image
        animation
        description
        primarySalePrice
      }
      designer {
        id
        name
        description
        image
      }
      developer {
        id
        name
        description
        image
      }
    }
  }
`;

export const GARMENTV2_BY_COLLECTION_IDS = gql`
query digitalaxGarmentV2Collections($ids: [ID!]) {
  digitalaxGarmentV2Collections(where: {id_in: $ids}) {
    id
    garments(first: 1) {
      id
      image
      animation
    }
  }
}
`

export const GARMENT_BY_COLLECTION_ID = gql`
  query digitalaxGarmentCollection($id: ID!) {
    digitalaxGarmentCollection(id: $id) {
      id
      garments(first: 1) {
        id
        name
        animation
        description
        primarySalePrice
      }
    }
  }
`;

export const GARMENTV2_BY_AUCTION_ID = gql`
  query digitalaxGarmentV2Auction($id: ID!) {
    digitalaxGarmentV2Auction(id: $id) {
      id
      startTime
      endTime
      topBid
      garment {
        id
        name
        image
        animation
        description
        primarySalePrice
      }
      designer {
        id
        name
        description
        image
      }
      developer {
        id
        name
        description
        image
      }
    }
  }
`;

export const GARMENT_BY_AUCTION_ID = gql`
  query digitalaxGarmentAuction($id: ID!) {
    digitalaxGarmentAuction(id: $id) {
      id
      startTime
      endTime
      topBid
      garment {
        id
        name
        image
        animation
        description
        primarySalePrice
      }
    }
  }
`;

export const DIGITALAX_MARKETPLACE_V2_OFFER = gql`
  query digitalaxMarketplaceV2Offers($garmentCollection: String!) {
    digitalaxMarketplaceV2Offers(where: { garmentCollection: $garmentCollection }) {
      id
      primarySalePrice
      startTime
      endTime
      amountSold
      garmentCollection {
        garments(first: 1000) {
          id,
          owner
        }
      }
    }
  }
`

export const DIGITALAX_MARKETPLACE_OFFER = gql`
query digitalaxMarketplaceOffers($garmentCollection: String!) {
  digitalaxMarketplaceOffers(where: { garmentCollection: $garmentCollection }) {
    id
    primarySalePrice
    startTime
    amountSold
    garmentCollection {
      garments(first: 1000) {
        id,
        owner
      }
    }
  }
}
`

export const DIGITALAX_MARKETPLACE_V2_OFFERS = gql`
  query digitalaxMarketplaceV2Offers {
    digitalaxMarketplaceV2Offers (first: 1000, where: {garmentCollection_gte: "0"}) {
      id
      primarySalePrice
      startTime
      endTime
      amountSold
      garmentCollection {
        id
        garments(first: 1000) {
          id,
          owner
        }
      }
    }
  }
`;

export const DIGITALAX_MARKETPLACE_V2_PURCHASE_HISTORIES = gql`
  query digitalaxMarketplaceV2PurchaseHistories($ids: [ID!]) {
    digitalaxMarketplaceV2PurchaseHistories(where: {token_in: $ids}) {
      id
      timestamp
      transactionHash
      buyer
      eventName
      value
    }
  }
`;

export const DIGITALAX_MARKETPLACE_PURCHASE_HISTORIES = gql`
query digitalaxMarketplacePurchaseHistories($ids: [ID!]) {
  digitalaxMarketplacePurchaseHistories(where: {token_in: $ids}) {
    id
    timestamp
    transactionHash
    buyer
    eventName
    value
  }
}
`

export const DIGITALAX_GARMENT_V2_PURCHASE_HISTORIES = gql`
  query digitalaxGarmentV2PurchaseHistories($id: ID) {
    digitalaxGarmentV2AuctionHistories(where: {token: $id, value_not: null}) {
      id
      timestamp
      transactionHash
      value
      bidder {
        id
      }
      token {
        id
      }
    }
  }
`;

export const DIGITALAX_GARMENT_PURCHASE_HISTORIES = gql`
  query digitalaxGarmentPurchaseHistories($id: ID!) {
    digitalaxGarmentAuctionHistories(where: {token: $id, value_not: null}) {
      id
      timestamp
      transactionHash
      value
      bidder {
        id
      }
      token {
        id
      }
    }
  }
`;

export const DIGITALAX_GARMENT_NFT_V2_GLOBAL_STATS = gql`
  query digitalaxGarmentNFTV2GlobalStats {
    digitalaxGarmentNFTV2GlobalStats(first: 1) {
      id
      monaPerEth
    }
  }
`;

export const DIGITALAX_GARMENT_AUCTIONS = gql`
  query digitalaxGarmentAuctions {
    digitalaxGarmentAuctions(first: 4) {
      id
      garment {
        id
        animation
        image
        name
        designer
        description
      }
      topBid
      startTime
      endTime
    }
  }
`;

export const DIGITALAX_GARMENT_V2S = gql`
  query digitalaxGarmentV2S($ids: [ID!]) {
    digitalaxGarmentV2S(where: {id_in: $ids}) {
      id
      owner
    }
  }
`;

// For Profile Page

// DIGITALAX GARMENTS (eth, polygon)
export const DIGITALAX_GARMENTS_BY_OWNER = gql`
  query digitalaxGarments($owner: ID!) {
    digitalaxGarments(where: {owner: $owner}) {
      id
      owner
    	designer
      tokenUri
      image
      animation
      name
      description
    }
  }
`;

// (polygon only)
export const DIGITALAX_GARMENT_V2S_BY_OWNER = gql`
  query digitalaxGarmentV2S($owner: ID!) {
    digitalaxGarmentV2S(where: {owner: $owner}) {
      id
      owner
    	designer
      tokenUri
      image
      animation
      name
      description
    }
  }
`;

// (polygon digi bundle)
export const DIGITALAX_SUBSCRIPTIONS_BY_OWNER = gql`
  query digitalaxSubscriptions($owner: ID!) {
    digitalaxSubscriptions(where: {owner: $owner}) {
      id
      name
      owner
      tokenUri
      image
      animation
      designer
    }
  }
`;

// staked fashion NFTs polygon
export const DIGITALAX_NFT_STAKER_BY_ADDRESS = gql`
  query digitalaxNFTStakers($staker: ID!) {
    digitalaxNFTStakers(where: {id: $staker}) {
      id
      garments {
        id
        owner
        designer
        tokenUri
        image
        animation
        name
        description
      }
    }
  }
`;

// staked fashion NFTs ethereum
export const DIGITALAX_GARMENT_STAKED_TOKENS_BY_ADDRESS = gql`
  query digitalaxGarmentStakedTokens($staker: ID!) {
    digitalaxGarmentStakedTokens(where: {staker: $staker}) {
      id
      staker
    }
  }
`;

// staked genesis NFTs ethereum
export const DIGITALAX_GENESIS_STAKED_TOKENS_BY_ADDRESS = gql`
  query digitalaxGenesisStakedTokens($staker: ID!) {
    digitalaxGenesisStakedTokens(where: {staker: $staker}) {
      id
      staker
    }
  }
`;