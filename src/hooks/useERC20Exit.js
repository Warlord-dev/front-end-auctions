import React from 'react';
import globalActions from '@actions/global.actions';
import { useDispatch } from 'react-redux';
import useDigitalaxRootTunnelReceiveMessage from './useDigitalaxRootTunnelReceiveMessage';
import { useIsMainnet } from './useIsMainnet';
import { toast } from 'react-toastify';

const useERC20Exit = () => {
  const dispatch = useDispatch();
  const digitalaxRootTunnelReceiveMessage = useDigitalaxRootTunnelReceiveMessage();
  const isMainnet = useIsMainnet();

  const erc20Exit = async (hash) => {
    const network = isMainnet ? 'matic' : 'mumbai';
    try {
      dispatch(globalActions.setIsLoading(true));
      const { data } = await axios.get(
        `https://apis.matic.network/api/v1/${network}/exit-payload/${hash}/?eventSignature=0x8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b036`,
      );

      const res = await digitalaxRootTunnelReceiveMessage(data.result);
      dispatch(globalActions.setIsLoading(false));
      toast.success('Successfully withdrawed!');
      return res;
    } catch (err) {
      dispatch(globalActions.setIsLoading(false));
      toast.error(err.message);
      throw err;
    }
  };

  return erc20Exit;
};

export default useERC20Exit;
