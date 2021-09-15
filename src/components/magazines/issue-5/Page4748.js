import React, { useRef, useState }  from 'react'
import styles from './page4748.module.scss'


const Page4748 = () => {
  const [play1, setPlay1] = useState(false)
  const [play2, setPlay2] = useState(false)
  const refAudio = useRef()
  const refAudio1 = useRef()
  const ref1 = useRef()
  const ref2 = useRef()

  return (
    <div className={styles.wrapper}>
      <img src='/magazine/5/images/4748_image1.png' className={styles.image1} />
      <img src='/magazine/5/images/4748_image2.png' className={styles.image2} />
      <img src='/magazine/5/images/4748_image3.png' className={styles.image3} />

      <div className={styles.text11}>
        cryptsie
      </div>
      <div className={styles.text12}>
        cryptsie
      </div>
      <div className={styles.text13}>
        cryptsie
      </div>
      <div className={styles.text14}>
        cryptsie
      </div>
      <div className={styles.text15}>
        cryptsie
      </div>
      <div className={styles.text16}>
        cryptsie
      </div>
      <div className={styles.text17}>
        cryptsie
      </div>
      <div className={styles.text18}>
        cryptsie
      </div>

      <div className={styles.text2}>
        My name is Anna, and I am from Crimea - this is a very beautiful region near the Black Sea, with majestic mountains, green valleys and dense forests. I’ve been interested in art since childhood, and when I grew up, there was no doubt about who I wanted to become - of course, a designer :)        
      </div>
      <div className={styles.text3}>
        I entered the art academy, the interior design department and studied there for 6 years. In the process of studying, I began to study 3D max- 3D programs at that time were new, and before our course everyone drew their interior projects by hand.  While I was starting to study 3D max, there was very little information and I had to learn everything bit by bit. I liked working with 3D, it made it possible to visualize any designs and make really cool projects.
      </div>
      <div className={styles.text4}>
        <br /><br />        
        After graduation, I worked for several years in my specialty, creating interiors in a design studio. I liked my work, but there was one thing that I
        definitely didn’t like - communicating with customers and making millions of their design edits. That is why I began to gradually explore options where  I could apply my knowledge freely. Stocks helped me with this. And I soon devoted all my time to freelancing.
        <br /><br />
        I have always enjoyed learning something new, developing and broadening my horizons. I soon learned about Marvelous Designer, thanks to this program I started to create clothing.
        So I plunged into the world of digital fashion, in which I am to this day and enjoy creating new designs.
        <br /><br />
        Nowadays, technologies are developing very quickly and it is important to move with them in the same direction and be open to everything. Digital fashion and NFTs will only evolve in the future, and I think there will be a place for all creative people. Therefore, I believe in the exciting future of DIGITALAX and I am glad to be a part of it.
      </div>

      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>

      <video autoPlay muted loop className={styles.video1} ref={ref1}>
        <source src='./magazine/5/videos/4748_video1.mp4' type='video/mp4' />
      </video>

      <button onClick={() => {
          if (!play1) {
            ref1.current.muted = false
          } else {
            ref1.current.muted = true
          }
          setPlay1(!play1)
        }} className={styles.playbutton1}><img src={`./magazine/5/images/4748_${play1 ? 'pausebutton' : 'playbutton'}.png`} /></button>

      <video autoPlay muted loop className={styles.video2} ref={ref2}>
        <source src='./magazine/5/videos/4748_video2.mp4' type='video/mp4' />
      </video>
      <button onClick={() => {
          if (!play2) {
            ref2.current.muted = false
          } else {
            ref2.current.muted = true
          }
          setPlay2(!play2)
        }} className={styles.playbutton2}><img src={`./magazine/5/images/4748_${play2 ? 'pausebutton' : 'playbutton'}.png`} /></button>

      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      <div className={styles.circle4}></div>
      <div className={styles.circle5}></div>
      <div className={styles.circle6}></div>
      <div className={styles.circle7}></div>
      <div className={styles.circle8}></div>
      <div className={styles.circle9}></div>
      <div className={styles.circle10}></div>
      <div className={styles.circle11}></div>
      <div className={styles.circle12}></div>
      <div className={styles.circle13}></div>
      <div className={styles.circle14}></div>
      <div className={styles.circle15}></div>
      <div className={styles.circle16}></div>
      <div className={styles.circle17}></div>
      <div className={styles.circle18}></div>
      <div className={styles.circle19}></div>
      <div className={styles.circle20}></div>
      <div className={styles.circle21}></div>

      <img src='/magazine/5/images/4748_image4.png' className={styles.image4} />
      <img src='/magazine/5/images/4748_image5.png' className={styles.image5} />
      <img src='/magazine/5/images/4748_image6.png' className={styles.image6} />
      <img src='/magazine/5/images/4748_image7.png' className={styles.image7} />
      <img src='/magazine/5/images/4748_image8.png' className={styles.image8} />

      <div className={styles.text5}>
        This Outfit<br /> Does Not Exist        
      </div>
      <div className={styles.text6}>
        The fashion industry is responsible for 10% of global carbon emissions, 92 tonnes of textile waste and 20% of global wastewater. 
        <br /><br />
        Let that sink in for a second. Give it another few and fast fashion retailer Shein will have dropped a new style; one of the 1,000 it produces daily, with the help of workers who aren’t allowed to unionize and paid far below the minimum wage (if they’re lucky enough to get paid at all...)
        <br /><br />
        If you do go ahead and buy the Shein style (assuming it fits - which with a 30-40% return rate is relatively unlikely) it will be flown to your house from China, you’ll probably wear it once or twice, and then it will be left to rot in your wardrobe. As most garments are worn a total of 7 times before being discarded, it’s likely that a top made of low quality material, and bought for less than the price of a sandwich, won’t make it to the third wear. 
        <br /><br />
        Why am I telling you this? Well fashion is the art form I love, but it's one that has become a scourge to people, profit and planet under its current operational model. 
        <br /><br />
        What’s more, for the past 50 years there’s been little to no incentive to change. Whilst being ‘obsessed with the new’, or in the words of Oscar Wilde ‘a form of ugliness so profound we have to alter it every 6 months’ fashion’s reliance on the labours of craftsmanship, disproportionate onus on history, and the fact that the industry is in many ways an oligopoly (20 brands capture &gt;100% of the industries economic profit) means that not only has it historically been adverse to sustainability, but to innovation as well. 
        <br /><br />
        Luckily for me, in August of 2020 I saw the guiding light; or at least the sinews where the guiding light was beginning to shine through, in the form of Digital Fashion. 
      </div>
      <div className={styles.text7}>
        For all the DIGITALAX Community members reading I assume you’re familiar with Digital Fashion, but just in case you’re not, I define Digital Fashion as ‘any article created in the digital realm’ and in my eyes it falls into 3 categories. 
        <br /><br />
        Physical - physical clothes produced by a digital backend
        <br /><br />
        Phy-gital - digital clothes worn by humans 
        <br /><br />
        Digital - digital fashion sold direct-to-avatar
        <br /><br />
        These can also be divided into IRL (in-real life), ORL (on real life) and URL (uniform resource locator… aka. on the web) - terms coins by the brilliant Lauren Kacher 
        <br /><br />
        In my newsletter on Digital Fashion and sustainability I went into great depth about why this is the medium to revolutionize the $3 trillion physical fashion industry (all whilst surpassing it in size over the next 5 years). But for the purpose of this article, I’m going to focus on Web3 and Digi-Fizzy and briefly outline the ways that by using these modes, Digital Fashion can come to revolutionize across the sustainability trifecta. Here goes...
        <br /><br />
        People: 
        <br /><br />
        Creators:<br />
        Paid the minimum wage? Not allowed to unionize? When you have a say in the workings of your marketplace, I don’t think so! The beauty of Web3 is decentralization. More explicitly the mechanisms decentralization provides for the many, not just an elite few, to exhibit agency. 
        <br /><br />
        Using blockchain based mechanisms such as DAO’s (decentralised autonomous organisations) those building on platforms and marketplaces can have a say around how these platforms and marketplaces are run. These can span not only the percentage a seller takes from selling or reselling a good, but with time as brands become decentralized, the speed to market that’s expected, and of course, what a fair wage entails. 
        <br /><br />
        Relating back to Digi-Fizzy, where the fizzy side has always been shrouded in secrecy (often due to a mismatch between espoused brand ‘ethics’ and behaviours in reality) the blockchain means that full transparency is inevitable. 
        <br /><br />
        What’s more, where your stakeholders and shareholders are a community with bottom-up, ethical, decentralised values (who as I mentioned before have the abilities to control the workings of the platform) and fully visibility into brand behaviours, ethical, empowering action is not just a nice-to-have. It’s a do-or-die. 
        <br /><br />
        Consumers:<br />
        Manifesting as an attraction to both the golden ratio, and to the ancient value of the flex, a need to breed means there will always be a status component attached to the way we look. What’s more, as human beings, expressing our individuality cosmetically is one of the most vital means of interacting with others; explaining who we are, demonstrating affiliations and bonding. 
        <br /><br />
        In the physical world the ability to do any of these things is limited by three factors 1) the body you’ve been biologically bestowed 2) the income you have to consume the things which will enhance aesthetic expression 3) the country you live in and how accepting it is of this genre of freedom of choice.
        <br /><br />
      </div>
      <div className={styles.text8}>
        Within the digital realm all these barriers are broken down. Whilst your avatar may have guardrails, shaped by the space it exists in, the way you look within those, often loose, restrictions is up to you. What’s more the garments you wear, in many cases are more affordable (microtransactions rather than real-world microtransactions), and the routes to consumption are varied from earnings linked to in-game achievements, to supporting a web3 based community and receiving tokens or airdrops. Finally, within in-game worlds the value of anonymity means you can wear your outfits in arenas which are welcoming, and for when they aren’t, people need not know it's you. This has colossal advantages for the way we feel about ourselves, how we can bond in game, and how we can self-express. No longer linked to the physical characteristics, wealth, opportunities, or place of birth we’ve inherited. 
        <br /><br />
        Profit: <br />
        Fractionalized ownership means that the part you’ve had to play in the creation of a Web3 asset can be duly rewarded. When it comes to garments, which in the physical world benefit the final seller 10-1000x more than they benefit those making the fabrics, or stitching them into a single piece, this proposition is doubly exciting. 
        <br /><br />
        Looking to Digitalax in particular, which I’ve shouted out many times in my writings because, to put it simply, fractional garment ownership is a phenomenal concept, the protocol allows ‘parent’ and ‘child’ NFTs to be created. The parent being the final garment and it’s children, the components which make it up - be those patterns, print, style etc.
        <br /><br />
        Not only does this move us towards an industry where contributors are FINALLY duly rewarded for their work, but in the Web3 world of user generated content, it incentivises more users to create leading to increasing quantities of wonderful and inventive garments. 
        <br /><br />
        Equally, by creating these clothes with programmable royalty fees, those who began as supporters of a garment creator's work, can benefit from their decision to collect - making a return from resale (as the price rockets!). This encourages not only consumption, but ‘investment’ in a space where financing has traditionally been scarce, to further and fund creators, in a deeply revolutionary way. 
      </div>
      <div className={styles.text9}>
        Planet: <br />
        As I previously mentioned, the fashion industry’s environmental creds leave much to be desired, in part this is due to speed to market needed to keep up (with the Kardashians), but equally because the industry relies on furthering the mindset that what you bought 3-6 months ago is no longer good enough, and equally tries to stimulate demand, through clever and creative advertising, rather than respond to it. 
      </div>
      <div className={styles.text10}>
        One of the most exciting opportunities for Web3 plays in this space is to redirect the human need for the re-formation of identity(/conspicuous consumption), from their human person to their avatar. We’re told we constantly need to evolve, and blocking that out is nearly impossible, but if your avatar only wears its skin 7 times during their lifetime, the effect on the planet is vastly superior to if its human counterpart does the same. 
      </div>
      <div className={styles.text21}>
        Integrating the fizzy element can also reap rewards. A digi-fizzy combo allows brands to produce on a more demand led model. By using either phygital fashion, or in-game worlds, to assess demand for a particular collection or piece, a brand can get closer to producing the amount that’s going to be sold. Going one step further, digi can serve as a pre-order for fizzy, helping the fashion industry move towards the Made-To-Order, demand responsive model, that lay’s at slow fashion’s core.
        <br /><br />
        Many of you may be reading this and thinking ‘yes that’s all well and good but what about the environmental impacts of blockchain’, and the wider IT industry and of course, you’d be right. Whist blockchain and tech are far better for the planet (+ profit, + people) than the physical fashion industry - generating 1.4% of global CO2 emissions, as opposed to a staggering 10%, if we don’t proceed with consciousness and caution there are risks that Digital Fashion could cause the environmental ills it's trying to remedy. 
        <br /><br />
        This being said, the web3 community is a community largely based on positive values. Be those equity, decentralization or remedying the world’s ills and we have seen constant evolutions and iterations to remediate the negative impacts of web3 fashion, even at such an early stage. I strongly believe this will continue, and again, with elements of correct consumer agency, the projects supported will be those that accelerate fashions growth, away from centuries of physical darkness, and towards the digital (fizical) light. 
      </div>
    </div>
  )
}

export default Page4748
