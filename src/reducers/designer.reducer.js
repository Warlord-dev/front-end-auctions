/* eslint-disable max-len */
import { createModule } from 'redux-modules';
import cloneDeep from 'lodash.clonedeep';
import { Map, List } from 'immutable';
import TransformModules from '../utils/transform-modules';

const DEFAULT_FIELDS = Map({
  designersById: Map({}),
  designerGarmentIds: List([]),
  infoByDesignerId: List([
    {
      id: '0x7cae538968727b73be60d01bd198a7a9613e6a4c',
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
      id: '0xcec711b7fa42683260ad8402247455c04d98c463',
      designerName: '3dBehemoth',
      designerPhoto: '',
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
      id: '0x321e73dbf24f31b25c515e52b362185888d111b1',
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
      id: '0x64caa1f61e012594e757c0ea7e1801ab18ef9285',
      designerName: 'HonoreHL',
      designerPhoto: './images/HonoreHL.jpeg',
      descriptionDesigner: ['Hirwa Leon Honore is a 3d artist from Rwanda. He is most experienced with animation, modeling, and shading. His work inspires to simultaneously merge traditional and contemporary culture driven styles, that aim to paint a richly diverse and fantastical picture of digital clothing possibilities and bring about a minimal, yet fashion forward style.'],
      designerCountryFlagIcon: './images/icons/',
      designerSocialMedia: List([
        {
          name: 'instagram',
          href: 'https://www.instagram.com/honorehl/ ',
        },
      ]),
    },
    {
      id: '0xa53cc97d140ba317bd6272a2af0f8d3eae4809bb',
      designerName: 'Lorena Bello',
      designerPhoto: './images/Lorena-Bellow.jpeg',
      descriptionDesigner: ['Designer Paragraph: Lorena Bello is a Spanish 3D Fashion and Graphic Designer. Driven-by her passion for design, she turned her life 180º when in 2013 she decided to change her professional path by leaving her corporate career (She also has a Law Degree) to start completely afresh as a Digital Fashion Designer. From this moment she has followed her passion working in fashion in London, Milan and Madrid.'],
      designerCountry: 'Spain',
      designerCountryFlagIcon: './images/icons/spain.png',
      designerSocialMedia: List([
        {
          name: 'instagram',
          href: 'https://www.instagram.com/studiolobe/?hl=en',
        },
        {
          name: '',
          href: 'https://en.studiolobe.com/',
        },
      ]),
    },
    {
      id: '0x430e85c85f2324f4d3018f7c5c1d7bc12f6fa5e8',
      designerName: 'Mar Guixa Studio',
      designerPhoto: './images/Mar-Guixa-Studio.jpeg',
      descriptionDesigner: ['Mar Guixa is the founder of Mar Guixa Studio studio— a design studio based in Barcelona. Mar is an emerging virtual fashion designer who loves the interaction of colors and shapes, quality rather than quantity and bringing unique creative concepts behind digitally constructed garments. She believes that the essence of the fashion industry lies in living constantly between reality and art. She is passionate about art, tech and the exploration of creative’s limit'],
      designerCountry: 'Spain',
      designerCountryFlagIcon: './images/icons/spain.png',
      designerSocialMedia: List([
        {
          name: 'website',
          href: 'https://www.marguixastudio.com/ ',
        },
      ]),
    },
    {
      id: '',
      designerName: 'McAfee.Design',
      designerPhoto: './images/McAfee-Design.jpeg',
      descriptionDesigner: [
        'McAfee.Design is Michael McAfee - Designer and Artist with a background in video production',
        'His solo career consists of projects such as producing promotional visuals for grammy-nominated artist Tycho, and animating for the viral video Animation vs. Minecraft (200 million views). He regularly puts out personal artwork that blurs the line between traditional hand-drawn techniques and modern CGI tool sets - these projects, set within a psychedelic & cyberpunk universe, are released as a series titled "Mecha Ascent."',
        'Before the inception of his solo career, McAfee worked as a designer at an ad agency called FCB. Highlights during his time at FCB include directing the inaugural episode of Ad Age Illustrated for AdAge.com, working on the City of Chicago\'s pitch to Amazon for HQ2, and executing visual effects on Jeep\'s 2018 Super Bowl ad. His work at FCB has been celebrated at Cannes, D&AD, and CommArts',
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
      id: '0xff0c60609522fb053e58ac106ebb7d48ff3d0ccb',
      designerName: 'Msistema',
      designerPhoto: './images/msistema.jpeg',
      descriptionDesigner: [
        'Msistema is an art director and Motion designer, living in Belgium.',
        'After working in the design Industry for a number of different agencies, he stepped away to start his solo career, focused on specializing in making seamless satisfying cgi loops.',
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
      id: '0x2456862a0b57814371287de31cc617ca22e096a8',
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
      id: '',
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
      id: '0x2937f59bd9740f5cfd4d74e545f355bbd2fe0e90',
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
      id: '0x3c7558b416673aa01350fbfe1b63db477432c4cb',
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
      id: '',
      designerName: 'Album Corvum',
      designerPhoto: './images/Album-Corvum.jpeg',
      descriptionDesigner: [
        'Since childhood Album was always drawn to the world of art and visual expression.',
        'In time, he was led towards 3D and design, becoming fascinated by the ability to be able to give life to drawings and digital form.',
        'Album centers his designs around bold styles, colours, and then contrasting this through unifying patterns and extra magnification of select details',
      ],
      designerCountry: 'Russia',
      designerCountryFlagIcon: './images/icons/russia.png',
      designerSocialMedia: List([
        {
          name: 'instagram',
          href: 'https://www.instagram.com/vlad.voronin.33/ ',
        },
      ]),
    },
    {
      id: '0x29bd7bd73a6748acfc7c55f708de95deb042e9f3',
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
  ]),
});

export default createModule({
  name: 'designer',
  initialState: cloneDeep(DEFAULT_FIELDS),
  transformations: cloneDeep(TransformModules(DEFAULT_FIELDS)),
});
