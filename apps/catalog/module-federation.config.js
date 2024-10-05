const moduleFederationConfig = {
  name: 'catalog',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

module.exports = moduleFederationConfig;
