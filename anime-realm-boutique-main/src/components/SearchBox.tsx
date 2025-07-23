
import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { products } from '@/data/products';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface SearchBoxProps {
  onClose?: () => void;
  isFullScreen?: boolean;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onClose, isFullScreen = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Focus input automatically when component mounts in fullscreen mode
  useEffect(() => {
    if (isFullScreen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFullScreen]);

  // Handle search with debounce
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const term = searchTerm.toLowerCase();
      const filteredProducts = products.filter(product => {
        return (
          product.name.toLowerCase().includes(term) || 
          product.category.toLowerCase().includes(term) || 
          product.anime.toLowerCase().includes(term)
        );
      });

      setResults(filteredProducts.slice(0, 5)); // Limit to 5 results for dropdown
      setIsSearching(false);
    }, 300); // Debounce time

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resultsRef.current && 
        !resultsRef.current.contains(event.target as Node) && 
        inputRef.current && 
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setIsFocused(false);
      if (onClose) onClose();
    }
  };

  const handleResultClick = (productId: string) => {
    navigate(`/product/${productId}`);
    setSearchTerm('');
    setIsFocused(false);
    if (onClose) onClose();
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, index) => {
      if (part.toLowerCase() === query.toLowerCase()) {
        return <span key={index} className="bg-anime-purple/20 font-medium">{part}</span>;
      }
      return part;
    });
  };

  return (
    <div className={`relative w-full ${isFullScreen ? 'max-w-3xl mx-auto' : 'w-full'}`}>
      <form onSubmit={handleSearchSubmit} className="relative">
        <div className="relative">
          <Search 
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all ${isSearching ? 'animate-pulse' : ''}`} 
            size={isFullScreen ? 24 : 18} 
          />
          <Input
            ref={inputRef}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder={isFullScreen ? "Search for anime products, categories, or series..." : "Search products..."}
            className={`pl-14 pr-12 py-3 shadow-lg transition-all duration-300 ${
              isFullScreen 
                ? 'h-16 text-xl rounded-xl border-2 border-anime-purple/30 focus:border-anime-purple hover:border-anime-purple/60' 
                : 'h-10 hover:shadow-md'
            }`}
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={isFullScreen ? 20 : 16} className="hover:rotate-90 transition-transform duration-200" />
            </button>
          )}
        </div>
        {isFullScreen && (
          <div className="mt-4 text-center">
            <Button 
              type="submit" 
              className="bg-anime-purple hover:bg-anime-pink text-white font-medium px-8 py-3 rounded-md transition-all hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              <Search className="mr-2 h-5 w-5" /> Search Products
            </Button>
          </div>
        )}
      </form>

      {/* Search results dropdown */}
      {isFocused && searchTerm.trim() !== '' && (
        <div 
          ref={resultsRef}
          className={`absolute z-50 mt-2 w-full bg-white rounded-md shadow-xl max-h-96 overflow-y-auto border border-gray-200 fade-in ${
            isFullScreen ? 'shadow-2xl border-2 border-anime-purple/20' : ''
          }`}
        >
          {isSearching ? (
            <div className="p-8 text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-anime-purple border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="mt-3 text-gray-500">Searching for products...</p>
            </div>
          ) : results.length > 0 ? (
            <>
              <div className={`p-3 space-y-3 ${isFullScreen ? 'p-4' : ''}`}>
                {results.map((product, index) => (
                  <div 
                    key={product.id}
                    onClick={() => handleResultClick(product.id)}
                    className={`flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-all duration-200 search-result-item scale-in ${
                      isFullScreen ? 'p-4 hover:shadow-md' : ''
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className={`bg-gray-100 rounded-lg overflow-hidden mr-4 transition-transform hover:scale-105 ${
                      isFullScreen ? 'h-20 w-20' : 'h-14 w-14'
                    }`}>
                      <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className={`font-medium ${isFullScreen ? 'text-lg mb-1' : 'text-sm'}`}>
                        {highlightMatch(product.name, searchTerm)}
                      </div>
                      <div className={`text-gray-500 flex gap-3 ${isFullScreen ? 'text-base' : 'text-xs'}`}>
                        <span className="bg-gray-100 px-2 py-1 rounded">
                          {highlightMatch(product.anime, searchTerm)}
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded">
                          {highlightMatch(product.category, searchTerm)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div 
                className={`p-3 border-t text-center text-anime-purple hover:bg-gray-50 cursor-pointer transition-all ${
                  isFullScreen ? 'p-4 text-base font-medium hover:bg-anime-purple/5' : 'text-sm'
                }`}
                onClick={handleSearchSubmit}
              >
                See all results for "{searchTerm}"
              </div>
            </>
          ) : (
            <div className={`p-8 text-center text-gray-500 ${isFullScreen ? 'p-12 text-lg' : ''}`}>
              <div className="mb-4 text-gray-400">
                <Search size={isFullScreen ? 48 : 32} className="mx-auto opacity-50" />
              </div>
              No matching products found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
