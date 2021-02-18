import { closeConnectMetamaskModal, openNotInstalledMetamask, openSignupModal } from '@actions/modals.actions';
import { STORAGE_IS_LOGGED_IN } from '@constants/storage.constants';
import userReducer from '@reducers/user.reducer';
import { isMetamaskInstalled } from '@services/metamask.service';
import BaseActions from './base-actions';

class UserActions extends BaseActions {
  tryToLogin() {
    return async (dispatch) => {
      if (!isMetamaskInstalled()) {
        dispatch(openNotInstalledMetamask());
        return;
      }

      const { ethereum } = window;

      try {
        const [account] = await ethereum.request({
          method: 'eth_requestAccounts',
        });

        if (!account) {
          console.error('Account is epmty.');
          return;
        }

        localStorage.setItem(STORAGE_IS_LOGGED_IN, 1);
        dispatch(this.setValue('account', account));
        dispatch(closeConnectMetamaskModal());
        dispatch(openSignupModal());
      } catch (e) {
        console.error(e.message);
      }
    };
  }

  tryToSignup() {
    return async (dispatch) => {};
  }

  logout() {
    return async (dispatch) => {
      localStorage.removeItem(STORAGE_IS_LOGGED_IN);
      dispatch(this.setValue('account', null));
    };
  }
}

export default new UserActions(userReducer);
