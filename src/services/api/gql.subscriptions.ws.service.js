
export const onAuctionsChange = `
  subscription onAuctionsChange {
    digitalaxGarmentAuctions(where:{resulted_not_in:[true]}) {
      id
      reservePrice
      endTime
      startTime
      resulted
      topBidder {
        id
      }
      topBid
      lastBidTime
    }
  }`;


export const onAuctionsChangeByIds = `
  subscription onAuctionsChangeByIds($ids: [ID!]) {
    digitalaxGarmentAuctions(where: {id_in: $ids}) {
      id
      reservePrice
      endTime
      startTime
      resulted
      topBidder {
        id
      }
      topBid
      lastBidTime
    }
  }
`;

export const onDesignerByIds = `
  subscription onDesignerGarments($ids: [ID!]) {
    digitalaxGarmentDesigners(where: { id_in: $ids }) {
      id
      listings {
        id
        reservePrice
        startTime
        endTime
        resulted
        topBidder {
          id
        }
        topBid
        lastBidTime
      }
      garments {
        id
        tokenUri
      }
    }
  }
`;

export const onAuctionsHistoryByIds = `
  subscription onAuctionsHistoryByIds($ids: [ID!]) {
    digitalaxGarmentAuctionHistories(where: {token_in: $ids}) {
      id
      eventName
      timestamp
      transactionHash
      bidder {
        id
      }
      value
      token {
        id
        owner
        primarySalePrice
        tokenUri
        strands {
          id
          amount
          tokenUri
        }
      }
    }
  }
`;
