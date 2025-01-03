 import "@nomicfoundation/hardhat-toolbox";
 import "@nomicfoundation/hardhat-ethers";
 import "hardhat-gas-reporter"

type Config = import("hardhat/config").HardhatUserConfig;

/** @type import('hardhat/config').HardhatUserConfig */
const config: Config = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
      chainId: 31337
    },
    sepolia_eth: {
      url: "https://eth-sepolia.g.alchemy.com/v2/baGnXi0fWSLrPq3j9WSnGJTP5gwPfRsO",
      accounts: ["06d3164ec2ae3ace74470c26300a0a51110b426ffde725628792118bbda99aed"]
    }
  },
  gasReporter: {
    enabled: false
  },
  etherscan: {
    apiKey: {
      sepolia: "US1JDKTJYQNKENG1UBVDVEMVARHCHITJ3G"
    }
  }
};

export default config;
