import React, { useRef, useState } from 'react'
import Link from 'next/link'
import styles from './page3536.module.scss'

const Page3536 = () => {
  const audioRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)

  const startAudio = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  const pauseAudio = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  return (
    <div className={styles.wrapper}>
      <img src='./magazine/5/images/3536_image2.png' className={styles.image2} />
      <img src='./magazine/5/images/3536_image1.png' className={styles.image1} />
      <div className={styles.rect1}></div>
      <img src='./magazine/5/images/3536_image3.png' className={styles.circle1} />
      <img src='./magazine/5/images/3536_image3.png' className={styles.circle2} />
      <img src='./magazine/5/images/3536_image3.png' className={styles.circle3} />
      <img src='./magazine/5/images/3536_image3.png' className={styles.circle4} />
      <img src='./magazine/5/images/3536_image3.png' className={styles.circle5} />
      <img src='./magazine/5/images/3536_image3.png' className={styles.circle6} />
      <img src='./magazine/5/images/3536_image3.png' className={styles.circle7} />
      <img src='./magazine/5/images/3536_image3.png' className={styles.circle8} />
      <img src='./magazine/5/images/3536_image3.png' className={styles.circle9} />
      <img src='./magazine/5/images/3536_image3.png' className={styles.circle10} />

      <img src='./magazine/5/images/3536_image6.png' className={styles.image6} />
      <img src='./magazine/5/images/3536_image4.png' className={styles.image4} />

      <div className={styles.circle11}></div>

      <div className={styles.text1}>
        Eva Beylin
      </div>
      <div className={styles.text2}>
        Eva Beylin
      </div>
      <div className={styles.text3}>
        Eva Beylin
      </div>
      <div className={styles.text4}>
        Eva Beylin
      </div>
      <div className={styles.text5}>
        Eva Beylin
      </div>
      <div className={styles.text6}>
        Eva Beylin
      </div>
      <div className={styles.text7}>
        Director of The Graph Foundation
      </div>

      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>
      <div className={styles.rect4}></div>
      <div className={styles.rect5}></div>
      <div className={styles.rect6}></div>
      <div className={styles.rect7}></div>

      <Link href='https://twitter.com/austingriffith'>
        <a target='_blank'>
          <div className={styles.text8}>
            Austin Griffiths
          </div>
        </a>
      </Link>
      <div className={styles.text9}>
        Burner Wallets & Web3 Identity
      </div>
      <Link href='https://burnerwallet.co/'>
        <a target='_blank'>
          <div className={styles.text10}>
            Find Out More About Burner Wallets Here
          </div>
        </a>
      </Link>
      <div className={styles.text11}>
        <span>
          From an implementation layer, where is web3 authentication at right now? How far along is it for being easily implemented in various DAPPs?
        </span>
        <br /><br />
        Signed messages are still a really powerful mechanic and Dapps are using them for a lot of authentication. 
        <br /><br />
        We have a few “sign-in-with-web3” starter kits in 🏗 scaffold-eth and I would recommend checking them out: 
        <ul>
          <li>
            https://github.com/austintgriffith/scaffold-eth/tree/sign-in-with-web3
          </li>
          <li>
            https://github.com/austintgriffith/scaffold-eth/tree/serverless-auth
          </li>
        </ul>
        <br />
        Also, Wallet Connect is becoming a new standard of how folks interface with Dapps. We are building a gnosis safe starter kit that you can log in to as a burner, metamask, or wallet connect. Then, the dapp itself can log into other dapps like uniswap and propose a trade.
      </div>
      <div className={styles.text12}>
        <span>
          You made it easy for people to add burner wallets to their web3 front ends. What are some best use cases for people implementing burner wallets? 
        </span>
        <br /><br />
        I think <Link href='http://Nifty.ink'><a target='_blank' className={styles.link}>http://Nifty.ink</a></Link> is one of the best examples of smooth artist onboarding; an artist using a tablet and traditional web browser can make art, sign it with a private key, and <Link href='http://Nifty.ink'><a target='_blank' className={styles.link}>http://Nifty.ink</a></Link> pays the gas using meta transactions. The artist can make are and sell it without every downloading a wallet or saving a seed phrase. (But as soon as they have value in a burner wallet they need to upgrade to something safer!!)
        <br /><br />
        DARK FOREST on xDAI is another really great example. 
      </div>
      <div className={styles.text13}>
        <span>
          Can you describe more what burner wallets are? How did you come up with the concept? The focus is really more on easy onboarding into web3, but have you thought about how these could impact on-chain identity?
        </span>
        <br /><br />
        A Burner wallet is like a session wallet, it lives in the browser without having to back up a 12 word seed phrase or handle a private key. This is great for small amounts of value and initial experiences in decentralized apps. 
        <br /><br />
        Identity in web3 will be a bottom up narrative not just of one account, but of an aggregation of many accounts. A burner wallet is used for a session and then can be destroyed, but right before you do that you could mark it as part of a larger identity. Something like a “delegated identity”. (This is my main wallet austingriffith.eth, but I just funded and deployed this contract from a burner which has signed an extra message proving that it is owned by austingriffith.eth (or something like that)).

      </div>
      <div className={styles.text14}>
        <span>
          Are there any major hurdles that people using web3 authentication for the first time might encounter?
        </span>
        <br /><br />
        Of course. The private key. This is like asking if I am used to using the phone all day will I encounter an hurdles using an email address. 
        <br /><br />
        The private key means you control your own keys and with great power comes great responsibility. There is no password recovery here.
        <br /><br />
        Smart contract wallets and other solutions are helping this problem with social recovery, but it’s still a new paradigm that users have to get used to. 

      </div>
      <div className={styles.text15}>
        <span>
          Are there situations were it makes sense for identity to be attached to a wallet? Or multiple wallets?
        </span>
        <br /><br />
        Yes of course, I think your identity in web3 is very important and it will be a bottom-up aggregate narrative of the wallets you control.
      </div>
      <img src='./magazine/5/images/3536_image7.png' className={styles.image7} />

      <div
        className={styles.image5}
        onClick={() => {
          isPlaying ? pauseAudio() : startAudio()
        }}
      >
        <img src='./magazine/5/images/3536_image5.png' />
        <div className={styles.text16}>
         {!isPlaying ? 'LISTEN HERE' : 'PAUSE' }
        </div>
      </div>
      <audio ref={audioRef} loop>
        <source src='./magazine/5/sounds/3536_sound1.mp3' type='audio/mpeg' />
      </audio>

    </div>
  )
}

export default Page3536
