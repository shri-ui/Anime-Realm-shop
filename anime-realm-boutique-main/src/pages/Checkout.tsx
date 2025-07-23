
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, CreditCard, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import OrderSummary from '@/components/checkout/OrderSummary';
import { useCart } from '@/context/CartContext';

const steps = [
  { id: 'shipping', title: 'Shipping Information' },
  { id: 'payment', title: 'Payment Details' },
  { id: 'review', title: 'Review Order' },
];

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { cartItems, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    savePaymentInfo: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handlePlaceOrder();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate('/cart');
    }
  };

  const handlePlaceOrder = () => {
    // Here you would typically send the order to your backend
    const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    clearCart(); // Clear the cart
    
    // Navigate to the success page with order information
    navigate('/order-success', { 
      state: { 
        orderNumber,
        email: formData.email,
        total: cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0) + 8.99,
      } 
    });
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="bg-background min-h-screen py-8">
      <div className="anime-container">
        <button 
          onClick={prevStep} 
          className="flex items-center text-anime-purple hover:text-anime-pink transition-colors mb-6"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          {currentStep === 0 ? 'Back to Cart' : 'Back'}
        </button>
        
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2 bg-gradient-to-r from-anime-purple to-anime-pink bg-clip-text text-transparent">
          <CreditCard className="h-8 w-8 text-anime-purple" />
          Checkout
        </h1>
        
        {/* Checkout Progress */}
        <div className="mb-8">
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`flex flex-col items-center space-y-2 ${
                  index === steps.length - 1 ? '' : 'relative w-full'
                }`}
              >
                {/* Progress line */}
                {index !== steps.length - 1 && (
                  <div 
                    className="absolute top-4 left-0 w-full h-0.5"
                    style={{
                      background: `linear-gradient(to right, ${
                        index < currentStep
                          ? '#8B5CF6 100%'
                          : index === currentStep
                          ? '#8B5CF6 50%, #D1D5DB 50%'
                          : '#D1D5DB 100%'
                      })`,
                    }}
                  />
                )}
                
                {/* Step indicator */}
                <div 
                  className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full ${
                    index <= currentStep ? 'bg-anime-purple' : 'bg-gray-300'
                  } text-white`}
                >
                  {index < currentStep ? <Check className="h-4 w-4" /> : index + 1}
                </div>
                
                {/* Step title */}
                <div className="text-xs text-center">{step.title}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout Form */}
          <div className="lg:w-2/3">
            <Card className="p-6 border-t-4 border-t-anime-purple">
              <CheckoutForm 
                formData={formData}
                currentStep={currentStep}
                handleInputChange={handleInputChange}
                handleSelectChange={handleSelectChange}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            </Card>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <OrderSummary 
              items={cartItems}
              currentStep={currentStep}
              nextStep={nextStep}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
