import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ethers } from 'ethers';
import { setWalletAddress } from '../redux/features/user/walletSlice';
import api from '../utils/axios'; // axios instance

interface WalletModalProps {
  onClose: () => void;
}

const wallets = [
  { name: 'MetaMask', id: 'metamask' },
  { name: 'Binance', id: 'binance' },
  { name: 'Phantom', id: 'phantom' },
  { name: 'Bitget', id: 'bitget' },
];

const WalletModal = ({ onClose }: WalletModalProps) => {
  const dispatch = useDispatch();

 const connectWallet = async (walletId: string) => {
  try {
    let address = '';
    let provider: ethers.BrowserProvider | undefined;

    if (walletId === 'metamask' && window.ethereum) {
      provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      address = accounts[0];
    } else if (walletId === 'binance' && (window as any).BinanceChain) {
      provider = new ethers.BrowserProvider((window as any).BinanceChain);
      const accounts = await provider.send('eth_requestAccounts', []);
      address = accounts[0];
    } else if (walletId === 'bitget' && (window as any).bitkeep?.ethereum) {
      provider = new ethers.BrowserProvider((window as any).bitkeep.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      address = accounts[0];
    } else if (walletId === 'phantom' && (window as any).phantom?.solana?.isPhantom) {
      const resp = await (window as any).phantom.solana.connect();
      address = resp.publicKey.toString();

      // Directly send to backend (skip signing step for Solana for now)
      const response = await api.post('/api/auth/login', { address });
      if (response.status === 200) {
        dispatch(setWalletAddress(address));
        onClose();
      } else {
        alert('Login failed');
      }
      return;
    } else {
      alert(`${walletId} wallet not found`);
      return;
    }

    if (!provider) {
      alert('Wallet provider is not set.');
      return;
    }

    const message = `Login to OpenDotSci with wallet ${address}`;
    const signer = await provider.getSigner();
    const signature = await signer.signMessage(message);

    const response = await api.post('/api/auth/login', { address, signature });
    if (response.status === 200) {
      dispatch(setWalletAddress(address));
      onClose();
    } else {
      alert('Login failed');
    }
  } catch (err) {
    console.error('Wallet login error:', err);
  }
};

  

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white text-black p-6 rounded-xl shadow-xl w-80 max-w-full mx-4">
        <h2 className="text-xl font-bold text-center mb-4">Choose a Wallet</h2>
        <div className="space-y-3">
          {wallets.map((wallet) => (
            <button
              key={wallet.id}
              onClick={() => connectWallet(wallet.id)}
              className="w-full py-2 px-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition"
            >
              {wallet.name}
            </button>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-5 text-sm text-gray-600 hover:text-black block mx-auto"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default WalletModal;
