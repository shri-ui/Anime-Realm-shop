
import React from 'react';
import { Trash2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';

interface CartItemProps {
  item: {
    product: Product;
    quantity: number;
  };
  onQuantityChange: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
  onMoveToWishlist: (product: Product) => void;
}

const CartItem: React.FC<CartItemProps> = ({ 
  item, 
  onQuantityChange, 
  onRemove, 
  onMoveToWishlist 
}) => {
  const { product, quantity } = item;
  
  return (
    <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
      <div className="col-span-1 md:col-span-6 flex items-center space-x-4">
        <div className="w-20 h-20 overflow-hidden rounded-md border">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <h3 className="font-medium text-foreground">{product.name}</h3>
          <div className="text-sm text-gray-500 mt-1">{product.anime}</div>
          {item.product.variations && (
            <div className="text-xs text-muted-foreground mt-1">
              Variant: {item.product.variations[0]}
            </div>
          )}
        </div>
      </div>
      
      {/* Quantity */}
      <div className="col-span-1 md:col-span-2 flex justify-center">
        <div className="flex items-center border rounded-md">
          <button
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
            onClick={() => onQuantityChange(product.id, quantity - 1)}
            disabled={quantity <= 1}
          >
            -
          </button>
          <div className="w-10 h-8 flex items-center justify-center border-x">
            {quantity}
          </div>
          <button
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
            onClick={() => onQuantityChange(product.id, quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      
      {/* Price */}
      <div className="col-span-1 md:col-span-2 flex justify-center md:justify-center">
        <div className="flex flex-col items-center">
          <div className="font-medium">${product.price.toFixed(2)}</div>
          {product.originalPrice && (
            <div className="text-gray-400 line-through text-sm">
              ${product.originalPrice.toFixed(2)}
            </div>
          )}
        </div>
      </div>
      
      {/* Actions */}
      <div className="col-span-1 md:col-span-2 flex justify-end space-x-2">
        <Button 
          variant="ghost" 
          size="icon"
          className="h-8 w-8 text-gray-500 hover:text-anime-pink hover:bg-pink-50"
          onClick={() => onMoveToWishlist(product)}
          title="Move to wishlist"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon"
          className="h-8 w-8 text-gray-500 hover:text-red-500 hover:bg-red-50"
          onClick={() => onRemove(product.id)}
          title="Remove from cart"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
