import React from 'react'
import styles from './page10.module.scss'

const Page10 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/11_12/mobile/image1.png" className={styles.image1} />
      <img src="./magazine/2/images/11_12/mobile/image2.png" className={styles.image9} />
      <div className={styles.image10}></div>
      <p className={styles.text1 }>hybrid multimodal database to bridge web2 into web3</p>
      <div className={styles.image2}></div>
      <div className={styles.image3}></div>
      <div className={styles.image4}></div>
      <div className={styles.image5}></div>
      <div className={styles.image6}></div>
      <div className={styles.image7}></div>
      <div className={styles.image8}></div>
      <p className={styles.text2 }>Why was Fauna founded? What motivates the team?</p>
      <p className={styles.text3 }>Fauna was created with the mission to make working with operational data productive, scalable, and secure for every software development team. Our founders built the distributed storage systems that scaled Twitter, and set out to create the “data API” that they would've wanted. We built on that foundation to deliver the serverless database to power the next generation of applications.</p>
      <p className={styles.text4 }>What makes Fauna different?</p>
      <p className={styles.text5 }>Fauna is reimagining the database. Much like what Twilio and Stripe did for communication
and payment systems respectively, with their API-centric approach, Fauna is a Data API for
modern application development. It is a disruptive, new, serverless database written from
the ground up specifically for modern application development environments and workflows.
<br/><br/>
Fauna offers a flexible, developer-friendly, transactional database available as a secure, cloud API with native GraphQL. With an innovative query model that lets you encapsulate business logic into programmable functions executed close to your data, Fauna boosts application performance and accelerates development. With Fauna, you never again worry about database provisioning, maintenance, scaling, sharding, replication, or correctness. If you're building fullstack applications with serverless components and a modern programming environment, you will love Fauna even more!
</p>
      <p className={styles.text6 }>What differences do you think better databases will make for people? Can you give some examples of types of people and how it impacts them?</p>
      <p className={styles.text7 }>
When it comes to people that are users of applications, better databases will enable more interactive digital experiences, with faster performance, and more reliability in their interactions. E.g. You never want to see your bank balance to be inaccurate! But you do want your applications to be more responsive, without those hourglasses, waiting for them to load!

Looking at the same question from a developer perspective, better databases will save hours of work, and frustration, allowing developers to focus on what matters to them the most -- building more interesting applications for their end users. Better databases, like Fauna, enable developers to simplify code, reduce complexity and ship faster! Ultimately, more productive and powerful databases will allow for the creation of totally new businesses, not just make existing applications a little bit better.
</p>
      <p className={styles.text8 }>How is Fauna built to help other companies, projects be ready for the metaverse? What is unique about Fauna that supports a transition and existence to web3 and full digitally native immersivity?</p>
      <p className={styles.text9 }>Because Fauna is globally distributed and serverless, data stored in it is essentially ubiquitous and accessible with low latency from anywhere, including both server and client applications. This makes it a great match for decentralized applications that have no central control and are accessed directly by end users. Fauna provides a true data fabric that is fast, secure, and universally available that can be used to augment contractual and decentralized data on blockchains. Like thegraph.com, Fauna offers a GraphQL interface making it easy to integrate into GraphQL-based applications and services.
</p>
      <p className={styles.text10 }>What doesn’t work with databases today? Why aren’t more people focused on solving these problems?</p>
      <p className={styles.text11 }>
RDBMS systems designed in the 1970s did not scale. To solve this problem, NoSQL databases sacrificed correctness and flexibility, while NewSQL databases sacrificed operational simplicity and performance. Productivity suffered. As application architecture evolves to embrace the cloud APIs, serverless functions, and microservices, you need a database that is always correct, always fast, and works frictionlessly with your stack.<br/><br/>

Databases are hard to build, and even harder to gain adoption. We’ve seen a lot of attempts at improving databases, however, these tend to be serving niche use cases or are incremental improvements to old guard databases like Postgres or MySQL.
</p>
      <p className={styles.text12 }>With a lot of projects starting to move into the web3 space, how do you see Fauna continuing to adapt and advance to meet these hybrid needs, especially maintaining reliable security?</p>
      <p className={styles.text13 }>
Because it is an API and not a traditional database or a database-as-a-service, Fauna has a very robust security model that makes it safe to access from client devices over the public internet. Over time we intend to deliver additional security and encryption features that will be useful for distributing private data to decentralized applications.</p>
        <p className={styles.text14 }>How long do you think it will be before we see a truly decentralised database? Architecturally, what could this look like? We already have distributed storage but it’s definitely not on a scale robust or flexible enough to be considered a true database.</p>
        <p className={styles.text15 }>
 Most databases rely on a small group of physical servers to act as the single source of truth; if any of these servers have a problem the data becomes unavailable or corrupt. Fauna is not like this; rather it is architected with unique distributed algorithms that do not rely on centralization of any kind, so it can survive tolerate the kinds of failures and partial connectivity that are common in both the distributed cloud as well as decentralized apps. It’s conceptually possible to evolve a system like Fauna to work in a fully decentralized way and perhaps someday we will.</p>
 <img src="./magazine/2/images/11_12/mobile/image13.png" className={styles.image13} />
    </div>
  )
}

export default Page10