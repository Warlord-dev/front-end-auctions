import React, { useState } from 'react'
import styles from './page43.module.scss'

const Page43 = () => {
  const [video1, setVideo1] = useState(true);
  const [video2, setVideo2] = useState(true);
  const [video3, setVideo3] = useState(true);
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/images/mobile/page50-bg.png" className={styles.backImage} />      
      <h1 className={styles.title1_copy}>HYPERREAALIYAH</h1>
      <h1 className={styles.title1}>HYPERREAALIYAH</h1>
      <p className={styles.section1}>
        <a href="http://hyperreaaliyah.com/" target='_blank'>HYPERREAALIYAH</a> was founded in 2014 through a process that involved the writings of Jean Baudrillard, one (1) BTC worth of acid in the day’s exchange rate, and a handful of people. Since then, HYPERREAALIYAH has existed as a simulation of an artist, born again for each new project through the collaborators of that project. Sometimes for clarity HYPERREAALIYAH is referred to as a collective, yet it has no formal membership and only becomes realised through projects for which a new team is always formed. Both professional artists and non-artists have participated in the production of works of HYPERREAALIYAH.
        <br/><br/>        
        Since its inception, HYPERREAALIYAH has considered everything in existence as material to be moulded into new forms. This creative process has embodied a commentary on the structure of mediated reality as a surface which can be used to create new meaning although it is sometimes controlled by copyrights and trademarks. HYPERREAALIYAH’s argument has been that if the meaning of a work that uses existing material is new or, say, original, the material loses its meaning and gains a new one. 
        <br/><br/>
        The name HYPERREAALIYAH consists of two parts; (1) hyperreal which translates to more real than real. This is a category often experienced in a mediated world where the representation becomes experienced as more real than the original. For example, a news story about a hurricane on the other side of the globe is more real to its reader than the hurricane itself; and (2) aaliyah which is a judaic concept meaning a return to the holy land. Thus, HYPERREAALIYAH becomes a more real than real return to the holy lands of, in this case, meaning.
        <br/><br/>
        The premise for HYPERREAALIYAH, the reason for its existence is the argument that as hyperreality has become an everyday phenomenon, we are all in diaspora from meaning. HYPERREAALIYAH is always looking for new ways to return to meaning, yet never quite seems to get there. 
      </p>
      <h1 className={styles.title2}>HYPERREAALIYAH’s First NFT Series</h1>
      <p className={styles.section2}>
        This NFT drop was created during the congregation of HYPERREAALIYAH in early May, 2021, in and around Helsinki, Finland.  We minted these pieces on the Day of Ascension with the help of Digitalax in Silicon Valley, US. This collaboration is thanks to the initiative and vision of Emma-Jane Mackinnon-Lee who we owe all the kudos.
        <br/><br/>
        <span className={styles.sub_title}>Genesis Objects: Astral Travels Special Edition </span><br/>The series consists of three multimedia 3d objects existing in various modes of rarity. The so-called common object is a wearable ring that we've named Trivial Perseption. The semi-rare object is a digitally kinetic sculpture called Bodysattvax. The rarest object is Allegory of Meta, which is an unnatural formation from a beach of your dreams with a video and sound emitting and floating crystal inside. 
        <br/><br/>
        The rarest form of this series is a participatory performance called Joint Paean by Jenna Jauhiainen where they will join you inside Allegory of Meta for a discussion about hopes and dreams related to transitioning from web2 to web3. This performance includes a homage to the floating crystal with a specially choreographed dance. 
        <br/><br/>
        Most of the visual and sound material attributed to these objects is derived from existing material, yet the shape of each object is unique. Among other things, the objects include trademarked and copyrighted colors, logos, images, songs and videos. The three objects all have a common source of origin that will be revealed in 40 months, approximately 3,3 years. In the meantime, we will be upgrading the objects as to their compatibility and interoperability aspects, perfecting these pieces until the final revelation of their source.
      </p>
      {/* <img src="./magazine/1/images/mobile/page50/image1.png" className={styles.image1} />               */}
      <h1 className={styles.number1}>604753_Allegory_of_Meta</h1>
      <span className={styles.plus}>+</span>
      <h2 className={styles.number2}>604753_Joint_Paean</h2>
      <p className={styles.section3}>
      The Allegory of Meta is an unnatural formation, created as a space to spend time in pondering, dancing, holding out the rain or perhaps inhabiting it as a caveperson of the metaverse. It alludes to Plato's cave in embodying an unreal reality, with shadows and reflections with only a transitory relation to the real. On its surface, Allegory of Meta is embedded with a unique texture made out of copyrighted and trademarked colors, logos and 
      images. Inside the formation a floating, video displaying crystal emits a soundscape inspired by the forever rising, never dropping glory. Outside, the soundscape is calm like a sea-breeze. The owners of Allegory of Meta can unlock an ultra-rare feature where the artist and researcher Jenna Jauhiainen will join them inside the formation placed in the virtual environment of their choosing. The performance includes a discussion about hopes and dreams related to transitioning from web2 to web3, and a homage to the floating crystal with a specially choreographed dance. The details of the performance are negotiated with the owner of this ultra-rare NFT. For example, it is possible to enjoy this performance as a one-on-one encounter or invite an audience to join. 
      </p>
      
      <h1 className={styles.number3}>604753_Bodysattvax</h1>
      {/* <img src="./magazine/1/images/mobile/page50/image2.png"  className={styles.image2}/> */}
      <p className={styles.section4}>The Bodysattvax is a statue, a totem for XD, the international symbol of ecstatic laughter. This statue pays homage to mediatization, to hyperreality and simulacrum. Bodysattvax can be placed inside or outside, creating a tranquil yet tense ambience with shivers of shock and awe. The video on the background is what's embedded into the statue's texture. The soundscape emitted by Bodysattvax is inspired by MGS2 which explores themes such as memetics, social engineering, existentialism, postmodernism, virtual reality and the internal struggle of political liberty and freedom of thought.</p>
  
      <h1 className={styles.number4}>604753_Trivial_Perseption</h1>
      {/* <img src="./magazine/1/images/mobile/page50/image3.png"  className={styles.image3}/> */}
      <p  className={styles.section5}>The Trivial Perseption is a ring is inspired by the treacherous wallflowerness of random elements around us, the kind with apparent naturalness to the sensory overload they cause and contextual burden they carry. The video you see on the background of the ring is what's embedded into the ring's texture. The soundscape emitted by the forever orbiting and pulsating glass jewel is inspired by Sting suing Juice WRLD and Metallica ruining Napster.</p>

      <img
        src={`./magazine/1/49_50/${video1 ? 'Group 1200' : 'Group 1201'}.png`}
        onClick={() => setVideo1(!video1)}
        className={styles.play1}
      />
      <img
        src={`./magazine/1/49_50/${video2 ? 'Group 1200' : 'Group 1201'}.png`}
        onClick={() => setVideo2(!video2)}
        className={styles.play2}
      />
      <img
        src={`./magazine/1/49_50/${video3 ? 'Group 1200' : 'Group 1201'}.png`}
        onClick={() => setVideo3(!video3)}
        className={styles.play3}
      />

      <div className={styles.videoFrame1}></div>
      <video autoPlay muted={video1} loop className={styles.video1}>
        <source src="./magazine/1/videos/50_1.mp4" type="video/mp4" />
      </video>

      <div className={styles.videoFrame2}></div>
      <video autoPlay muted={video2} loop className={styles.video2}>
        <source src="./magazine/1/videos/50_2.mp4" type="video/mp4" />
      </video>

      <div className={styles.videoFrame3}></div>
      <video autoPlay muted={video3} loop className={styles.video3}>
        <source src="./magazine/1/videos/50_3.mp4" type="video/mp4" />
      </video>
     
    </div>
  )
}

export default Page43