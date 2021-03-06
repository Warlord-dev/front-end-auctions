export const getArkaneProvider = async () =>
  await Arkane.createArkaneProviderEngine({ clientId: 'Arketype' });
