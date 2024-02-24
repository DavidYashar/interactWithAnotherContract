const hre = require("hardhat");
require('dotenv').config();

const CONTRACT_ADDR = "0x9e9Bf565D8dE9344094070339d79171387637ca1";

async function main(){

        const ContractABI = [
            {
                "constant": false,
                "inputs": [],
                "name": "interactAttempt",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "Winner",
                "type": "event"
            }
            ];

        const CallerContract = await hre.ethers.getContractAt(ContractABI, CONTRACT_ADDR);

        const tx = await CallerContract.interactAttempt();
 
        await tx.wait();
//     await console.log(" the winners emitted", await CallerContract.attempt());
}
main().catch((error) => {
        console.error(error);
        process.exitCode =1;
    })
