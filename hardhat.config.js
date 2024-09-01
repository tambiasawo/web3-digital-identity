require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const fs = require("fs");
const privatekey = fs.readFileSync("secret.txt").toString();

module.exports = {
  solidity: "0.8.24",
  allowUnlimitedContractSize: true,
  throwOnTransactionFailures: true,
  throwOnCallFailures: true,
  loggingEnabled: true,
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
      chainId: 4202,
    },
    BitTorrent: {
      url: "https://pre-rpc.bt.io/",
      accounts: [privatekey],
      gasPrice: 1000000000,
    },
  },
};
