import { STAGE_ESPA_BACKEND_URL } from '@constants/global.constants';
import { post } from '@utils/api';
// This service needs to be completed once backend is done

class EspaApiService {
  constructor() {
    this.url = STAGE_ESPA_BACKEND_URL;
  }

  setUrl(url) {
    this.url = url;
  }

  async handleSignUp(account, userName, email) {
    try {
      const message = await post('/register', {
        wallet: account,
        username: userName,
        email,
      });
      return message;
    } catch (e) {
      return null;
    }
  }

  async fetchAuthToken(account) {
    try {
      const data = await post('/account-exists', {
        wallet: account,
      });
      if (data === '0') {
        return null;
      }
      return data;
    } catch (e) {
      return null;
    }
  }

  async handleAuthentication(account, signMsg, signature) {
    try {
      const data = await post('/authenticate', {
        wallet: account,
        randomString: signMsg,
        signature,
      });
      return data;
    } catch (e) {
      return null;
    }
  }

  async checkUserName(username) {
    try {
      const isExist = await post('/username-available', {
        username,
      });
      return isExist;
    } catch (e) {
      return null;
    }
  }
}

export default new EspaApiService();
