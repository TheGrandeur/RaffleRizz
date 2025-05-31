
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is Rafflerizz legal?",
      answer: "Rafflerizz operates as a decentralized application on the blockchain. Please check your local laws regarding online gaming and cryptocurrency before participating."
    },
    {
      question: "How much do gas fees cost?",
      answer: "Gas fees depend on Ethereum network congestion. Typically, you'll pay $5-50 in gas fees when entering a raffle. Winners receive their full 10 ETH prize minus minimal gas costs."
    },
    {
      question: "How is the winner chosen?",
      answer: "Winners are selected using Chainlink VRF, which provides cryptographically secure randomness that cannot be manipulated by anyone, including us."
    },
    {
      question: "When do I get paid if I win?",
      answer: "Payouts are instant! As soon as the random number is generated and the winner is selected, the smart contract automatically sends the prize to the winner's wallet."
    },
    {
      question: "Can I enter multiple times?",
      answer: "Yes! You can enter the same raffle multiple times to increase your chances of winning. Each entry costs 1 ETH."
    },
    {
      question: "What if the raffle doesn't fill up?",
      answer: "Raffles automatically start when 10 players join. If a raffle doesn't fill up within a reasonable time, players can withdraw their entries."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We've got answers. Here's everything you need to know about Rafflerizz.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="soft-card overflow-hidden">
              <button
                className="w-full p-6 text-left hover:bg-purple-50/50 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-purple-500 transform transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
