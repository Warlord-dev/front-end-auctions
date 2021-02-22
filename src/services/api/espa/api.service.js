import { STAGE_ESPA_BACKEND_URL } from '@constants/global.constants';

// This service needs to be completed once backend is done

class EspaApiService {
  constructor() {
    this.url = STAGE_ESPA_BACKEND_URL;
  }

  setUrl(url) {
    this.url = url;
  }

  async checkUserNameExists(userName) {
    return Math.random() > 0.7;
  }

  async handleSignUp(account, userName, email) {
    return 'password';
  }

  async fetchAuthToken(account) {
    return Math.random() > 0.7 ? 'password' : undefined;
  }

  async handleAuthentication(account, signature) {
    return {
      user: { userName: 'arthlino', email: 'arthur.lixiao@gmail.com' },
      authToken: 'asdfasdfasdf',
    };
  }
}

export default new EspaApiService();
