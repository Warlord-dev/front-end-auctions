import React from 'react'
import styles from './page8384.module.scss'
import Link from 'next/link'

const Page8384 = () => {
  return (
    <div className={styles.wrapper}>
      <img src='/magazine/4/images/8384_image1.png' className={styles.image1}/>
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>
      <div className={styles.rect4}></div>
      <div className={styles.rect5}></div>

      <img src='/magazine/4/images/8384_image2.png' className={styles.image2}/>
      <img src='/magazine/4/images/8384_image3.png' className={styles.image3}/>
      <img src='/magazine/4/images/8384_image4.png' className={styles.image4}/>
      <img src='/magazine/4/images/8384_image5.png' className={styles.image5}/>
      <img src='/magazine/4/images/8384_image6.png' className={styles.image6}/>
      <img src='/magazine/4/images/8384_image7.png' className={styles.image7}/>
      <img src='/magazine/4/images/8384_image8.png' className={styles.image8}/>
      <img src='/magazine/4/images/8384_image9.png' className={styles.image9}/>
      <img src='/magazine/4/images/8384_image10.png' className={styles.image10}/>
      <img src='/magazine/4/images/8384_image11.png' className={styles.image11}/>
      <Link href='https://www.ganggarrison.com/forums/index.php?topic=38509.msg1297609#msg1297609'>
        <a target='_blank'>
          <img src='/magazine/4/images/8384_image12.png' className={styles.image12}/>
        </a>
      </Link>
      <img src='/magazine/4/images/8384_image13.png' className={styles.image13}/>
      <img src='/magazine/4/images/8384_image14.png' className={styles.image14}/>
      <img src='/magazine/4/images/8384_image15.png' className={styles.image15}/>
      <img src='/magazine/4/images/8384_image16.png' className={styles.image16}/>

      <Link href='https://github.com/BasedUser'>
        <a target='_blank'>
          <div className={styles.text1}>
            BaSEDUSER
          </div>
        </a>
      </Link>
      <div className={styles.text2}>
        BaSEDUSER
      </div>

      <div className={styles.text3}>
        so... gang garrison 2 was released in 2008, it was a really tiny game and it was made more of a joke - it was basically playable, 
        but there's a lot of things it didn't have as a multiplayer game....like chat...or hell even a voting system or a proper server.
        <br /><br />
        as time went on people made some plugins for both the server and client to download. things went all and well, 
        a bit of forking happened from the original chat plugin (those are actually just mods, 
        but we differentiate sourcemods from loaded scripts by calling them plugins). enter 2017, 
        i join in and notice the game had a lot of boring vanilla stuff.....        
      </div>
      <div className={styles.text4}>
        then i start this server called&nbsp;
        <Link href='https://github.com/BasedUser'>
          <a target='_blank'>Carry or be Carried</a>
        </Link>&nbsp;
        which had a lot of cool plugins making it more of like TF2, but you could also carry teammates around - it was fun. 
        <br /><br />
        things go on and on until i realise "hey, i should make a quick
      </div>
      <div className={styles.text5}>
        skip a few years later, and i make a big mod. it's another chat plugin, this time, it had a catch, you didn't need the server to download the chat plugin.  so this meant you didn't need to restart the game to get on another server (server plugins like chat were sent to clients, and due to how mods work you have to restart the game to clean it off of them). 
      </div>
      <div className={styles.text6}>
        the most challenging part was the execution of my chat plugin. 
      </div>
      <div className={styles.text7}>
        gang garrison 2 uses a protocol called TCP to communicate - it's like you give the game, everyone on it a queue of packets to digest.
        <br /><br />
        the problem is, since there is no dedicated packet for chat, you need to find another packet that everyone would see exactly and without error. it turns out that there's two contenders for this status - the name change packet (which changes a player's name on the screen), and the show bubble packet (which shows an emote-like bubble next to the player's character); and unfortunately the name change packet is ratelimited to once per 10 seconds
        luckily for me, emotes weren't rate limited, and there's 62 of them in-game, which would in theory give me a throughput of slightly under 6 bits per emote, but at a total transfer efficiency of 6/24=25% (one byte each for packet, player and bubble ids). 
      </div>
      <div className={styles.text8}>
        unfortunately using all 58 emotes would require a lot of math, which I chose not to use due to the inefficient game engine, so i opted for 32 to transfer 5 bits each. 
      </div>
      <div className={styles.text9}>
        every single character was turned into a bit array, bitshifted into discrete bubbles, and turned into a packet of its own, which was then sent over the bubbles packet. the funniest thing is that because it's not ratelimited, you could send however much text you wanted, and because of the relatively fast bitshifting implementation it wouldn't lag as much. these are the kind of bodges you have to do in an old protocol to achieve relatively modern features. the closest example i can give which does sort of the same thing is a WoW plugin that allowed to communicate with the other faction using - you guessed it - the same sort of arbitrary tunnel. 
      </div>
      <div className={styles.text10}>
        GG2 is incredibly easy to script for, it's free and open source and then there's also the seasoned community that's there to help you with any bugs...my point is that you should always ask the community if there's something wrong with your mod, no matter the game, they'll always help you out, even in the most weird situations
      </div>
      <div className={styles.text11}>
        CHECK OUT EMOTE CHAT HERE
      </div>
      <div className={styles.text12}>
        having used a distribution of linux for the past year I can say many problems can be fixed with a little bit of social interaction - after all, devs are also people, if not artists
      </div>
      <div className={styles.text13}>
        thoughts on open source gaming?
      </div>
      <div className={styles.text14}>
        open source is probably our future, to be honest - its decentralized nature means we can advance way faster than companies as a whole, but we've also seen good proprietary games before - say, Minecraft - its modding scene is infamous, and I hope that eventually all games at least have the capability to achieve such a massive modding scene - hell, all we need is good APIs and these random projects which build up to a bigger whole
      </div>
      <div className={styles.text15}>
        BasedUser runs a server on the IRC network called pissnet. Over 400 users. You can check it out here. irc.letspiss.net is the roundrobin server (connects to a node to balance the load), baseduser.eu.org is his server.
      </div>
      <div className={styles.text16}>
        i'm working on making a mini-computer with a teensy 4.1. it's got a 600MHz Cortex-M7, 1MB of RAM, it also has a SD card slot for storage and a micro-USB port for communication. i'll be surprised if it runs a minimal linux build at optimal speed, and if it doesn't, I'll need to write all the handling to the 4*4 keypad and the 320x240 display and all of the other, I/O myself, but that's a story for another day
      </div>
      <div className={styles.text17}>
        = NO
      </div>
    </div>
  )
}

export default Page8384
