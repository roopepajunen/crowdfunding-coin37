const Coin37 = artifacts.require("./Coin37");
const Coin37Crowdsale = artifacts.require("./Coin37Crowdsale");

module.exports = function(deployer, network, accounts) {
    const cap = new web3.BigNumber(270000)
    const rate = new web3.BigNumber(20);
    const wallet = accounts[1];
   
    /*
    return deployer.deploy([
        [Coin37, cap],
        [Coin37Crowdsale, rate, wallet, Coin37.address]
    ]);
    */
   
    return deployer
    .then(() => {
        return deployer.deploy(Coin37, cap);
    })
    .then(() => {
        return deployer.deploy(
            Coin37Crowdsale,
            rate,
            wallet,
            Coin37.address
        );
    });
};