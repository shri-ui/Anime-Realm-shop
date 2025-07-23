
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Product } from '@/types/product';

interface OrderSummaryProps {
  items: { product: Product; quantity: number }[];
  currentStep: number;
  nextStep: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, currentStep, nextStep }) => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  
  const estimatedShipping = 8.99;
  const taxRate = 0.08; // 8% tax
  const tax = subtotal * taxRate;
  const total = subtotal + estimatedShipping + tax;
  
  const getButtonText = () => {
    switch (currentStep) {
      case 0: return 'Continue to Payment';
      case 1: return 'Continue to Review';
      case 2: return 'Place Order';
      default: return 'Next Step';
    }
  };
  
  return (
    <Card className="sticky top-4 border-t-4 border-t-anime-purple">
      <CardHeader>
        <CardTitle className="text-xl">Order Summary</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-3 max-h-72 overflow-auto pr-2">
          {items.map((item) => (
            <div key={item.product.id} className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-md overflow-hidden border">
                  <img 
                    src={item.product.images[0]} 
                    alt={item.product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-anime-purple text-white rounded-full flex items-center justify-center text-xs">
                  {item.quantity}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="font-medium line-clamp-1">{item.product.name}</div>
                <div className="text-xs text-gray-500">{item.product.anime}</div>
              </div>
              
              <div className="text-sm font-medium">
                ${(item.product.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        
        <div className="pt-2 border-t">
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span>${estimatedShipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="mt-4 pt-2 border-t flex justify-between items-center">
            <span className="font-bold">Total</span>
            <span className="font-bold text-lg">${total.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
      
      {currentStep === 2 && (
        <CardFooter>
          <Button 
            className="w-full bg-anime-purple hover:bg-anime-pink transition-all group"
            onClick={nextStep}
          >
            <span>{getButtonText()}</span>
            <Check className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default OrderSummary;
