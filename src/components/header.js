import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          MyLogo
        </div>

        {/* Nav links (hidden on mobile) */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-blue-500">Home</a>
          <a href="/about" className="text-gray-600 hover:text-blue-500">About</a>
          <a href="/services" className="text-gray-600 hover:text-blue-500">Services</a>
          <a href="/contact" className="text-gray-600 hover:text-blue-500">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Mobile Menu (shown when isOpen is true) */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md">
            <nav className="flex flex-col space-y-4 py-4">
              <a href="/" className="text-gray-600 hover:text-blue-500 px-4">Home</a>
              <a href="/about" className="text-gray-600 hover:text-blue-500 px-4">About</a>
              <a href="/services" className="text-gray-600 hover:text-blue-500 px-4">Services</a>
              <a href="/contact" className="text-gray-600 hover:text-blue-500 px-4">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
