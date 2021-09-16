export const reviseUrl = (url) => {
  if (url?.includes('gateway.pinata')) {
    return url.replace('gateway.pinata', 'digitalax.mypinata');
  }
  return url;
};

export const getRarityId = (rarity) => {
  if (rarity === 'Exclusive') {
    return 1;
  } else if (rarity === 'Semi-Rare') {
    return 2;
  } else {
    return 3;
  }
};

export const getRarity = (rarity) => {
  if (rarity === 1) {
    return 'Exclusive';
  } else if (rarity === 2) {
    return 'Semi Rare';
  } else {
    return 'Common';
  }
}

export const filterProducts = (prods, filter, sortBy) => {
  let filteredProducts = [...prods];
  if (filter.length) {
    filteredProducts = prods.filter((prod) => prod.designer?.name.toLowerCase().includes(filter.toLowerCase()) || prod.garment?.name.toLowerCase().includes(filter.toLowerCase()))
  }
  if (sortBy) {
    switch(sortBy) {
      case '1':
        filteredProducts.sort((a, b) => {
          if (parseInt(a.startTime) < parseInt(b.startTime)) return 1;
          if (parseInt(a.startTime) > parseInt(b.startTime)) return -1;
          return 0;
        });
        break;
      case '2':
        filteredProducts.sort((a, b) => {
          const aPrice = a.primarySalePrice || a.topBid || 0;
          const bPrice = b.primarySalePrice || b.topBid || 0;
          if (BigInt(aPrice) < BigInt(bPrice)) return 1;
          if (BigInt(aPrice) > BigInt(bPrice)) return -1;
          return 0;
        });
        break;
      case '3':
        filteredProducts.sort((a, b) => {
          const aPrice = a.primarySalePrice || a.topBid || 0;
          const bPrice = b.primarySalePrice || b.topBid || 0;
          if (BigInt(aPrice) > BigInt(bPrice)) return 1;
          if (BigInt(aPrice) < BigInt(bPrice)) return -1;
          return 0;
        });
        break;
      case '4':
        filteredProducts = filteredProducts.filter((prod) => prod.auction && parseInt(prod.endTime) < Date.now() / 1000);
        break;
      case '5':
        filteredProducts = filteredProducts.filter((prod) => prod.auction);
        break;
      case '6':
        filteredProducts = filteredProducts.filter((prod) => !prod.auction);
        break;
      case '7':
        filteredProducts = filteredProducts.filter((prod) => prod.rarity === 'Exclusive');
        break;
      case '8':
        filteredProducts = filteredProducts.filter((prod) => prod.rarity === 'Semi-Rare');
        break;
      case '9':
        filteredProducts = filteredProducts.filter((prod) => prod.rarity === 'Common');
        break;
    }
  }
  return filteredProducts;
}