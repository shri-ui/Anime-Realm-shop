
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | AnimeRealm Boutique</title>
        <meta name="description" content="Privacy policy for AnimeRealm Boutique. Learn about how we collect, use, and protect your personal information." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow bg-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <div className="absolute top-20 left-20 w-40 h-40 rounded-full border-4 border-anime-purple"></div>
            <div className="absolute bottom-40 right-20 w-64 h-64 rounded-full border-4 border-anime-pink"></div>
            <div className="absolute top-60 right-60 w-20 h-20 rounded-full border-4 border-anime-blue"></div>
            <div className="absolute bottom-20 left-60 w-32 h-32 rounded-full border-4 border-anime-orange"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-anime-purple opacity-20"></div>
          </div>
          
          <div className="container mx-auto px-6 py-16 relative z-10">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-anime-purple to-anime-pink">
                PRIVACY POLICY
              </h1>
              
              <div className="bg-white/70 backdrop-blur-sm shadow-xl rounded-2xl p-8 md:p-12 mb-8 border border-gray-100">
                <p className="text-lg mb-8">
                  Welcome to AnimeRealm Boutique, where we value your privacy as much as we value your love for anime. 
                  We know you're probably too busy binge-watching your favorite anime series to read this, but please bear with us.
                </p>
                
                <ul className="space-y-8">
                  <motion.li 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-anime-purple flex items-center justify-center text-white font-bold">•</div>
                    <div>
                      <h2 className="text-xl font-bold text-anime-purple mb-2">First things first:</h2>
                      <p className="text-gray-700">
                        We only collect information that is necessary to provide you with our services. This includes your contact information, 
                        shipping details, and purchase history. We use industry-standard security measures to protect your data and will never 
                        sell your personal information to third parties.
                      </p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-anime-purple flex items-center justify-center text-white font-bold">•</div>
                    <div>
                      <h2 className="text-xl font-bold text-anime-purple mb-2">Rest assured</h2>
                      <p className="text-gray-700">
                        We use state-of-the-art encryption to protect your data from prying eyes. Your payment information 
                        is processed through secure third-party payment processors and is not stored on our servers. We take 
                        data protection seriously and continuously update our security measures.
                      </p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-anime-purple flex items-center justify-center text-white font-bold">•</div>
                    <div>
                      <h2 className="text-xl font-bold text-anime-purple mb-2">Your choices matter</h2>
                      <p className="text-gray-700">
                        If you're not comfortable with us tracking your shopping preferences, you can opt out at any time. 
                        We respect your choices and make it easy for you to manage your privacy settings. You can also request 
                        a copy of your data or ask us to delete your information from our database.
                      </p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-anime-purple flex items-center justify-center text-white font-bold">•</div>
                    <div>
                      <h2 className="text-xl font-bold text-anime-purple mb-2">And finally</h2>
                      <p className="text-gray-700">
                        If the government comes knocking on our door asking for your information, we will comply with valid legal 
                        requests as required by law. However, we will notify you about such requests whenever possible, unless 
                        legally prohibited from doing so.
                      </p>
                    </div>
                  </motion.li>
                </ul>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <p className="text-lg">
                    So there you have it, folks. Our privacy policy in a nutshell. Now go ahead and enjoy shopping for your 
                    favorite anime merchandise with peace of mind. We promise to handle your data with the same care and 
                    attention we put into selecting our products.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
