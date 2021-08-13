/* eslint-disable max-len */
import { createModule } from 'redux-modules';
import cloneDeep from 'lodash.clonedeep';
import { Map, List } from 'immutable';
import TransformModules from '../utils/transform-modules';
import designerList from 'src/data/designers.json';

const DEFAULT_FIELDS = Map({
  designersById: Map({}),
  designerGarmentIds: List([]),
  infoByDesignerId: List([
    {
      id: 'O-9',
      designerName: 'Christina Lalch',
      designerPhoto: './images/Christina-Lalch.jpeg',
      descriptionDesigner: [
        'Christina is a futurist designer and visual storyteller. After finishing degrees in Fashion Design, Textile Engineering and Cultural Studies of the Modern Times she’s worked in multiple apparel companies as a pattern engineer, creative design lead, 3D prototyper and consultant in implementing 3D technologies in the production pipeline.',
        'An avid gamer and tech geek from an early age — the quest for innovating in the field of apparel has always been her major goal. After more than 50K hours in the industry (and 6000 coffee cups later), she has now devoted her time to building a multidisciplinary Atelier Atopiae. Focused on creating digital clothes, accessories and humans, she also consults brands on incorporating new tech in their production and marketing strategies.',
        'If she had any spare time, Christina would probably spend it playing Assassin’s Creed or binge-watching Westworld, The Expanse and the History Channel.',
      ],
      designerCountry: 'Bulgaria',
      designerCountryFlagIcon: './images/icons/bulgaria.png',
      designerSocialMedia: List([
        {
          name: 'instagram',
          href: 'https://www.instagram.com/christina.lalch/',
        },
      ]),
    },
    {
      id: 'O-7',
      designerName: '3dBehemoth',
      designerPhoto: './images/3dBehemoth.png',
      descriptionDesigner: [
        'Diego is a 26 year old cloth artist from Alicante, on the east coast of Spain. He is addicted to video games and fashion, and that made him start in the 3D fashion industry less than a year ago',
        'He has always been the weird boy in his childhood, he’s always thought out of the box and had tastes that most people haven’t. His brand and designs are mostly based on that feeling of being weird, the feeling that he’s the only person who likes what he likes and that he’s ok with that.',
        'He has tons of influences, but the most relevant are: Japanese culture, plastic/latex and neon, dark, spooky and cute things. In his designs he loves mixing different concepts to create high contrast between colours, textures and shapes, and to create a feeling of both separation and togetherness.',
      ],
      designerCountry: 'Spain',
      designerCountryFlagIcon: './images/icons/spain.png',
      designerSocialMedia: List([
        {
          name: 'instagram',
          href: 'https://www.instagram.com/3dbehemoth/',
        },
      ]),
    },
    {
      id: 'O-3',
      designerName: 'Edward Harber',
      designerPhoto: './images/Edward-Harber.jpeg',
      descriptionDesigner: [
        'Edward Harber’s creations spring from a cross-pollination of sport, fashion and technology. His roots are in technical high-performance apparel and his work has won Nike gold at ten Olympics, seen action on the battle field, and protected Moto GP riders for Dainese.',
        'Edward is now looking toward the world of women’s high fashion.',
        'His forms fuse fluid rigidity, sculptural intelligence, old-world craft and cutting-edge innovation. The resulting combinations of edgy couture, sensual technology and fearless beauty are both intelligent and surprising.',
      ],
      designerCountry: 'United States',
      designerCountryFlagIcon: './images/icons/usa.png',
      designerSocialMedia: List([
        {
          name: 'website',
          href: ' https://www.shopedwardharber.com/',
        },
      ]),
    },
    {
      id: 'O-6',
      designerName: 'HonoreHL',
      designerPhoto: './images/HonoreHL.jpeg',
      descriptionDesigner: [
        'Hirwa Leon Honore is a 3d artist from Rwanda. He is most experienced with animation, modeling, and shading. His work inspires to simultaneously merge traditional and contemporary culture driven styles, that aim to paint a richly diverse and fantastical picture of digital clothing possibilities and bring about a minimal, yet fashion forward style.',
      ],
      designerCountryFlagIcon: './images/icons/rwanda.png',
      designerSocialMedia: List([
        {
          name: 'instagram',
          href: 'https://www.instagram.com/honorehl/ ',
        },
      ]),
    },
    {
      id: 'O-2',
      designerName: 'Lorena Bello',
      designerPhoto: './images/Lorena-Bellow.jpeg',
      descriptionDesigner: [
        'Designer Paragraph: Lorena Bello is a Spanish 3D Fashion and Graphic Designer. Driven-by her passion for design, she turned her life 180º when in 2013 she decided to change her professional path by leaving her corporate career (She also has a Law Degree) to start completely afresh as a Digital Fashion Designer. From this moment she has followed her passion working in fashion in London, Milan and Madrid.',
      ],
      designerCountry: 'Spain',
      designerCountryFlagIcon: './images/icons/spain.png',
      designerSocialMedia: List([
        {
          name: 'instagram',
          href: 'https://www.instagram.com/studiolobe/?hl=en',
        },
        {
          name: 'website',
          href: 'https://en.studiolobe.com/',
        },
      ]),
    },
    {
      id: 'O-13',
      designerName: 'McAfee.Design',
      designerPhoto: './images/McAfee-Design.jpeg',
      descriptionDesigner: [
        'McAfee.Design is Michael McAfee - Designer and Artist with a background in video production',
        'His solo career consists of projects such as producing promotional visuals for grammy-nominated artist Tycho, and animating for the viral video Animation vs. Minecraft (200 million views). He regularly puts out personal artwork that blurs the line between traditional hand-drawn techniques and modern CGI tool sets - these projects, set within a psychedelic & cyberpunk universe, are released as a series titled "Mecha Ascent."',
        "Before the inception of his solo career, McAfee worked as a designer at an ad agency called FCB. Highlights during his time at FCB include directing the inaugural episode of Ad Age Illustrated for AdAge.com, working on the City of Chicago's pitch to Amazon for HQ2, and executing visual effects on Jeep's 2018 Super Bowl ad. His work at FCB has been celebrated at Cannes, D&AD, and CommArts",
      ],
      designerCountry: 'United States',
      designerCountryFlagIcon: './images/icons/usa.png',
      designerSocialMedia: List([
        {
          name: 'instagram',
          href: 'https://www.instagram.com/mcafee.design/ ',
        },
      ]),
    },
    {
      id: 'O-1',
      designerName: 'Msistema',
      designerPhoto: './images/msistema.jpeg',
      descriptionDesigner: [
        'Msistema is an art director and Motion designer, living in Belgium.',
        'After working in the design Industry for a number of different agencies, he stepped away to start his solo career, focused on specializing in making seamless satisfying CGI loops.',
        'He is an active member of the crypto-art community and a firm believer in the future of cryptocurrencies.',
      ],
      designerCountry: 'Belgium',
      designerCountryFlagIcon: './images/icons/belgium.png',
      designerSocialMedia: List([
        {
          name: 'instagram',
          href: 'https://www.instagram.com/msistema/ ',
        },
        {
          name: 'twitter',
          href: 'https://twitter.com/msistema1',
        },
      ]),
    },
    {
      id: 'O-12',
      designerName: 'Nina Doll',
      designerPhoto: './images/Nina-Doll.jpeg',
      descriptionDesigner: [
        'Designer Paragraph: Nina is originally coming from an analog fashion tailoring background.',
        'She now spends her time experimenting with the creative freedom of the virtual world, where she can create a garment made from any kind of material, can imagine and showcase the clothing in whatever environment that comes to her mind, without any restrictions.',
        'Her main interest currently comes from exploring emotions in the digital space through abstract sculpts.',
      ],
      designerCountry: 'Germany',
      designerCountryFlagIcon: './images/icons/germany.png',
      designerSocialMedia: List([
        {
          name: 'instagram',
          href: 'https://www.instagram.com/dollushka/',
        },
      ]),
    },
    {
      id: 'O-10',
      designerName: 'Rendooo Lab',
      designerPhoto: './images/Rendooo-Lab.jpeg',
      descriptionDesigner: [
        'Rendooo is a humble and always evolving flash-fashion 3D design and development studio.',
        'Rendooo operates at the intersection of fashion and technology fabricating digital samples of the designs of the big names of fast-fashion (and their suppliers) in China, Korea, South Europe and USA.',
        'Rendooo decrypts fast-fashion trends and translates 2D sketches into realistic 3D samples for both physical retailers and gamers alike.',
      ],
      designerCountry: 'Spain',
      designerCountryFlagIcon: './images/icons/spain.png',
      designerSocialMedia: List([
        {
          name: 'instagram',
          href: 'https://www.instagram.com/rendooo_lab',
        },
        {
          name: 'website',
          href: 'http://rendooo.com/ ',
        },
      ]),
    },
    {
      id: 'O-8',
      designerName: 'Stanislav Mclygin',
      designerPhoto: './images/Stanislav Mclygin.jpeg',
      descriptionDesigner: [
        'Stanislav is a digital artist with a long history in the games and film industry.',
        'He is inspired by the world of concept art, product design, and architecture, and brings this inspiration into his digital fashion design approach and workflow.',
        'He is often known for mixing interesting shapes and forms with stylized design to create engaging and unique work.',
      ],
      designerCountry: 'Russia',
      designerCountryFlagIcon: './images/icons/russia.png',
      designerSocialMedia: List([
        {
          name: 'linkedIn',
          href: 'https://www.linkedin.com/in/stan-mclygin-67685454/',
        },
      ]),
    },
    {
      id: 'O-4',
      designerName: 'Vitaly Kovalev',
      designerPhoto: './images/Vitaly-Kovalev.jpeg',
      descriptionDesigner: [
        'Vitaly is a 3d artist and designer.',
        "He is passionate about mixing hard surface technology with organic forms to construct both a highly creative outlook and also great technical grasp of his designs. His work develops realism as he takes inspiration from more of life's simple moments, key heuristics of human nature, and combining this with the fundamental principles of design, drawing, photography and cinematography.",
        'Vitaly believes that with 3D art, we can create things that defy all possibilities, that have never been constructed before. He is currently involved in projects across some of the industries leading fashion brands.',
      ],
      designerCountry: 'Russia',
      designerCountryFlagIcon: './images/icons/russia.png',
      designerSocialMedia: List([
        {
          name: 'website',
          href: 'https://www.artstation.com/levitaru',
        },
      ]),
    },
    {
      id: 'O-15',
      designerName: 'Album Corvum',
      designerPhoto: './images/Album-Corvum.jpeg',
      descriptionDesigner: [
        'Since childhood Album was always drawn to the world of art and visual expression.',
        'In time, he was led towards 3D and design, becoming fascinated by the ability to be able to give life to drawings and digital form.',
        'Album centers his designs around bold styles, colours, and then contrasting this through unifying patterns and extra magnification of select details',
      ],
      designerCountry: 'Ukraine',
      designerCountryFlagIcon: './images/icons/ukraine.png',
      designerSocialMedia: List([
        {
          name: 'instagram',
          href: 'https://www.instagram.com/vlad.voronin.33/ ',
        },
      ]),
    },
    {
      id: '5',
      designerName: 'Xander Smith',
      designerPhoto: './images/Xander-Designer.jpeg',
      descriptionDesigner: [
        'Xander is a founding member and the Lead Digital Artist at Aliza Technologies, where they are working to use AI and deep-learning techniques for animation and character design.',
        'He has a background working as a concept artist in film and television.',
        'Some of his favorite projects include American Horror Story, Aquaman, Godzilla vs. King Kong, and Star Wars: The Mandalorian.',
        'He is excited about the future intersection of character design, deep-learning, and digital fashion',
      ],
      designerCountry: 'United States',
      designerCountryFlagIcon: './images/icons/usa.png',
      designerSocialMedia: List([
        {
          name: 'website',
          href: 'https://www.xandersmithdesign.com/',
        },
      ]),
    },
    {
      id: 'O-20',
      designerName: 'Gwen Kim (JAK 3D)',
      designerPhoto: './images/Gwen photo.jpeg',
      descriptionDesigner: [
        'Gwen aims to bring out minor cultural sensibilities and incorporate them into her fashion. It all started with her preference and interest in Asian visual culture. ',
        'Her works have won her awards in illustrations and other design fields. She is now working with a variety of brands to further highlight her appearance as a digital designer, where she also collaborates regularly across projects in the gaming industry.',
      ],
      designerCountry: 'South Korea',
      designerCountryFlagIcon: './images/icons/southkorea.png',
      designerSocialMedia: List([
        {
          name: 'instagram',
          href: 'https://www.instagram.com/jak_3d/',
        },
      ]),
    },
    {
      id: 'O-21',
      designerName: 'Sasa3dimensions',
      designerPhoto: './images/Elisa photo.jpeg',
      descriptionDesigner: [
        'Elisa is an Italian fashion designer who discovered in 3D, not only an innovative method of design, but a real means of communication.',
        'In 3D she is able to achieve full self expression and create a whole world of meaning and detail around her creations— giving life to something completely new. When she was young she used to steal from her mother’s wardrobe some old forwards or tiny pieces of fabric in order to create the look of her imagination. Years later and nothing has changed. It has just evolved in a constant exchange of impressions and knowledge.',
      ],
      designerCountry: 'Italy',
      designerCountryFlagIcon: './images/icons/italy.png',
      designerSocialMedia: List([
        {
          name: 'instagram',
          href: 'https://www.instagram.com/sasa3dimensions/',
        },
      ]),
    },
    {
      id: 'O-22',
      designerName: 'Alyona Briukhanova',
      designerPhoto: './images/alyona photo.jpeg',
      descriptionDesigner: [
        'Alyona is an independent fashion stylist and visual merchandiser who has been working in 3D innovative technologies and fashion since 2007.',
        'She blends her international work experience with a BA degree in Fashion Styling. In September 2020 she launched a digital styling project — DGTL Stylist. She was also the the Digital-Only Fashion Contest 2020 Gran Prix Winner.',
      ],
      designerCountry: 'Ukraine',
      designerCountryFlagIcon: './images/icons/ukraine.png',
      designerSocialMedia: List([
        {
          name: 'instagram',
          href: 'https://www.instagram.com/dgtl_stylist/',
        },
      ]),
    },
    {
      id: 'O-23',
      designerName: 'Alexander Kurmanin',
      designerPhoto: './images/alex photo.jpeg',
      descriptionDesigner: [
        'Alexander is a clothing designer who sees a future that is all about 3D and digital. His works focus on painting a unique picture of what our clothes might look like when the boundaries and limitations of the physical world are no longer present. He is certain that digital fashion is what will be worn in 20–30 years.',
      ],
      designerCountry: 'Russia',
      designerCountryFlagIcon: './images/icons/russia.png',
      designerSocialMedia: List([
        {
          name: 'instagram',
          href: 'https://www.instagram.com/kurmanin_tailor/',
        },
      ]),
    },
    {
      id: 'O-24',
      designerName: 'AVA3Ddesigners',
      designerPhoto: './images/1_dZjpCBlRAwo02PM2evsDcQ.jpeg',
      descriptionDesigner: [
        'After years of Mina working and tutoring fashion design and dressmaking, and after years of her friend Pegah map-making and freelancing in fashion design, they decided to join forces as a team to create a new way of offering visual delicacies. They gave life to AVA3Ddesigners, mixing passion for artistic designs with advanced technological instruments, where the middle-eastern taste of colors and designs meets the new era of computer designing.',
      ],
      designerCountry: 'Australia',
      designerCountryFlagIcon: './images/icons/au.png',
      designerSocialMedia: List([
        {
          name: 'instagram',
          href: 'https://www.instagram.com/ava3ddesigners/',
        },
      ]),
    },
    {
      id: 'O-25',
      designerName: 'YeKaterina Burmatnova',
      designerPhoto: './images/1_8-FRZqSRY877n84t9Ey7Cg.jpeg',
      descriptionDesigner: [
        'Yekaterina Burmatnova is a Russian transplant living in NYC. She uses her heritage and the city she lives in to drive and inspire her design aesthetic.',
        'She is a dedicated knitwear and sweaters designer that found an escape from everyday life in 3D design. Besides work, here are a few of her favorite things: hanging out with her 2-year old fur baby, Mango, traveling, baking bread and getting tattoos.',
      ],
      designerCountry: 'United States',
      designerCountryFlagIcon: './images/icons/usa.png',
      designerSocialMedia: List([
        {
          name: 'instagram',
          href: 'https://www.instagram.com/yekaterinab/',
        },
      ]),
    },
    {
      id: 'O-18',
      designerName: 'Mar Guixa Studio',
      designerPhoto: './images/Mar-Guixa-Studio.jpeg',
      descriptionDesigner: [
        'Mar Guixa is the founder of Mar Guixa Studio studio— a design studio based in Barcelona. Mar is an emerging virtual fashion designer who loves the interaction of colors and shapes, quality rather than quantity and bringing unique creative concepts behind digitally constructed garments. She believes that the essence of the fashion industry lies in living constantly between reality and art. She is passionate about art, tech and the exploration of creative’s limit',
      ],
      designerCountry: 'Spain',
      designerCountryFlagIcon: './images/icons/spain.png',
      designerSocialMedia: List([
        {
          name: 'website',
          href: 'https://www.marguixastudio.com/',
        },
      ]),
    },
    {
      id: 'O-27',
      designerName: 'María Ruano',
      designerPhoto: './images/maria photo.jpeg',
      descriptionDesigner: [
        'Maria studied fashion at the IED Istituto Europeo de Madrid.',
        'After finishing her studies, she was the winner of the international young talent competition “My Own Show”, where she was able to present her collections in Milan under the support of Franca Sozzani, Vogue Italia and Alberta Ferretti.',
        'For 6 years she led the relaunch and rebranding of the iconic Spanish brand “Amarras”, before conducting the Hacer Virtual Fashion Project, where she creates collections of virtual garments under the Make brand and collaborates with various brands and fashion platforms, both physical and digital.',
      ],
      designerCountry: 'Spain',
      designerCountryFlagIcon: './images/icons/spain.png',
      designerSocialMedia: List([
        {
          name: 'instagram',
          href: 'https://www.instagram.com/hacer_virtualfashion/',
        },
      ]),
    },
    {
      id: 'O-28',
      designerName: 'Burak Dahan',
      designerPhoto: './images/burak photo.jpeg',
      descriptionDesigner: [
        'Right after graduating from Chemistry in 2012, Burak took a distinct change and followed his calling by studying Fashion Design and started to build up a strong career in the industry. His works were recognized by fashion authorities in many design competitions, where he even became the "Gold Award Winner" at the EURASIA REMIX 2016.',
        'Years later when he was introduced to digital fashion, he fell in love with this new world of design possibilities and expanded his creativity to a new level by escaping from restrictions and norms of the physical world. His works reflect versatility and there is no limit when it comes to his source of inspiration. ',
      ],
      designerCountry: 'Turkey',
      designerCountryFlagIcon: './images/icons/turkey.png',
      designerSocialMedia: List([
        {
          name: 'instagram',
          href: 'https://www.instagram.com/burak.dahan/',
        },
      ]),
    },
    {
      id: 'O-29',
      designerName: 'Rtfkt',
      designerPhoto: './images/Rtfkt.jpeg',
      descriptionDesigner: [
        'RTFKT is a very eclectic, creator led organisation who built their reputation with unique Sneakers, such as the Cybersneaker or NZXT “Gaming Sneaker”.',
        'Formed by three friends at the beginning of the COVID era, RTFKT was born on the metaverse, and this has defined its feel to this day.',
      ],
      designerCountry: 'United States',
      designerCountryFlagIcon: './images/icons/usa.png',
      designerSocialMedia: List([
        {
          name: 'twitter',
          href: 'https://twitter.com/RTFKTstudios',
        },
      ]),
    },
    {
      id: 'O-30',
      designerName: 'DressX',
      designerPhoto: './images/_IHJ1RVX_200x200.jpg',
      descriptionDesigner: [
        "We strongly believe that the amount of clothing produced today is way greater than humanity needs. We share the beauty and excitement that physical fashion creates, but we believe that there are ways to produce less, to produce more sustainably, and not to produce at all. At a current stage of DressX development, we aim to show that some clothes can exist only in their digital versions. Don't shop less, shop digital fashion.",
      ],
      designerCountry: 'United States',
      designerCountryFlagIcon: './images/icons/usa.png',
      designerSocialMedia: List([
        {
          name: 'twitter',
          href: 'https://twitter.com/dressxcom',
        },
      ]),
    },
    {
      id: '108',
      ids: [
        '108',
        '1717',
        '1718',
        '1719',
        '1720',
        '1721',
        '1722',
        '1746',
        '1810',
        '2346',
        '2347',
        '2348',
        '2349',
        '2350',
        '2628',
        '2629',
        '2630',
        '2631',
        '2632',
        '3',
        '4',
        '5',
        '6',
        '1874',
        '1938',
        '2002',
        '2130',
        '2258',
        '2351',
        '2479',
        '3553',
        '2700',
        '2764',
        '2828',
        '2892',
        '2956',
        '3020',
        '3148',
        '3276',
        '3404',
        '100',
        '133',
        '197',
        '261',
        '389',
        '517',
        '645',
        '10',
        '1',
        '2',
      ],
      designerName: 'Cosmos',
      designerPhoto: './images/QmSfpPJJhS4MEEt912qB2fg8JdGj5VKrVUXDoEyGoQtAHk.png',
      descriptionDesigner: [
        'Cosmos, also know as Andressa Lara, is an artist who started her small career through poor financial conditions before turning into an adult, mainly drawing with a mouse. Her fantasy with games is vivid and creative to the point where she can combine different things that are almost impossible to work with. She believes that stories in arts can teach value to others, and that her work will do the same.',
      ],
      designerCountry: 'Brazil',
      designerCountryFlagIcon: './images/icons/brazil.png',
      designerSocialMedia: List([]),
    },
    {
      id: '2607',
      ids: ['2607', '2633', '2658', '2679', '3532', '773'],
      designerName: 'Digitalax',
      designerPhoto: './images/logo.jpg',
      descriptionDesigner: [''],
      designerCountry: 'United States',
      designerCountryFlagIcon: './images/icons/usa.png',
      designerSocialMedia: List([]),
    },
    {
      id: '2608',
      designerName: 'Cleora',
      designerPhoto: './images/cleoraskin (1) 1.png',
      descriptionDesigner: [
        'Cleora is an absolutely talented veteran skin designer in the Minecraft community. She started designing MC skins back in 2015 and since then has amassed tens of thousands of downloads. Let’s just say that she is definitely a Master Skinner!',
      ],
      designerCountry: 'United States',
      designerCountryFlagIcon: './images/icons/usa.png',
      designerSocialMedia: List([]),
    },
  ]),
  designerIDs: List(designerList),
});

export default createModule({
  name: 'designer',
  initialState: cloneDeep(DEFAULT_FIELDS),
  transformations: cloneDeep(TransformModules(DEFAULT_FIELDS)),
});
