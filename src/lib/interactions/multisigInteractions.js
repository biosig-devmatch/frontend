
import { ethers } from 'ethers';

const scrollSepoliaRpcUrl = "https://sepolia-rpc.scroll.io/";

const MultisigABI = [
    {
      "inputs": [
        { "internalType": "address[]", "name": "owners", "type": "address[]" },
        { "internalType": "uint256", "name": "requiredSignatures", "type": "uint256" }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "value", "type": "uint256" },
        { "internalType": "bytes", "name": "data", "type": "bytes" }
      ],
      "name": "submitTransaction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "transactionId", "type": "uint256" }],
      "name": "signTransaction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "transactionId", "type": "uint256" }],
      "name": "getTransaction",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" },
        { "internalType": "uint256", "name": "", "type": "uint256" },
        { "internalType": "bytes", "name": "", "type": "bytes" },
        { "internalType": "bool", "name": "", "type": "bool" },
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getOwners",
      "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRequiredSignatures",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    }
  ];

export async function interactWithMultisig(multisigAddress) {
  try {
    const provider = new ethers.JsonRpcProvider(scrollSepoliaRpcUrl);
    const contract = new ethers.Contract(multisigAddress, MultisigABI, provider);

    // Example: Get owners of the Multisig
    const owners = await contract.getOwners();
    console.log("Owners of Multisig at", multisigAddress, ":", owners);

    // Example: Get required signatures
    const requiredSignatures = await contract.getRequiredSignatures();
    console.log("Required signatures:", requiredSignatures);

    // Example: Get a specific transaction (assuming transaction ID 0 exists)
    try {
      const transaction = await contract.getTransaction(0);
      console.log("Transaction 0:", transaction);
    } catch (error) {
      console.log("No transaction with ID 0 found");
    }

    // You can add more interactions here based on your needs

    return { owners, requiredSignatures };
  } catch (error) {
    console.error("Error interacting with Multisig contract:", error);
    throw error;
  }
}