require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/HIKl2O9KElGdjfFmeka0lWMNYE22qGl0',
      accounts: [process.env.WALLET_PRIVATE_KEY],
    },
  },
};