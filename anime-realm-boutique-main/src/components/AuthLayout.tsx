
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ 
  children, 
  title, 
  subtitle,
  backgroundImage
}) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block mb-8">
              <h1 className="text-3xl font-bold text-anime-purple">AnimeRealm</h1>
            </Link>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
          
          {children}
          
          <div className="mt-8 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-anime-purple transition-colors">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
      
      {/* Right side - Image */}
      <div 
        className="hidden md:block md:w-1/2 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          position: 'relative'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-anime-purple/80 to-anime-blue/50 mix-blend-multiply" />
        
        <motion.div 
          className="absolute bottom-10 left-10 max-w-xs p-6 bg-black/30 backdrop-blur-md rounded-lg border border-white/10 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-2">Join Our Anime Community</h3>
          <p className="opacity-80">Get exclusive access to limited edition collectibles and special offers.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthLayout;
