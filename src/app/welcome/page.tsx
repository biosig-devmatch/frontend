import React from 'react'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';

const page = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-grow flex items-stretch justify-center p-8">
        <div className="w-full min-h-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-cyan-300 to-emerald-600 text-black p-8 flex flex-col justify-between border-none">
            <CardContent className="space-y-6 p-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Unlock a new way of ownership</h2>
              <p className="text-lg font-light leading-tight">
                The most trusted decentralized custody protocol and collective asset management platform leveraging the power of smart accounts.
              </p>
              <ul className="space-y-3">
                {['Stealth security with multiple signers', 'Biometric authentication', 'Gasless transactions'].map((feature, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-[#323232bb] p-8 flex flex-col justify-center border-none">
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-2 text-white">Get Started</h2>
                <p className="text-gray-400 w-2/3 text-center">
                  Connect your wallet to create a new BioSig Account or open an existing one
                </p>
              </div>
              <div className="space-y-4 flex flex-col items-center">
                <Button asChild className=" bg-black hover:bg-slate-700 text-white text-base py-2">
                  <Link href="/welcome/accounts">Create an account</Link>
                </Button>
                <div className="text-center text-gray-400">OR</div>
                <Button variant="secondary" className="text-green-700 hover:bg-gray-700 text-base py-2">
                  View my accounts
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default page;