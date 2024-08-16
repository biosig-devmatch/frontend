"use client";
import React from "react";
import Balance from "@/components/Dashboard/Balance";
import AssetBalance from "@/components/Dashboard/AssetBalance";

const Assets: React.FC = () => {
    return (
        <>
            <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
                <div className="col-span-12">
                    <Balance />
                </div>
                <div className="col-span-12">
                    <AssetBalance />
                </div>
            </div>
        </>
    );
};

export default Assets;
