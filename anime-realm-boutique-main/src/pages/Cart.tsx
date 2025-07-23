
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, Trash2, ChevronRight, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import EmptyCartState from '@/components/cart/EmptyCartState';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';

interface CartItemType {
  product: Product;
  quantity: number;
}

const Cart = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [promoCode, setPromoCode] = useState('');

  const handleApplyPromoCode = () => {
    if (!promoCode.trim()) {
      toast({
        title: "Error",
        description: "Please enter a promo code",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Invalid Promo Code",
      description: "The promo code you entered is invalid or expired.",
      variant: "destructive",
    });
  };

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
    toast({
      title: "Item Removed",
      description: "The item has been removed from your cart.",
    });
  };

  const handleMoveToWishlist = (product: Product) => {
    removeFromCart(product.id);
    toast({
      title: "Moved to Wishlist",
      description: `${product.name} has been moved to your wishlist.`,
    });
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return <EmptyCartState />;
  }

  return (
    <div className="bg-background min-h-screen py-8">
      <div className="anime-container">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2 bg-gradient-to-r from-anime-purple to-anime-pink bg-clip-text text-transparent">
          <ShoppingBag className="h-8 w-8 text-anime-purple" />
          Your Shopping Cart
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3 space-y-4">
            <Card className="p-6 border-t-4 border-t-anime-purple">
              <div className="hidden md:grid grid-cols-12 gap-4 mb-4 text-sm font-medium text-gray-500">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Action</div>
              </div>
              
              <div className="divide-y">
                {cartItems.map((item) => (
                  <CartItem 
                    key={item.product.id}
                    item={item}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemoveItem}
                    onMoveToWishlist={handleMoveToWishlist}
                  />
                ))}
              </div>
            </Card>
            
            <div className="flex justify-between items-center">
              <Link 
                to="/shop" 
                className="inline-flex items-center text-anime-purple hover:text-anime-pink transition-colors font-medium"
              >
                <ChevronRight className="h-4 w-4 rotate-180 mr-1" />
                Continue Shopping
              </Link>
              
              <Button 
                variant="outline" 
                className="border-anime-purple text-anime-purple hover:bg-anime-purple hover:text-white"
                onClick={() => {
                  toast({
                    title: "Cart Updated",
                    description: "Your cart has been updated successfully.",
                  });
                }}
              >
                Update Cart
              </Button>
            </div>
          </div>
          
          {/* Cart Summary */}
          <div className="lg:w-1/3">
            <CartSummary 
              items={cartItems}
              promoCode={promoCode}
              setPromoCode={setPromoCode}
              onApplyPromoCode={handleApplyPromoCode}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
