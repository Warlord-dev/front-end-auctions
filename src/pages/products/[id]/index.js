import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import PageProduct from '@containers/page-product';

const Products = () => {
  const router = useRouter();
  const { id } = router.query;

  const clothesInfo = useSelector((state) => state.clothesInfo.toJS());
  const materials = useSelector((state) => state.materials.toJS());
  const infoAboutTransaction = useSelector((state) => state.infoAboutTransaction.toJS());

  const currentClothesInfo = clothesInfo.find((item) => item?.clothesId === id);
  const currentMaterial = materials.filter((item) => currentClothesInfo?.materialsId.some((row) => row === item.materialId));
  const tradeHistory = infoAboutTransaction.filter((row) => row?.clothesId === currentClothesInfo?.clothesId);

  return <PageProduct currentClothesInfo={currentClothesInfo} currentMaterial={currentMaterial} tradeHistory={tradeHistory} />;
};


export default memo(Products);
