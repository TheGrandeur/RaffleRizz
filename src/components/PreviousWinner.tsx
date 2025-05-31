
import React from 'react';
import { Card } from '@/components/ui/card';

const PreviousWinner = () => {
  // Mock data for previous winner
  const previousWinner = {
    address: '0x742...f96E',
    prize: '10 ETH',
    timestamp: '1 hours ago'
  };

  return (
    <Card className="soft-card p-6 max-w-sm mx-auto">
      <div className="text-center space-y-4">
        <h3 className="text-lg font-semibold text-purple-600">
          🏆 Last Winner
        </h3>
        
        <div className="space-y-3">
          <div className="bg-purple-50 px-4 py-3 rounded-xl border border-purple-100">
            <p className="text-purple-700 font-mono text-sm break-all">
              {previousWinner.address}
            </p>
          </div>
          
          <div className="text-2xl font-bold text-pink-500">
            {previousWinner.prize}
          </div>
          
          <p className="text-gray-500 text-xs">
            Won {previousWinner.timestamp}
          </p>
        </div>
        
        <div className="text-cyan-500 text-sm">
          ✨ Could be you next!
        </div>
      </div>
    </Card>
  );
};

export default PreviousWinner;
