pragma solidity ^0.4.23;

import "../node_modules/zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "../node_modules/zeppelin-solidity/contracts/token/ERC20/CappedToken.sol";
import "../node_modules/zeppelin-solidity/contracts/token/ERC20/PausableToken.sol";

contract Coin37 is StandardToken, PausableToken, CappedToken {
    string public name = "COIN 37";
    string public symbol = "C37";
    uint8 public decimals = 18;

    constructor(
        uint256 _cap
        )
        public
        CappedToken(_cap)
    { }
}