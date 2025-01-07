// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Verify {
    uint public count = 1; 
    function verify() public pure returns (bool) {
        return true;
    }
    function show() public pure returns (string memory)  {
        return "ok";
    }
}