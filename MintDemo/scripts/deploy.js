// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const NftPunk=await hre.ethers.getContractFactory("NftPunk");
  const nftpunk=await NftPunk.deploy();
  await nftpunk.deploy();
  console.log("NftPunk deployed to",nftpunk.address);
}
main().then(()=>process.exit(0)).catch((error)=>{
  console.error(error);
  process.exit(1);
});