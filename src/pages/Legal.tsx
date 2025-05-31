
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';

const Legal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black font-['Orbitron'] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-6">
              Legal & Fairness
            </h1>
            <p className="text-xl text-gray-300">
              Complete transparency and provable fairness
            </p>
          </div>

          <div className="space-y-8">
            <Card className="gaming-card p-8">
              <h2 className="text-2xl font-bold text-green-400 mb-4 font-['Orbitron']">
                ⚖️ Legal Framework
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Rafflerizz operates as a decentralized application (dApp) on the Ethereum blockchain. 
                  As a fully decentralized protocol, there is no central authority controlling the outcome of raffles.
                </p>
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-yellow-400 font-semibold">
                    ⚠️ Important: Please check your local laws regarding online gaming and cryptocurrency before participating.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="gaming-card p-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 font-['Orbitron']">
                🔒 Provable Fairness
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Every aspect of Rafflerizz is designed to be provably fair and verifiable:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Smart Contract:</strong> All game logic is public and immutable on Ethereum</li>
                  <li><strong>Chainlink VRF:</strong> Cryptographically secure random number generation</li>
                  <li><strong>Open Source:</strong> Contract code available for audit on Etherscan</li>
                  <li><strong>No Admin Keys:</strong> No one can modify the contract once deployed</li>
                </ul>
              </div>
            </Card>

            <Card className="gaming-card p-8">
              <h2 className="text-2xl font-bold text-purple-400 mb-4 font-['Orbitron']">
                🔍 How to Verify Fairness
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  You can verify the fairness of every raffle yourself:
                </p>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>View the smart contract source code on Etherscan</li>
                  <li>Check that Chainlink VRF is properly implemented</li>
                  <li>Verify each random number request and response</li>
                  <li>Confirm winner selection matches the VRF output</li>
                  <li>Audit the entire transaction history</li>
                </ol>
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mt-4">
                  <p className="text-blue-400">
                    <strong>Contract Address:</strong> 0x1234...5678 (Example - deploy to get real address)
                  </p>
                </div>
              </div>
            </Card>

            <Card className="gaming-card p-8">
              <h2 className="text-2xl font-bold text-red-400 mb-4 font-['Orbitron']">
                ⚠️ Risk Disclaimer
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Please understand the risks before participating:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You may lose your entire entry fee (1 ETH)</li>
                  <li>Smart contracts may contain bugs despite auditing</li>
                  <li>Blockchain transactions are irreversible</li>
                  <li>Ethereum network fees apply to all transactions</li>
                  <li>Cryptocurrency values are volatile</li>
                </ul>
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mt-4">
                  <p className="text-red-400 font-semibold">
                    Only participate with funds you can afford to lose. This is entertainment, not investment advice.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="gaming-card p-8">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4 font-['Orbitron']">
                🛡️ Security Measures
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Multiple layers of security protect participants:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-cyan-400 mb-2">Smart Contract Security</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Audited by leading security firms</li>
                      <li>No upgrade mechanisms</li>
                      <li>Reentrancy protection</li>
                      <li>Overflow/underflow prevention</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-cyan-400 mb-2">Randomness Security</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Chainlink VRF v2</li>
                      <li>Cryptographic proofs</li>
                      <li>Multiple oracle nodes</li>
                      <li>Tamper-proof generation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="gaming-card p-8">
              <h2 className="text-2xl font-bold text-pink-400 mb-4 font-['Orbitron']">
                📞 Contact & Support
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Since Rafflerizz is fully decentralized, there is no central customer support. However:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Join our Discord community for peer support</li>
                  <li>Check documentation and FAQs on our GitHub</li>
                  <li>Report bugs through our GitHub issues</li>
                  <li>Follow @Rafflerizz on Twitter for updates</li>
                </ul>
                <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4 mt-4">
                  <p className="text-gray-400 text-sm">
                    Remember: No one from Rafflerizz will ever ask for your private keys or seed phrases!
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
