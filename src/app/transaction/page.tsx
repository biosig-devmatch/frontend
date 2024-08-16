"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TransactionForm from "@/components/Dashboard/TransactionForm";

const TransactionAmountPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      
      <main className="p-8 max-w-4xl mx-auto">
          <TransactionForm />
      </main>
    </div>
  );
};

export default TransactionAmountPage;