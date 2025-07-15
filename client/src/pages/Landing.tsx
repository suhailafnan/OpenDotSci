// src/pages/Landing.tsx
import { useState } from 'react';
import BackgroundCanvas from '../components/BackgroundCanvas';
import Header from '../components/Header';
import WalletModal from '../components/WalletModal';

const Landing = () => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <BackgroundCanvas />

      <Header onConnectWalletClick={() => setIsWalletModalOpen(true)} />

      {isWalletModalOpen && (
        <WalletModal onClose={() => setIsWalletModalOpen(false)} />
      )}

      <main className="pt-20">
        <h1 className="text-center text-4xl mt-40">OpenDotSci Landing Page</h1>
      </main>
    </div>
  );
};

export default Landing;
