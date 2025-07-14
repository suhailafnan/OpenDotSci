import { useState } from 'react';
import { Link } from 'react-scroll'; // for smooth scrolling
import ConnectWallet from './ConnectWallet';
import logo from '../assets/logo.png';


const navItems = ['About', 'Features', 'Whitepaper', 'DAO', 'Contact'];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-black/60 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="OpenDotSci Logo" className="h-8 w-8" />
          <span className="text-xl font-bold tracking-wide hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
            OpenDotSci
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition duration-300 hover:scale-105"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Connect Wallet */}
        <div className="hidden md:flex">
          <ConnectWallet />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none hover:text-cyan-400"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-cyan-600">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 hover:bg-cyan-800 hover:text-white transition duration-300 cursor-pointer"
            >
              {item}
            </Link>
          ))}
          <div className="px-6 py-3">
            <ConnectWallet />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
