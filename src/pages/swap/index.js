import CurrencyInput from '@components/currency-input';
import { useUSDTBalance } from '@hooks/useBalances';
import { useMonaBalance } from '@hooks/useMonaBalance';
import React, { useState } from 'react';
import styles from './styles.module.scss';

export default function Swap() {
  const usdtBalance = useUSDTBalance();
  const [_, monaBalance] = useMonaBalance();
  const [usdtValue, setUSDTValue] = useState('0.0');
  const [monaValue, setMonaValue] = useState('0.0');

  return (
    <div className={styles.wrapper}>
      <div className={styles.swapTitle}>USDT &lt;&gt; $MONA</div>
      <div className={styles.swapText}>
        IF YOU HAVE AN ARKANE WALLET SWAP YOUR USDT TO $MONA HERE. if you are using metamask you can
        also go directly to quickswap to swap for $mona against other tokens on matic.
      </div>
      <div className={styles.inputContainer}>
        <div>
          <div className={styles.balance}>Balance: {parseFloat(usdtBalance).toFixed(2)}</div>
          <CurrencyInput
            placeHolder={<img src="images/usdtLogo.svg" />}
            max={usdtBalance}
            value={usdtValue}
            setValue={setUSDTValue}
          />
        </div>
        <img src="images/swap.svg" className={styles.swapIcon} />
        <div>
          <div className={styles.balance}>Balance: {parseFloat(monaBalance).toFixed(2)}</div>
          <CurrencyInput
            placeHolder={<img src="images/xLogo.svg" />}
            value={monaValue}
            setValue={setMonaValue}
            max={monaBalance}
          />
        </div>
      </div>
      <div>
        <button className={styles.actionButton} onClick={() => Router.push('/bridge/withdraw')}>
          <div className={styles.actionText}>SWAP</div>
        </button>
      </div>
    </div>
  );
}
