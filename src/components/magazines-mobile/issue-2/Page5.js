import React from 'react';
import styles from './page5.module.scss';

const Page5 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/07_08_mobile.jpg" className={styles.image} />
      <div className={styles.text1}>DAOs</div>
      <div className={styles.text2}> What Are They and Why Are They Important? </div>
      <div className={styles.text3}> Peezy R. </div>
      <div className={styles.textDiv1}> </div>
      <div className={styles.text4}>
        Forty years ago, political activist Ralph Nader was at the peak of his fame. Now, he may be
        seen as a dinosaur in the scene, but his stinging rebuke of corporations then still rings
        true to this very day.
        <br />
        <br />
        For far too long, corporations have unashamedly put sales above the health and safety of the
        people they claim to serve and profit from.
        <br />
        <br />
        Examples of corporate malfeasance and lack of accountability underpinned the exposés that
        revealed how corporate executives knew the harm their products or actions could cause — but
        went ahead and did anyway — were and are still rife to this very day.
        <br />
        <br />
        Case in point: Apple literally just admitted to storing thousands of customers' PII on
        Chinese servers and censored apps to kowtow to the government that virtually runs its supply
        chain, making it easy for government agents to drain sensitive information from Chinese
        citizens, including messages, location details, and photos — which is 100% illegal under
        U.S. federal law.
        <br />
        <br />
        Financial impropriety, corruption, bloat, exploitation, cutting corners, and exorbitant
        management salaries are all part and parcel of every organization's challenges.
        <br />
        <br />
        Worse, as organizations grow, the more decision-makers add hoops for employees to jump
        through and inflict increasingly convoluted processes to justify the existence of the rising
        throngs of senior bureaucrats all hoping to keep their jobs until the ax falls. It's
        perfectly normal: network effects are the catalyst of natural monopolies, and centralization
        fosters corruption, censorship, and profiteering behavior for all participants in a given
        ecosystem. The corporate excesses that led to Enron remain a stark reminder of the need for
        better governance and a better organizational structure.
        <br />
        <br />
        <br />
        <div className={styles.subtitle}> Enter DAOs </div>
        <br />
        The key is right here, and it's going to be the next big trend in the blockchain space.
        Decentralized Autonomous Organizations, or DAOs, are computer programs running on
        peer-to-peer networks that incorporate decision-making and governance rules which can be
        programmed to run autonomously, independent from any human involvement, or otherwise can be
        programmed to allow direct control of the DAO and its assets.
        <br />
        <br />
        In essence, DAOs are a novel way of financing projects and governing communities, while
        sharing value for all participants by using Web3 technology and rapidly evolving governance
        and incentive systems to fairly and efficiently distribute decision-making authority and
        financial rewards. No single authority has the authority to decide and make rules. Instead,
        DAOs work with smart contracts to run commands based on external information and operated by
        a
      </div>
    </div>
  );
};

export default Page5;
