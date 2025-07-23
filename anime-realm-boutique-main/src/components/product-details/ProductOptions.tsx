
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Plus, Minus, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from '@/types/product';

interface ProductOptionsProps {
  product: Product;
}

const ProductOptions: React.FC<ProductOptionsProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>(product.category === "Apparel" ? 'M' : '');
  const [selectedVariation, setSelectedVariation] = useState<string>(
    product.variations && product.variations.length > 0 ? product.variations[0] : ''
  );
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart!",
      description: `${quantity} × ${product?.name} added to your cart`,
    });
  };

  const handleBuyNow = () => {
    toast({
      title: "Proceeding to Checkout",
      description: `Preparing your order for ${product?.name}`,
    });
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  // Mock data for sizes and variations
  const sizes = product.category === "Apparel" ? ['XS', 'S', 'M', 'L', 'XL', '2XL'] : [];
  const variations = product.anime === "Naruto" ? ['Classic', 'Shippuden', 'Boruto Edition'] : 
                  product.anime === "My Hero Academia" ? ['Season 1', 'Season 2', 'Movie Edition'] : 
                  product.anime === "Dragon Ball" ? ['Z', 'Super', 'GT Edition'] : 
                  product.anime === "One Piece" ? ['East Blue', 'Grand Line', 'New World'] : 
                  product.anime === "Demon Slayer" ? ['Standard', 'Limited', 'Collector\'s Edition'] : 
                  ['Standard Edition'];

  return (
    <div className="space-y-4">
      {/* Size Selector (Only for Apparel) */}
      {product.category === "Apparel" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Size
          </label>
          <div className="flex flex-wrap gap-2">
            {sizes.map(size => (
              <Button
                key={size}
                variant={selectedSize === size ? "default" : "outline"}
                className={`px-4 ${selectedSize === size ? 'bg-anime-purple hover:bg-anime-purple' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Variation Dropdown */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Edition
        </label>
        <Select 
          value={selectedVariation} 
          onValueChange={setSelectedVariation}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Edition" />
          </SelectTrigger>
          <SelectContent>
            {variations.map(variation => (
              <SelectItem key={variation} value={variation}>
                {variation}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Quantity Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Quantity
        </label>
        <div className="flex items-center w-32 border border-gray-300 rounded-md overflow-hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={decrementQuantity}
            disabled={quantity <= 1}
            className="px-3 py-0 h-10 rounded-none hover:bg-gray-100"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <div className="w-12 h-10 flex items-center justify-center border-l border-r border-gray-300">
            {quantity}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={incrementQuantity}
            className="px-3 py-0 h-10 rounded-none hover:bg-gray-100"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button 
          className="flex-1 bg-anime-purple hover:bg-anime-pink text-white transform transition-all hover:scale-105 shadow-lg hover:shadow-anime-purple/30"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
        
        <Button 
          className="flex-1 bg-anime-orange hover:bg-anime-orange/80 text-white transform transition-all hover:scale-105 shadow-lg hover:shadow-anime-orange/30"
          onClick={handleBuyNow}
        >
          Buy Now
        </Button>
      </div>
      
      <div className="flex items-center space-x-3 pt-2">
        <Button 
          variant="outline" 
          className="flex-1 border-anime-purple/30"
        >
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
        <Button 
          variant="outline" 
          className="h-10 w-10 rounded-full border-anime-purple/30 p-0"
        >
          <Heart className="h-6 w-6 text-gray-500 hover:text-red-500 transition-colors" />
        </Button>
      </div>
    </div>
  );
};

export default ProductOptions;
