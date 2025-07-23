
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from '@/types/product';

interface ProductImagesProps {
  product: Product;
}

const ProductImages: React.FC<ProductImagesProps> = ({ product }) => {
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  
  return (
    <div className="relative">
      <div 
        className={`relative rounded-lg overflow-hidden bg-white shadow-lg transition-all duration-300 ${
          isImageZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
        }`}
        onClick={() => setIsImageZoomed(!isImageZoomed)}
      >
        <div className="relative pt-[100%]">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-500 ${
              isImageZoomed ? 'scale-150' : 'scale-100'
            }`}
          />
        </div>
        
        {product.isNew && (
          <Badge className="absolute top-3 left-3 bg-anime-blue text-white z-10">New</Badge>
        )}
        {product.isOnSale && (
          <Badge className="absolute top-3 right-3 bg-anime-orange text-white z-10">Sale</Badge>
        )}
      </div>
      
      {/* Image thumbnails if we had more than one image */}
      <div className="mt-4 flex justify-center space-x-2">
        <Button 
          variant="outline" 
          size="icon"
          className="border-anime-purple/30 bg-white"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        
        <div className="h-16 w-16 rounded border-2 border-anime-purple cursor-pointer overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={`${product.name} thumbnail`}
            className="w-full h-full object-cover"
          />
        </div>
        
        <Button 
          variant="outline" 
          size="icon"
          className="border-anime-purple/30 bg-white"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProductImages;
