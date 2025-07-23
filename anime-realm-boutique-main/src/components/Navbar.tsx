
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import SearchBox from './SearchBox';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { getCartItemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle sign in navigation
  const handleSignIn = () => {
    window.location.href = '/login';
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'}`}>
      <div className="max-w-screen-2xl w-full mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center transition-transform hover:scale-105 duration-300">
              <motion.span 
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-anime-purple to-anime-pink"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                AnimeRealm
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/" className={`text-gray-700 hover:text-anime-purple font-medium transition-all hover:-translate-y-1 duration-200 ${location.pathname === '/' ? 'text-anime-purple' : ''}`}>Home</Link>
            <Link to="/shop" className={`text-gray-700 hover:text-anime-purple font-medium transition-all hover:-translate-y-1 duration-200 ${location.pathname === '/shop' ? 'text-anime-purple' : ''}`}>Shop</Link>
            <Link to="/collections" className={`text-gray-700 hover:text-anime-purple font-medium transition-all hover:-translate-y-1 duration-200 ${location.pathname === '/collections' ? 'text-anime-purple' : ''}`}>Collections</Link>
            <Link to="/about-us" className={`text-gray-700 hover:text-anime-purple font-medium transition-all hover:-translate-y-1 duration-200 ${location.pathname === '/about-us' ? 'text-anime-purple' : ''}`}>About</Link>
            <Link to="/contact-us" className={`text-gray-700 hover:text-anime-purple font-medium transition-all hover:-translate-y-1 duration-200 ${location.pathname === '/contact-us' ? 'text-anime-purple' : ''}`}>Contact</Link>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Search" className="p-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <Search size={22} />
                </button>
              </SheetTrigger>
              <SheetContent side="top" className="h-[60vh] flex items-start justify-center pt-20 border-b-4 border-anime-purple">
                <div className="w-full max-w-4xl animate-fade-in">
                  <SearchBox isFullScreen={true} />
                </div>
              </SheetContent>
            </Sheet>
            
            <button 
              aria-label="Wishlist" 
              className="p-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Heart size={22} />
            </button>
            
            <Link to="/cart" aria-label="Shopping cart" className="p-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 relative">
              <ShoppingCart size={22} />
              {getCartItemCount() > 0 && (
                <motion.span 
                  className="absolute -top-1 -right-1 bg-anime-orange text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse-glow"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                >
                  {getCartItemCount()}
                </motion.span>
              )}
            </Link>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-anime-purple hover:bg-anime-pink text-white py-6 px-8 text-base shadow-md hover:shadow-lg transition-all" 
                onClick={handleSignIn}
              >
                Sign In
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Search" className="p-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                  <Search size={22} />
                </button>
              </SheetTrigger>
              <SheetContent side="top" className="h-[70vh] flex items-start justify-center pt-16 border-b-4 border-anime-purple">
                <div className="w-full max-w-xl">
                  <SearchBox isFullScreen={true} />
                </div>
              </SheetContent>
            </Sheet>
            <Link to="/cart" aria-label="Shopping cart" className="p-3 rounded-full hover:bg-gray-100 relative transition-all duration-300 hover:scale-105">
              <ShoppingCart size={22} />
              {getCartItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-anime-orange text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse-glow">
                  {getCartItemCount()}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              type="button"
              className="p-3 rounded-md text-gray-600 transition-all duration-300 hover:bg-gray-100 hover:text-anime-purple"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={26} className="animate-spin-once" /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-6 overflow-hidden"
            >
              <motion.div 
                className="flex flex-col space-y-4"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.07 }
                  },
                  hidden: {}
                }}
              >
                {[
                  { path: "/", label: "Home" },
                  { path: "/shop", label: "Shop" },
                  { path: "/collections", label: "Collections" },
                  { path: "/about-us", label: "About" },
                  { path: "/contact-us", label: "Contact" }
                ].map((item) => (
                  <motion.div
                    key={item.path}
                    variants={{
                      hidden: { x: -20, opacity: 0 },
                      visible: { x: 0, opacity: 1 }
                    }}
                  >
                    <Link 
                      to={item.path} 
                      className={`text-gray-700 hover:text-anime-purple font-medium py-3 px-2 hover:bg-gray-50 rounded-md transition-all block ${location.pathname === item.path ? 'text-anime-purple' : ''}`} 
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    hidden: { x: -20, opacity: 0 },
                    visible: { x: 0, opacity: 1 }
                  }}
                >
                  <Button className="anime-button w-full mt-3 py-6" onClick={handleSignIn}>Sign In</Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
