import modalsReducer from '../reducers/modals.reducer';

const { actions } = modalsReducer;

const hideScroll = (scroll) => {
  const widthScroll = window.innerWidth - document.documentElement.clientWidth;
  if (scroll === 'hideScroll') {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${widthScroll}px`;
  }
};

const showScroll = (scroll) => {
  if (scroll === 'addScroll') {
    document.body.style.overflow = 'initial';
    document.body.style.paddingRight = '0px';
  }
};

export const openModal = (modalNameInReducer, statusScroll) => (dispatch) => {
  dispatch(actions.setValue({ field: modalNameInReducer, value: true }));

  hideScroll(statusScroll);
};

export const closeModal = (modalNameInReducer, statusScroll) => (dispatch) => {
  dispatch(actions.setValue({ field: modalNameInReducer, value: false }));

  showScroll(statusScroll);
};
