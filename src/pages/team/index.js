import React from 'react';
import { Container } from 'semantic-ui-react';
import styles from './styles.module.scss';

const Team = () => {
  const members = [
    {
      name: 'Emma-Jane MacKinnon-Lee',
      image: '/images/team/emma.png',
      role: 'Founder/CEO',
      link: 'https://twitter.com/emmajane1313',
    },
    {
      name: 'Victor',
      image: '/images/team/victor.png',
      role: 'Solidity & Smart Contract Engineering',
      link: 'https://github.com/onigiri-x',
    },
    {
      name: 'Haruto Inoue',
      image: '/images/team/haruto.png',
      role: 'Full Stack Engineering',
      link: 'https://github.com/jupiteruwdev',
    },
    {
      name: 'Cameron Sato',
      image: '/images/team/cameron.png',
      role: 'Full Stack Engineering',
      link: 'https://github.com/CameronS29',
    },
    {
      name: 'James Lin',
      image: '/images/team/james.png',
      role: 'Full Stack Engineering',
      link: 'https://github.com/wj-code-mania',
    },
    {
      name: 'Isramae Visales',
      image: '/images/team/isramae.png',
      role: 'Metaverse Design',
      link: 'https://twitter.com/himekichu_',
    },
    {
      name: 'Stan Mclygin',
      image: '/images/team/stan.png',
      role: '3D Pipeline Management',
      link: 'https://twitter.com/stmclygin',
    },
    {
      name: '1hary1',
      image: '/images/team/1hary1.png',
      role: 'Community Ops',
      link: 'https://twitter.com/JanHarazim',
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Core Team and Engineering</div>
        <div className={styles.description}>
          DIGITALAX will eventually be a fully decentralised project, whereby the $MONA token
          holders and Genesis MONA NFT holders hold the right and responsibilty to govern every
          element of the protocol.
          <br />
          <br />
          The protocol is built for designers, developers, modders, players, metaversal pioneers.
          <br />
          <br />
          As of now the core team and engineering are building the mechanisms that will get us
          there.
        </div>
        <div className={styles.contentWrapper}>
          {members.map((member) => (
            <div className={styles.member}>
              <a href={member.link} target="_blank">
                <img src={member.image} className={styles.image} />
              </a>
              <div className={styles.name}> {member.name} </div>
              <div className={styles.role}> {member.role} </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
