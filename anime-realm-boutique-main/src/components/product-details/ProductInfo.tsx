
import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductInfoProps {
  product: Product;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  selectedVariation: string;
  setSelectedVariation: (variation: string) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ 
  product, 
  selectedSize, 
  setSelectedSize, 
  selectedVariation, 
  setSelectedVariation,
  quantity,
  setQuantity
}) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [addedToCart, setAddedToCart] = useState(false);
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    
    // Reset the added indicator after 3 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };
  
  const handleBuyNow = () => {
    addToCart(product, quantity);
    // Navigate to cart - this would be implemented in the parent component
    window.location.href = '/checkout';
  };
  
  return (
    <div>
      <div className="space-y-2 mb-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= Math.round(product.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              ({product.reviewCount} reviews)
            </span>
          </div>
          
          <Badge variant="outline" className="font-normal">
            {product.category}
          </Badge>
          
          <Badge
            className={product.inStock ? 'bg-green-500' : 'bg-red-500'}
          >
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </Badge>
        </div>
      </div>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-anime-purple">
            ${product.price.toFixed(2)}
          </span>
          
          {product.originalPrice && (
            <span className="text-xl text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        <p className="text-gray-600">
          {product.description.split('\n')[0]}
        </p>
      </div>
      
      {product.variations && product.variations.length > 0 && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Variant
          </label>
          <div className="flex flex-wrap gap-2">
            {product.variations.map((variation) => (
              <button
                key={variation}
                className={`px-4 py-2 border rounded-md transition-colors ${
                  selectedVariation === variation
                    ? 'border-anime-purple bg-purple-50 text-anime-purple'
                    : 'border-gray-300 hover:border-anime-purple'
                }`}
                onClick={() => setSelectedVariation(variation)}
              >
                {variation}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Size
        </label>
        <div className="flex flex-wrap gap-2">
          {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <button
              key={size}
              className={`w-10 h-10 flex items-center justify-center border rounded-md transition-colors ${
                selectedSize === size
                  ? 'border-anime-purple bg-purple-50 text-anime-purple'
                  : 'border-gray-300 hover:border-anime-purple'
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Quantity
        </label>
        <div className="flex items-center w-32 border rounded-md">
          <button
            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-anime-purple"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <div className="flex-1 text-center">{quantity}</div>
          <button
            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-anime-purple"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          className={`flex-1 bg-anime-purple hover:bg-anime-pink transition-all ${
            addedToCart ? 'bg-green-500 hover:bg-green-600' : ''
          }`}
          size="lg"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          {addedToCart ? (
            <>
              <CheckCircle className="mr-2 h-5 w-5" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </>
          )}
        </Button>
        
        <Button
          className="flex-1 bg-anime-orange hover:bg-anime-pink transition-all"
          size="lg"
          onClick={handleBuyNow}
          disabled={!product.inStock}
        >
          Buy Now
        </Button>
      </div>
      
      <Button
        variant="outline"
        className="mt-4 w-full border-gray-300 text-gray-700 hover:bg-gray-50"
      >
        <Heart className="mr-2 h-4 w-4" />
        Add to Wishlist
      </Button>
      
      <div className="mt-6 border-t pt-4">
        <div className="text-sm text-gray-600">
          <p className="mb-2">
            <span className="font-medium">SKU:</span> {product.id}
          </p>
          <p className="mb-2">
            <span className="font-medium">Category:</span> {product.category}
          </p>
          <p>
            <span className="font-medium">Series:</span> {product.anime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
