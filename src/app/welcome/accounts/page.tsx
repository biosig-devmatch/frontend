import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const LandingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-6xl font-bold mb-2">BioSig</h1>
        <p className="text-gray-400 mb-8"># Decide the slogan later</p>
        
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="text-2xl mb-4">Create an account</h2>
            <div className="relative">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-gray-800 border-gray-700 pr-10 py-6"
              />
              <Button 
                variant="ghost" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                →
              </Button>
            </div>
          </div>
          
          <div className="text-center text-gray-500">OR</div>
          
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="h-px bg-gray-800"></div>
                <div className="h-px bg-gray-800"></div>
                <div className="h-px bg-gray-800"></div>
                <div className="h-px bg-gray-800"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      </div>
  );
};

export default LandingPage;