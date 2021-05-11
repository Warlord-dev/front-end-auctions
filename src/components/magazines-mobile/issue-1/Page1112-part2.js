import React from 'react'
import styles from './page1112-part2.module.scss'

const Page1112 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pageBack2}></div>
      <h4>
        The <br />Private<br /> Key<br /> Rugpull
      </h4>
      <h5>
        Too many of us onboarding into crypto find custody one of the biggest challenges. 
        Where do you actually go to store your crypto assets? For most newbies it’s not a decentralised web3 wallet like Metamask, 
        which can be incredibly daunting to set up and maintain, but rather, it’s a hybrid web2 centralised service provider, like Coinbase. 
        <br />
        The messaging and marketing of these centralised entities convinces us that they are providing the scaffolding and rails for a more secure, 
        comfortable and familiar experience. But, once you are in the door and have put your money into the system that is where the Rugpull happens. 
        Suddenly, you find customer support tickets unanswered for days, weeks and months, and, 
        if you make a mistake because of faulty UX, it’s completely on you —if your complaints are even acknowledged. 
      </h5>
      <div className={styles.textContainer}>
      <p>
        Not to say that Coinbase, or any other non-scammy overly regulated centralised crypto exchange and custody provider, hasn’t immensely helped in moving the entire industry forward and bringing the world’s attention to just how revolutionary web3 and digital money is— but, for each case, there are huge caveats in the way that they currently operate that really should be actively addressed and moved forward towards resolution. 
        <br /><br />
        One of the biggest of these caveats all comes down to custody. For a lot of these centralised wallet providers your crypto isn’t actually yours. It operates simliar to a bank where your money isn’t really sitting in your account, it’s rather just a ledger on a screen, appearing in your possession through the UI, but actually, it’s being most likely leveraged up and rehypothecated for growing someone else’s balance sheet. 
        <br /><br />
        If you don’t fully own your private keys (That 12-24 secret key phrase), then the crypto is not in your custody. Your experience and your money exist at the whims of non-existent customer support, opaque company policies, risk mitigating lawyers and faulty UI where dev teams have no stake to make sure to align with the urgency of your agency and ownership. They pretty much own you. 
        <br /><br />
        This might sound likey hyperbole, but, actually it’s painfully real. Imagine you own a substantial amount of a crypto asset and want to keep it somewhere reliable and secure— say, for example, your Coinbase wallet. 
      </p>
      <p>
        This is exactly what happened to a San Francisco based tech enthusiast back in 2018. They had purchased with their friend a large amount of HOLO tokens and like most of us are led to believe that any token can be sent to be stored in our wallets. Even if Coinbase, in this case, doesn’t support trading of the asset. 
        <br /><br />
        However, to their shock, sending HOLO token to their Coinbase wallet has resulted in an on-going 3 year battle with Coinbase to recover over $800,000 of a token that they rightfully  own and that keeps gaining value. Because Coinbase does not officialy support HOLO they refuse to transfer the funds still sitting in the same wallet, but not accessible for withdrawal through the UI. It’s been years of customer support tickets, direct conversations with members from the core team and a pervasive attitude of telling them that they don’t actually own those crypto assets anymore. Engineers have looked into it and it’s not a Smart Contract or technical obstacle, rather a failure of will. 
        <br /><br />
        Even Binance has a similiar policy, where if you send the wrong type of crypto asset to a Binance deposit address you can only recover the funds if you are buddies with the CEO, pay at least a $10,000 fine and sign an NDA swearing to not disclose to anyone that Binance helped you resecure your own assets. 
        <br /><br />
        So, in closing, despite what might seem as sufficient on-ramps into crypto and web3, we are still really far from what is so often talked about as a “fully permissionless peer to peer economy”.  Becareful out there.  
      </p>
      </div>

    </div>
  )
}

export default Page1112