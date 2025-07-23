
import React from 'react';

const series = [
  { 
    id: 1,
    name: 'Naruto',
    icon: '🌀', // Representing a spiral for Naruto's symbol
    color: 'bg-orange-500',
  },
  { 
    id: 2,
    name: 'Dragon Ball Z',
    icon: '🔮', // Representing Dragon Ball
    color: 'bg-yellow-500',
  },
  { 
    id: 3,
    name: 'Demon Slayer',
    icon: '⚔️', // Representing swords
    color: 'bg-green-600',
  },
  { 
    id: 4,
    name: 'Attack on Titan',
    icon: '🧱', // Representing wall
    color: 'bg-red-700',
  },
  { 
    id: 5,
    name: 'One Piece',
    icon: '☠️', // Representing pirate flag
    color: 'bg-blue-500',
  },
  { 
    id: 6,
    name: 'My Hero Academia',
    icon: '🦸', // Representing superhero
    color: 'bg-anime-blue',
  },
  { 
    id: 7,
    name: 'Jujutsu Kaisen',
    icon: '👁️', // Representing curse
    color: 'bg-purple-800',
  },
  { 
    id: 8,
    name: 'Tokyo Ghoul',
    icon: '🎭', // Representing mask
    color: 'bg-gray-800',
  },
];

const ShopBySeries = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="anime-container">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Series</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {series.map((item) => (
            <a
              key={item.id}
              href="#"
              className="group flex flex-col items-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-2xl mb-3`}>
                <span role="img" aria-label={item.name}>{item.icon}</span>
              </div>
              <h3 className="font-medium text-gray-800 group-hover:text-anime-purple transition-colors">
                {item.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopBySeries;
