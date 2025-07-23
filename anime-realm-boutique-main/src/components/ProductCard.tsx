
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Product } from '@/types/product';
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Card className="overflow-hidden h-full flex flex-col group border-gray-200 hover:border-anime-purple transition-all duration-300 hover:shadow-xl">
        <div className="relative">
          {product.isNew && (
            <Badge className="absolute top-4 left-4 bg-anime-blue text-white z-10 shadow-md animate-bounce-in">New</Badge>
          )}
          {product.isOnSale && (
            <Badge className="absolute top-4 right-4 bg-anime-orange text-white z-10 shadow-md animate-bounce-in">Sale</Badge>
          )}
          <Link to={`/product/${product.id}`} className="block overflow-hidden">
            <div className="h-72 overflow-hidden">
              <motion.img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>
          
          {/* Quick action buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-pink-50 hover:text-pink-500 transition-colors shadow-lg">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <CardContent className="flex-grow flex flex-col justify-between p-6 space-y-4">
          <div className="space-y-3">
            <Link to={`/product/${product.id}`} className="block">
              <h3 className="font-bold text-xl line-clamp-2 hover:text-anime-purple transition-colors group-hover:text-anime-purple">
                {product.name}
              </h3>
            </Link>

            <span className="text-gray-500">{product.anime}</span>
            
            <div className="flex items-center mt-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-anime-orange text-anime-orange' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-sm font-medium ml-2">{product.rating}</span>
              <span className="text-xs text-gray-500 ml-1">({product.reviewCount} reviews)</span>
            </div>
          </div>
          
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <div>
                {product.originalPrice ? (
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-2xl">${product.price.toFixed(2)}</span>
                    <span className="text-gray-500 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
                  </div>
                ) : (
                  <span className="font-bold text-2xl">${product.price.toFixed(2)}</span>
                )}
              </div>
              <Badge variant={product.category === 'Figure' ? 'blue' : product.category === 'Clothing' ? 'purple' : 'orange'} className="px-3 py-1 text-xs">
                {product.category}
              </Badge>
            </div>
            
            <motion.div
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="w-full bg-anime-purple hover:bg-anime-pink text-white py-6 group overflow-hidden relative"
                onClick={handleAddToCart}
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-0 group-hover:opacity-20"></span>
                <ShoppingCart className="mr-2 h-5 w-5 group-hover:animate-bounce" /> 
                <span className="group-hover:translate-x-1 transition-transform">Add to Cart</span>
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
