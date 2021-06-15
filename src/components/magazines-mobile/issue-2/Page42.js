import React from 'react';
import styles from './page42.module.scss';

const Page42 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/45_46_mobile.jpg" className={styles.back} />
      <div className={styles.text1}>
        This ensures absolute transparency and complete shareholder control, as every member in a
        DAO can vote on how funds are spent. No one entity can single-handedly make and enforce
        decisions in a DAO, and no legal contracts are needed between stakeholders either —
        everything is codified transparently.
        <br />
        <br />
        And therein lies the rub: essentially, DAOs have created an environment where the success
        and influence of an organization aren't tied to a select hierarchy; instead, they are
        determined by the value a token holder contributes to the organization itself.
        <br />
        <br />
        DAOs may revolutionize governance with the following aspects:
        <ul>
          <li>
            Decentralized governance. DAOs allow each investor with a fair and equal opportunity to
            play a role in driving the organization's success and a decisive voice in determining
            how the organization is run. Owing to its non-hierarchical structure, each suggestion
            can be considered, regardless of where the idea came from.
          </li>
          <li>
            Improved efficiency. Dealing with bureaucracy is a certainty for traditional
            organizations, leading to breakdowns within the process and slowing it down altogether.
            Imagine how many hoops you need to jump through to get a reimbursement. DAOs
            significantly reduce transaction processing times; on the other hand, as the voting
            process requires a particular amount of tokens for every stakeholder, they are
            incentivized not to waste hash rate and time on unproductive solutions.
          </li>
          <li>
            Unmatched transparency. Every single transaction in a DAO is immediately available on
            the public ledger for the entire world to see. Moreover, consensus mechanisms enable
            optimum ensure so that each stakeholder is directly involved in how the blockchain
            develops.
          </li>
        </ul>
        <br />
        On the other hand, DAO governance also poses challenges that need to be overcome if they are
        to take off:
        <br />
        <br />
        <ul>
          <li>
            Security vulnerabilities. While the immutability of smart contracts offers an undoubted
            host of pros, they also pose certain disadvantages because of how new the technology is.
            As with anything new, security risks are a concern. Once the smart contract governing
            the DAO is
          </li>
        </ul>
      </div>

      <div className={styles.text2}>
        <div style={{ marginLeft: '1rem' }}>
          codified, the system will begin to run, and it cannot be unilaterally changed or reversed.
          And, as the code is visible to everyone, any known security issues can be exploited. We
          all remember how the first DAO, aptly called THE DAO, ended due to a spanner in the works
          that led to the hard fork between Ethereum and Ethereum Classic.
        </div>
        <ul>
          <li>
            Uncertain legal status. Certain startups with DAO organizational and business structures
            need a legal framework to operate lawfully in specific jurisdictions while interacting
            with the legacy financial system and intellectual property. DAO members may otherwise be
            held legally responsible for not doing so.
          </li>
          <li>
            Levels of decision-making power. As decision-making is democratic in DAOs, technical
            knowledge may vary. Not all voters will have adequate skills and competencies, nor will
            everybody know about the issues they vote on. DAOs use a plurality mechanism to
            determine votes. Therefore the results may not always be optimal and are more likely to
            be influenced by majority voting rights.
          </li>
        </ul>
        <br />
        <br />
        <b>Decentralized Systems and Governance</b>
        <br />
        As the name implies, decentralized systems do not have a leadership or intelligence system
        based on a traditional top-down corporate hierarchy. But DAOs work similarly to
        nation-states or corporations in essence. The very nature of how information flows within a
        decentralized system — optimized through dynamic feedback — makes it easy for them to evolve
        and grow remarkably fast.
        <br />
        <br />
        Moreover, power is concentrated in hierarchies out of necessity in organizations. In
        contrast, the distribution of power in DAOs theoretically grants each member autonomy,
        allowing for greater flexibility and opportunities for efficiencies to emerge due to this
        decentralization of power. Therefore, such a dynamic organization requires governance
        structures that motivate members to productively collaborate by rewarding development with
        fair compensation.
        <br />
        <br />
        In a nutshell, DAOs use economic mechanisms to align the interests of the organization with
        the interests of its members using game theory rather than conventional stock options and
        corporate incentivization schemes.
        <br />
        <br />
        <b>The Wuestion of Compensation</b>
        <br />
        DAOs are usually operated by a community of stakeholders incentivized through a form of
        token mechanism.
        <br />
        <br />
        One of the core forms of DAO compensation is the appreciation of the value of the tokens
        members hold. Furthermore, DAO members can also earn a separate income by earning more
        tokens by supporting the organization's objectives.
        <br />
        <br />
        Compensation in DAOs is based on the evergreen theory of supply and demand, freeing DAO
        members from the inefficiencies and pitfalls of corporate compensation as we know it. As a
        DAO’s token supply is fully transparent and baked into the code, so does the value of its
        tokens increase with demand. Moreover, because the DAO code often comes with the total token
        supply baked into it, dilution is practically impossible.
      </div>
    </div>
  );
};

export default Page42;
