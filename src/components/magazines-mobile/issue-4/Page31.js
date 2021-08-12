import React from 'react'
import styles from './page31.module.scss'

const Page31 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.background} src='./magazine/4/images/3536_background1_mobile.png' />
      <img className={styles.image1} src='./magazine/4/images/3536_diamond.png' />
      <img className={styles.image2} src='./magazine/4/images/3536_diamond.png' />
      <img className={styles.image3} src='./magazine/4/images/3536_diamond.png' />
      <img className={styles.image4} src='./magazine/4/images/3536_diamond.png' />
      <img className={styles.image5} src='./magazine/4/images/3536_image1.png' />

      <div className={styles.text1}>
        DEFI GEMS        
      </div>

      <div className={styles.text2}>
        <span>Alchemix<img src='./magazine/4/images/3536_twitter.png'/></span><br />
        Alchemix is no exception amongst the mix of DeFi protocols pushing innovation to the bleeding edge. Their product, in short, can be described most simply as self-repaying loans. To put this more accurately, their token $ALCX gives an advance on future yields; whereby funds are deposited into Yearn vaults for generating yield and then a synthetic stable coin alUSD is minted against this and given to users in exchange for their deposits, representing the advance on the future yield. For example, a user could deposit 1000 $DAI as collateral into an Alchemix vault and receive 500 $alUSD in exchange, and as the 1000 deposited $DAI generates yield, this yield automatically repays the 500 $alUSD debt. Hence, the “debt that repays itself” part. As yield on the deposited funds progressively repays the $alUSD debt, the underlying $DAI gets progressively unlocked. Alternatively, at any time the user can repay the outstanding debt with either $alUSD or with $DAI and unlock all remaining collateral. Yet, the best part is that there is no risk of liquidation for the user throughout this process as they are depositing a stablecoin as their collateral and receiving a stablecoin back for their loan. 
        <br /><br />
        <span>ABRACADABRA<img src='./magazine/4/images/3536_twitter.png'/></span><br />
        Abracadabra allows its users to take loans using their existing interest bearing tokens (ibTKNs) as collateral, to either leverage up their yield, or invest in other assets while their collateral keeps growing. Ultimately, it unlocks an additional layer of utility and composability for tokens that would anyway just be sitting in a user’s wallet idle. For example: a user may have 10k USDT deposited in a yearn v2 vault earning 10% per year, represented by yvUSDT tokens. They can now deposit their yvUSDT on Abracadabra and take out a loan for up to 90% of that amount, or $9k, at an 0.8% interest rate. The loan is given out in Abracadabra’s collateralised USD pegged stable coin $MIM. The user can do as they please with their $MIM, including that of continuing to leverage up their position, and all without a significant liquidation threat, given that the collateral is a stable-coin based ibTKN. 
        <br /><br />
        <span>antimatter<img src='./magazine/4/images/3536_twitter.png'/></span><br />
        Antimatter is a DeFi options protocol using a polarised token approach where puts and calls are created through freely transferable and tradeable tokens i.e. tokenised options. It works whereby each option product always consists of a positive (long put/call option) and a negative (short put/call option) element, with the sum of the two always equal to a set value C. If the sum of both tokens is ever different to that of C, then an arbitrage opportunity is created and the market corrects itself. All this opens the doors to multiple hedging, arbitrage and leveraging strategies, and yet the best part is that all the complexity can be abstracted away, as the action is centred around only the buying and selling of the two simple positive and negative element tokens. Their token $MATTER is used for paying fees for the creation of new option markets, earning a share of the funding fees paid by token holders, platform Governance, and with additional utility to be added over time as the platform grows and scales. Token holders will be able to earn additional $MATTER, by staking their tokens, through liquidity mining LP tokens, and by earning rewards for governance participation, options trading, creation and redemption. 
      </div>

      <div className={styles.text3}>
        - rafi_0X
      </div>

      <div className={styles.text4}>
        diamond ha
      </div>
    </div>
  )
}

export default Page31