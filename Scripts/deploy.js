const hre = require("hardhat");
require("dotenv").config();

async function main() {
  // Deploy CallerContract
  const CallerContract = await hre.ethers.getContractFactory("CallerContract");
  const caller = await CallerContract.deploy();
  
  await caller.waitForDeployment();

  console.log("contract caller is deployed with address",await caller.getAddress());

  }

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
