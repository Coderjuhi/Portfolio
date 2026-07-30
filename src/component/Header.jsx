import { useState,useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
<header
  className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300
  ${
    scrolled
      ? "top-5 w-[92%] px-6"
      : "top-0 w-[92%] px-6"
  }`}
> 
 <nav
  className={`max-w-7xl mx-auto px-6 py-4 transition-all ease-in-out duration-500 ${
    scrolled
      ? "rounded-2xl bg-transparent border border-white/50 shadow-xl backdrop-blur-xl"
      : "bg-transparent border-transparent shadow-none rounded-none"
  }`}
>
           <div className="flex items-center justify-between ">
          {/* Logo */}
          <h3
            className="text-xl font-bold text-black"
          >
            Juhi.
          </h3>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8  ">
            <button onClick={() => scrollToSection("#about")} className="px-4 py-2 rounded-full text-gray-600   hover:bg-blue-100 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-300/40"> About </button>
            <button onClick={() => scrollToSection('#education')} className="px-4 py-2 rounded-full text-gray-600   hover:bg-blue-100 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-300/40">Services</button>
            <button onClick={() => scrollToSection('#projects')} className="px-4 py-2 rounded-full text-gray-600   hover:bg-blue-100 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-300/40">Projects</button>
            <button onClick={() => scrollToSection('#projects')} className="px-4 py-2 rounded-full text-gray-600   hover:bg-blue-100 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-300/40">Workflow</button>
            <button onClick={() => scrollToSection('#contact')} className="px-4 py-2 rounded-full text-gray-600   hover:bg-blue-100 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-300/40">Contact</button>
          </div>
          <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-gray-600 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
          >
            <Search size={18} />
            <span>Search</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu (Compact Top-Right) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-gray-800 rounded-lg p-2 w-48 space-y-1 shadow-lg z-50">
            <button
              onClick={() => scrollToSection('#home')}
              className="block w-full text-left text-gray-300 hover:text-white px-4 py-2 rounded"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('#about')}
              className="block w-full text-left text-gray-300 hover:text-white px-4 py-2 rounded"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('#education')}
              className="block w-full text-left text-gray-300 hover:text-white px-4 py-2 rounded"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('#projects')}
              className="block w-full text-left text-gray-300 hover:text-white px-4 py-2 rounded"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('#skills')}
              className="block w-full text-left text-gray-300 hover:text-white px-4 py-2 rounded"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="block w-full text-left text-gray-300 hover:text-white px-4 py-2 rounded"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
