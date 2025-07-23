
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Collections = () => {
  return (
    <>
      <Helmet>
        <title>Collections | AnimeRealm Boutique</title>
        <meta name="description" content="Explore themed collections of anime merchandise from Naruto, Dragon Ball Z, Demon Slayer and more." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow py-12">
          <div className="anime-container">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Anime Collections
            </h1>
            <div className="flex justify-center items-center h-64">
              <p className="text-lg text-center">Collections coming soon!</p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Collections;
