import userReducer from '../reducers/user.reducer';

const { actions } = userReducer;

export const setValueInUserReducer = (field, value) => (dispatch) => {
  dispatch(actions.setValue({ field, value }));
};
