"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TransactionAmountPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      
      <main className="p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl mb-8">Transaction Amount</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="from" className="block mb-2">From</label>
            <Input id="from" className="bg-gray-800 border-gray-700 text-white" />
          </div>
          <div>
            <label htmlFor="to" className="block mb-2">To</label>
            <Input id="to" className="bg-gray-800 border-gray-700 text-white" />
          </div>
          <div>
            <label htmlFor="asset" className="block mb-2">Asset</label>
            <Input id="asset" className="bg-gray-800 border-gray-700 text-white w-1/2" />
          </div>
          <div>
            <label htmlFor="amount" className="block mb-2">Amount</label>
            <Input id="amount" className="bg-gray-800 border-gray-700 text-white w-1/2" />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign</Button>
        </form>
      </main>
    </div>
  );
};

export default TransactionAmountPage;