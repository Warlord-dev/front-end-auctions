import { useEffect, useState, useRef } from 'react';
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
  const timer = useRef(null);

  useEffect(() => {
    if (username) {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        if (username.length <= 10) {
          api.checkUserName(username)
            .then(isAvailable => setUserNameAvailable(isAvailable));
        }
      }, 1000);
    }
  }, [username]);

  return isAvailable;
}

export function useNFTs(account) {
  const [nfts, setNfts] = useState(null);

  useEffect(() => {
    api
      .fetchNfts(account)
      .then((data) => {
        let items = [];
        if (data.digitalaxCollectors.length) {
          items = data.digitalaxCollectors[0].parentsOwned.map((item) => {
            return {
              ...item,
              isEth: true,
            };
          });
        }
        for (let item of data.digitalaxGarments) {
          if (!items.find((el) => el.id === item.id)) {
            items = [...items, { ...item, isStaked: true }];
          }
        }
        if (data.matic.digitalaxCollectors.length) {
          items = [...items, ...data.matic.digitalaxCollectors[0].parentsOwned];
        }
        setNfts(items);
      })
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
