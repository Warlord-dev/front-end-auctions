import clothesInfoReducer from '../reducers/clothes-info.reducer';

const { actions } = clothesInfoReducer;

export const setValueInClothesInfoReducer = (field, value) => (dispatch) => {
  dispatch(actions.setValue({ field, value }));
};
