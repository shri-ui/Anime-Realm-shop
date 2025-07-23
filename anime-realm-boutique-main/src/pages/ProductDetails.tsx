
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SimilarProducts from '@/components/SimilarProducts';
import { products } from '@/data/products';
import { Product as ProductType } from '@/types/product';
import ProductImages from '@/components/product-details/ProductImages';
import ProductInfo from '@/components/product-details/ProductInfo';
import ProductOptions from '@/components/product-details/ProductOptions';
import ProductDetailsTabs from '@/components/product-details/ProductDetailsTabs';

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  
  // Add state for product options
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [selectedVariation, setSelectedVariation] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  // Get product data
  useEffect(() => {
    const foundProduct = products.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      // Initialize variation if product has variations
      if (foundProduct.variations && foundProduct.variations.length > 0) {
        setSelectedVariation(foundProduct.variations[0]);
      }
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex justify-center items-center">
          <div className="animate-pulse-glow bg-anime-purple/10 p-10 rounded-lg">
            <h2 className="text-xl font-bold text-center">Loading product details...</h2>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-background/80">
      {/* Anime-inspired themed header based on product anime */}
      <div className={`h-32 w-full bg-cover bg-center relative overflow-hidden`}
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3)`,
          boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.8)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-anime-purple/80 to-anime-pink/50 mix-blend-multiply" />
        <div className="relative h-full anime-container flex items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            {product.anime} <span className="text-anime-orange">Collection</span>
          </h1>
        </div>
      </div>
      
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="anime-container pt-4 pb-2">
        <div className="flex items-center text-sm text-gray-600">
          <Link to="/" className="hover:text-anime-purple">Home</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link to="/shop" className="hover:text-anime-purple">Shop</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-800 font-medium truncate">{product.name}</span>
        </div>
      </div>
      
      <main className="flex-grow anime-container py-6">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Product Image Section */}
          <ProductImages product={product} />
          
          {/* Product Details */}
          <div className="flex flex-col space-y-6">
            <ProductInfo 
              product={product} 
              selectedSize={selectedSize} 
              setSelectedSize={setSelectedSize} 
              selectedVariation={selectedVariation} 
              setSelectedVariation={setSelectedVariation} 
              quantity={quantity} 
              setQuantity={setQuantity} 
            />
            <ProductDetailsTabs product={product} productId={product.id} />
          </div>
        </div>
        
        {/* Similar Products Section */}
        <div className="mt-16 relative">
          {/* Anime-inspired decorative element */}
          <div className="absolute -top-12 left-0 w-full h-1 bg-gradient-to-r from-transparent via-anime-purple to-transparent opacity-70"></div>
          
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-anime-purple to-anime-pink">
              You May Also Like
            </span>
            <div className="ml-3 h-1 w-10 bg-gradient-to-r from-anime-purple to-anime-pink rounded-full"></div>
          </h2>
          <SimilarProducts currentProductId={product.id} anime={product.anime} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetails;
