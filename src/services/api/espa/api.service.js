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
      if (data === "0") {
        return null;
      }
      return data;
    } catch (e) {
      return null;
    }
  }

  async handleAuthentication(userName, email, account, signMsg, signature) {
    try {
      const data = await post('/authenticate', {
        username: userName,
        email,
        wallet: account,
        randomString: signMsg,
        signature,
      });
      return data;
    } catch (e) {
      return null;
    }
    return {
      user: { userName: 'arthlino', email: 'arthur.lixiao@gmail.com' },
      authToken: 'asdfasdfasdf',
    };
  }
}

export default new EspaApiService();
