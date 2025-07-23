
import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Posters & Wall Art',
    description: 'High-quality prints and wall scrolls',
    image: 'https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    count: 124,
  },
  {
    id: 2,
    name: 'Apparel & Clothing',
    description: 'T-shirts, hoodies, and cosplay items',
    image: 'https://source.unsplash.com/photo-1500673922987-e212871fec22',
    count: 86,
  },
  {
    id: 3,
    name: 'Collectible Figures',
    description: 'Action figures and statues',
    image: 'https://source.unsplash.com/photo-1470813740244-df37b8c1edcb',
    count: 57,
  },
];

const CategoriesBanner = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="anime-container">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="relative overflow-hidden rounded-lg h-60 group shadow-lg"
            >
              <img 
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                <p className="text-sm text-white/80 mb-3">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-anime-purple px-2 py-1 rounded-full">
                    {category.count} Products
                  </span>
                  <a href="#" className="flex items-center gap-1 text-white group-hover:text-anime-pink transition-colors">
                    Shop Now <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesBanner;
