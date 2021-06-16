import React from 'react'
import styles from './page18.module.scss'

const Page18 = () => {
  return (
    <div className={styles.wrapper}>
     <img src="./magazine/2/images/19_20/mobile/image1.png" className={styles.image1} />
     <img src="./magazine/2/images/19_20/mobile/image2.png" className={styles.image2} />
     <img src="./magazine/2/images/19_20/mobile/image2.png" className={styles.image3} />
     <img src="./magazine/2/images/19_20/mobile/image1.png" className={styles.image4} />
     <div className={styles.image5}>     
     </div>
     <p className={styles.text1 }>On June 17th, 2016, The DAO was hacked, and over US$55 million (or about 3.6 million Ether) was stolen using the first-ever documented reentrancy attack. The exploit almost brought down the second-largest blockchain behind Bitcoin in 2016, after pulling in an eye-watering US$150 million in crowdfunding. That's a shitload of opportunities. This pretty much drew a bulls-eye on The DAO for unscrupulous actors to try to exploit, considering the amounts of money going into the project. The hack ultimately led to the hard fork that created Ethereum Classic (the original blockchain) and Ethereum as we know it today. The crisis involving The DAO brought flashbacks of the 2008 financial crisis that saw the government bailing out banks and financial institutions left and right with taxpayer money. Nothing is too big to fail.
<br/><br/>
The bug was that an unscrupulous actor could recursively call that action to get that Ether out of the contract and do it again and again until you drain the contract from all its money.
<br/><br/>
This ultimately led to the Ethereum Foundation issuing a critical update to roll the hack back, resulting in the hard fork into Ethereum Classic and Ethereum.
<br/><br/>
Cornell University professor and AVA Labs founder and CEO Emin Gün Sirer was then an outspoken critic of the DAO project, particularly its technical flaws and voting mechanisms, apart from the attacks that can be carried out against its code (which eventually came to pass). So despite all the potential that DAOs bring as far as revolutionizing the way organizations conduct their business, the bullishness must be tempered with a sobering dose of reality. You can harden your defenses all you want, but nothing can be 100% secure. 
<br/><br/>
<span className={styles.text2}>7 DAO Security Issues Arising from Technical and Voting Mechanisms</span><br/>
Sirer didn't lack in warning about The DAO's vulnerabilities. Together with his colleagues, he advised a potential recursive call vulnerability that would allow a hacker to move funds into a child DAO that can be broken off from the original DAO.
<br/><br/>
Sirer presented seven flaws of The DAO and its voting mechanisms which could lead to investors losing capital as follows:
<br/><br/>
Affirmative Biases and Disincentivizing to Vote No. Voting in the DAO was found to have demonstrated positive biases on "yes" votes, particularly funding proposals due to the outcome of such votes being visible from the get-go. In contrast, negative sentiments were suppressed throughout the voting process.
Stalking Attacks. Supposing an investor decides to exit The DAO by creating a new DAO contract, potential "stalkers" can allocate 53% of the funds into the new contract, which would block investors from withdrawing funds.</p>
    </div>
  )
}

export default Page18