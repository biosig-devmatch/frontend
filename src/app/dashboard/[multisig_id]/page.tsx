import React from 'react';
import DefaultLayout from '@/app/components/Layouts/DefaultLayout';
import Home from '@/app/components/Dashboard/Home';

export default function DashboardPage({ params }: { params: { multisigcontractaddress: string } }) {
  return (
    <DefaultLayout>
      <Home multisigAddress={params.multisigcontractaddress} />
    </DefaultLayout>
  );
}