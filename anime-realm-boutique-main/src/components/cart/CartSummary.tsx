
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Product } from '@/types/product';

interface CartSummaryProps {
  items: { product: Product; quantity: number }[];
  promoCode: string;
  setPromoCode: (value: string) => void;
  onApplyPromoCode: () => void;
  onCheckout: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  items,
  promoCode,
  setPromoCode,
  onApplyPromoCode,
  onCheckout,
}) => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  
  const estimatedShipping = subtotal > 100 ? 0 : 8.99;
  const taxRate = 0.08; // 8% tax
  const tax = subtotal * taxRate;
  const total = subtotal + estimatedShipping + tax;
  
  return (
    <Card className="sticky top-4 border-t-4 border-t-anime-purple">
      <CardHeader>
        <CardTitle className="text-xl">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Estimated Shipping</span>
            <span>
              {estimatedShipping === 0 
                ? <span className="text-green-600">Free</span>
                : `$${estimatedShipping.toFixed(2)}`
              }
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Estimated Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          {subtotal < 100 && (
            <div className="text-xs text-anime-blue mt-2 italic">
              Add ${(100 - subtotal).toFixed(2)} more to qualify for free shipping!
            </div>
          )}
        </div>
        
        <div className="pt-2">
          <div className="text-sm font-medium mb-2">Have a promo code?</div>
          <div className="flex space-x-2">
            <Input 
              placeholder="Enter code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="h-9"
            />
            <Button 
              variant="outline" 
              className="h-9"
              onClick={onApplyPromoCode}
            >
              Apply
            </Button>
          </div>
        </div>
        
        <div className="pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Total</span>
            <span className="text-lg font-bold">${total.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-anime-purple hover:bg-anime-pink transition-all group text-white"
          onClick={onCheckout}
        >
          <span>Proceed to Checkout</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CartSummary;
