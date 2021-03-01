export const getAllHistoryByTokenId = (state) => state.history.get('historyByTokenId');
export const getHistoryByTokenId = (id) => (state) =>
  state.history.getIn(['historyByTokenId', id]) || [];
export const getHistoryByTokenIds = (ids) => (state) =>
  ids.reduce((acc, id) => acc.concat(state.history.getIn(['historyByTokenId', id]) || []), []);
export const getAllSemiRareHistoryByTokenId = (state) =>
  state.history.get('semiRareHistoryByTokenId');
export const getSemiRareHistoryByTokenId = (id) => (state) =>
  state.history.getIn(['semiRareHistoryByTokenId', id]) || [];
export const getSemiRareHistoryByTokenIds = (ids) => (state) =>
  ids.reduce(
    (acc, id) => acc.concat(state.history.getIn(['semiRareHistoryByTokenId', id]) || []),
    []
  );
export const getAllCommonHistoryByTokenId = (state) => state.history.get('commonHistoryByTokenId');
export const getCommonHistoryByTokenId = (id) => (state) =>
  state.history.getIn(['commonHistoryByTokenId', id]) || [];
export const getCommonHistoryByTokenIds = (ids) => (state) =>
  ids.reduce(
    (acc, id) => acc.concat(state.history.getIn(['commonHistoryByTokenId', id]) || []),
    []
  );
