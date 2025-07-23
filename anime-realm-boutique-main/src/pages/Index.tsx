
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import FeaturedCollections from '@/components/FeaturedCollections';
import ShopBySeries from '@/components/ShopBySeries';
import BestSellers from '@/components/BestSellers';
import CategoriesBanner from '@/components/CategoriesBanner';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AnimeRealm Boutique | Premium Anime Merchandise & Collectibles</title>
        <meta name="description" content="Shop premium anime merchandise featuring your favorite characters from Naruto, Dragon Ball Z, Demon Slayer and more. Find posters, t-shirts, figures and collectibles." />
        <meta name="keywords" content="anime merchandise, anime figures, anime posters, naruto, dragon ball z, demon slayer, my hero academia, anime collectibles" />
        <meta property="og:title" content="AnimeRealm Boutique | Premium Anime Merchandise" />
        <meta property="og:description" content="Shop premium anime merchandise featuring your favorite characters from Naruto, Dragon Ball Z, Demon Slayer and more." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AnimeRealm Boutique | Premium Anime Merchandise" />
        <meta name="twitter:description" content="Shop premium anime merchandise featuring your favorite characters from Naruto, Dragon Ball Z, Demon Slayer and more." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main>
          <HeroBanner />
          <FeaturedCollections />
          <ShopBySeries />
          <BestSellers />
          <CategoriesBanner />
          <NewsletterSignup />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
