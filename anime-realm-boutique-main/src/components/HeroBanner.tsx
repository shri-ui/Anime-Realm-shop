
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-anime-dark py-12 md:py-16 lg:py-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-anime-purple opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-anime-pink opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-1/4 w-20 h-20 rounded-full bg-anime-orange opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Content */}
      <div className="anime-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Text content */}
          <div className="text-white space-y-6 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Discover Your</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-anime-purple to-anime-pink">
                Anime Collection
              </span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              Premium anime merchandise featuring your favorite characters from Naruto, Dragon Ball Z, Demon Slayer, and more!
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="anime-button text-lg px-8 py-6">Shop Now</Button>
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Explore Collections
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
              <img 
                src="https://source.unsplash.com/photo-1500673922987-e212871fec22" 
                alt="Anime Collection Showcase" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl animate-pulse-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-anime-dark/80 to-transparent rounded-lg"></div>
              
              {/* Floating badges */}
              <div className="absolute top-4 left-4 badge bg-anime-orange text-white">New Arrivals</div>
              <div className="absolute top-4 right-4 badge bg-anime-blue text-white">Limited Edition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
