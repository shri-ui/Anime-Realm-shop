
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Package, RotateCcw, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from '../components/Footer';

const ShippingReturns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-anime-purple to-anime-pink py-12 px-4">
        <div className="anime-container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Shipping & Returns</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Everything you need to know about our shipping policies and how to return items.
          </p>
        </div>
      </div>

      <div className="flex-grow bg-background py-12">
        <div className="anime-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Shipping Policy Section */}
            <Card className="border-t-4 border-t-anime-purple shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6">
                  <div className="bg-anime-purple/10 p-3 rounded-full mr-4">
                    <Truck className="h-8 w-8 text-anime-purple" />
                  </div>
                  <h2 className="text-2xl font-bold">Shipping Policy</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Processing Time</h3>
                    <p className="text-gray-700">
                      All orders are processed within 1-2 business days after receiving your order confirmation. 
                      Pre-orders and custom items may take longer.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Shipping Methods & Delivery Times</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="bg-anime-purple/10 p-1 rounded-full mr-3 mt-1">
                          <Package className="h-4 w-4 text-anime-purple" />
                        </div>
                        <div>
                          <span className="font-medium">Standard Shipping:</span>
                          <p className="text-gray-700">5-7 business days (Free for orders over $50)</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-anime-purple/10 p-1 rounded-full mr-3 mt-1">
                          <Package className="h-4 w-4 text-anime-purple" />
                        </div>
                        <div>
                          <span className="font-medium">Express Shipping:</span>
                          <p className="text-gray-700">2-3 business days ($12.99)</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-anime-purple/10 p-1 rounded-full mr-3 mt-1">
                          <Package className="h-4 w-4 text-anime-purple" />
                        </div>
                        <div>
                          <span className="font-medium">International Shipping:</span>
                          <p className="text-gray-700">7-14 business days (Rates calculated at checkout)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Tracking Information</h3>
                    <p className="text-gray-700">
                      Once your order ships, you'll receive a confirmation email with a tracking number. 
                      You can track your package's status through our website or the carrier's website.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">International Orders</h3>
                    <p className="text-gray-700">
                      Please note that international orders may be subject to import duties and taxes, 
                      which are the responsibility of the customer. Delivery times may vary due to customs processing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Return Policy Section */}
            <Card className="border-t-4 border-t-anime-orange shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6">
                  <div className="bg-anime-orange/10 p-3 rounded-full mr-4">
                    <RotateCcw className="h-8 w-8 text-anime-orange" />
                  </div>
                  <h2 className="text-2xl font-bold">Return Policy</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Return Eligibility</h3>
                    <p className="text-gray-700">
                      We accept returns within 30 days of delivery for unused items in their original packaging.
                      Some exclusions apply (e.g., custom orders, clearance items).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">How to Initiate a Return</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Log in to your account and go to your order history</li>
                      <li>Select the order with the item(s) you wish to return</li>
                      <li>Follow the return instructions to receive a Return Authorization (RA) number</li>
                      <li>Print the prepaid return label (if applicable)</li>
                      <li>Package the item(s) securely in their original packaging</li>
                      <li>Attach the return label and ship the package</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Refund Process</h3>
                    <p className="text-gray-700">
                      Once we receive and inspect the returned items, we'll process your refund to the original
                      payment method within 5-7 business days. Shipping costs are non-refundable unless the return
                      is due to our error.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Damaged or Defective Items</h3>
                    <p className="text-gray-700">
                      If you receive damaged or defective merchandise, please contact our customer service team
                      within 48 hours of delivery. We'll provide instructions for returning the item and sending
                      a replacement at no additional cost.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQs Section */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6 border">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">How do I check the status of my order?</AccordionTrigger>
                <AccordionContent>
                  You can check the status of your order by logging into your account and visiting the "Order History" section. 
                  There you'll find all your orders and their current status. You can also use the tracking number 
                  provided in your shipping confirmation email.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">Do you ship internationally?</AccordionTrigger>
                <AccordionContent>
                  Yes, we ship to most countries worldwide. International shipping rates are calculated at checkout based on 
                  your location and the items in your cart. Please note that customs fees and import taxes may apply.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">Can I change or cancel my order?</AccordionTrigger>
                <AccordionContent>
                  You can modify or cancel your order within 2 hours of placing it. After this time, orders enter our 
                  processing system and cannot be modified. Please contact customer support immediately if you need to 
                  make changes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">What if my package is lost?</AccordionTrigger>
                <AccordionContent>
                  If your order shows as delivered but you haven't received it, please check with neighbors or your local 
                  post office first. If you still cannot locate your package, contact our customer support within 7 days 
                  of the delivery date, and we'll help you resolve the issue.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* More Questions Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-700">Have more questions about shipping or returns?</p>
            <Link to="/#footer-faq" className="inline-flex items-center text-anime-purple hover:text-anime-pink mt-2 transition-colors">
              Visit our complete FAQ section
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShippingReturns;
