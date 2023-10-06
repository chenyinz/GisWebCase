import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const SEPOLIA_PRIVATE_KEY="bc7c254c422392da608d65c45afa989c144f371e3401c3b484e2ced02cf67987"
const config: HardhatUserConfig = {
  solidity: "0.8.18",
  etherscan: {
    apiKey: {
      sepolia: 'U2T5Q8GAZVBT1WT1BYKATIYGSBMWZGPF4P'
    }
  },
  networks:{
    sepolia:{url:"https://eth-sepolia.g.alchemy.com/v2/qLgHbw6oPtnslWIOZBLwR4k1PDQveok2",
    accounts:[SEPOLIA_PRIVATE_KEY]}
  }
};

export default config;
