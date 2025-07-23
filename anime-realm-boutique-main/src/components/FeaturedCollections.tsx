
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const collections = [
  {
    id: 1,
    title: 'Naruto',
    description: 'Explore the world of ninjas with our exclusive Naruto collection.',
    image: 'https://source.unsplash.com/photo-1523712999610-f77fbcfc3843',
    items: 24,
  },
  {
    id: 2,
    title: 'Dragon Ball Z',
    description: 'Power up your collection with our Dragon Ball Z merchandise.',
    image: 'https://source.unsplash.com/photo-1470813740244-df37b8c1edcb',
    items: 36,
  },
  {
    id: 3,
    title: 'Demon Slayer',
    description: 'Join the Demon Slayer Corps with our themed merchandise.',
    image: 'https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    items: 18,
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="anime-container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Anime Collections</h2>
          <a href="#" className="text-anime-purple hover:text-anime-pink flex items-center gap-2 group">
            View All
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <Card key={collection.id} className="anime-card group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="badge bg-anime-purple text-white">
                    {collection.items} Items
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{collection.title}</CardTitle>
                <CardDescription>{collection.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <a href="#" className="text-anime-purple hover:text-anime-pink font-medium flex items-center gap-1">
                  Explore Collection <ArrowRight size={16} />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
