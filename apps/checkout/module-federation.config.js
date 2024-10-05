const moduleFederationConfig = {
  name: 'checkout',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

module.exports = moduleFederationConfig;
