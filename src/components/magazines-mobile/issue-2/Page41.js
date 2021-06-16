import React from 'react';
import styles from './page41.module.scss';

const Page41 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/45_46_mobile1.jpg" className={styles.back} />
      <img src="./magazine/2/images/45_46_video.gif" className={styles.gif} />
      <div className={styles.text1}>DAOs & Governance</div>
      <div className={styles.text2}>How soon ARE DAOs? A primer on decentralized governance.</div>
      <div className={styles.text3}>
        For far too long, highly centralized, hierarchical, and hidebound structures have dominated
        the fabric of every organization — religion, association, corporation, or nonprofit be
        damned.
        <br />
        <br />
        Old habits are hard to break. It's hard to mess with organizational systems that have worked
        for so long that they're ingrained in our collective psyche — even though traditional
        hierarchy in corporations has often led to sub-par to mediocre and unsustainable outcomes
        for employees.
        <br />
        <br />
        Corporate hierarchy is, after all, overrated. But it works, even if the notion of someone
        being able to tell you what to do with your time just by virtue of getting a bigger paycheck
        than you seems like complete and total bullshit in this day and age. That's not to mention
        the unsustainable pace with which corporations require an endless stream of process upon
      </div>
      <div className={styles.text4}>
        process, department upon department, and cog upon replaceable cog in rank and file employees
        — and the subsequent bureaucratic morass can be unbearable to deal with. But that's your
        garden variety Fortune 500 company. Isn't it amazing how far we've come as a species
      </div>
      <div className={styles.text5}>
        technology-wise, yet our governance structures remain ancient relics from thousands of years
        of monarchies and centralized political systems?
        <br />
        <br />
        We all know the old saying: if it ain't broke, don't fix it. But aren't the hierarchical
        governance models we've all grown accustomed to already broken, to begin with? What if we
        could fix it?
        <br />
        <br />
        <i>
          <b>The Way of the DAO</b>
        </i>
        <br />
        Decentralized autonomous organizations, or DAOs, are the next tantalizing prospect of
        blockchain technology after decentralized finance (DeFi) and non-fungible tokens (NFTs). And
        rightfully so.
        <br />
        <br />
        DAOs are the emerging form of organizing business transactions, where all transactions are
        codified and saved in a shared ledger and enabled by the blockchain and smart contracts.
        <br />
        <br />
        But to understand why DAOs are on the cusp of changing the way we imagine governance, it's
        essential to mention the things that make them different from traditional organizations.
        <br />
        <br />
        DAOs do not follow hierarchical structures with power concentrated in centralized authority.
        Instead, DAO stakeholders vote on proposals on-chain, which are stored transparently on the
        ledger.
      </div>
    </div>
  );
};

export default Page41;
