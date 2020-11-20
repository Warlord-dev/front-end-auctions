export const createArrayForGallery = (tokenInfo) => {

  const clothesPhotos = [];
  const imagePrefixWithoutAnimation = 'image_';
  let exceptImage = '';

  if (!tokenInfo) {
    return clothesPhotos;
  }

  if (tokenInfo.image_front_url) {
    exceptImage = 'image_front_url';
    clothesPhotos.push({
      isMain: true,
      image: tokenInfo.image_front_url,
      preview: tokenInfo.image_front_url,
    });

  } else {

    const firstFoundImageKey = Object.keys(tokenInfo)
      .find((objectKey) => objectKey.search(imagePrefixWithoutAnimation) !== -1 && tokenInfo[objectKey]);

    if (firstFoundImageKey) {
      exceptImage = firstFoundImageKey;
      clothesPhotos.push({
        isMain: true,
        image: tokenInfo[firstFoundImageKey],
        preview: tokenInfo[firstFoundImageKey],
      });
    }

  }

  Object.keys(tokenInfo).forEach((objectKey) => {
    if (objectKey.search(imagePrefixWithoutAnimation) !== -1 && tokenInfo[objectKey] && exceptImage !== objectKey) {
      clothesPhotos.push({
        image: tokenInfo[objectKey],
        preview: tokenInfo[objectKey],
      });
    }
  });

  if (tokenInfo && tokenInfo.image) {
    clothesPhotos.push({
      isMain: !clothesPhotos.length,
      image: tokenInfo.image,
      preview: tokenInfo.image,
    });
  }

  return clothesPhotos;
};

export const getImageForCardProduct = (tokenInfo) => {

  if (!tokenInfo) {
    return null;
  }

  if (tokenInfo.image_front_url) {
    return tokenInfo.image_front_url;
  }

  const imagePrefixWithoutAnimation = 'image_';
  const firstFoundImageKey = Object.keys(tokenInfo)
    .find((objectKey) => objectKey.search(imagePrefixWithoutAnimation) !== -1 && tokenInfo[objectKey]);

  if (firstFoundImageKey) {
    return tokenInfo[firstFoundImageKey];
  }

  if (tokenInfo.image) {
    return tokenInfo.image;
  }

  return null;

};
