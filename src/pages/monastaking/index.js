import Button from '@components/buttons/button';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function MonaStaking() {
  const [amount, setAmount] = useState(1);
  const trackStyle = {
    background: 'rgb(245, 184, 77)',
    borderRadius: '999px',
    height: '10px',
    boxShadow: '1px 1px 3px grey inset',
  };
  const handleStyle = {
    width: 24,
    height: 24,
    marginTop: -8,
    border: 'none',
    backgroundColor: 'grey',
    boxShadow: '0px 0px 7px -1px darkgoldenrod',
  };
  const railStyle = {
    height: 10,
    boxShadow: '1px 1px 3px grey inset',
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.swapTitle}>$MONA Revenue Share Distribution Contracts</div>
      <div className={styles.swapText}>
        We are excited to announce the launch of the DIGITALAX Marketplace Revenue Distribution
        contracts, eligible for all $MONA Holders. As promised to the community at the beginning, it
        is time to share profits with all of our token holders. All $MONA token holders are eligible
        to receive a portion of the platform's revenue.
      </div>
      <div className={styles.swapText}>
        Please note that we won't be able to offer instant un-staking functions due to the revenue
        collection process from the marketplace and its' sales cycles. Our sales durations vary and
        therefore it t would be technically much harder for us to track and distribute revenue
        distribution fairly.
      </div>
      <div className={styles.tierWrapper}>
        <div className={styles.slider}>
          <p>
            You stake: <span>{amount} MONA</span>
          </p>
          <Slider
            min={1}
            max={15}
            step={0.1}
            value={amount}
            onChange={(val) => setAmount(val)}
            trackStyle={trackStyle}
            handleStyle={handleStyle}
            railStyle={railStyle}
          />
        </div>
        <div className={styles.row}>
          <div className={styles.tierContainer}>
            <p className={styles.tierTitle}>30 Days</p>
            <div>
              <p>
                Staking APY: <span>100%</span>
              </p>
              <p>
                $MONA Rewards: <span>2 $MONA</span>
              </p>
              <p>
                Early Rewards: <span>Yes (First 20 Stakers)</span>
              </p>
              <p>
                Early Rewards Allocation: <span>0.5 $MONA</span>
              </p>
              <p>
                Discounts on Auctions: <span>No</span>
              </p>
              <p>
                Revenue Share: <span>20% x Sale Distribution*</span>
              </p>
              <p>
                Vote Proposal: <span>Yes</span>
              </p>
              <p>
                Staker Limit: <span>Unlimited</span>
              </p>
            </div>
            <Button className={styles.button} background="black" onClick={() => {}}>
              STAKE
            </Button>
          </div>

          <div className={styles.tierContainer}>
            <p className={styles.tierTitle}>60 Days</p>
            <div>
              <p>
                Staking APY: <span>100%</span>
              </p>
              <p>
                $MONA Rewards: <span>2 $MONA</span>
              </p>
              <p>
                Early Rewards: <span>Yes (First 20 Stakers)</span>
              </p>
              <p>
                Early Rewards Allocation: <span>0.5 $MONA</span>
              </p>
              <p>
                Discounts on Auctions: <span>No</span>
              </p>
              <p>
                Revenue Share: <span>20% x Sale Distribution*</span>
              </p>
              <p>
                Vote Proposal: <span>Yes</span>
              </p>
              <p>
                Staker Limit: <span>Unlimited</span>
              </p>
            </div>
            <Button className={styles.button} background="black" onClick={() => {}}>
              STAKE
            </Button>
          </div>

          <div className={styles.tierContainer}>
            <p className={styles.tierTitle}>90 Days</p>
            <div>
              <p>
                Staking APY: <span>100%</span>
              </p>
              <p>
                $MONA Rewards: <span>2 $MONA</span>
              </p>
              <p>
                Early Rewards: <span>Yes (First 20 Stakers)</span>
              </p>
              <p>
                Early Rewards Allocation: <span>0.5 $MONA</span>
              </p>
              <p>
                Discounts on Auctions: <span>No</span>
              </p>
              <p>
                Revenue Share: <span>20% x Sale Distribution*</span>
              </p>
              <p>
                Vote Proposal: <span>Yes</span>
              </p>
              <p>
                Staker Limit: <span>Unlimited</span>
              </p>
            </div>
            <Button className={styles.button} background="black" onClick={() => {}}>
              STAKE
            </Button>
          </div>
        </div>
        <p>
          Sale Distribution = (50% x Protocol Fee % x Total Auction Proceedings During the 30 Days
          Period) / (Total Stakers)
        </p>
      </div>
    </div>
  );
}
