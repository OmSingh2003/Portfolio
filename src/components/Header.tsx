import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ui/ThemeToggle";
import portfolioLogo from "../assets/portfolio.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll event to add background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-white/90 backdrop-blur-md dark:bg-gray-900/90"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between px-6 md:px-10 lg:h-20">
          {/* Logo */}
          <Link to="/" className="text-xl font-medium text-gray-900 dark:text-white">
            <div className="flex items-center gap-3">
              <img
                src={portfolioLogo}
                alt="Portfolio Logo"
                className="h-10 w-10"
              />
              <span className="hidden sm:inline"></span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-12 text-lg">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`relative ${
                      location.pathname === link.path
                        ? "font-semibold text-blue-600 dark:text-blue-400"
                        : "text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <span className="absolute -bottom-1 left-0 h-1 w-full bg-blue-600 dark:bg-blue-400"></span>
                    )}
                  </Link>
                </li>
              ))}
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-5 md:hidden">
            <ThemeToggle />
            <button
              className="text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg dark:bg-gray-900 md:hidden">
          <nav className="container mx-auto">
            <ul className="flex flex-col divide-y divide-gray-100 dark:divide-gray-800">
              {navLinks.map((link) => (
                <li key={link.name} className="py-4">
                  <Link
                    to={link.path}
                    className={`block px-6 text-lg ${
                      location.pathname === link.path
                        ? "font-medium text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
