export const reviseUrl = (url) => {
  if (url?.includes('gateway.pinata')) {
    return url.replace('gateway.pinata', 'digitalax.mypinata');
  }
  return url;
};

export const getRarityId = (rarity) => {
  if (rarity === 'Exclusive') {
    return 1;
  } else if (rarity === 'Semi-Rare' || rarity === 'Semi Rare') {
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
};

export const filterProducts = (prods, filter, sortBy) => {
  let filteredProducts = [...prods];
  if (filter.length) {
    filteredProducts = prods.filter(
      (prod) =>
        prod.designer?.name.toLowerCase().includes(filter.toLowerCase()) ||
        prod.garment?.name.toLowerCase().includes(filter.toLowerCase()) ||
        prod.owners?.find(
          (item) => item.username && item.username.toLowerCase().includes(filter.toLowerCase()),
        ),
    );
  }
  if (sortBy) {
    switch (sortBy) {
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
        filteredProducts = filteredProducts.filter(
          (prod) => prod.auction && parseInt(prod.endTime) < Date.now() / 1000,
        );
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
};

export const generateLookImage = (item) => {
  const { id, name, background, color, texture, pattern, shape, flare, form, line, element } = item;

  const imageString = `
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350"><style>@import url("https://fonts.googleapis.com/css?family=Inknut+Antiqua:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic"); .base { fill: white; font-family: Inknut Antiqua; font-size: 10.8px; font-weight:bold; }</style><rect width="100%" height="100%"
      fill="#${background}" /><text x="245" y="20" class="base"> LookBook #${id}</text>
      <text x="10" y="60" class="base">${pattern}</text>
      <text x="10" y="80" class="base">${texture}</text>
      <text x="10" y="100" class="base">${color}</text>
      <text x="10" y="120" class="base">${line}</text>
      <text x="10" y="140" class="base">${flare}</text>
      <text x="10" y="160" class="base">${shape}</text>
      <text x="10" y="180" class="base">${form}</text>
      <text x="10" y="200" class="base">${element}</text></svg>`;

  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(imageString)));
};
