"use client"
import React, { useState, useEffect } from 'react';
import { getAllDeployedContracts } from '@/lib/interactions/multisigFactoryInteractions';
import { interactWithMultisig } from '@/lib/interactions/multisigInteractions';

export default function MultisigExistingAccountPage() {
  const [deployedContracts, setDeployedContracts] = useState([]);
  const [contractOwners, setContractOwners] = useState<{ [key: string]: string[] }>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchContractsAndOwners() {
      try {
        // Fetch all deployed contract addresses
        const contracts = await getAllDeployedContracts();
        setDeployedContracts(contracts);

        // Fetch owners for each contract
        const ownersData: { [key: string]: string[] } = {};
        for (const contractAddress of contracts) {
          const { owners } = await interactWithMultisig(contractAddress);
          ownersData[contractAddress] = owners;
        }
        setContractOwners(ownersData);

        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    }

    fetchContractsAndOwners();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Deployed Multisig Contracts</h1>
      {deployedContracts.length === 0 ? (
        <p>No contracts deployed yet.</p>
      ) : (
        <ul className="space-y-4">
          {deployedContracts.map((contract, index) => (
            <li key={index} className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Contract: {contract}</h2>
              <h3 className="text-lg font-medium mb-1">Owners:</h3>
              <ul className="list-disc list-inside">
                {contractOwners[contract]?.map((owner, ownerIndex) => (
                  <li key={ownerIndex}>{owner}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}