import { useEffect, useState } from 'react';
import api from '@services/api/espa/api.service';

export function useSignMessage(account) {
  const [signMsg, setSignMsg] = useState(null);

  useEffect(() => {
    api.fetchAuthToken(account).then((msg) => setSignMsg(msg));
  }, [account]);

  return signMsg;
}

export function useUserNameAvailable(username) {
  const [isAvailable, setUserNameAvailable] = useState(true);

  useEffect(() => {
    if (username) {
      api.checkUserName(username).then((isAvailable) => setUserNameAvailable(isAvailable));
    }
  }, [username]);

  return isAvailable;
}
