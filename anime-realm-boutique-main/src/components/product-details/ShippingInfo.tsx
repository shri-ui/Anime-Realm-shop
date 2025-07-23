
import React from 'react';
import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ShippingInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2 text-anime-purple">Shipping Information</h3>
        <p className="text-gray-700">
          We ship all products internationally from our warehouse in Japan. 
          All orders are carefully packaged to ensure they arrive in perfect condition.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-anime-purple/10 to-anime-pink/10 p-3">
            <h4 className="font-semibold">Standard Shipping</h4>
          </div>
          <CardContent className="pt-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <Package className="h-4 w-4 text-anime-purple mr-2 mt-0.5 shrink-0" />
                <span>Delivery in 5-7 business days</span>
              </li>
              <li className="flex items-start">
                <Package className="h-4 w-4 text-anime-purple mr-2 mt-0.5 shrink-0" />
                <span>Tracking number provided</span>
              </li>
              <li className="flex items-start">
                <Package className="h-4 w-4 text-anime-purple mr-2 mt-0.5 shrink-0" />
                <span>$5.99 for orders under $50</span>
              </li>
              <li className="flex items-start">
                <Package className="h-4 w-4 text-anime-purple mr-2 mt-0.5 shrink-0" />
                <span>FREE for orders over $50</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-anime-orange/10 to-anime-orange/5 p-3">
            <h4 className="font-semibold">Express Shipping</h4>
          </div>
          <CardContent className="pt-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <Package className="h-4 w-4 text-anime-orange mr-2 mt-0.5 shrink-0" />
                <span>Delivery in 2-3 business days</span>
              </li>
              <li className="flex items-start">
                <Package className="h-4 w-4 text-anime-orange mr-2 mt-0.5 shrink-0" />
                <span>Priority handling</span>
              </li>
              <li className="flex items-start">
                <Package className="h-4 w-4 text-anime-orange mr-2 mt-0.5 shrink-0" />
                <span>$12.99 flat rate</span>
              </li>
              <li className="flex items-start">
                <Package className="h-4 w-4 text-anime-orange mr-2 mt-0.5 shrink-0" />
                <span>Available for all regions</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4 text-sm">
        <p className="font-medium mb-2">Please Note:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Delivery times may vary during holiday seasons and sales events</li>
          <li>International orders may be subject to customs duties and taxes</li>
          <li>We are not responsible for delays due to customs processing</li>
          <li>For more information, please visit our <Link to="/shipping-returns" className="text-anime-purple hover:underline">Shipping & Returns</Link> page</li>
        </ul>
      </div>
    </div>
  );
};

export default ShippingInfo;
