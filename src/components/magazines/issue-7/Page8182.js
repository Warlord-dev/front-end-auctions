import React, { useRef, useState } from 'react';
import styles from './page8182.module.scss';

const Page8182 = () => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const startAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className={styles.wrapper}>
      <img src="/magazine/6/images/81_82_back.jpg" className={styles.back} />
      <a href="https://twitter.com/thenftattorney" target="_blank">
        <img src="/magazine/6/images/81_82_link1.png" className={styles.link1} />
      </a>
      <a href="https://twitter.com/twittner" target="_blank">
        <img src="/magazine/6/images/81_82_link2.png" className={styles.link2} />
      </a>
      <img src="/magazine/6/images/81_82_gif.gif" className={styles.gif1} />
      <img src="/magazine/6/images/81_82_gif.gif" className={styles.gif2} />
      <img src="/magazine/6/images/81_82_gif.gif" className={styles.gif3} />
      <div className={styles.text1}>Josh Quittner</div>
      <div className={styles.text2}>
        I started writing about the internet before it was really the internet. I think we called it
        the information superhighway back in around 1990. And then, as the commercial internet came
        online, I started writing about it very, very early in the 90s. I wrote about
        it for a newspaper called Newsday in New York, and also Wired magazine in its first
        incarnation, and loved it. And a lot of the things that we thought would happen in the
        internet, we had very high hopes for utopian dreams. And I think it became very dystopian,
        with the rise of web two, it started to play to humans worst instincts rather than their
        best. And a lot of one thing that in particular, became problematic is that when everyone
        has a voice, we get a lot of lying, and a lot of fake news. And there was really no great
        way to deal with that. And with the rise of web three, we're finding all sorts of tools that
        we believe will help restore the internet to the vision that we originally had for it.
        <br />
        <br />
        I started DeCrypt with a guy named Ryan. And Ryan, despite his young age has already 
        founded one unicorn called Code Academy, which teaches online programming skills.
        And I knew Ryan socially and when I decided to start this website and got funding 
        from consensus, Ryan was the first person I called. And we always intended
        to make this be a publication that covered web three and ultimately became web
        three.
      </div>
      <div className={styles.text3}>
        But when we started it in 2017, we weren't really sure what that meant. At first, we thought
        it meant bolting various web three DAPPs onto us, you know, like prediction markets were
        reputation systems. But it was only after we saw the rise of DeFi, and then immediately
        after that, the rise of DAOs, that we realized that that's what being decentralized really
        entailed, was creating a completely different organizational structure. How you do that with
        a web two site that's already established, and has, you know, five to 10 million people
        coming to it every month? That's a tricky thing. So the first thing we wanted to do was
        experiment with tokenomics. And we created a reader token. And the reader token was built on
        a side chain. And there we are just sort of experimenting with, like, how do we
        get people to read stories stories up and down, and kind of pull the various levers that we 
        think that our token model can cause them to pull and, and that was great, it was pretty, 
        pretty exciting. What we really did is we created our wallet, and we got more than 75,000 
        people to activate that wallet and vote. And that was really fun and great. But it was limited.
        And we didn't want to support the side chain. And it turned out that there was kind
        of flagging interest among the developers of that chain. And it sort of
        started to go dormant. At the same time, we were like, oh my god, there's all this
        amazing stuff happening on the Ethereum platform. So we wanted to kind of
        decentralize ourselves further. So we had made the decision to release an ERC 20
        token. And the people who have the reader token will be able to create a program
        that will allow us to airdrop some corresponding amount of ERC 20 token to those
        folks. The biggest learning we got from that, I think had more to do with the mechanics
        of creating an easy on ramp. As you know, crypto is really, really, really, really, really,
        really hard, right, like getting people to do things is super hard. And we created a super
        easy on ramp that people didn't even realize they were activating, there's this little
        specialty wallet. And I think that was the most important learning we got from it.
        Secondarily, when tokens are involved, people can be incentivized in very specific and
        direct ways. Which is kind of interesting. I think it's far more direct than, say,
        frequent flyer miles or something like that. Because you just see these gamified tokens.
        The way our wallet worked is when people did things, they would see little tokens drop into
        their wallet, and it's like hamster pushing the lever to get food pellets, even
        though most of our drops were divided into seasons, and people who are
        eligible could get NFT's. And then with those NFT's, they were then allowed to vote. And
        that was kind of as far as we took it.
        <br />
        <br />Continue to watch this space, we'll be writing about it. I'm writing
        a kind of occasional column. We have a discord channel for Decrypt
        that's mainly been used for support. And inside that discord channel, we've
        invited all of our advisors and they're helping us think through the next phase,
        which will be unveiling this publisher DAO that won't have our name, we don't want it to be
        a Decrypt thing. We want to be a member of it, where it's not ours. We're just kind of pushing
        it along until it starts to move on its own steam. And we quietly stood that up last
        weekend, but it's currently empty, and we're just going to be in the process of inviting 
        other publishers and other DAOs and projects working in similar fields and areas. Web3 
        publishing is a new area and there are many facets to it. And so we hope that we
        can encourage people to reach out to us and we're gonna reach out to them and see if
        we can create this big place where we can kind of form a community around this
        incredibly fascinating world. It really is all developing so fast right before
        our eyes. But it's a hard space to cover, right? Because you look at some of the older DAOs,
        the ones that are a few months old, six months old, 12 months old, and they're too
        expensive, in order to actually see what's going on, you've got to buy their token,
        and it costs you upwards of sometimes $60,000 to get in the door. Now, I'm not sure that those
        places necessarily want to be covered. And that's cool. But there are plenty of places that
        do. Because I think there are probably around 200 now or more starting up today. And I
        think everybody's very excited about the fantastic potential that these distributed
        autonomous organizations have. And so I think, new ones, just like you're (Emma) doing
        with WayFare, helping people connect to these places we want to write about it. That's,
        that's the, I think the benefit that we can provide. And so we're creating a sort of
        decentralized wire service. Initially, our first partner is The Defiant. But we're going to
        invite other people who would be considered our competitors in the crypto space
        and people who don't even have official publications to join us and write about
        this stuff. And we can provide some editing support and some distribution on our own
        website. And we're kind of creating a place to run the stories of these DAOs.
        <br />
        <br />
        Web3 combined with publishing will help create authentic, trusted sources for
        information, I think it will help point us to things that are interesting that are going on.
        I also think that there will be a feedback loop that we don't currently enjoy to
        the extent that we could, and by that, I mean, we'll write something or a writer will write
        something, but then they have to deal with their community. And that might not
        necessarily be a bad thing. But it could certainly result in a different kind of
        storytelling that creates stories that are more organic, and are corrected more and are more
        kind of in the end, true and final, because if the community feels like it's participating.
        and if community members are able to contribute to fact checking and providing content
        then that can also be incentivised with different tokens and other bounties.
        So that's a really great thing. We're constantly debugging information and making
        information more believable and true.
        <br />
        <br />
        We love IPFS. When we're done with the story, we can upload it to IPFS and it is 
        preserved forever, for always, I mean, the whole planet could be annihilated, and 
        those stories will still exist, right! But wouldn't it be cool if a tool
        was was developed so that at a certain point, a story reached a point of complete
        validation. The community says, yeah, this is great. And then not only is it sort of 
        memorialized in IPFS as its final version. But also, these things are as accurate as 
        humans can make them. It's just a completely different kind of media than we're used 
        to right now. Right now we're used to media that's very crude, and, you know, when 
        a story gets published, it's the best we can do. And then there might be
        little errors but these are overlooked. And sometimes the errors are big and they're looked
        at, but it's not all too often in enough depth, it isn't perfect. But this could
        create a much more perfect kind of media that is preserved in a way that is genuinely
        archivable. Important and validated and true. So I think that's super, super
        exciting. But there so much tooling that has to be invented. And that's kind of what what we
        see ourselves as doing through this publishing DAO. Looking at what are the tools that
        people need. If people who wanted to be freelancers to a DAO and act as fact checkers,
        and then through that they could start to build an online and verified on-chain reputation.
        And then this could mean that their livelihoods change completely, where now they are
        contracted by different DAOs to travel around the world or through the metaverse to get the 
        hottest takes from all different types of communities, and they can bridge stories across
        and between all of these different DAOs. And the community built around a publishing DAO
        won't just be crypto publishers, they could be  politicians, fashion publishers, virtually 
        anything. But there's one system tying all of this together, a meta structure. 
        Like, right now, you have to go to a huge publishing company, and even then you are
        going to have to have a different contract for every one of the magazines or websites
        that you write for. But wouldn't it be liberating to just be sort of accredited, and you
        could go work for anyone. And as soon as they know that you're in the system, they
        can throw you work. How great would that be for writers and other creatives everywhere. 
        Or even another idea is an ad unit that travels with the story. And every
        time somebody publishes the story, wherever it is, the writer gets some some royalty off of
        it. Or even when they cite a story they get some small royalty off of it. 
        There's so many things that that can be built. And with tokens, we have the
        ability to fractionalize and find all kinds of value in the value chain that we couldn't have
        before. Currently, if you subscribe to something, you have to get it for a year or so.
        But, how about an NFT subscription, that you can resell and fractionalise to minutes. 
        <br />
        <br />I think they call this wealth dynamics.  It's looking at how do we find the disparity.
        Crypto doesn't like to see things disproportionately, it wants to see everything evened out.
        So how do we even out the whole chain, so that everybody is realizing value and works to
        create greater value for the network? It used to be we talked about as network effects
        and network effects, I remember, in the early days of the internet weren't catalysed yet.
        Like, who was there to talk to?! I couldn't send the email to anybody. But then one day,
        a guy named Kevin Kelley, who was the founding editor of Wired sent me an email. 
        And that in itself was like Oh, this is so cool! It was like getting into head explosion
        territory to get this email for free from somebody I didn't even know. And then as
        more and more people started sending email, you realized how powerful the network effect was.
        Well, now with DAOs we're starting to see network effects between DAPPs because they're
        composable. This DAO does one function, this DAO does another function, they swap tokens
        and create a composable tinkertoy like system that does something that's even bigger than
        one of them could do. And so we're all doing this and seeing these big things, these
        blobs that perform certain functions can interconnect. And I think a lot of media DAOs
        will connect, for instance, maybe we'll use Mirror, maybe Mirror will be our
        publishing system. I don't want to create a whole new publishing system, they've got a
        perfectly good one. So why don't we connect to them? It becomes an entire lucrative
        chain and publishing system/platform that can lead to completely new models. We are still
        not normally seeing people extending the good hand of friendship, you know, from from
        early and people are still skeptical, but I would expect that for now since this stuff is 
        just so wild, and it's moving at such a ferocious pace, that everybody's heads down doing 
        this and building tools. I don't expect there to be so much competitive tension anymore, 
        but rather more like cooperative tension.
        <br />
        <br />
        I'm excited about everything in this space. I mean, I haven't seen a fertile
        time like this. In some ways, this is way more fertile than the early days of the web, just
        because we've got very, very sophisticated network technology at our disposal, and have so
        many different ways to communicate ideas. My wife and I once wrote a book about hackers in
        the early 90s. And we talked about how with networks, information travels at the speed of
        thought, and that's pretty much what's happening, right? It's like, you think about it,
        and it becomes a reality because of the network mind. And, that's what I see happening
        right now. The one thing, I guess that has emerged over the last six months or so is 
        the flourishing of DAOs, and that in itself is completely transformation, I just can't wait
        to see where it goes. 
      </div>
      <div
        onClick={() => {
          isPlaying ? pauseAudio() : startAudio();
        }}
        className={styles.play}
      >
        {!isPlaying ? 'PLAY' : 'PAUSE'}
      </div>
      <audio ref={audioRef} loop>
        <source src="./magazine/6/images/81_82_audio.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Page8182;
