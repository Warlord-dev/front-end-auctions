import {
  closeConnectMetamaskModal,
  closeSignupModal,
  openNotInstalledMetamask,
  openSignupModal,
} from '@actions/modals.actions';
import { STORAGE_IS_LOGGED_IN, STORAGE_USER, STORAGE_TOKEN } from '@constants/storage.constants';
import userReducer from '@reducers/user.reducer';
import { handleSignMessage, isMetamaskInstalled } from '@services/metamask.service';
import { getUser, getAuthToken } from '@helpers/user.helpers';
import BaseActions from './base-actions';
import api from '@services/api/espa/api.service';
import { toast } from 'react-toastify';
import Router from 'next/router';

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

  tryToSignup(account, userName, email, signMsg) {
    return async (dispatch) => {
      dispatch(this.setValue('isLoading', true));
      if (!signMsg) {
        signMsg = await api.handleSignUp(account, userName, email);
        if (!signMsg) {
          toast.error('Sign Up is failed');
          dispatch(this.setValue('isLoading', false));
          return;
        }
      }

      const { signature } = await handleSignMessage({
        publicAddress: account,
        signMsg,
      });

      dispatch(this.tryAuthentication(account, signMsg, signature));
    };
  }

  tryAuthentication(account, signMsg, signature) {
    return async (dispatch) => {
      try {
        const data = await api.handleAuthentication(account, signMsg, signature);
        if (data) {
          const { returnData, secret } = data;
          dispatch(this.setValue('user', returnData));
          localStorage.setItem(STORAGE_IS_LOGGED_IN, 1);
          localStorage.setItem(STORAGE_USER, JSON.stringify(returnData));
          localStorage.setItem(STORAGE_TOKEN, secret);
          Router.push('/profile');
        } else {
          dispatch(this.logout());
        }
      } catch (e) {
        console.error(e.message);
        dispatch(this.logout());
      }

      dispatch(closeSignupModal());
      dispatch(this.setValue('isLoading', false));
    };
  }

  logout() {
    return async (dispatch) => {
      dispatch(this.setValue('user', null));
      localStorage.removeItem(STORAGE_IS_LOGGED_IN);
      localStorage.removeItem(STORAGE_USER);
      localStorage.removeItem(STORAGE_TOKEN);
      Router.push('/');
    };
  }

  updateProfile(user) {
    return async (dispatch) => {
      try {
        dispatch(this.setValue('isLoading', true));
        const data = await api.updateProfile(user);
        if (data) {
          dispatch(this.setValue('user', data));
          localStorage.setItem(STORAGE_USER, JSON.stringify(data));
          toast('Profile is updated');
        } else {
        }
      } catch (e) {}
      dispatch(this.setValue('isLoading', false));
    };
  }

  checkStorageAuth() {
    return async (dispatch) => {
      const user = getUser();
      const token = getAuthToken();
      if (!user || !token) {
        return;
      }
      dispatch(this.setValue('user', user));
    };
  }

  uploadAvatar(file) {
    return async (dispatch) => {
      try {
        dispatch(this.setValue('isLoading', true));
        let url = await api.getPresignedUrl();
        if (url) {
          const result = await api.uploadImageToS3(url, file);
          if (result) {
            const user = getUser();
            const queryIndex = url.indexOf('?');
            if (queryIndex >= 0) {
              url = url.slice(0, queryIndex);
            }
            user.avatar = url;
            dispatch(this.updateProfile(user));
          }
        }
      } catch (e) {}
      dispatch(this.setValue('isLoading', false));
    };
  }
}

export default new UserActions(userReducer);
