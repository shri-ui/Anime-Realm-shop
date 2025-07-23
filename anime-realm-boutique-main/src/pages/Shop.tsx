
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductsGrid from '@/components/ProductsGrid';
import FilterSidebar from '@/components/FilterSidebar';
import { products } from '@/data/products';
import { Product } from '@/types/product';

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [filters, setFilters] = useState({
    animes: [] as string[],
    categories: [] as string[],
    priceRange: { min: 0, max: 200 },
    onlyInStock: false,
    onlyOnSale: false,
    onlyNew: false
  });

  useEffect(() => {
    const result = products.filter(product => {
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
  }, [filters]);

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Helmet>
        <title>Shop | AnimeRealm Boutique</title>
        <meta name="description" content="Shop premium anime merchandise including figures, posters, apparel, and collectibles from your favorite anime series." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow py-12">
          <div className="anime-container">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Shop All Products
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <FilterSidebar 
                  filters={filters}
                  onFilterChange={handleFilterChange}
                />
              </div>
              
              <div className="lg:col-span-3">
                {filteredProducts.length > 0 ? (
                  <>
                    <div className="flex justify-between items-center mb-6">
                      <p className="text-gray-600">{filteredProducts.length} products found</p>
                      <div className="flex items-center space-x-2">
                        <label htmlFor="sort" className="text-sm text-gray-600">Sort by:</label>
                        <select 
                          id="sort" 
                          className="border rounded-md p-1 text-sm"
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
                  <div className="flex justify-center items-center py-20">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold mb-2">No products found</h3>
                      <p className="text-gray-600">Try adjusting your filters to find what you're looking for.</p>
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

export default Shop;
