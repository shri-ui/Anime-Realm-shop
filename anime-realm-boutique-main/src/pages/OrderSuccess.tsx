
import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { Check, Home, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface LocationState {
  orderNumber: string;
  email: string;
  total: number;
}

const OrderSuccess = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  
  if (!state?.orderNumber) {
    return <Navigate to="/" replace />;
  }
  
  return (
    <div className="bg-background min-h-screen py-16">
      <div className="anime-container max-w-2xl mx-auto">
        <Card className="p-8 text-center border-t-4 border-green-500">
          <div className="mb-6">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <Check className="h-12 w-12 text-green-500" />
            </div>
            
            <h1 className="text-2xl font-bold mb-2">Thank You For Your Order!</h1>
            <p className="text-gray-600">
              Your order has been confirmed and will be shipping soon.
            </p>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="font-medium">Order Number</div>
              <div className="text-2xl font-bold text-anime-purple">{state.orderNumber}</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="font-medium">A confirmation email has been sent to:</div>
              <div className="text-gray-600">{state.email}</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="font-medium">Order Total</div>
              <div className="text-xl font-bold">${state.total.toFixed(2)}</div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://i.imgur.com/V0PzYqz.png" 
              alt="Anime character thumbs up"
              className="w-32 h-32 object-contain absolute -top-12 -right-4 transform rotate-12"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/orders">
              <Button variant="outline" className="border-anime-purple text-anime-purple hover:bg-anime-purple/10 w-full sm:w-auto">
                <Package className="mr-2 h-4 w-4" />
                Track Order
              </Button>
            </Link>
            
            <Link to="/">
              <Button className="bg-anime-purple hover:bg-anime-pink transition-all w-full sm:w-auto">
                <Home className="mr-2 h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OrderSuccess;
