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
    digitalaxCollectionGroups(first: 100, skip: 2) {
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
        garments(first: 1000) {
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
        garments(first: 1000) {
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
    digitalaxGarmentCollections(first: 10) {
      id
      rarity
      valueSold
      garments(first: 1000) {
        id
        animation
        name
      }
    }
  }
`;

export const DIGITALAX_MARKETPLACE_OFFERS = gql`
  query digitalaxMarketplaceOffers {
    digitalaxMarketplaceOffers(first: 100) {
      id
      primarySalePrice
      garmentCollection {
        id
        garments {
          id
          owner
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
        garments(first: 1000) {
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
      garments(first: 1000) {
        id
        name
        image
        animation
        description
        tokenUri
        primarySalePrice
        children {
          id
          tokenUri
        }
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
    digitalaxGarmentV2Collections(where: { id_in: $ids }) {
      id
      garments(first: 1) {
        id
        image
        animation
      }
    }
  }
`;

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
      resulted
      garment {
        id
        name
        image
        animation
        description
        owner
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
          id
          owner
        }
      }
    }
  }
`;

export const DIGITALAX_MARKETPLACE_OFFER = gql`
  query digitalaxMarketplaceOffers($garmentCollection: String!) {
    digitalaxMarketplaceOffers(where: { garmentCollection: $garmentCollection }) {
      id
      primarySalePrice
      startTime
      amountSold
      garmentCollection {
        garments(first: 1000) {
          id
          owner
        }
      }
    }
  }
`;

export const DIGITALAX_MARKETPLACE_V2_OFFERS = gql`
  query digitalaxMarketplaceV2Offers {
    digitalaxMarketplaceV2Offers(first: 1000, where: { garmentCollection_gte: "0" }) {
      id
      primarySalePrice
      startTime
      endTime
      amountSold
      garmentCollection {
        id
        garments(first: 1000) {
          id
          owner
        }
      }
    }
  }
`;

export const DIGITALAX_MARKETPLACE_V2_PURCHASE_HISTORIES = gql`
  query digitalaxMarketplaceV2PurchaseHistories($ids: [ID!]) {
    digitalaxMarketplaceV2PurchaseHistories(where: { token_in: $ids }) {
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
    digitalaxMarketplacePurchaseHistories(where: { token_in: $ids }) {
      id
      timestamp
      transactionHash
      buyer
      eventName
      value
    }
  }
`;

export const DIGITALAX_GARMENT_V2_PURCHASE_HISTORIES = gql`
  query digitalaxGarmentV2PurchaseHistories($id: ID) {
    digitalaxGarmentV2AuctionHistories(where: { token: $id, value_not: null }) {
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
    digitalaxGarmentAuctionHistories(where: { token: $id, value_not: null }) {
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
    digitalaxGarmentV2S(where: { id_in: $ids }) {
      id
      owner
    }
  }
`;

// For Profile Page

// DIGITALAX GARMENTS (eth, polygon)
export const DIGITALAX_GARMENTS_BY_OWNER = gql`
  query digitalaxGarments($owner: ID!, $first: Int!, $lastID: ID!) {
    digitalaxGarments(first: $first, where: { owner: $owner, id_gt: $lastID }) {
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

export const DIGITALAX_GARMENTS = gql`
  query digitalaxGarments($ids: [ID!], $first: Int!, $lastID: ID!) {
    digitalaxGarments(first: $first, where: { id_in: $ids, id_gt: $lastID }) {
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
  query digitalaxGarmentV2S($owner: ID!, $first: Int!, $lastID: ID!) {
    digitalaxGarmentV2S(first: $first, where: { owner: $owner, id_gt: $lastID }) {
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
  query digitalaxSubscriptions($owner: ID!, $first: Int!, $lastID: ID!) {
    digitalaxSubscriptions(first: $first, where: { owner: $owner, id_gt: $lastID }) {
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

// polygon digifizzy 1155
export const DIGITALAX_SUBSCRIPTION_COLLECTORS_BY_OWNER = gql`
  query digitalaxSubscriptionCollectors($owner: ID!, $first: Int!, $lastID: ID!) {
    digitalaxSubscriptionCollectors(first: $first, where: { id: $owner, id_gt: $lastID }) {
      id
      childrenOwned {
        id
        owner
        amount
        tokenUri
        token {
          id
          image
          animation
          name
          description
          totalSupply
          tokenUri
        }
      }
    }
  }
`;

// staked fashion NFTs polygon
export const DIGITALAX_NFT_STAKERS_BY_ADDRESS = gql`
  query digitalaxNFTStakers($staker: ID!) {
    digitalaxNFTStakers(where: { id: $staker }) {
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
  query digitalaxGarmentStakedTokens($staker: ID!, $first: Int!, $lastID: ID!) {
    digitalaxGarmentStakedTokens(first: $first, where: { staker: $staker, id_gt: $lastID }) {
      id
      staker
    }
  }
`;

// genesis NFTs ethereum
export const DIGITALAX_GENESIS_NFTS_BY_ADDRESS = gql`
  query digitalaxGenesisNFTs($owner: ID!, $first: Int!, $lastID: ID!) {
    digitalaxGenesisNFTs(first: $first, where: { owner: $owner, id_gt: $lastID }) {
      id
      owner
      name
      description
      image
      animation
      tokenUri
    }
  }
`;

// genesis NFTs by ids ethereum
export const DIGITALAX_GENESIS_NFTS = gql`
  query digitalaxGenesisNFTs($ids: [ID!], $first: Int!, $lastID: ID!) {
    digitalaxGenesisNFTs(first: $first, where: { id_in: $ids, id_gt: $lastID }) {
      id
      owner
      name
      description
      image
      animation
      tokenUri
    }
  }
`;

// staked genesis NFTs ethereum
export const DIGITALAX_GENESIS_STAKED_TOKENS_BY_ADDRESS = gql`
  query digitalaxGenesisStakedTokens($staker: ID!, $first: Int!, $lastID: ID!) {
    digitalaxGenesisStakedTokens(first: $first, where: { staker: $staker, id_gt: $lastID }) {
      id
      staker
    }
  }
`;

// get collection id by garment id polygon
export const DIGITALAX_GARMENT_V2_COLLECTION_BY_GARMENT_ID = gql`
  query digitalaxGarmentV2Collections($garmentIDs: [ID!]) {
    digitalaxGarmentV2Collections(where: { garments_contains: $garmentIDs }) {
      id
      rarity
      garmentAuctionID
    }
  }
`;

// get pode tokens by owner
export const PODE_NFT_V2S_BY_ADDRESS = gql`
  query podeNFTv2S($owner: ID!, $first: Int!, $lastID: ID!) {
    podeNFTv2S(first: $first, where: { owner: $owner, id_gt: $lastID }) {
      id
      owner
      tokenUri
      name
      animation
    }
  }
`;

// get staked pode tokens by staker
export const PODE_NFT_V2_STAKERS_BY_ADDRESS = gql`
  query podeNFTv2Stakers($staker: ID!, $first: Int!, $lastID: ID!) {
    podeNFTv2Stakers(first: $first, where: { id: $staker, id_gt: $lastID }) {
      id
      garments {
        id
      }
    }
  }
`;

// polygon digitalax 1155
export const DIGITALAX_COLLETOR_V2_BY_OWNER = gql`
  query digitalaxCollectorV2($owner: ID!) {
    digitalaxCollectorV2(id: $owner) {
      id
      childrenOwned {
        id
        owner
        amount
        tokenUri
        token {
          id
          image
          animation
          name
          description
          totalSupply
          tokenUri
        }
      }
    }
  }
`;

// gdn membership token polygon
export const GDN_MEMBERSHIP_NFTS_BY_OWNER = gql`
  query gdnmembershipNFTs($owner: ID!, $first: Int!, $lastID: ID!) {
    gdnmembershipNFTs(first: $first, where: { owner: $owner, id_gt: $lastID }) {
      id
      owner
      name
      description
      image
      animation
      tokenUri
    }
  }
`;

// digitalax look (loot for fashion) nfts mainnet
export const DIGITALAX_LOOK_NFTS_BY_OWNER = gql`
  query digitalaxLookNFTs($owner: ID!, $first: Int!, $lastID: ID!) {
    digitalaxLookNFTs(first: $first, where: { owner: $owner, id_gt: $lastID }) {
      id
      name
      owner
      background
      texture
      pattern
      color
      shape
      flare
      form
      line
      element
      tokenUri
    }
  }
`;

export const DIGITALAX_GARMENT_V2_COLLECTIONS = gql`
  query digitalaxGarmentV2Collections($ids: [ID!], $first: Int!, $lastID: ID!) {
    digitalaxGarmentV2Collections(first: $first, where: { id_in: $ids, id_gt: $lastID }) {
      id
      garments(first: 1000) {
        id
      }
    }
  }
`;

export const DIGITALAX_GARMENT_V2_COLLECTIONS_BY_GARMENT_IDS = gql`
  query digitalaxGarmentV2Collections($garmentIDs: [ID!], $first: Int!, $lastID: ID!) {
    digitalaxGarmentV2Collections(first: $first, where: { id_gt: $lastID }) {
      id
      garments(first: 1000, where: { id_in: $garmentIDs }) {
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

export const DIGITALAX_LOOK_GOLDEN_TICKETS_BY_OWNER = gql`
  query digitalaxLookGoldenTickets($owner: ID!, $first: Int!, $lastID: ID!) {
    digitalaxLookGoldenTickets(first: $first, where: { owner: $owner, id_gt: $lastID }) {
      id
      name
      description
      animation
      image
      owner
      tokenUri
    }
  }
`;

// staked nfts by id list on polygon
export const DIGITALAX_NFT_STAKERS_BY_GARMENTS = gql`
  query digitalaxNFTStakers($garmentIDs: [ID!], $first: Int!, $lastID: ID!) {
    digitalaxNFTStakers(first: $first, where: { id_gt: $lastID }) {
      id
      garments(first: 1000, where: { id_in: $garmentIDs }) {
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

// whitelisted staked nfts on dlta by id list on polygon
export const GUILD_WHITELISTED_NFT_STAKERS_BY_GARMENTS = gql`
  query guildWhitelistedNFTStakers($garmentIDs: [ID!], $first: Int!, $lastID: ID!) {
    guildWhitelistedNFTStakers(first: $first, where: { id_gt: $lastID }) {
      id
      garments(first: 1000, where: { id_in: $garmentIDs }) {
        id
        owner
        tokenUri
        image
        animation
        name
        description
      }
    }
  }
`;

// get staked pode tokens by staker
export const GUILD_WHITELISTED_NFT_STAKERS_BY_STAKER = gql`
  query guildWhitelistedNFTStakers($staker: ID!, $first: Int!, $lastID: ID!) {
    guildWhitelistedNFTStakers(first: $first, where: { id: $staker, id_gt: $lastID }) {
      id
      garments {
        id
        owner
        tokenAddress
        tokenUri
        image
        animation
        name
        description
      }
    }
  }
`;
