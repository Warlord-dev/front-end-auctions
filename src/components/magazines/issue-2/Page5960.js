import React, { useRef, useState } from 'react';
import styles from './page5960.module.scss';
import Link from 'next/link';

const Page5960 = () => {
  const audioRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)

  const startAudio = () => {
    audioRef.current.play()
    setIsPlaying(true)
  };

  const pauseAudio = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  };

  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/59_60/image1.png" className={styles.image1} />
      <Link href="https://dxdao.eth.link/"><a>
        <img src="./magazine/2/images/59_60/image2.png" className={styles.image2} />
        </a>
       </Link>
      <img src="./magazine/2/images/59_60/image3.gif" className={styles.image3} />
      <img src="./magazine/2/images/59_60/image4.png" className={styles.image4} />
      <button 
        className={styles.image5}
        onClick={() => {
          isPlaying ? pauseAudio() : startAudio()
        }}
      >
        {
          <img src={`./magazine/2/images/59_60/${isPlaying ? 'image19' : 'image5'}.png`}/>
        }
      </button>
      <img src="./magazine/2/images/59_60/image6.png" className={styles.image6} />
      <img src="./magazine/2/images/59_60/image7.png" className={styles.image7} />
      <img src="./magazine/2/images/59_60/image8.png" className={styles.image8} />
      <img src="./magazine/2/images/59_60/image9.png" className={styles.image9} />
      <Link href="https://swapr.eth.link/#/swap"><a>
        <img src="./magazine/2/images/59_60/image10.png" className={styles.image10} />
        </a>
       </Link>
       <Link href="https://dxdao.eth.link/#/"><a>
        <img src="./magazine/2/images/59_60/image10.png" className={styles.image11} />
        </a>
       </Link>
       <Link href="https://omen.eth.link/#/liquidity"><a>
        <img src="./magazine/2/images/59_60/image10.png" className={styles.image12} />
        </a>
       </Link>
       <Link href="https://discord.gg/4QXEJQkvHH"><a>
        <img src="./magazine/2/images/59_60/image11.png" className={styles.image13} />
        </a>
       </Link>
       <Link href="https://discord.gg/4QXEJQkvHH"><a>
        <img src="./magazine/2/images/59_60/image11.png" className={styles.image14} />
        </a>
       </Link>
       <Link href="https://discord.gg/4QXEJQkvHH"><a>
        <img src="./magazine/2/images/59_60/image11.png" className={styles.image15} />
        </a>
       </Link>
       <Link href="https://twitter.com/SwaprEth"><a>
        <img src="./magazine/2/images/59_60/image12.png" className={styles.image16} />
        </a>
       </Link>
       <Link href="https://twitter.com/DXdao_"><a>
        <img src="./magazine/2/images/59_60/image12.png" className={styles.image17} />
        </a>
       </Link>
       <Link href="https://twitter.com/Omen_eth"><a>
        <img src="./magazine/2/images/59_60/image12.png" className={styles.image18} />
        </a>
       </Link>
       <Link href="https://dxdao.medium.com/"><a>
        <img src="./magazine/2/images/59_60/image13.png" className={styles.image19} />
        </a>
       </Link>
       <Link href="hhttps://daotalk.org/c/dx-dao/15"><a>
        <img src="./magazine/2/images/59_60/image14.png" className={styles.image20} />
        </a>
       </Link>
       <img src="./magazine/2/images/59_60/image15.png" className={styles.image21} />
       <Link href="https://daostack.io/"><a>
        <img src="./magazine/2/images/59_60/image16.png" className={styles.image22} />
        </a>
       </Link>
       <Link href="https://snapshot.org/#/"><a>
       <img src="./magazine/2/images/59_60/image18.png" className={styles.image24} />
       </a>
       </Link>
       <Link href="https://gnosis.io/"><a>
       <img src="./magazine/2/images/59_60/image22.png" className={styles.image25} />
       </a>
       </Link>
       <Link href="https://discord.com/"><a>
       <img src="./magazine/2/images/59_60/image23.png" className={styles.image26} />
       </a>
       </Link>
       <Link href="https://www.discourse.org/"><a>
       <img src="./magazine/2/images/59_60/image24.png" className={styles.image27} />
       </a>
       </Link>
      <p className={styles.text1}>DAO’ing Out With DXDAO Keenan + Sky</p>
      <p className={styles.text2}>A Real DAO. Swarm Knowledge. Open for Everyone. Information Symmetry. </p>
      <p className={styles.text3}>SOVEREIGNTY.<br/> ON-CHAIN. </p>
      <p className={styles.text4}>DECENTRALISATION MAXIMALISM.</p>
      <p className={styles.text5}>dxDAO is an ecosystem project developing across so many verticals that it is hard to really encompass it all in just a few words. However, with that said, some of the most important parts of dxDAO, and what truly makes it a real DAO is the fact that it isn’t a pay to vote/pay to participate ecosystem. This is bigger than it seems. With many DAOs (on-chain or not) you can go and purchase the token from the market, and, if you are a whale with enough buying power, you can purchase large enough amounts to sway the entire ecosystem’s vote or governance. This is not the case for dxDAO. You can ONLY get reputation, which is the voting power of dxDAO, by earning it. By actually contributing to the DAO in a way that supports, enhacces and furthers the collective mission of the DAO. . </p>
      <p className={styles.text6}>WANT TO START DAO’ING OUT WITH DXDAO AND GETTING REPUTATION?</p>
      <p className={styles.text7}>Considering Launching A DAO?</p>
      <p className={styles.text8}>It’s not a trivial endeavor— especailly if you’re going to do it right; establish a real DAO. The whole process is quite encumbersome. But... it doesn’t have to be set up completely from scratch, there are some great ready to use interfaces, tools, gadgets out there that allow you to set up different parts of your DAO structure and evolve it overtime. </p>
      <p className={styles.text9}>An open source project that allows you to easily set up and interface with a DAO through their Alchemy platform. It’s unique for the fact that you don’t have to launch your own ERC-20, but rather can use DAOstack’s REP token and distribute this to members for on-chain voting. A user’s Reputation score represents their decision-making power. Each DAO has a separate ledger of Reputation scores, and so Reputation cannot be directly transferred from peer to peer, ensuring that members of the DAO earn their voting power rather than just accumulating it for the sake of it, where it is distributed through the passing of proposals inside the DAO and is non-transferrable. </p>
      <p className={styles.text11}>Snapshot is another DAO infrastructure, that allows anyone to launch what is called “spaces” with off-chain gasless governance. It allows members of a project or DAO i.e. holding the governance token, to sign messages with their wallet addresses when voting on put forth proposals. Proposals can be made with select start and stop times, as well as a block height which is used to gather on-chain data for the front end.</p>
      <p className={styles.text12}>snapshot</p>
      <p className={styles.text13}>Unfortunately a wide range of infrastructure for DAOs still isn’t really there yet. Well, it’s not there is a complete enough off-the-shelf version so that anyone can interact with it; DAOStack and Snapshot each have their caveats. Many groups use a combination of Gnosis Vault for treasury management, and Discord and Discourse for community management, proposal evaluation and social coordination. </p>
      <p className={styles.text14}>Gnosis Vault + Discord + Discourse</p>
      <audio ref={audioRef} loop>
        <source src="./magazine/2/images/59_60/1.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Page5960;
