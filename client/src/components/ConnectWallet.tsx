// src/components/ConnectWallet.tsx
interface ConnectWalletProps {
  className?: string;
  onClick: () => void;
}

const ConnectWallet = ({ className, onClick }: ConnectWalletProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md font-medium transition duration-300 hover:scale-105 border border-white hover:border-black ${className}`}
    >
      Connect Wallet
    </button>
  );
};

export default ConnectWallet;
