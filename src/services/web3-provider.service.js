const options = {
  clientId: 'DIGITALAX',
  // rpcUrl: 'https://kovan.infura.io/v3/YOUR-PROJECT-ID', //optional
  environment: 'staging', //optional, production by default
  // signMethod: 'POPUP', //optional, REDIRECT by default
  // bearerTokenProvider: () => 'obtained_bearer_token', //optional, default undefined
  //optional: you can set an identity provider to be used when authenticating
  // authenticationOptions: {
  //   idpHint: 'google'
  // },
  secretType: 'ETHEREUM' //optional, ETHEREUM by default
};

export const getArkaneProvider = async () =>
  await Arkane.createArkaneProviderEngine(options);
