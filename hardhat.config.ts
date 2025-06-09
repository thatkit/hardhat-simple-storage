import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import 'dotenv/config';
import 'solidity-coverage';

// https://youtu.be/gyMwXuJrbJQ?t=33937

const config: HardhatUserConfig = {
  solidity: '0.8.28',
  defaultNetwork: 'hardhat',
  networks: {
    sepolia: {
      url: 'https://ethereum-sepolia-rpc.publicnode.com',
      accounts: [process.env.PRIVATE_KEY || ''],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.EXPLORER_API_KEY || '',
    },
  },
  sourcify: {
    enabled: true,
  },
};

export default config;
