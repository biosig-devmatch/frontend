"use client"

import React, { useState } from 'react';

import Link from 'next/link';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { useActiveAccount } from 'thirdweb/react';

const MultisigSetupPage = () => {


  const isConnected = useState(true);



  const account = useActiveAccount();
  
  return (
    <div className="bg-black text-white min-h-screen">      
      <main className="p-8">
        <h1 className="text-3xl mb-8">Welcome to BioSig Wallet</h1>
        <ol className="space-y-6">
          <li className="flex items-center space-x-4">
            <div className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center">1</div>
            <div className="flex-grow">
              <h2 className="text-xl mb-2">Connect Wallet</h2>
              {
                isConnected ? <Button variant="secondary">Connect</Button> 
                :   <div>{account?.address}</div>
                }
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center">2</div>
            <div className="flex-grow">
              <h2 className="text-xl mb-2">Name your Multisig account</h2>
              <Input placeholder="Enter..." className="bg-gray-800 border-gray-700" />
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center">3</div>
            <div className="flex-grow">
              <h2 className="text-xl mb-2">Signers and Confirmations</h2>
              <Button asChild variant="secondary">
                <Link href="/multisig/signers">Add details</Link>
              </Button>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center">4</div>
            <div className="flex-grow">
              <h2 className="text-xl mb-2">Review</h2>
            </div>
          </li>
        </ol>
      </main>
      
      <footer className="absolute bottom-0 w-full p-4 text-center text-gray-500">
       <footer className="fixed bottom-0 w-full p-4 flex justify-between bg-gray-900">
        <Button asChild variant="secondary" className="bg-gray-800 text-white hover:bg-gray-700">
          <Link href="/welcome">Previous</Link>
        </Button>
        <Button variant="secondary" className="bg-gray-800 text-white hover:bg-gray-700">
          <Link href='/dashboard[multisigAddress]'>Continue</Link>
        </Button>
      </footer>
        <a href="#" className="hover:text-white">Terms of Use</a> | <a href="#" className="hover:text-white">Privacy Policy</a>
      </footer>
    </div>
  );
};

export default MultisigSetupPage;