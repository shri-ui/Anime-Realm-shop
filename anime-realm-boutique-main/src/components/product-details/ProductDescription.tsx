
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Product } from '@/types/product';

interface ProductDescriptionProps {
  product: Product;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ product }) => {
  return (
    <div className="prose max-w-none">
      <p className="text-gray-700">{product.description}</p>
      <ul className="mt-4 space-y-2">
        <li className="flex items-start">
          <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-anime-purple/10 text-anime-purple mr-2">
            <ChevronRight className="h-3 w-3" />
          </span>
          <span>Official licensed {product.anime} merchandise</span>
        </li>
        <li className="flex items-start">
          <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-anime-purple/10 text-anime-purple mr-2">
            <ChevronRight className="h-3 w-3" />
          </span>
          <span>High-quality materials and construction</span>
        </li>
        <li className="flex items-start">
          <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-anime-purple/10 text-anime-purple mr-2">
            <ChevronRight className="h-3 w-3" />
          </span>
          <span>Limited edition collectible</span>
        </li>
      </ul>

      {/* Additional product details */}
      <div className="mt-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="specifications">
            <AccordionTrigger className="text-left font-medium">
              Specifications
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium">Material</p>
                  <p className="text-gray-600">Premium Quality PVC</p>
                </div>
                <div>
                  <p className="font-medium">Dimensions</p>
                  <p className="text-gray-600">25cm x 15cm x 10cm</p>
                </div>
                <div>
                  <p className="font-medium">Weight</p>
                  <p className="text-gray-600">0.5kg</p>
                </div>
                <div>
                  <p className="font-medium">Release Date</p>
                  <p className="text-gray-600">January 2025</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="care">
            <AccordionTrigger className="text-left font-medium">
              Care Instructions
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                <li>Keep away from direct sunlight to prevent fading</li>
                <li>Clean with a soft, dry cloth</li>
                <li>Avoid exposure to extreme temperatures</li>
                <li>Display in a dust-free environment for best preservation</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ProductDescription;
