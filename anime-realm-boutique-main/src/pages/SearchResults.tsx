
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductsGrid from '@/components/ProductsGrid';
import FilterSidebar from '@/components/FilterSidebar';
import { products } from '@/data/products';
import { Product } from '@/types/product';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({
    animes: [] as string[],
    categories: [] as string[],
    priceRange: { min: 0, max: 200 },
    onlyInStock: false,
    onlyOnSale: false,
    onlyNew: false
  });

  // Update search results whenever searchQuery or filters change
  useEffect(() => {
    if (searchQuery) {
      setSearchTerm(searchQuery);
    }
    
    performSearch();
  }, [searchQuery, filters]);

  const performSearch = () => {
    const query = searchQuery.toLowerCase();
    
    const result = products.filter(product => {
      // First check if product matches search query
      const matchesSearch = query === '' || 
        product.name.toLowerCase().includes(query) || 
        product.category.toLowerCase().includes(query) || 
        product.anime.toLowerCase().includes(query);
      
      if (!matchesSearch) return false;
      
      // Then apply all other filters
      // Filter by anime
      if (filters.animes.length > 0 && !filters.animes.includes(product.anime)) {
        return false;
      }
      
      // Filter by category
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }
      
      // Filter by price range
      if (product.price < filters.priceRange.min || product.price > filters.priceRange.max) {
        return false;
      }
      
      // Filter by stock
      if (filters.onlyInStock && !product.inStock) {
        return false;
      }
      
      // Filter by sale
      if (filters.onlyOnSale && !product.isOnSale) {
        return false;
      }
      
      // Filter by new arrivals
      if (filters.onlyNew && !product.isNew) {
        return false;
      }
      
      return true;
    });
    
    setFilteredProducts(result);
  };

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchParams({ q: searchTerm.trim() });
    }
  };

  const highlightQuery = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() 
            ? <span key={i} className="bg-anime-purple/20 font-medium">{part}</span> 
            : part
        )}
      </>
    );
  };

  return (
    <>
      <Helmet>
        <title>{`Search: ${searchQuery} | AnimeRealm Boutique`}</title>
        <meta name="description" content={`Search results for ${searchQuery} - Find anime merchandise and collectibles at AnimeRealm Boutique.`} />
      </Helmet>
      
      <div className="flex flex-col min-h-screen w-full">
        <Navbar />
        
        <main className="flex-grow w-full">
          <div className="w-full bg-gradient-to-r from-anime-purple/10 to-anime-pink/10 py-8">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-6">
                <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
                    <Input
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search products..."
                      className="pl-12 h-14 text-lg rounded-xl border-2 border-anime-purple/30 focus:border-anime-purple shadow-lg"
                    />
                  </div>
                </form>
              </div>
              
              {searchQuery && (
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center search-heading">
                  Search Results for "{highlightQuery(searchQuery, searchQuery)}"
                </h1>
              )}
            </div>
          </div>
          
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="sticky top-20">
                  <FilterSidebar 
                    filters={filters}
                    onFilterChange={handleFilterChange}
                  />
                </div>
              </div>
              
              <div className="lg:col-span-3 order-1 lg:order-2">
                {filteredProducts.length > 0 ? (
                  <>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                      <p className="text-gray-600">{filteredProducts.length} products found</p>
                      <div className="flex items-center space-x-2 w-full md:w-auto">
                        <label htmlFor="sort" className="text-sm text-gray-600">Sort by:</label>
                        <select 
                          id="sort" 
                          className="border rounded-md p-2 text-sm flex-grow md:flex-grow-0"
                          defaultValue="featured"
                        >
                          <option value="featured">Featured</option>
                          <option value="price-low">Price: Low to High</option>
                          <option value="price-high">Price: High to Low</option>
                          <option value="newest">Newest</option>
                        </select>
                      </div>
                    </div>
                    <ProductsGrid products={filteredProducts} />
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white rounded-xl shadow-sm">
                    <div className="w-24 h-24 mb-4 text-gray-300">
                      <Search size={96} strokeWidth={1} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">No matching products found</h3>
                    <p className="text-gray-600 max-w-md mb-8">
                      We couldn't find any products matching "{searchQuery}". 
                      Try adjusting your search terms or filters.
                    </p>
                    <div className="text-sm text-gray-500">
                      <p className="font-medium">Suggestions:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Check your spelling</li>
                        <li>Try more general keywords</li>
                        <li>Try different filters</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SearchResults;
