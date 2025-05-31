
import React from 'react';
import { Card } from '@/components/ui/card';

const WhyItsFair = () => {
  const features = [
    {
      title: "Chainlink VRF",
      description: "Cryptographically secure random number generation that's impossible to manipulate",
      icon: "🔗"
    },
    {
      title: "Open Source",
      description: "Smart contract code is public and auditable by anyone on the blockchain",
      icon: "📖"
    },
    {
      title: "No Admin Keys",
      description: "Once deployed, no one can change the rules or manipulate outcomes",
      icon: "🔒"
    },
    {
      title: "Instant Payouts",
      description: "Winners receive their prize automatically through smart contracts",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Why It's 100% Fair
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built on blockchain technology with provable fairness. No tricks, no manipulation, just pure randomness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-purple-400">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 max-w-4xl mx-auto transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-purple-400">
            <h3 className="text-2xl font-semibold gradient-text mb-4">Powered by Chainlink VRF</h3>
            <p className="text-gray-600 leading-relaxed">
              Chainlink VRF (Verifiable Random Function) provides cryptographically secure randomness that cannot be predicted or manipulated by anyone, including us. Every random number is generated on-chain with mathematical proof of its fairness, making Rafflerizz the most transparent raffle platform in crypto.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyItsFair;
