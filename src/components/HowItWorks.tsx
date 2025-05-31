
import React from 'react';
import { Card } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Connect Wallet",
      description: "Link your MetaMask wallet securely",
      icon: "🔗"
    },
    {
      number: 2,
      title: "Enter Raffle",
      description: "Pay 1 ETH to join the current pool",
      icon: "🎫"
    },
    {
      number: 3,
      title: "Wait for Players",
      description: "Pool fills up with 10 total players",
      icon: "⏳"
    },
    {
      number: 4,
      title: "Random Winner",
      description: "Chainlink VRF picks the winner fairly",
      icon: "🎲"
    },
    {
      number: 5,
      title: "Get Prize",
      description: "Winner receives 10 ETH instantly",
      icon: "💰"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, transparent, and fair. Here's how Rafflerizz works in 5 easy steps.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center">
              <Card className="p-6 h-full transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-purple-400">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <svg className="w-6 h-6 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
