import React from "react";
import { Orbitron } from "next/font/google";
import { cn } from "@/lib/utils";

const orbitron = Orbitron({ subsets: ["latin"] });

const IntroduceSection = () => {
  return (
    <div className="min-h-screen flex items-center bg-black">
      <div className="container mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center text-center md:text-left">
          <h2
            className={cn(
              orbitron.className,
              "text-4xl font-bold mb-4 text-white"
            )}
          >
            BioSig Wallet
          </h2>
          <p className="text-sm md:text-base text-gray-300 text-justify">
            BioSig Wallet addresses the challenges of onboarding Web 2 users
            into the Web 3 space by simplifying complex processes like managing
            seed phrases, signing transactions, and handling gas fees across
            multiple blockchains. Built on the EVM chain and leveraging EIP-4337
            for account abstraction, BioSig Wallet offers a seamless user
            experience. With features like multisignature wallets for enhanced
            security, biometric verification for easy access, gas abstraction
            for cost efficiency, and multichain support for cross-chain
            transactions, BioSig Wallet makes interacting with Web 3 effortless
            and secure for mainstream adoption.
          </p>
        </div>

        <div className="md:w-1/2 md:px-16 flex justify-center items-center">
          <div className="relative h-64 md:h-96 w-full">
            <img
              src="/bio.jpg"
              alt="BioSig Wallet"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroduceSection;
