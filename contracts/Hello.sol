
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;
import "hardhat/console.sol";

contract Hello {
    uint counter;

    function hello() public {
        counter ++;
        console.log("Now, counter is: ", counter);
    } 

    function timeCount() view external {
        console.log(uint32(block.timestamp));
    }

}
