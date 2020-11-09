import React, { memo } from 'react';
import content from './content';
import GeneralInformation from './general-information';
import CardList from './card-list';

const PageProductsList = () => (
  <>
    <GeneralInformation {...content[0]} />
    <CardList {...content[1]} />
  </>
);

export default memo(PageProductsList);
