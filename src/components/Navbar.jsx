import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "The Philosophy", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "/services" },
  ];

  const sandWhite = "text-[#F4F1EA]"; 
  const forestGreen = "bg-[#1F2F2A]"; 
  const gold = "text-[#B09A63]";

  return (
    <>
      <nav 
        className={`fixed w-full z-50  ${isScrolled ? forestGreen : 'bg-gradient-to-b from-[#1F2F2A] to-[#1F2F2A]'} transition-colors duration-500 backdrop-blur-sm border-b border-white/5`}
      >
        <div className="container mx-auto px-6 md:px-16 flex items-center justify-between h-16">          
          {/* LOGO */}
          <Link to="/" className="group relative z-[110]">
            <h1 className={`text-xl md:text-2xl font-serif italic tracking-tighter transition-colors duration-500 ${sandWhite}`}>
              Saksha Stories
            </h1>
            <div className="absolute -bottom-1 left-0 h-[1px] w-0 group-hover:w-full bg-[#B09A63] transition-all duration-500"></div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-300 hover:text-[#B09A63] ${
                    location.pathname === link.path ? gold : sandWhite
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className={`h-4 w-[1px] transition-colors duration-500 ${isScrolled ? 'bg-white/10' : 'bg-white/20'}`}></div>
            
            <Link to="/application">
              <button className={`px-7 py-2.5 border transition-all duration-500 text-[9px] uppercase tracking-[0.3em] font-bold ${
                isScrolled 
                  ? `border-[#B09A63] text-[#B09A63] hover:bg-[#B09A63] hover:text-white` 
                  : `border-[#F4F1EA]/40 ${sandWhite} hover:bg-[#F4F1EA] hover:text-[#1F2F2A]`
              }`}>
                Apply
              </button>
            </Link>
          </div>

          {/* MOBILE TOGGLE (HAMBURGER) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col items-end gap-1.5 group z-[110]"
          >
            <div className={`h-[1px] transition-all duration-500 ${isMobileMenuOpen ? 'w-7 -rotate-45 translate-y-2 bg-[#B09A63]' : `w-7 ${isScrolled ? 'bg-[#F4F1EA]' : 'bg-white'}`}`}></div>
            <div className={`h-[1px] w-4 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100 bg-white'}`}></div>
            <div className={`h-[1px] transition-all duration-500 ${isMobileMenuOpen ? 'w-7 rotate-45 -translate-y-1 bg-[#B09A63]' : `w-7 ${isScrolled ? 'bg-[#F4F1EA]' : 'bg-white'}`}`}></div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 z-[90] ${forestGreen} transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10 px-6">
          <span className="text-[#B09A63] tracking-[0.6em] uppercase text-[9px] font-bold opacity-50">Menu</span>
          
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-3xl font-serif italic tracking-tight transition-all duration-300 ${
                  location.pathname === link.path ? gold : sandWhite
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="w-12 h-[1px] bg-white/10"></div>

          <Link to="/application" className="w-full max-w-[200px]">
            <button className="w-full py-4 border border-[#B09A63] text-[#B09A63] text-[10px] uppercase tracking-[0.4em] font-bold">
              Book a Session
            </button>
          </Link>
          
          <div className="absolute bottom-12 flex space-x-6 text-[10px] uppercase tracking-widest opacity-40 text-[#F4F1EA]">
            <span>Instagram</span>
            <span>Pinterest</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;