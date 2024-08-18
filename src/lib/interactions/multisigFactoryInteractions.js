import { ethers } from 'ethers';

export const contractAddress = "0x96f45a38490D74FE6c34aEeE06c1098d5dA287d6";
export const MultisigFactoryABI = [
  {"inputs":[{"internalType":"address","name":"_implementation","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_deployer","type":"address"},{"indexed":false,"internalType":"string","name":"_name","type":"string"},{"indexed":false,"internalType":"address","name":"_deployedContract","type":"address"},{"indexed":false,"internalType":"address","name":"_implementation","type":"address"}],"name":"ContractDeployed","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_caller","type":"address"},{"indexed":false,"internalType":"address","name":"_implementation","type":"address"}],"name":"ImplementationUpdated","type":"event"},
  {"inputs":[{"internalType":"address","name":"_deployer","type":"address"}],"name":"countDeployed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"deployContract","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"getAllDeployedContracts","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"_deployer","type":"address"}],"name":"getDeployed","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"getDeployedAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"_implementation","type":"address"}],"name":"setImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"}
];

// Scroll Sepolia RPC URL
export const scrollSepoliaRpcUrl = "https://sepolia-rpc.scroll.io/";

export async function getAllDeployedContracts() {
  try {
    const provider = new ethers.JsonRpcProvider(scrollSepoliaRpcUrl);
    const contract = new ethers.Contract(contractAddress, MultisigFactoryABI, provider);
    const deployedContracts = await contract.getAllDeployedContracts();
    console.log("Deployed Contracts:", deployedContracts);
    return deployedContracts;
  } catch (error) {
    console.error("Error fetching deployed contracts:", error);
    throw error;
  }
}

