pragma solidity ^0.4.23;

import "./Coin37.sol";
import "../node_modules/zeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol";
import "../node_modules/zeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol";


contract Coin37Crowdsale is Crowdsale {
   
    constructor( 
        uint256 _rate, 
        address _wallet, 
        ERC20 _token
  ) 
    public 
    Crowdsale(_rate, _wallet, _token)
    { } 
}