const path = require('path');
const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_SECRET_KEY);
const META = { name: `digitalax-${process.env.NODE_APP_INSTANCE ? process.env.NODE_APP_INSTANCE : new Date()}` };
const DST = path.resolve(`${__dirname}/../out`);

const pin = async () => {
  const result = await pinata.pinFromFS(DST, { pinataMetadata: META });
  return result.IpfsHash;
};

const unpin = async (excludeHash) => {

  const result = await pinata.pinList({ metadata: META, status: 'pinned' });

  if (!result.count) {
    return;
  }

  const filtered = result.rows
    .filter(({ ipfs_pin_hash: hash }) => hash !== excludeHash);

  if (!filtered.length) {
    return;
  }

  await Promise.all(
    filtered.map(({ ipfs_pin_hash: hash }) => pinata
      .unpin(hash)
      .then(() => console.log(`Unpinned ${hash}`))
      .catch(console.error)),
  );

};

const main = async () => {
  const hash = await pin();
  await unpin(hash);
};

main();
