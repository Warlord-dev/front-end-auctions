import React from 'react';
import styles from './page2122.module.scss';

const Page2122 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/21_22.png" className={styles.backImage} />
      <div className={styles.text1}>
        In other words, consensus allows groups to reach an agreement that benefits the entire
        group, rather than simply going for majority rule. The main consensus mechanisms include the
        following:
        <br /> <br />
        <ul>
          <li>
            <span className={styles.subTitle}>Proof-of-work (PoW).</span> Proof of work relies on
            computational power as a scarce resource, which requires threat actors to acquire a
            large portion of the computational power of the validating network, making it consume
            high amounts of energy. For instance, Bitcoin applies a specific set of rules to the
            generation of new blocks. One of the rules states that the ability to create a block
            must be proportional to the processing power of the proof-of-work mechanism. This means
            one has to actually own the computing power required to create a new block. Ethereum
            also uses PoW, but is in the process of changing its consensus mechanism to the next
            one.
          </li>
          <br />
          <li>
            <span className={styles.subTitle}>Proof-of-stake (PoS).</span> Proof-of-stake states
            that an individual can mine or validate block transactions depending on how many tokens
            (or stakes) they hold. The more tokens owned by a miner, the more mining power they
            possess. Proof-of-stake is the underlying mechanism that enables validators upon
            receiving enough stake. Ethereum is moving to this consensus mechanism from a PoW model
            as part of its Ethereum 2.0 upgrades in order to address transaction fees and
            scalability issues. However, getting this consensus mechanism is a complex technical
            challenge that will take time. Unlike PoW, validators don't need to spend massive
            computational power because they are selected at random and are not competing against
            each other. Validators get rewards for proposing new blocks and for attesting to ones
            they've seen. PoS models make 51% attacks risky for threat actors because executing it
            requires 51% of staked ETH, which costs oodles and oodles of money. There is no
            incentive to destroy the value and infrastructure of a heavily invested cryptocurrency
            individuals are in.
          </li>
          <br />
          <li>
            <span className={styles.subTitle}>Delegated proof of stake (DPoS).</span> Delegated
            Proof-of-Stake models are a popular iteration of the latter PoS concept, where network
            users vote and elect delegates to validate the succeeding block. With DPoS, an
            individual can vote on delegates by sending your tokens into a staking pool and linking
            it to their delegate. No physical transfers from wallet to wallet occur. Then, an
            individual can vote through delegates by pooling their tokens into a staking pool and
            linking them to a particular delegate. They do not physically transfer your tokens to
            another wallet but rather utilize a staking service provider to stake your tokens in a
            staking pool. Its proponents believe it is a more democratized way of choosing who
            validates the following block (rather than being at random) and allowing diverse,
            serious stakers to participate in the process. Fewer validators enable the network to
            reach a faster consensus.
          </li>
        </ul>
        <br />
        Getting consensus exactly right is extremely difficult in production, considering the theory
        itself is academic. Worse, the real world has a knack for proving theory wrong, especially
        since we are still in the early days of distributed ledger technologies.
      </div>
      <div className={styles.text2}>
        Complexity is the antithesis of security, and it is a constant uphill battle. Devs,
        programmers, and testers can expunge every last bit of vulnerability from code, but
        operational risks will always remain. Because blockchains "live" on the internet, they are
        exposed to the same inherent security vulnerabilities that the internet possesses: phishing
        attacks, cross-site scripting, and injection attacks included.
        <br />
        <br />
        There's always going to be tradeoffs for every technological advantage, but the benefits are
        undoubtedly tantalizing. The future probably lies somewhere in eventually using a balance of
        both centralized and distributed systems, which allow for exciting implementations based on
        a particular need.
        <br />
        <br />
        In the end, the capability to work in different sectors lies in which consensus mechanisms
        end up surviving.
      </div>
    </div>
  );
};

export default Page2122;
