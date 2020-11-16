export const getAllGarmentsById = (state) => state.garment.get('garmentsById');
export const getGarmentsById = (id) => (state) => (state.garment.getIn(['garmentsById', id]) || null);
