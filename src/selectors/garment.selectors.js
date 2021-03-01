export const getAllGarmentsById = (state) => state.garment.get('garmentsById');
export const getGarmentsById = (id) => (state) => state.garment.getIn(['garmentsById', id]) || null;
export const getGarmentsReceiveByName = (name) => (state) =>
  state.garment
    .get('garmentsReceiveByName')
    ?.find((item) => item?.name?.toLowerCase() === name?.toLowerCase());
