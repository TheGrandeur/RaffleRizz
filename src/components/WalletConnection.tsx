
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface WalletConnectionProps {
  onConnectionChange: (connected: boolean, address?: string) => void;
}

const WalletConnection: React.FC<WalletConnectionProps> = ({ onConnectionChange }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    checkWalletConnection();
  }, []);

  const checkWalletConnection = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setIsConnected(true);
          setWalletAddress(accounts[0]);
          onConnectionChange(true, accounts[0]);
        }
      } catch (error) {
        console.error('Error checking wallet connection:', error);
      }
    }
  };

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      setIsLoading(true);
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);
        setWalletAddress(accounts[0]);
        onConnectionChange(true, accounts[0]);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert('MetaMask is not installed. Please install MetaMask to continue.');
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress('');
    onConnectionChange(false);
  };

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {!isConnected ? (
        <Button
          onClick={connectWallet}
          disabled={isLoading}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl soft-glow transition-all duration-300 border-0"
        >
          {isLoading ? 'Connecting...' : '🔗 Connect Wallet'}
        </Button>
      ) : (
        <div className="flex flex-col items-center space-y-3">
          <div className="bg-purple-50 px-6 py-3 rounded-2xl border border-purple-200">
            <p className="text-purple-700 font-mono text-sm">
              Connected: {shortenAddress(walletAddress)}
            </p>
          </div>
          <Button
            onClick={disconnectWallet}
            variant="outline"
            className="border-purple-200 text-purple-600 hover:bg-purple-50 rounded-xl"
          >
            Disconnect
          </Button>
        </div>
      )}
    </div>
  );
};

// Extend the Window interface to include ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}

export default WalletConnection;
