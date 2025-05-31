
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import WalletConnection from '@/components/WalletConnection';
import RaffleCard from '@/components/RaffleCard';
import PreviousWinner from '@/components/PreviousWinner';
import HowItWorks from '@/components/HowItWorks';
import WhyItsFair from '@/components/WhyItsFair';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>('');

  const handleConnectionChange = (connected: boolean, address?: string) => {
    setIsWalletConnected(connected);
    setWalletAddress(address || '');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 mb-20">
            <h1 className="text-5xl md:text-7xl font-black gradient-text float-animation">
              RAFFLERIZZ
            </h1>
            <p className="text-sm md:text-base text-gray-500 mt-2 font-medium">
              Developed by Vaibhav Gupta
            </p>
            
            <div className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              <span className="font-semibold text-purple-600">Enter the Rizz Zone!</span> 
              <br />
              10 Players. 1 Winner. 10 ETH Jackpot.
              <br />
              <span className="text-cyan-500">All Decentralized. All Fun.</span>
            </div>
            
            <div className="flex justify-center items-center space-x-6 text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Powered by Chainlink VRF</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm">100% Provably Fair</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Wallet Connection */}
            <div className="lg:col-span-1 space-y-6">
              <div className="soft-card p-6 text-center">
                <h2 className="text-xl font-semibold mb-4 text-purple-600">
                  Step 1: Connect Wallet
                </h2>
                <WalletConnection onConnectionChange={handleConnectionChange} />
              </div>
              
              <PreviousWinner />
            </div>

            {/* Raffle Card */}
            <div className="lg:col-span-2">
              <RaffleCard 
                isWalletConnected={isWalletConnected}
                walletAddress={walletAddress}
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="soft-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-500 mb-2">1,247</div>
              <div className="text-gray-600">Total Players</div>
            </div>
            <div className="soft-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">124.7 ETH</div>
              <div className="text-gray-600">Total Prizes Won</div>
            </div>
            <div className="soft-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-500 mb-2">0.1%</div>
              <div className="text-gray-600">Platform Fee</div>
            </div>
          </div>
        </div>
      </div>

      {/* New Sections */}
      <HowItWorks />
      <WhyItsFair />
      <Testimonials />
      <FAQ />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
