export const getAllAuctions = (state) => state.auction.get('auctions');
export const getWeekResultedAuctions = (state) => state.auction.get('weekResultedAuctions');
export const getGlobalStats = (state) => state.auction.get('globalStats');
export const getMonthResultedAuctions = (state) => state.auction.get('monthResultedAuctions');
export const getMonthDesignerResultedAuctions = (state) => state.auction.get('monthDesignerResultedAuctions');
export const getAuctionById = (id) => (state) => (state.auction.getIn(['auctionsById', id]) || null);
