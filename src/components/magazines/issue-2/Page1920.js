import React from 'react';
import styles from './page1920.module.scss';

const Page1920 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/19_20.png" className={styles.backImage} />
      <div className={styles.text1}>
        On June 17th, 2016, The DAO was hacked, and over US$55 million (or about 3.6 million Ether)
        was stolen using the first-ever documented reentrancy attack. The exploit almost brought
        down the second-largest blockchain behind Bitcoin in 2016, after pulling in an eye-watering
        US$150 million in crowdfunding. That's a shitload of opportunities. This pretty much drew a
        bulls-eye on The DAO for unscrupulous actors to try to exploit, considering the amounts of
        money going into the project. The hack ultimately led to the hard fork that created Ethereum
        Classic (the original blockchain) and Ethereum as we know it today. The crisis involving The
        DAO brought flashbacks of the 2008 financial crisis that saw the government bailing out
        banks and financial institutions left and right with taxpayer money. Nothing is too big to
        fail.
        <br />
        <br />
        The bug was that an unscrupulous actor could recursively call that action to get that Ether
        out of the contract and do it again and again until you drain the contract from all its
        money.
        <br />
        <br />
        This ultimately led to the Ethereum Foundation issuing a critical update to roll the hack
        back, resulting in the hard fork into Ethereum Classic and Ethereum.
        <br />
        <br />
        Cornell University professor and AVA Labs founder and CEO Emin Gün Sirer was then an
        outspoken critic of the DAO project, particularly its technical flaws and voting mechanisms,
        apart from the attacks that can be carried out against its code (which eventually came to
        pass). So despite all the potential that DAOs bring as far as revolutionizing the way
        organizations conduct their business, the bullishness must be tempered with a sobering dose
        of reality. You can harden your defenses all you want, but nothing can be 100% secure.
        <br />
        <br />
        <div className={styles.subTitle}>
          7 DAO Security Issues Arising from Technical and Voting Mechanisms
        </div>
        <br />
        Sirer didn't lack in warning about The DAO's vulnerabilities. Together with his colleagues,
        he advised a potential recursive call vulnerability that would allow a hacker to move funds
        into a child DAO that can be broken off from the original DAO.
        <br />
        <br />
        Sirer presented seven flaws of The DAO and its voting mechanisms which could lead to
        investors losing capital as follows:
        <br />
        <br />
        Affirmative Biases and Disincentivizing to Vote No. Voting in the DAO was found to have
        demonstrated positive biases on "yes" votes, particularly funding proposals due to the
        outcome of such votes being visible from the get-go. In contrast, negative sentiments were
        suppressed throughout the voting process.
        <br />
        Stalking Attacks. Supposing an investor decides to exit The DAO by creating a new DAO
        contract, potential "stalkers" can allocate 53% of the funds into the new contract, which
        would block investors from withdrawing funds.
      </div>
      <div className={styles.text2}>
        <ul>
          <li>
            <span className={styles.subTitle}>Ambush Attacks.</span> Ambush attacks refer to a
            scenario where a "whale" might be able to influence outcomes of proposal votes by
            sending in a massive number of "yes" votes at the latest possible moment, leaving no
            time for other token holders to organize and inhibit themselves from participating. {' '}
          </li>
          <li>
            <span className={styles.subTitle}>Token Raids.</span> Token raids involve large
            investors manipulating token prices by fudding among investors or adding selling
            pressure on the tokens, which would lower costs of tokens so that they can buy a more
            significant piece of the organization. 
          </li>
          <li>
            <span className={styles.subTitle}>extraBalance Attacks.</span> This is the opposite of
            the latter, where a whale could fud existing token holders into leaving The DAO,
            therefore driving up token value and increasing extraBalance. 
          </li>
          <li>
            <span className={styles.subTitle}>Split Majority Attacks.</span> Split majority attacks
            raise doubt on the ability of curators to determine whether a voting block sized 53% and
            above proposes to award 100% to its benefit. Curators are expected to do the task of
            tracking beneficiary identities, which may be a fool's task when the proposal in
            question is broken up into multiple sub-proposals. 
          </li>
          <li>
            <span className={styles.subTitle}>Concurrent Tie-down Attacks.</span> Concurrent
            tie-down attacks are a scenario where a voter's shares can be stuck in a proposal whose
            voting period lasts longer, followed by a proposal with a much shorter period. Such
            cases prevent voters voting on a proposal from splitting until the end of its voting
            period, tying their vote up while others pull a fast one.{' '}
          </li>
        </ul>
        Ultimately, however, the fallout from The DAO will likely bring in a new era of nuanced
        industry development focused on sustainability and stable growth. Eventually, Sirer predicts
        that crypto will move towards competency and innovative technologies that can do what has
        never been done before and less on parading poorly disguised financial instruments.
        <br />
        <br />
        <div className={styles.subTitle}>Of Sybil and Consensus Mechanisms</div>
        <br />
        DAOs are susceptible to Sybil attacks. Sybil attacks are a kind of security threat on an
        online system where individual attempts to take over a network by creating multiple
        accounts, nodes, or computers. They can be as simple as one person creating multiple
        accounts on social media. In the crypto sphere, this can mean someone running various nodes
        on a blockchain network.
        <br />
        <br />
        Sybil attacks pose the risk that attackers could vote to expel the honest nodes on a network
        by creating enough fake identities. They can then refuse to receive or transmit blocks,
        effectively blocking users from using a network. In larger-scale Sybil attacks, where
        attackers manage to control the majority of the network computing power (or hash rate), they
        can execute a 51% attack. This means they can change the ordering of transactions and
        prevent transactions from being confirmed. They may even reverse transactions they made
        while they are in control, which may lead to double-spending.
        <br />
        <br />
        Blockchains mitigate the risk of Sybil attacks and other blockchain security vulnerabilities
        using consensus mechanisms. These fault-tolerant mechanisms are used to achieve agreements
        on data value or single states of the network among distributed processes or systems with
        multiple agents.
      </div>
    </div>
  );
};

export default Page1920;
