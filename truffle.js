var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "banana pear orange";
var infura_apikey = "abcd";


module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
      network_id: 3,
      gas: 4700000,
      price: 1000000
    }
  }
};