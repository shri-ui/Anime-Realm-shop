
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import NewsletterSignup from '@/components/NewsletterSignup';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | AnimeRealm Boutique</title>
        <meta name="description" content="Learn about AnimeRealm Boutique, your go-to destination for premium anime merchandise and collectibles." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero section */}
          <section className="relative bg-gradient-to-r from-anime-purple to-anime-blue py-20 md:py-32">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1578632292335-df3abbb0d586')] bg-cover bg-center opacity-10"></div>
            </div>
            <div className="anime-container relative z-10">
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-6xl font-bold text-white text-center mb-6"
              >
                About Us
              </motion.h1>
            </div>
          </section>
          
          {/* Main content */}
          <section className="py-16 md:py-24 bg-white">
            <div className="anime-container">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-anime-purple to-anime-pink">
                    AnimeRealm Store
                  </h2>
                  
                  <p className="text-lg mb-6 text-gray-700">
                    AnimeStore is an online e-commerce store offering a wide range of high-quality anime-inspired products. 
                    We are passionate about all things anime and committed to providing our customers with the best shopping 
                    experience possible.
                  </p>
                  
                  <p className="text-lg mb-6 text-gray-700">
                    This website has a developer mode payment gateway integration using 
                    <span className="text-anime-orange font-bold mx-1">STRIPE</span>
                    and Backend by 
                    <span className="text-anime-purple font-bold mx-1">STRAPI</span>.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
                    <p className="text-gray-700 italic">
                      "Our team includes no one but me ;) Help me grow my website & Donate me money for releasing my own such website not with demo products."
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f" 
                    alt="Anime collectibles" 
                    className="rounded-2xl shadow-xl object-cover w-full h-80 md:h-96"
                  />
                  
                  <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-lg border-t-4 border-anime-purple max-w-xs">
                    <div className="flex items-start gap-4">
                      <img 
                        src="https://i.imgur.com/ZOKp8LH.png" 
                        alt="Anime mascot" 
                        className="w-16 h-16 object-contain animate-float"
                      />
                      <div>
                        <h3 className="font-bold text-lg mb-1">Arigato!</h3>
                        <p className="text-sm text-gray-600">
                          for choosing Anim-x-store as your go-to destination for anime merchandise. We're excited to share our love of anime with you!
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-24">
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-3xl font-bold mb-10 text-center"
                >
                  Our Mission
                </motion.h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="bg-gradient-to-b from-white to-gray-50 p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="w-16 h-16 bg-anime-purple/10 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-2xl text-anime-purple">🎯</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Quality First</h3>
                    <p className="text-gray-700">We curate only the highest quality anime merchandise and collectibles for true fans.</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="bg-gradient-to-b from-white to-gray-50 p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="w-16 h-16 bg-anime-orange/10 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-2xl text-anime-orange">🌟</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Fan-Focused</h3>
                    <p className="text-gray-700">Created by fans, for fans. We understand what collectors and anime enthusiasts want.</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="bg-gradient-to-b from-white to-gray-50 p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="w-16 h-16 bg-anime-blue/10 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-2xl text-anime-blue">🌏</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Global Community</h3>
                    <p className="text-gray-700">Building a worldwide community of anime fans connected by their shared passion.</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
          
          <NewsletterSignup />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
