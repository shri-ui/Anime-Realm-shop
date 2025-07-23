
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import ProductCard from './ProductCard';
import { products } from '@/data/products';

interface SimilarProductsProps {
  currentProductId: string;
  anime?: string;
  limit?: number;
}

const SimilarProducts: React.FC<SimilarProductsProps> = ({ 
  currentProductId, 
  anime, 
  limit = 6 
}) => {
  const similarProducts = products
    .filter(product => 
      product.id !== currentProductId && 
      (anime ? product.anime === anime : true)
    )
    .slice(0, limit);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {similarProducts.map((product) => (
          <CarouselItem 
            key={product.id} 
            className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <Link to={`/product/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-end mt-4 gap-2">
        <CarouselPrevious className="relative static -left-0 top-0 translate-y-0" />
        <CarouselNext className="relative static -right-0 top-0 translate-y-0" />
      </div>
    </Carousel>
  );
};

export default SimilarProducts;
