import React, { useRef, useState } from 'react'
import styles from './page1516.module.scss'

const Page1516 = () => {
  const [isPlaying1, setIsPlaying1] = useState(false)
  const refAudio = useRef()

    const startAudio1 = () => {
    refAudio.current.play()
    setIsPlaying1(true)
  }

  const pauseAudio1 = () => {
    refAudio.current.pause()
    setIsPlaying1(false)
  }

  return (
    <div className={styles.wrapper}>
      <img src='./magazine/6/images/1516_image1.jpg' className={styles.image1} />
      <img src='./magazine/6/images/1516_image2.jpg' className={styles.image2} />
      <div className={styles.text1}>
        Community with a Capital C
      </div>
      <div className={styles.text2}>
        NFTs
      </div>
      <div className={styles.text3}>
        YangGang
      </div>
      <a href='https://twitter.com/Chupwn' target='_blank'>
        <div className={styles.text4}>
          Eddie Briseño
        </div>
      </a>
      <a href='https://twitter.com/Chupwn' target='_blank'>
        <div className={styles.text5}>
          Eddie Briseño
        </div>
      </a>

      <audio ref={refAudio} loop>
        <source src='/magazine/5/sounds/4950_sound1.mp3' type='audio/mpeg' />
      </audio>
      <div
        className={styles.playButton1}
        onClick={() => {
          isPlaying1 ? pauseAudio1() : startAudio1()
        }}
      >
        <img className={styles.imageBack} src='/magazine/6/images/1516_button_back.png' />
        {
          !isPlaying1
          ? <img className={styles.imagePlay} src='/magazine/6/images/1516_playbutton.png' />
          : <img className={styles.imagePause} src='/magazine/6/images/1516_pausebutton.png' />
        }
      </div>


      <a href='https://twitter.com/Musashi14790940' target='_blank'>
        <img src='./magazine/6/images/1516_image3.png' className={styles.image3} />
      </a>
      <img src='./magazine/6/images/1516_image3.png' className={styles.image4} />
      <img src='./magazine/6/images/1516_image4.png' className={styles.image5} />
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>

      <div className={styles.text6}>
        So, I guess, since the Bitcoin, white paper came out, I've kind of been just following the politics and the economics of it. Until about a couple of years ago, I finally invested and then really started researching each of the networks and each of the tokens and realizing how, how much in in our infancy we still were, and then started joining some of the communities and really getting into the DAO aspect of it and loving the freedoms of being able to kind of control it from the protocol coding level up. And, and really, I've always been into the arts, music, crafting, building and agriculture. So like, I had a big motivation to, I don't know, kind of empower myself to help change the world more in that way. And blockchain kind of helped in so many different ways. And now here I am in the metaverse.
        <br /><br />
        Yeah, so it started off you know, I was researching a lot into defy decentralized finance and blockchain games and kind of the play to earn type of aspect, because I grew up a gamer. And I've, you know, been through the rounds and rounds and rounds of games that start off Free to Play give you the, you know, shiny golden object to chase for the carrot chase that, you know, you'll Own your your assets, but you really don't in the end, and it's really a pay to play type of game. And so, blockchain world was bringing in this, you know, digital ownership of the actual in game assets. And, and that, in itself was what was opening the door to, for me in my mind was okay, there's already full economic systems within these games, if they only allowed, you know, digital ownership, that'd be the end game right there. It would automatically become played at earn and that was where everyone kind of win. And the gottschee was really at the forefront of the fight phi of NF T's have their use case. And kind of like collaborating with other ecosystems to bring value to their assets, they're, they're creating, and they were old school gamers, so they have a beautiful visual aspect and a fun gaming mechanism built in. So gamified d phi was what was really piquing my interest the most at that time, and I felt like agachi was on on the bleeding edge of it. And so I became a tester I became one of their gottschee agents, and have been a tester ever since and then I became an ambassador. So I started running an onboarding group for apa gottschee and decided that within that group and a few other communities I'm a part of like, shenanigans, metagame meta cartel, the whole meta family and, and of a gottschee the gotcha gang. We decided to start our guild preparing for the rail launch coming soon. And start getting our coordination efforts down. starting our dow our Our goal is to not only onboard people Dr. gottschee, but also to build out a further ecosystem kind of on the backup or surrounding the APA gotcha ecosystem.
        <br /><br />
        Now well, basically, there's new ones forming all the time. And the only requirement to have a guild once the realm is live, is to have a parcel. And so those parcels sales haven't even started yet. They'll be starting very shortly. And if you have a parcel, then you can start a guild.
        <br /><br />
        Well, I think of a gottschee represents a lot of good examples in the web three space. So there Tao is a very good example of a nice, a well organized, and very active dow and a very efficient dow. So there's quite a few members of this dow it's one of the most active dows in the web three space, and yet able to execute some pretty large movements in a fairly quick amount of time. Their structure kind of has three tiers where a discussion starts, either on telegram, Twitter, or Discord. And that kind of gets moved into if people think that Yeah, we should probably make a decision surrounding this, this idea. And it gets turned into a signal Prop, and we kind of, you know, take a snapshot vote, and then discussion surrounding it on chain. And then if that comes to a conclusion, then it goes to an official galvao. And so they kind of have a structure of communication within our dow that kind of works its way to the top. They also have a good tokenomics structure, which I won't get terribly, terribly deep into. But I do recommend anyone who's into tokenomics, or maybe thinking about starting a token that they might take a look at the structure of the ghost token itself. has, you know, deep, a lot of Deep Thought has gone into the, the mechanism of building the ghost token itself. Everything from the curve to how the Dow interacts with it. And then, I guess, the community itself has just been very encouraging. As far as a lot of old school gaming spaces, it was kind of rough for a new to get in. Someone who hasn't been into the space at all kind of gets made fun of until they fit in. He was one of those communities that just wasn't that way. They, you know, we all recognize web three is new to all of us, even those who are building it. And so, you know, everyone has more freshly been that new person saying how do you set up a wallet what is a token, you know, what, what made a mask. So, I found that community beer to be very loving. Very supportive, just a great community to be a part of overall.
      </div>
      <div className={styles.text7}>
        So Wow, this is such a heavy question. And something that, you know, is sparking long term conversations throughout a lot of communities surrounding all of this. And I do have a lot of pretty strong thoughts on good practices and bad practices, I do believe that there are already some that are kind of coming into view is maybe, maybe not the best way to do things. Some that look like maybe there are better way better ways of doing things. So as far as token gating content, or token gating sections of a community, I think that I stand on both sides of the fence somewhere in the middle of a good integration of both, where you do token gate, certain aspects to encourage quality work, getting done without disruption, but also, really being careful not to gate off too much of your community so as to not become more elitist. So I think some communities have, basically, maybe not even on purpose have stood on this elitist mentality where to get into our discord to get into our content to get into our incentives, you must buy this much and own this much per month or whatever. And I think a lot of these types of incentive structures will kind of fade away. Those who push more for either sweat equity, or quality content, I think is really more the better practice. I think we're moving away from Well, I think most of us in this space we're moving away from say, like a YouTuber, content creator is moving more away from chasing what the mainstream media says the content everyone wants is the stuff I should do. Rather, the stuff I'm going to do is my passion, my skill, set my experience, and provide the best, the highest quality content that I can, according to my skill set according to my character who I have and and applying that to the world and not chasing the dollar. So really chasing trying to affect the individual getting the content or whatever the product might be in a positive manner, rather than just trying to extract value out of another human.
        <br /><br />
        So yeah, it's really fun and interesting to watch the organic growth that comes from projects like metal metaverse, Music Festival, and BMS If that is like to be seen kind of thing, and I love being a part of that type of stuff, even in real life, when seeking out communities or homesteads to go, help build infrastructure, I seek out people who are just implementing their vision, who are just starting their farm or whatever. So I love to see organic growth and see visions come to a reality and help be a part of supporting that. But I think a really good example of community that's a little bit further in their development, and are regularly daily, hourly, by the minute struggling with making this with they're struggling with this actual coordination problem and trying to make services products, platforms that just make this type of coordination easier, and make everyone more successful, that's metagame. metagame, they're really, they're working hard to not only change the world, but to bridge that gap from where we are now, to where we all want to already be, we'd rather just be building the new world, but we realize that there is this bridge, there's all these bridges that need to be built for everyone to be able to walk across from the old system to the new system, you can't just flip a switch, we really, we have to build these tools, these mechanisms, these systems, for people to plug into and be able to, not the system that's already set up and created with the rules in place, but no a system that's set up for them to create their own rules in their opinion and make their own system.
        <br /><br /><br />
        I think we'll kind of have a mix, you know, there, we're kind of at the beginning of a massive explosion of new platforms, new products, new networks, new meta versus and I think, I think later on down the road much later on down the road, it will be a mixed a mixed platform, a multi verse, multi platform, multi chain type of thing that we deal with, but not necessarily one to rule them all for each sector. And so kind of like it when we talk about metal versus there are certain aspects to different metal verses that I like more than others. And yet, I don't discount certain metal verses because they have their own use case. You know, I love crypto voxels but I can't display certain materials there. I love somnium space for the for the realistic type of items that I can put in that area. But I don't like the movement as much. So I like decentraland in the cartoony style that they have going and the movement. I like how game like it is. I don't like their governance. So there are different aspects that I think different people will like and not like. They may completely discount some meta verses altogether and hate them. Or they may have a list of metal verses that are their favorites and they use multiples. So I think that's kind of We're going to be the same for tokens for networks for different NFT platforms and things are the same.
        <br /><br />
        Um, well, I'd say one thing is to always take your time, this space, because it's exploding. There's always so many projects going on that it can really keep you moving too fast from one thing to the next, that you never really deep dive deep into each thing. So I would encourage people to do things like read the boring white paper, they're not that bad, we try to make them pretty cool now. That's, that's really important to really understand the use case of whatever platform or token or community you might be entering into, or, or whether you even want to be a part of that. And I'd say the other big thing is, don't be afraid to and it's probably one of the most important parts is to get into the discords. Get into the telegrams. I don't personally like telegram, but get into the community chat rooms, because that's where all the action is. That's where all the alpha is. join their community calls. Don't be afraid to speak up when they ask. And there's no question too, too dumb, too small, too stupid, whatever. I don't believe in that. There's no way for any of us to learn anything without asking questions so that we can understand so come in, we're all you know, most of us are pretty kind and cool.
      </div>
    </div>
  )
}

export default Page1516
