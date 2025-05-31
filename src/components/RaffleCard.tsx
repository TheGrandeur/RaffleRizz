
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface RaffleCardProps {
  isWalletConnected: boolean;
  walletAddress?: string;
}

const RaffleCard: React.FC<RaffleCardProps> = ({ isWalletConnected, walletAddress }) => {
  const [playersJoined, setPlayersJoined] = useState(7);
  const [timeLeft, setTimeLeft] = useState(87); // seconds
  const [isEntering, setIsEntering] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Reset raffle
          setPlayersJoined(Math.floor(Math.random() * 4) + 1);
          setHasEntered(false);
          return 120; // 2 minutes
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const enterRaffle = async () => {
    if (!isWalletConnected) {
      alert('Please connect your wallet first!');
      return;
    }

    setIsEntering(true);
    
    try {
      // Simulate transaction
      await new Promise(resolve => setTimeout(resolve, 2000));
      setPlayersJoined(prev => Math.min(prev + 1, 10));
      setHasEntered(true);
      
      // Show success message
      alert('Successfully entered the raffle! 🎉');
    } catch (error) {
      console.error('Error entering raffle:', error);
      alert('Transaction failed. Please try again.');
    } finally {
      setIsEntering(false);
    }
  };

  const progressPercentage = (playersJoined / 10) * 100;

  return (
    <Card className="gaming-card p-8 max-w-md mx-auto">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold font-['Orbitron'] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Current Pool
          </h3>
          <div className="text-4xl font-bold text-yellow-400 neon-text">
            💰 10 ETH
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Players</span>
            <span className="text-cyan-400 font-bold">{playersJoined}/10</span>
          </div>
          
          <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-gray-400 text-sm">Next round starts in:</p>
          <div className="text-3xl font-bold font-mono text-cyan-400 neon-text">
            {formatTime(timeLeft)}
          </div>
        </div>

        {playersJoined >= 10 ? (
          <div className="text-yellow-400 font-bold animate-pulse">
            🎉 Pool Full! Drawing winner...
          </div>
        ) : (
          <Button
            onClick={enterRaffle}
            disabled={!isWalletConnected || isEntering || hasEntered}
            className={`w-full py-4 text-lg font-bold rounded-xl transition-all duration-300 ${
              hasEntered 
                ? 'bg-green-600 hover:bg-green-700 border-green-500' 
                : 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 neon-border pulse-glow'
            }`}
          >
            {isEntering ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Entering...</span>
              </div>
            ) : hasEntered ? (
              '✅ Entered!'
            ) : (
              '🎲 Enter for 1 ETH'
            )}
          </Button>
        )}

        {!isWalletConnected && (
          <p className="text-red-400 text-sm">
            Connect your wallet to enter the raffle
          </p>
        )}
      </div>
    </Card>
  );
};

export default RaffleCard;
