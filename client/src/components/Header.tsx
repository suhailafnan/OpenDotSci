// src/components/Header.tsx
import { useState } from 'react';
import { Link } from 'react-scroll';
import ConnectWallet from './ConnectWallet';
import JoinCommunity from './JoinCommunity';
import logo from '../assets/logo.png';

interface HeaderProps {
  onConnectWalletClick: () => void;
}

const navItems = ['About', 'Features', 'Whitepaper', 'DAO', 'Contact'];

const Header = ({ onConnectWalletClick }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-green-600 text-white shadow-lg h-24 sm:h-28 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo and Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="OpenDotSci Logo" className="h-14 w-14" />
          <span className="text-4xl font-extrabold tracking-wide cursor-pointer text-cyan-200 font-serif">
            OpenDotSci
          </span>
        </div>

        {/* Desktop Nav */}
        <div>
          <nav className="hidden md:flex space-x-6 text-base font-medium absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth
                duration={500}
                className="cursor-pointer relative group px-2 py-1 rounded-md transition-all duration-300 ease-in-out hover:text-black"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <ConnectWallet
            onClick={onConnectWalletClick}
            className="border border-white hover:border-black transition-all duration-300 rounded-md px-4 py-2"
          />
          <JoinCommunity className="border border-white hover:border-black transition-all duration-300 rounded-md px-4 py-2" />
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-2xl hover:text-black transition-all duration-300"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-700 text-white px-4 pb-4 pt-2 space-y-3 shadow-inner">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium py-2 px-3 rounded-md hover:bg-green-600 transition-all duration-300"
            >
              {item}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4 items-start">
            <ConnectWallet
              onClick={onConnectWalletClick}
              className="border border-white hover:border-black transition-all duration-300 rounded-md px-4 py-2 text-center"
            />
            <JoinCommunity className="border border-white hover:border-black transition-all duration-300 rounded-md px-4 py-2 text-center" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
