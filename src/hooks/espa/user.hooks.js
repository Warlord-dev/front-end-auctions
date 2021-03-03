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

export function useNFTs(account) {
  const [nfts, setNfts] = useState(null);

  useEffect(() => {
    api
      .fetchNfts(account)
      .then((data) =>
        setNfts(data.digitalaxCollectors.length ? data.digitalaxCollectors[0].parentsOwned : [])
      )
      .catch((e) => setNfts([]));
  }, [account]);

  return nfts;
}

export function useProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.getProfile().then((data) => setUser(data));
  }, []);

  return user;
}

export function useMyIP() {
  const [ip, setIp] = useState(null);

  useEffect(() => {
    api.getMyIP().then((data) => setIp(data));
  }, []);

  return ip;
}
