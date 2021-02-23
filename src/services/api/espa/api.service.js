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
    // register - get string
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
    // is_exist - get string
    // return checkUserNameExists(account) ? 'password' : undefined;
    return undefined;
  }

  async handleAuthentication(account, signature) {
    // authenticate
    return {
      user: { userName: 'arthlino', email: 'arthur.lixiao@gmail.com' },
      authToken: 'asdfasdfasdf',
    };
  }
}

export default new EspaApiService();
