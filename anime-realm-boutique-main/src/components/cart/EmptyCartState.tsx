
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ShoppingCart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

const EmptyCartState = () => {
  return (
    <div className="bg-background min-h-screen py-16">
      <div className="anime-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-2xl mx-auto p-8 text-center border-t-4 border-t-anime-purple">
            <div className="flex justify-end">
              <Button variant="ghost" size="icon" className="mb-4">
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            
            <div className="text-2xl font-bold mb-6 uppercase">SHOPPING CART</div>
            
            <div className="relative mb-8">
              <div className="w-32 h-32 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                <ShoppingCart className="h-16 w-16 text-gray-300" />
              </div>
              <div className="absolute -bottom-4 -right-4 transform translate-x-1/4">
                <motion.img 
                  src="https://i.imgur.com/ZOKp8LH.png" 
                  alt="Chibi character" 
                  className="w-24 h-24 object-contain"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              </div>
            </div>
            
            <p className="text-xl font-medium mb-2">
              Oops! There are no items in the cart
            </p>
            
            <p className="text-gray-500 mb-8">
              Looks like you haven't added any anime merchandise to your cart yet!
            </p>
            
            <Link to="/">
              <Button className="bg-anime-purple hover:bg-anime-pink transition-all py-6 px-8">
                Return to Home
              </Button>
            </Link>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default EmptyCartState;
