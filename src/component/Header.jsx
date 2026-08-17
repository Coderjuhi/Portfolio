import { useState,useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const scrollToSection = (id) => {
  const section = document.querySelector(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsMenuOpen(false);
  }
};
  return (
<header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-7xl">
<nav className="relative w-full px-3 sm:px-4 py-3">
<div className="flex items-center justify-between gap-3">   
         {/* Logo */}
          <h3
            className="text-xl font-bold text-black"
          >
            Juhi.
          </h3>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 ">
            <button onClick={() => scrollToSection("#about")} className="px-4 py-2 rounded-full text-gray-600   hover:bg-blue-100 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-300/40"> About </button>
            <button onClick={() => scrollToSection("#education")} className="px-4 py-2 rounded-full text-gray-600   hover:bg-blue-100 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-300/40"> Education </button>
            <button onClick={() => scrollToSection("#skills")} className="px-4 py-2 rounded-full text-gray-600   hover:bg-blue-100 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-300/40"> Skills </button>
            <button onClick={() => scrollToSection('#services')} className="px-4 py-2 rounded-full text-gray-600   hover:bg-blue-100 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-300/40">Services</button>
            <button onClick={() => scrollToSection('#projects')} className="px-4 py-2 rounded-full text-gray-600   hover:bg-blue-100 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-300/40">Projects</button>
            <button onClick={() => scrollToSection('#workflows')} className="px-4 py-2 rounded-full text-gray-600   hover:bg-blue-100 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-300/40">Workflow</button>
            <button onClick={() => scrollToSection('#contact')} className="px-4 py-2 rounded-full text-gray-600   hover:bg-blue-100 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-300/40">Contact</button>
          </div>
                   <button
            className="hidden md:flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-gray-600 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
          >

            <Search size={18} />
            <span>Search</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="md:hidden shrink-0 text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu (Compact Top-Right) */}
        {isMenuOpen &&  (
<div className="md:hidden absolute top-16 right-0 w-48 max-w-[calc(100vw-2rem)] bg-white/80 backdrop-blur-xl rounded-2xl p-2 space-y-1 shadow-xl">         
            <button
              onClick={() => scrollToSection('#about')}
              className="block w-full text-left text-gray-600  hover:text-white px-4 py-2 rounded"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('#education')}
              className="block w-full text-left text-gray-600 hover:text-white px-4 py-2 rounded"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('#skils')}
              className="block w-full text-left text-gray-600 hover:text-white px-4 py-2 rounded"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('#services')}
              className="block w-full text-left text-gray-600 hover:text-white px-4 py-2 rounded"
            >
              Services
            </button> 
             <button
              onClick={() => scrollToSection('#projects')}
              className="block w-full text-left text-gray-600 hover:text-white px-4 py-2 rounded"
            >
            Projects
            </button>  
            <button
              onClick={() => scrollToSection('#worlflows')}
              className="block w-full text-left text-gray-600 hover:text-white px-4 py-2 rounded"
            >
              Workflows
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="block w-full text-left text-gray-600 hover:text-white px-4 py-2 rounded"
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
