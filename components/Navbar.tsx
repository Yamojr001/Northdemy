
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavLinks } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group h-15">
            <img src="https://prep-ai.xyz/ogasaid/nd5.jpg" alt="NorthDemy Logo" className="w-45 h-20 object-contain" />
            {/* <span className="text-2xl font-extrabold text-blue-900 tracking-tight">NorthDemy</span> */}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {NavLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.children ? (
                  <button
                    className={`flex items-center space-x-1 text-[15px] font-semibold transition-colors ${
                      location.pathname.startsWith(link.path) ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-[15px] font-semibold transition-colors ${
                      location.pathname === link.path ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {link.children && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-2xl rounded-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className={`block px-5 py-2 text-sm font-medium transition-colors ${
                          location.pathname === child.path ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to="/programs" className="px-6 py-2.5 rounded-lg border border-blue-600 text-blue-600 font-bold hover:bg-blue-50 transition-all">
              Apply Now
            </Link>
            <Link to="/contact" className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Partner
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-slate-800 bg-slate-50 rounded-lg" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-[73px] bg-white z-[60] overflow-y-auto p-6 flex flex-col">
            <div className="flex flex-col space-y-2 mb-8">
              {NavLinks.map((link) => (
                <div key={link.name} className="border-b border-slate-50 pb-2">
                  <div 
                    className="flex justify-between items-center py-3 text-lg font-bold text-slate-900"
                    onClick={() => link.children && setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                  >
                    <Link to={link.path}>{link.name}</Link>
                    {link.children && <ChevronDown size={20} className={`transition-transform ${activeDropdown === link.name ? 'rotate-180 text-blue-600' : ''}`} />}
                  </div>
                  {link.children && activeDropdown === link.name && (
                    <div className="pl-4 bg-slate-50 rounded-xl py-2 flex flex-col space-y-2 mb-4">
                      {link.children.map((child) => (
                        <Link 
                          key={child.name} 
                          to={child.path} 
                          className={`py-2 text-[15px] font-medium ${location.pathname === child.path ? 'text-blue-600' : 'text-slate-600'}`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-auto space-y-4 pt-8">
              <Link to="/programs" className="block w-full py-4 text-center rounded-2xl bg-blue-600 text-white font-black text-lg shadow-xl shadow-blue-200">Apply Now</Link>
              <Link to="/contact" className="block w-full py-4 text-center rounded-2xl border-2 border-slate-100 text-slate-900 font-black text-lg">Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
