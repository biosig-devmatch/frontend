"use client";

import React from "react";
import Overview from "./Overview";
import TransactionQueue from "@/components/Dashboard/TransactionQueue";
// import TransactionReviewConfirm from "@/components/Dashboard/TransactionReviewConfirm";

const Home: React.FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <div className="col-span-12">
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

export default Home;
