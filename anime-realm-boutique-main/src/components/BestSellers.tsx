
import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

const products = [
  {
    id: 1,
    name: 'Naruto Shippuden Poster',
    price: 24.99,
    rating: 4.8,
    reviews: 156,
    image: 'https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    category: 'Posters',
    series: 'Naruto',
  },
  {
    id: 2,
    name: 'Dragon Ball Z T-Shirt',
    price: 34.99,
    rating: 4.7,
    reviews: 89,
    image: 'https://source.unsplash.com/photo-1470813740244-df37b8c1edcb',
    category: 'Clothing',
    series: 'Dragon Ball Z',
  },
  {
    id: 3,
    name: 'Demon Slayer Figure Collection',
    price: 119.99,
    rating: 4.9,
    reviews: 72,
    image: 'https://source.unsplash.com/photo-1500673922987-e212871fec22',
    category: 'Collectibles',
    series: 'Demon Slayer',
  },
  {
    id: 4,
    name: 'My Hero Academia Wall Scroll',
    price: 29.99,
    rating: 4.6,
    reviews: 53,
    image: 'https://source.unsplash.com/photo-1500375592092-40eb2168fd21',
    category: 'Home Decor',
    series: 'My Hero Academia',
  },
];

const BestSellers = () => {
  const handleAddToCart = (product: typeof products[0]) => {
    toast.success(`Added to cart!`, {
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="anime-container">
        <h2 className="text-3xl font-bold mb-2">Best Sellers</h2>
        <p className="text-gray-600 mb-8">Our customers' favorite picks this season</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="anime-card group bg-white">
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 left-2">
                  <span className="badge bg-anime-orange text-white">
                    Best Seller
                  </span>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="badge bg-anime-purple text-white">
                    {product.series}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                  <span className="font-bold text-anime-purple">${product.price}</span>
                </div>
                
                <div className="flex items-center mb-3">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>
                
                <Button 
                  className="w-full bg-anime-purple hover:bg-anime-pink flex items-center justify-center gap-2"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
