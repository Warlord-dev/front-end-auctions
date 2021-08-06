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
