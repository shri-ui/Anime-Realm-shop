
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import NewsletterSignup from '@/components/NewsletterSignup';

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | AnimeRealm</title>
        <meta name="description" content="Get in touch with AnimeRealm for any inquiries, feedback, or support. We'd love to hear from you!" />
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen">
        {/* Hero Section with Anime Background */}
        <div 
          className="relative bg-gradient-to-r from-anime-purple to-anime-blue pt-16 pb-10 md:pt-24 md:pb-16 overflow-hidden"
        >
          {/* Anime character silhouette - positioned to the right */}
          <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-15 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-right bg-no-repeat bg-contain"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Have questions about our products or services? We're here to help! 
              Fill out the form below or reach out directly.
            </p>
          </div>
        </div>

        {/* Contact Information & Form Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-white/80 to-white/95 p-6 md:p-8 rounded-lg shadow-md backdrop-blur-sm border border-white/20">
              <h2 className="text-2xl font-bold text-anime-purple mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-anime-purple/10 p-3 rounded-full">
                    <Mail className="text-anime-purple" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-600">support@animerealm.com</p>
                    <p className="text-gray-600">business@animerealm.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-anime-orange/10 p-3 rounded-full">
                    <Phone className="text-anime-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-600">Customer Service: +1 (800) 123-4567</p>
                    <p className="text-gray-600">International: +1 (123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-anime-blue/10 p-3 rounded-full">
                    <MapPin className="text-anime-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Address</h3>
                    <p className="text-gray-600">
                      AnimeRealm Headquarters<br />
                      123 Manga Street<br />
                      Anime City, AC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM EST</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
        
        {/* FAQ Shortcut Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-anime-purple mb-3">Shipping Information</h3>
                <p className="text-gray-600 mb-4">Find answers about shipping times, costs, and international delivery options.</p>
                <a href="#" className="text-anime-blue font-medium hover:underline">Read More →</a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-anime-purple mb-3">Returns & Exchanges</h3>
                <p className="text-gray-600 mb-4">Learn about our return policy, exchange process, and refund timelines.</p>
                <a href="#" className="text-anime-blue font-medium hover:underline">Read More →</a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-anime-purple mb-3">Product Information</h3>
                <p className="text-gray-600 mb-4">Get details about product authenticity, materials, and care instructions.</p>
                <a href="#" className="text-anime-blue font-medium hover:underline">Read More →</a>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <a href="#" className="bg-anime-purple text-white px-6 py-3 rounded-md hover:bg-anime-purple/90 transition-colors font-medium">
                View Full FAQ
              </a>
            </div>
          </div>
        </div>
        
        <NewsletterSignup />
      </main>
      
      <Footer />
    </>
  );
};

export default ContactUs;
