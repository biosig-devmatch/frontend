"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useParams } from 'next/navigation';
import DefaultLayout from '@/app/components/Layouts/DefaultLayout';
import Home from '@/app/components/Dashboard/Home';
import { getName } from '@/lib/interactions/multisigFactoryInteractions';
import { getOwners, getRequiredSignatures } from '@/lib/interactions/multisigInteractions';

interface MultisigData {
  name: string;
  owners: string[];
  requiredSignatures: number;
  // Add any other necessary fields here
}

interface MultisigContextType {
  multisigData: MultisigData;
  error: string;
  loading: boolean;
  multisigAddress: string;
}

// Create a context for the multisig data
export const MultisigContext = createContext<MultisigContextType | null>(null);


interface MultisigProviderProps {
  children: ReactNode;
  multisigAddress: string;
}

// Provider component
const MultisigProvider: React.FC<MultisigProviderProps> = ({ children, multisigAddress }) => {
  const [multisigData, setMultisigData] = useState<MultisigData>({
    name: '',
    owners: [],
    requiredSignatures: 0,
    // Initialize any other necessary fields here
  });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMultisigData = async () => {
      try {
        setLoading(true);
        const [name, owners, requiredSignatures] = await Promise.all([
          getName(multisigAddress),
          getOwners(multisigAddress),
          getRequiredSignatures(multisigAddress),
        ]);

        setMultisigData({
          name,
          owners,
          requiredSignatures: Number(requiredSignatures),
          // Set any other fetched data here
        });
      } catch (err) {
        console.error('Error fetching multisig data:', err);
        setError('Failed to fetch multisig data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (multisigAddress) {
      fetchMultisigData();
    }
  }, [multisigAddress]);

  return (
    <MultisigContext.Provider value={{ multisigData, error, loading, multisigAddress }}>
      {children}
    </MultisigContext.Provider>
  );
};

const DashboardPage: React.FC = () => {
  const params = useParams();
  const multisigAddress = params.multisig_id as string;

  return (
    <MultisigProvider multisigAddress={multisigAddress}>
      <DefaultLayout multisigAddress={multisigAddress}>
        <Home/>
      </DefaultLayout>
    </MultisigProvider>
  );
};

export default DashboardPage;