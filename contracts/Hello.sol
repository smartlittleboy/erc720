
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;
import "hardhat/console.sol";

contract Hello {
    uint counter;

    function hello() public {
        counter ++;
        console.log("Now, counter is: ", counter);
    } 

}
