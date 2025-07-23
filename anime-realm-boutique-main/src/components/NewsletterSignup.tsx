
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you for subscribing!', {
        description: 'You will now receive our latest updates and offers.',
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-anime-purple to-anime-pink text-white">
      <div className="anime-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Anime Realm Community</h2>
          <p className="text-lg opacity-90 mb-8">
            Subscribe to our newsletter for exclusive offers, new arrivals, and insider content from your favorite anime series.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-white text-anime-purple hover:bg-white/90 font-bold whitespace-nowrap"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
            </Button>
          </form>
          
          <p className="text-sm mt-4 opacity-80">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from AnimeRealm.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
