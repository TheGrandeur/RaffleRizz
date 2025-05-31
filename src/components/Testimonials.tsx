
import React from 'react';
import { Card } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex",
      handle: "@cryptoalex_",
      message: "Just won 10 ETH on Rafflerizz! 🔥 This is actually insane, withdrew instantly. No cap, this slaps different 💯",
      avatar: "🧑‍💻"
    },
    {
      name: "Maya",
      handle: "@mayalovescrypto",
      message: "Finally a fair raffle platform! Love how everything is on-chain and provable. Been playing for weeks 🚀",
      avatar: "👩‍🎨"
    },
    {
      name: "Jordan",
      handle: "@jordandefi",
      message: "Rafflerizz hits different fr. Clean UI, instant payouts, and actually fair. This is the future of gaming 🎲",
      avatar: "👨‍🚀"
    },
    {
      name: "Sam",
      handle: "@samweb3",
      message: "Been watching Rafflerizz for months. The Chainlink VRF integration is *chef's kiss* - truly random and fair ✨",
      avatar: "🧑‍💼"
    },
    {
      name: "Riley",
      handle: "@rileycrypto",
      message: "Easiest 10 ETH I've ever made lol. Just connected MetaMask, paid 1 ETH, and boom - winner! 💎",
      avatar: "👩‍💻"
    },
    {
      name: "Casey",
      handle: "@caseyeth",
      message: "Love the transparency. You can literally verify everything on Etherscan. No sus stuff, just pure randomness 🔍",
      avatar: "🧑‍🔬"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            What Players Are Saying
          </h2>
          <p className="text-lg text-gray-600">
            Real reviews from real players. See why Gen Z loves Rafflerizz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="soft-card p-6 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-purple-400">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">{testimonial.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <span className="text-sm text-purple-500">{testimonial.handle}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{testimonial.message}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
