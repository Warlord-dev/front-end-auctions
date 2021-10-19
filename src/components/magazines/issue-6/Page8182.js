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
      <img src="/magazine/6/images/81_82_back.png" className={styles.back} />
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
        I started writing about the internet before it was really the internet. I think we call it
        the information superhighway back in around 1990. And then, as the commercial internet came
        to come online, I started writing about it very, very early in the early 90s. I wrote about
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
        When I started the site with a guy named Ryan bubinski be UBI bi n SKI. And Ryan, despite
        his young age has already founded one unicorn called codeacademy. cod ECA, DEMY, which
        teaches online programming skills. And I knew Ryan socially and when I decided to start this
        website and got funding from consensus, Ryan was the first person I called. And we always
        intended to make this be a publication that covered web three and ultimately became web
        three.
      </div>
      <div className={styles.text3}>
        But when we started it in 2017, we weren't really sure what that meant. At first, we thought
        it meant bolting various web three daps onto us, you know, like prediction markets were
        reputation systems. But it was only after we saw the rise of defy. And then immediately
        after that, the rise of dowse that we realized that that's what being decentralized really
        entailed, was creating a completely different organizational structure. How you do that with
        a web two site that's already established, and has, you know, five to 10 million people
        coming to it every month? That's a tricky thing. So the first thing we wanted to do was
        experiment with tokenomics. And we created a reader token. And the reader token was built on
        a side chain called rst. And there we are just sort of experimenting with, like, how do we
        get people to read stories and invoice stories up and down, you know, in and kind of pull
        the various levers that we think that our token model can cause them to pull and, and that
        was great, it was pretty, pretty exciting. What we really did is we created our wallet, and
        we got more than 75,000 people to activate that wallet and vote. And that was really fun and
        great. But it was limited. And we didn't want to support the side chain. And it turned out
        that there was kind of flagging interest among the developers of that chain. And it sort of
        started to go dormant. At the same time, we were like, Oh my god, like there's all this
        amazing stuff happening in the, on the Ethereum platform. So we and we wanted to kind of
        decentralize ourselves and create a doubt. So we had made the decision to release an ERC 20
        token. And the people who have the reader token will be able to kind of create a program
        that will allow us to airdrop some corresponding amount of ERC 20 token to those to those
        folks. the biggest learning we got from that, I think was had more to do with the mechanics
        of creating an easy on ramp. As you know, crypto is really, really, really, really, really,
        really hard, right, like getting people to do things is super hard. And we created a super
        easy on ramp that people didn't even realize they were activating, there's this little
        specialty wallet. And I think that was the most important learning we got from it.
        Secondarily, you know, when tokens are involved, people just aren't incentivized to do
        virtually anything. Which is kind of interesting. I think it's far more direct than, say,
        frequent flyer miles or something like that. Because you've just like, see these tokens, we
        the way our wallet worked is when people did things, they would see little tokens drop into
        their wallet, and it's like, you know, hamster pushing the lever to get food pellets, even
        though the, the most of you know we divided our our drops into seasons, and people who are
        eligible could get NF T's. And then with those NF T's, they were then allowed to vote. And
        that was kind of as far as we took it. If we could sort of create a kind of promo, I guess,
        down, but that's really overstating what it was. And then,
        <br />
        <br />I guess I would say watch this space, you know, we'll be writing about it. I'm writing
        a kind of, you know, occasional column. But we stood. So we have, we have a discord channel
        for decrypt that's mainly been used for support. And inside that discord channel, we've
        invited all of our advisors and they're kind of helping us think through the next phase,
        which will be unveiling this publisher dial that won't have our name, we don't want it to be
        a decrypt thing. We want to be a member of it, but it's not ours. We're just kind of pushing
        it along until it starts to move on its own steam. And we quietly stood that up last
        weekend, but it's it's currently empty, and we're just going to be in the process starting
        on Monday of inviting other some other publishers and, and other Dallas, we're very
        interested in trying to figure out how to cover the world of Gauss. And so we hope that we
        can encourage people who want their doubts to be covered, to reach out to us and we're gonna
        reach out to them and see if we can create this big place where we can kind of form a
        community around this incredibly fascinating world. That's developing so fast right before
        our eyes. But it's a hard space to cover, right? Because you look at some of the older daos,
        you know, the ones that are a few months old, six months old, 12 months old, and they're too
        expensive, like, in order to actually see what's going on, you've got to buy their token,
        and it costs you, you know, 1030 $60,000 to get in the door. Now, I'm not sure that those
        places necessarily want to be covered. And that's cool. But there are plenty of places that
        do. Because I think there are probably around $200 now and more starting up today. And I
        think everybody's very excited about the fantastic potential that these distributed
        autonomous organizations have. And so I think, new ones, you know, just like you're doing
        with wayfair, helping people connect to these places we want to write about it. That's,
        that's the, I think the benefit that we can provide. And so we're creating a sort of
        decentralized wire service. Initially, our first partner is the defiant. But we're going to
        invite other others, people who are, I guess, would be considered our competitors in the
        crypto space and people who don't even have official publications to join us and write about
        this stuff. And we can provide some editing support and some distribution on our own
        website. And we're kind of creating a place to run these stories, dow stories?
        <br />
        <br />
        Yes, I do. I think that it will help create authentic, trust trusted sources for
        information, I think it will help point us to things that are interesting that are going on,
        I also think that there will be a feedback feedback loop that we don't currently enjoy to
        the extent that we could, and by that, I mean, we'll write something or a writer will write
        something, but then they have to deal with their community. And, and that might not
        necessarily be a bad thing. But it could certainly result in a different kind of
        storytelling that creates stories that are more organic, and are corrected more and are more
        kind of in the end, true and final, because of the community feels like it's participating.
        I mean, I do this is not a novel idea. But I do think that, at some point, community members
        who fact check and say, No, you're wrong here should get a token. You know, we're getting
        Yeah, looking for that. So that's a really great thing. That we're constantly debugging
        information and making information believable and true.
        <br />
        <br />
        Yeah, we love ipfs. And, and, you know, kind of piggybacking off of what we were just
        talking about with flood lighting and using the community to, to authenticate a story and
        validate a story, like light green. So you know that what ipfs does is when when we're done
        with the story, we can upload it to ipfs. And it's preserved forever, for always, I mean,
        the whole planet could be annihilated, and those stories will still exist, right? There's
        like this, like, you know, the Rosetta Stone or something. But wouldn't it be cool if a tool
        was was developed so that at a certain point, a story reached a point of complete
        validation? The community says, Yeah, this is great. And then not only is it sort of more
        Well, it's it's memorialized in ipfs and its final version. So the final version Some of
        these things are as accurate as humans can make them. It's just a completely different kind
        of media than we're used to right now, right now we're used to media, that's very crude,
        and, you know, a story gets published, it's the best we can do. And then there might be
        little errors. And if there are enough errors are corrected, you know, the errors are big
        enough, they're corrected, but it's just fast moving them, it isn't perfect. But this could
        create a much more perfect kind of media that is, is preserved in a way that is genuinely
        archivally. Important and validated and true. So I think that's, that's super, super
        exciting. Yeah. But so much tooling has to be invented. And, and that's kind of what what we
        see ourselves is doing through this publishing. Doubt, is like, what are the tools that
        people need? You know, wouldn't it be great? If people who wanted to be freelancers could
        somehow accredit date in a way that said, Yeah, they they understand what libel is, and they
        understand how important time The truth is, and, and their name is attached to it, and they
        have reputation. And also, they travel around with an invoice and the invoice is the same
        invoice that they use the same invoicing system that all the publishers and the values, so
        they are able to make a living as writers working for every publisher that's on the doubt.
        Yeah, and the public funds on the Dow won't just be crypto publishers, they could be
        politics, publishers, fashion publishers, virtually anything. But there's one system, right?
        Like, right now, you have to go to a huge publishing company, like, you know, Hearst, and
        even then you're going to do a different contract for every one of the magazines or websites
        that you write for. But wouldn't it be liberating to just be sort of accredited, and you
        could go work for anyone. And as soon as they know that you're in the system? You know, they
        can throw you work? Some ideas? How great would that be? for writers that hasn't been
        written yet? How about this about an ad, an ad unit that travels with the story? And every
        time somebody publishes the story, wherever it is, the writer gets some some royalty off of
        it. You know, like, or how about when they cite a story? You get some small royalty off of
        it? Yeah, like, there's so many things that that can be built. And with tokens, we have the
        ability to fractionalize and find all kinds of value and the value chain that we couldn't do
        before, right now, like, if you subscribe something, you have to get it for a year, right?
        What about an NF t subscription, a subscription in the form of an NF? t t hat you can
        resell? Yeah, like this anymore. You know, I paid 10 bucks for it, I'll sell it for five.
        <br />
        <br />I mean, I think they call this wealth dynamics, right? Like, how do we find like,
        crypto doesn't like to see things disproportionate, it wants to see everything evened out.
        So how do we even out the whole chain, so that everybody is realizing value and works to
        create greater value for the network? Cool here, you know, it used to be we talked about
        network effects and network effects were like, I remember this, you know, when I was on the
        internet in 1991, or something, like who was there to talk to, like, I couldn't send the
        email to anybody. But then one day, a guy named Kevin Kelley, who was the founding editor
        wire wired, it sent me an email. It's like, Oh, this is so cool. It was like head explosion
        territory to get this, this email for free from somebody I didn't even know. And then as
        more and more people started sending email, you realize how powerful the network effect was.
        Well, now with Dallas, we're starting to see network effect between daps because they're
        composable. This style does one function this down does another function, they swap tokens
        and create a composable tinkertoy like system that does something that's even bigger than
        one of them could do. Right. And so we're all doing this Seeing these big things, these
        blobs that do that perform certain functions interconnect. And I think a lot of media doubts
        will connect, like, for instance, maybe we'll use mirror, maybe mirror will be our
        publishing system, I don't want to create a whole new publishing system, they've got a
        perfectly good one. So why don't we connect to them? Like, why don't why isn't that the
        publishing system for our publishing platform for all of our publishers? lead to, but I'm
        not normally seeing people extending the good hand of friendship, you know, from from
        places, like from other publishing house, but I wouldn't expect to this stuff is just so
        wild, and it's moving at such a ferocious pace, that everybody's heads down doing their own
        thing building tools. You know, I don't expect I don't really expect there to be competitive
        tension. Yeah. What in the same way? It's more maybe cooperative tension.
        <br />
        <br />
        yeah, I'm excited about everything in this space. I mean, it's, I haven't seen a fertile
        time like this. In some ways, this is way more fertile than the early days of the web, just
        because we've got very, very sophisticated network technology at our disposal, and in so
        many different ways to communicate ideas. My wife and I once wrote a book about hackers in
        the early 90s. And we talked about how with the network information travels at the speed of
        thought, and that's pretty much what's happening, right? It's like, you, you think about it,
        and it becomes a reality because of the network mind. And, and that's what I see happening
        right now. There's not like one thing. I mean, the one thing, I guess that has emerged over
        the last six months is douse downs after you know, after defy, and that is, I think, going
        to be an enormous, enormous change in the ecosystem.
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
