import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import garmentActions from '@actions/token.uri.info.actions';
import { getGarmentsInfoById } from '@selectors/token.uri.info.selectors';

export const useTokenInfo = (tokenUri, deps) => {

  const storeInfo = useSelector(getGarmentsInfoById(tokenUri));
  const [info, setInfo] = useState(storeInfo);
  const dispatch = useDispatch();

  if (storeInfo === undefined) {
    dispatch(garmentActions.setGarmentInfo(tokenUri, null));
  }

  useEffect(() => {

    if (!tokenUri || String(tokenUri).search(/^http/) === -1) {
      return;
    }

    if (storeInfo || storeInfo === null) {
      return;
    }

    fetch(tokenUri).then((response) => response.text()).then((infoResponse) => {
      try {
        const jsonInfo = JSON.parse(infoResponse);
        if (!jsonInfo || !jsonInfo.image || !jsonInfo.name) {
          throw new Error('Invalid json info');
        }
        setInfo(jsonInfo);
        dispatch(garmentActions.setGarmentInfo(tokenUri, jsonInfo));
      } catch (e) {
        console.log('[INFO] Invalid tokenUri', tokenUri);
      }

    });

  }, deps);

  return info;
};
