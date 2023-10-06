require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: process.env.REACT_APP_RINKEBY_RPC_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY]
    }
  },
}
