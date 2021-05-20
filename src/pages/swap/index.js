import CurrencyInput from '@components/currency-input';
import useApproveForMatic from '@hooks/useApproveForMatic';
import { useUSDTBalance } from '@hooks/useBalances';
import useERC20Approve from '@hooks/useERC20Approve';
import { useMonaBalance } from '@hooks/useMonaBalance';
import { getAmountsOut, useQuickSwap, useRatio } from '@hooks/useQuickSwap';
import { getAccount } from '@selectors/user.selectors';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

export default function Swap() {
  const usdtBalance = useUSDTBalance();
  const [_, monaBalance] = useMonaBalance();
  const [usdtValue, setUSDTValue] = useState('0.0');
  const [monaValue, setMonaValue] = useState('0.0');

  const [toMona, setToMona] = useState(true);
  const [firstBased, setFirstBased] = useState(true);

  const account = useSelector(getAccount);

  // const ratio = useRatio();
  const { swapCallback } = useQuickSwap();

  const changeUSDTValue = (v) => {
    setUSDTValue(v);

    if (toMona && !isNaN(parseFloat(v)) && parseFloat(v)) {
      getAmountsOut(v, true, account).then((amt) => setMonaValue(parseFloat(amt).toFixed(6)));
    }

    setFirstBased(toMona);
  };

  const changeMonaValue = (v) => {
    setMonaValue(v);

    if (!toMona && !isNaN(parseFloat(v)) && parseFloat(v)) {
      getAmountsOut(v, false, account).then((amt) => setUSDTValue(parseFloat(amt).toFixed(6)));
    }

    setFirstBased(!toMona);
  };

  const { approved, approveCallback } = useERC20Approve(toMona ? usdtValue : monaValue, !toMona);

  return (
    <div className={styles.swapContainer}>
      <div className={styles.wrapper}>
        <div className={styles.swapTitle}>USDT &lt;&gt; $MONA</div>
        <div className={styles.swapText}>
          IF YOU HAVE AN ARKANE WALLET SWAP YOUR USDT TO $MONA HERE. if you are using metamask you
          can also go directly to quickswap to swap for $mona against other tokens on matic.
        </div>
        <div className={styles.inputContainer}>
          {toMona ? (
            <div>
              <div className={styles.balance}>Balance: {parseFloat(usdtBalance).toFixed(6)}</div>
              <CurrencyInput
                placeHolder={<img src="images/usdtLogo.svg" />}
                max={usdtBalance}
                value={usdtValue}
                setValue={changeUSDTValue}
              />
            </div>
          ) : (
            <div>
              <div className={styles.balance}>Balance: {parseFloat(monaBalance).toFixed(6)}</div>
              <CurrencyInput
                placeHolder={<img src="images/xLogo.svg" />}
                value={monaValue}
                setValue={changeMonaValue}
                max={monaBalance}
              />
            </div>
          )}
          <button className={styles.exchangeButton} onClick={() => setToMona(!toMona)}>
            <img src="images/swap.svg" className={styles.swapIcon} />
          </button>
          {!toMona ? (
            <div>
              <div className={styles.balance}>Balance: {parseFloat(usdtBalance).toFixed(6)}</div>
              <CurrencyInput
                placeHolder={<img src="images/usdtLogo.svg" />}
                max={usdtBalance}
                value={usdtValue}
                setValue={changeUSDTValue}
              />
            </div>
          ) : (
            <div>
              <div className={styles.balance}>Balance: {parseFloat(monaBalance).toFixed(6)}</div>
              <CurrencyInput
                placeHolder={<img src="images/xLogo.svg" />}
                value={monaValue}
                setValue={changeMonaValue}
                max={monaBalance}
              />
            </div>
          )}
        </div>
        <div>
          <button
            className={styles.actionButton}
            onClick={() => {
              if (approved) {
                swapCallback(
                  toMona ? usdtValue : monaValue,
                  toMona ? monaValue : usdtValue,
                  toMona,
                  firstBased,
                );
              } else {
                approveCallback();
              }
            }}
          >
            <div className={styles.actionText}>{approved ? 'SWAP' : 'APPROVE'}</div>
          </button>
        </div>
      </div>
    </div>
  );
}
