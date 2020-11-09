import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import PageDesignerDescription from '@containers/page-designer-description';


const Designers = () => {
  const router = useRouter();
  const { id } = router.query;

  const clothesInfo = useSelector((state) => state.clothesInfo.toJS());
  const designersInfo = useSelector((state) => state.designersInfo.toJS());
  const infoAboutTransaction = useSelector((state) => state.infoAboutTransaction.toJS());

  const designerInfo = designersInfo.find((item) => item?.designerId === id);
  const allClothesThisDesigner = clothesInfo.filter((row) => row?.designerId === id);
  const currentTradeHistory = infoAboutTransaction.filter((item) => allClothesThisDesigner.some((row) => row.clothesId === item.clothesId));


  return (
    <PageDesignerDescription
      designerInfo={designerInfo}
      allClothesThisDesigner={allClothesThisDesigner}
      currentTradeHistory={currentTradeHistory}
    />
  );
};

export default memo(Designers);
