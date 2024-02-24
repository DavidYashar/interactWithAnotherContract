// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// Uncomment this line to use console.log
// import "hardhat/console.sol";


interface OtherContract {
    function attempt() external;
}

contract CallerContract {
    address public otherContractAddress =0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502;
    OtherContract public contractInstance;

    constructor() {
        contractInstance = OtherContract(otherContractAddress);
    }

    function interactAttempt() external {
        // Call the attempt function of the other contract
        contractInstance.attempt();
    }
}

