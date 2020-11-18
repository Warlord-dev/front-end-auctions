/* eslint-disable max-len */
import { createModule } from 'redux-modules';
import { List } from 'immutable';
import cloneDeep from 'lodash.clonedeep';

const DEFAULT_FIELDS = List([
  {
    designerId: '1',
    designerName: 'Chamila Hetti',
    designerPhoto: './images/Chamila-Hetti.png',
    descriptionDesigner: 'We are seeking a  logo and graphic designer. I really like your resume and hope we can cooperate. Also, mention the word bingo to prove that you read the entire requirement for the job. Our team is looking for someone who can take our current logos and improve upon them and create some new logo ideas as well.',
    designerCountry: 'uganda',
    designerCountryFlagIcon: './images/icons/uganda.png',
    designerSocialMedia: List([
      {
        name: 'twitter',
        href: '',
      },
      {
        name: 'medium',
        href: '',
      },
      {
        name: 'telegram',
        href: '',
      },
      {
        name: 'github',
        href: '',
      },
      {
        name: 'instagram',
        href: '',
      },
    ]),
  },
  {
    designerId: '2',
    designerName: 'Nessa Verve',
    designerPhoto: './images/Nessa-Verve-large.png',
    descriptionDesigner: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis iusto natus ipsa omnis sunt placeat hic nobis cum at et sit, illo vitae facere rerum dicta vel obcaecati dignissimos. Facere rerum dicta vel obcaecati dignissimos.',
    designerCountry: 'uganda',
    designerCountryFlagIcon: './images/icons/uganda.png',
    designerSocialMedia: List([
      {
        name: 'twitter',
        href: '',
      },
      {
        name: 'medium',
        href: '',
      },
      {
        name: 'telegram',
        href: '',
      },
      {
        name: 'github',
        href: '',
      },
      {
        name: 'instagram',
        href: '',
      },
    ]),
  },
  {
    designerId: '3',
    designerName: 'Sergion Neffortunotti',
    designerPhoto: './images/Sergion-Neffortunotti.png',
    descriptionDesigner: 'We are seeking a  logo and graphic designer. I really like your resume and hope we can cooperate. Also, mention the word bingo to prove that you read the entire requirement for the job. Our team is looking for someone who can take our current logos and improve upon them and create some new logo ideas as well.',
    designerCountry: '',
    designerCountryFlagIcon: '',
    designerSocialMedia: List([
      {
        name: 'twitter',
        href: '',
      },
      {
        name: 'medium',
        href: '',
      },
      {
        name: 'telegram',
        href: '',
      },
      {
        name: 'github',
        href: '',
      },
      {
        name: 'instagram',
        href: '',
      },
    ]),
  },
  {
    designerId: '4',
    designerName: 'Kris Seed',
    designerPhoto: './images/Kris-Seed.png',
    descriptionDesigner: 'We are seeking a  logo and graphic designer. I really like your resume and hope we can cooperate. Also, mention the word bingo to prove that you read the entire requirement for the job. Our team is looking for someone who can take our current logos and improve upon them and create some new logo ideas as well.',
    designerCountry: '',
    designerCountryFlagIcon: '',
    designerSocialMedia: List([
      {
        name: 'twitter',
        href: '',
      },
      {
        name: 'medium',
        href: '',
      },
      {
        name: 'telegram',
        href: '',
      },
      {
        name: 'github',
        href: '',
      },
      {
        name: 'instagram',
        href: '',
      },
    ]),
  },
]);


export default createModule({
  name: 'designersInfo',
  initialState: cloneDeep(DEFAULT_FIELDS),
});
