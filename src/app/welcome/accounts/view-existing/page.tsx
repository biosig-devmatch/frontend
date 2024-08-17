"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/app/components/ui/accordion";
import { defineChain, getContract } from "thirdweb";
import { getContractMetadata } from "thirdweb/extensions/common";
import { useActiveAccount, useReadContract } from 'thirdweb/react';
import { client } from "../../../client";
import  chain  from "../../../chain";
import { sepolia } from 'thirdweb/chains';


//      call getAllDeployedContracts() to see an array of all deployed multisigwallets address, 
//      then go to each multisigwallets contract address, and call getOwners(), only show if any of 
//      the addresses within the getOwners() returned array is === the connected wallet address, and contract !== contract creator

//      for each wallet, that is contract creator add them to another .

//      i want to show contract creator(deployer) at the top, and signer at the bottom. just somehow differentiate them.








const multisigExistingAccountPage = () => {

 

    const account = useActiveAccount();


    const multisigFactoryContract = getContract({
        client: client,
        chain: defineChain( sepolia ),
        address: "0x32885f7c8e9af7a9c371e1a6f99a35c5f9181244"
    });

    const { data } = useReadContract( getContractMetadata,
        { contract: multisigFactoryContract }
    );
   
    console.log(multisigFactoryContract);

  return (
    <>
        <div>{account?.address}</div>
        <div>{chain.name}</div>
        <div>{} </div>
    </>

  )
}

export default multisigExistingAccountPage