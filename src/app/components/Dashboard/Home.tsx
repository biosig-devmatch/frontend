"use client";

import React, { useContext } from "react";
import { MultisigContext } from '../../dashboard/[multisig_id]/page'; // Adjust this import path if necessary
import Overview from "./Overview";
import TransactionQueue from "./TransactionQueue";

const Home: React.FC = () => {
  const context = useContext(MultisigContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { multisigData, error, loading, multisigAddress } = context;

  if (loading) {
    return <div>Loading multisig data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <div className="col-span-12">
          <Overview multisigData={multisigData} multisigAddress={multisigAddress} />
        </div>
        <div className="col-span-12">
          <TransactionQueue multisigAddress={multisigAddress} />
        </div>
        {/*<div className="col-span-12">*/}
        {/*  <TransactionReviewConfirm />*/}
        {/*</div>*/}
      </div>
    </>
  );
};

export default Home;