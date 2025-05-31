
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black font-['Orbitron'] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
              How Rafflerizz Works
            </h1>
            <p className="text-xl text-gray-300">
              The most fair and transparent crypto raffle platform for Gen Z
            </p>
          </div>

          <div className="space-y-8">
            <Card className="gaming-card p-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 font-['Orbitron']">
                🎲 The Game
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Rafflerizz is a decentralized raffle game where 10 players compete for a 10 ETH jackpot. 
                  Each round costs exactly 1 ETH to enter, creating a total prize pool of 10 ETH.
                </p>
                <p>
                  Once 10 players have joined, the smart contract automatically selects a winner using 
                  Chainlink VRF (Verifiable Random Function) - the gold standard for blockchain randomness.
                </p>
              </div>
            </Card>

            <Card className="gaming-card p-8">
              <h2 className="text-2xl font-bold text-purple-400 mb-4 font-['Orbitron']">
                🔗 Powered by Chainlink VRF
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Our random number generation is powered by Chainlink VRF, which provides cryptographically 
                  secure randomness that cannot be manipulated by anyone - not even us!
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Tamper-proof random number generation</li>
                  <li>Verifiable on-chain</li>
                  <li>No human intervention possible</li>
                  <li>Mathematically provable fairness</li>
                </ul>
              </div>
            </Card>

            <Card className="gaming-card p-8">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4 font-['Orbitron']">
                ⚡ How to Play
              </h2>
              <div className="text-gray-300 space-y-4">
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li className="font-semibold">Connect your MetaMask wallet</li>
                  <li>Make sure you have at least 1 ETH + gas fees</li>
                  <li>Click "Enter for 1 ETH" to join the current raffle</li>
                  <li>Wait for 9 other players to join (or join multiple times yourself!)</li>
                  <li>Chainlink VRF automatically selects the winner</li>
                  <li>Winner receives the full 10 ETH jackpot instantly!</li>
                </ol>
              </div>
            </Card>

            <Card className="gaming-card p-8">
              <h2 className="text-2xl font-bold text-green-400 mb-4 font-['Orbitron']">
                💰 Economics
              </h2>
              <div className="text-gray-300 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-cyan-400 mb-2">Entry Fee</h3>
                    <p>1 ETH per entry</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-cyan-400 mb-2">Prize Pool</h3>
                    <p>10 ETH (100% of entries)</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-cyan-400 mb-2">Platform Fee</h3>
                    <p>0.1% (taken from gas optimization)</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-cyan-400 mb-2">Winner Takes</h3>
                    <p>~9.99 ETH (after minimal gas costs)</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="gaming-card p-8">
              <h2 className="text-2xl font-bold text-pink-400 mb-4 font-['Orbitron']">
                🚀 Why Rafflerizz?
              </h2>
              <div className="text-gray-300 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-cyan-400 mb-2">For Gen Z</h3>
                    <p>Built with gaming aesthetics and crypto-native UX that Gen Z loves</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-cyan-400 mb-2">Lightning Fast</h3>
                    <p>No waiting days for results - winners are selected instantly</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-cyan-400 mb-2">100% Transparent</h3>
                    <p>All transactions and randomness verifiable on-chain</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-cyan-400 mb-2">No KYC</h3>
                    <p>Just connect your wallet and play - no personal info required</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
