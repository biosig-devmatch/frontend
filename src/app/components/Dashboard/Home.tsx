"use client";

import React from "react";
import Overview from "./Overview";
import TransactionQueue from "./TransactionQueue";

// import TransactionReviewConfirm from "@/components/Dashboard/TransactionReviewConfirm";

interface HomeProps {
  multisigAddress: any;
}

export default function page({ multisigAddress }: { multisigAddress: string }) {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <div className="col-span-12">
          <div>{multisigAddress}</div>
          <Overview />
        </div>
        <div className="col-span-12">
          <TransactionQueue />
        </div>
        {/*<div className="col-span-12">*/}
        {/*  <TransactionReviewConfirm />*/}
        {/*</div>*/}
      </div>
    </>
  );
};


