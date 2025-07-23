
import React from 'react';
import { FileText, MessageSquare, Package } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductDescription from './ProductDescription';
import ProductReviews from '@/components/ProductReviews';
import ShippingInfo from './ShippingInfo';
import { Product } from '@/types/product';

interface ProductDetailsTabsProps {
  product: Product;
  productId: string;
}

const ProductDetailsTabs: React.FC<ProductDetailsTabsProps> = ({ product, productId }) => {
  return (
    <div className="mt-8 border rounded-lg overflow-hidden">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="w-full grid grid-cols-3 bg-gray-50">
          <TabsTrigger 
            value="description"
            className="data-[state=active]:bg-white data-[state=active]:text-anime-purple"
          >
            <FileText className="mr-2 h-4 w-4" />
            Description
          </TabsTrigger>
          <TabsTrigger 
            value="reviews"
            className="data-[state=active]:bg-white data-[state=active]:text-anime-purple"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Reviews
          </TabsTrigger>
          <TabsTrigger 
            value="shipping"
            className="data-[state=active]:bg-white data-[state=active]:text-anime-purple"
          >
            <Package className="mr-2 h-4 w-4" />
            Shipping
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="p-6 bg-white">
          <ProductDescription product={product} />
        </TabsContent>
        
        <TabsContent value="reviews" className="p-6 bg-white">
          <ProductReviews productId={productId} />
        </TabsContent>
        
        <TabsContent value="shipping" className="p-6 bg-white">
          <ShippingInfo />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDetailsTabs;
