
import React, { useState } from 'react';
import { 
  User, 
  CreditCard, 
  ArrowLeft, 
  Copyright, 
  Shield, 
  CheckCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import Footer from '../components/Footer';

const TermsOfService = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAcceptTerms = () => {
    setAccepted(!accepted);
    if (!accepted) {
      toast({
        title: "Terms Accepted",
        description: "Thank you for acknowledging our Terms of Service.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-anime-purple to-anime-pink py-12 px-4">
        <div className="anime-container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </div>

      <div className="flex-grow bg-background py-12">
        <div className="anime-container max-w-4xl">
          {/* Introduction */}
          <Card className="mb-8 shadow-md">
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">
                Welcome to AnimeRealm. By accessing or using our website, mobile applications, or any of our services, 
                you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
              </p>
              <p className="text-gray-700">
                These Terms of Service ("Terms") govern your use of AnimeRealm (the "Service") operated by AnimeRealm Inc. 
                ("we," "us," or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance 
                with these Terms.
              </p>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-anime-purple/10 p-3 rounded-full mr-4">
                <User className="h-6 w-6 text-anime-purple" />
              </div>
              <h2 className="text-2xl font-bold">User Responsibilities</h2>
            </div>
            
            <Card className="shadow-md">
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Account Registration</h3>
                  <p className="text-gray-700">
                    To access certain features of the Service, you may be required to register for an account. You agree to provide accurate, 
                    current, and complete information during the registration process and to update such information to keep it accurate, 
                    current, and complete.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold text-lg">Account Security</h3>
                  <p className="text-gray-700">
                    You are responsible for safeguarding the password that you use to access the Service and for any activities or actions 
                    under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming 
                    aware of any breach of security or unauthorized use of your account.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold text-lg">Prohibited Activities</h3>
                  <p className="text-gray-700 mb-2">
                    As a user of the Service, you agree not to engage in any of the following prohibited activities:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Use the Service for any illegal purpose or in violation of any local, state, national, or international law</li>
                    <li>Violate or infringe other people's intellectual property, privacy, publicity, or other legal rights</li>
                    <li>Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity</li>
                    <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
                    <li>Attempt to gain unauthorized access to parts of the Service that are restricted</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payments */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-anime-orange/10 p-3 rounded-full mr-4">
                <CreditCard className="h-6 w-6 text-anime-orange" />
              </div>
              <h2 className="text-2xl font-bold">Payments</h2>
            </div>
            
            <Card className="shadow-md">
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Payment Methods</h3>
                  <p className="text-gray-700">
                    We accept major credit cards, PayPal, and other payment methods as indicated during checkout. All payment 
                    information is encrypted and securely processed. By providing payment information, you represent and warrant 
                    that you are authorized to use the designated payment method.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold text-lg">Pricing and Taxes</h3>
                  <p className="text-gray-700">
                    Prices for products are as listed on our website and are subject to change without notice. All prices 
                    are in USD unless otherwise specified. Applicable taxes will be added to the final purchase price as 
                    required by law. For international orders, you are responsible for any import duties, taxes, or fees 
                    that may be imposed by your local customs authorities.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold text-lg">Subscription Services</h3>
                  <p className="text-gray-700">
                    If you subscribe to any of our subscription services, you authorize us to charge your payment method on 
                    a recurring basis. Subscriptions will automatically renew until cancelled. You can cancel your subscription 
                    at any time through your account settings.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Returns */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-anime-blue/10 p-3 rounded-full mr-4">
                <ArrowLeft className="h-6 w-6 text-anime-blue" />
              </div>
              <h2 className="text-2xl font-bold">Returns</h2>
            </div>
            
            <Card className="shadow-md">
              <CardContent className="pt-6 space-y-4">
                <p className="text-gray-700">
                  For detailed information about our return policy, including eligible items, timeframes, and procedures, 
                  please refer to our <a href="/shipping-returns" className="text-anime-purple hover:underline">Shipping & Returns</a> page.
                </p>
                
                <div>
                  <h3 className="font-semibold text-lg">Digital Products</h3>
                  <p className="text-gray-700">
                    Due to the nature of digital products, all sales of digital items (e-books, digital artwork, downloadable content) 
                    are final and non-refundable unless required by applicable consumer protection laws.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Intellectual Property */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-anime-purple/10 p-3 rounded-full mr-4">
                <Copyright className="h-6 w-6 text-anime-purple" />
              </div>
              <h2 className="text-2xl font-bold">Intellectual Property</h2>
            </div>
            
            <Card className="shadow-md">
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Our Content</h3>
                  <p className="text-gray-700">
                    The Service and its original content, features, and functionality are and will remain the exclusive property of 
                    AnimeRealm Inc. and its licensors. The Service is protected by copyright, trademark, and other laws of both the 
                    United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product 
                    or service without the prior written consent of AnimeRealm Inc.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold text-lg">Licensed Properties</h3>
                  <p className="text-gray-700">
                    All anime properties, character names, logos, and related indicia featured on our Service are trademarks 
                    and copyrights of their respective owners. AnimeRealm is an authorized retailer of official merchandise. 
                    We do not claim ownership of any licensed anime properties.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold text-lg">User Contributions</h3>
                  <p className="text-gray-700">
                    By posting, uploading, or submitting content to the Service, you grant us a non-exclusive, royalty-free, 
                    worldwide license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, 
                    and display such content in connection with providing and promoting the Service.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Disclaimers */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-anime-orange/10 p-3 rounded-full mr-4">
                <Shield className="h-6 w-6 text-anime-orange" />
              </div>
              <h2 className="text-2xl font-bold">Disclaimers</h2>
            </div>
            
            <Card className="shadow-md">
              <CardContent className="pt-6 space-y-4">
                <div className="bg-gray-50 p-4 border-l-4 border-anime-orange rounded">
                  <p className="text-gray-700">
                    THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. ANIMEREALM INC. AND ITS SUPPLIERS AND 
                    LICENSORS HEREBY DISCLAIM ALL WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, 
                    THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                  <p className="text-gray-700 mt-2">
                    NEITHER ANIMEREALM INC. NOR ITS SUPPLIERS AND LICENSORS MAKE ANY WARRANTY THAT THE SERVICE WILL BE 
                    ERROR-FREE OR THAT ACCESS THERETO WILL BE CONTINUOUS OR UNINTERRUPTED.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg">Limitation of Liability</h3>
                  <p className="text-gray-700">
                    IN NO EVENT WILL ANIMEREALM INC., OR ITS SUPPLIERS OR LICENSORS, BE LIABLE WITH RESPECT TO ANY SUBJECT 
                    MATTER OF THIS AGREEMENT UNDER ANY CONTRACT, NEGLIGENCE, STRICT LIABILITY OR OTHER LEGAL OR EQUITABLE 
                    THEORY FOR: (I) ANY SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES; (II) THE COST OF PROCUREMENT FOR 
                    SUBSTITUTE PRODUCTS OR SERVICES; OR (III) FOR INTERRUPTION OF USE OR LOSS OR CORRUPTION OF DATA.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Agreement Checkbox */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6 border">
            <div className="flex items-start space-x-3">
              <Checkbox 
                id="terms-acceptance" 
                checked={accepted} 
                onCheckedChange={handleAcceptTerms}
                className="mt-1"
              />
              <div>
                <label 
                  htmlFor="terms-acceptance" 
                  className="text-lg font-medium cursor-pointer"
                >
                  I have read and agree to the Terms of Service
                </label>
                <p className="text-gray-500 text-sm mt-1">
                  By checking this box, you acknowledge that you have read, understood, and agree to be bound by our Terms of Service.
                </p>
              </div>
            </div>
            
            {accepted && (
              <div className="mt-4 flex items-center text-green-600 animate-slide-in">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Thank you for acknowledging our Terms of Service</span>
              </div>
            )}
          </div>

          {/* Last Updated */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>Last Updated: May 10, 2025</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
