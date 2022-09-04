import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'MutantDigidaigaku',
  tokenName: 'MutantDigidaigaku NFT',
  tokenSymbol: 'MutantDigidaigaku',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupply: 2100,
  whitelistSale: {
    price: 0.0,
    maxMintAmountPerTx: 5,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.01,
    maxMintAmountPerTx: 8,
  },
  contractAddress: '0xB5871BF31a1BCc35603a9cab4B0aeE58c7b8D7e0',
  marketplaceIdentifier: 'MutantDigidaigakuNFT',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
