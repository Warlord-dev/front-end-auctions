export const getAllHistoryByTokenId = (state) => state.history.get('historyByTokenId');
export const getHistoryByTokenId = (id) => (state) => (state.history.getIn(['historyByTokenId', id]) || []);
export const getHistoryByTokenIds = (ids) => (state) => ids
  .reduce((acc, id) => acc.concat(state.history.getIn(['historyByTokenId', id]) || []), []);
