import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (link) => {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // close mobile menu after click
  };

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('#home')}
            className="text-2xl font-bold text-blue-400 hover:text-blue-300"
          >
            Portfolio.
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('#home')} className="text-gray-300 hover:text-white">Home</button>
            <button onClick={() => scrollToSection('#about')} className="text-gray-300 hover:text-white">About</button>
            <button onClick={() => scrollToSection('#experience')} className="text-gray-300 hover:text-white">Experience</button>
            <button onClick={() => scrollToSection('#projects')} className="text-gray-300 hover:text-white">Projects</button>
            <button onClick={() => scrollToSection('#Skills')} className="text-gray-300 hover:text-white">Skills</button>
            <button onClick={() => scrollToSection('#contact')} className="text-gray-300 hover:text-white">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-800 rounded-lg p-4 space-y-2">
            <button onClick={() => scrollToSection('#home')} className="block w-full text-left text-gray-300 hover:text-white">Home</button>
            <button onClick={() => scrollToSection('#about')} className="block w-full text-left text-gray-300 hover:text-white">About</button>
            <button onClick={() => scrollToSection('#experience')} className="block w-full text-left text-gray-300 hover:text-white">Experience</button>
            <button onClick={() => scrollToSection('#projects')} className="block w-full text-left text-gray-300 hover:text-white">Projects</button>
            <button onClick={() => scrollToSection('#skills')} className="block w-full text-left text-gray-300 hover:text-white">Skills</button>
            <button onClick={() => scrollToSection('#contact')} className="block w-full text-left text-gray-300 hover:text-white">Contact</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
