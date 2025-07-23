
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface CheckoutFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    cardName: string;
    cardNumber: string;
    expiry: string;
    cvv: string;
    savePaymentInfo: boolean;
  };
  currentStep: number;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  formData,
  currentStep,
  handleInputChange,
  handleSelectChange,
  nextStep,
  prevStep,
}) => {
  const renderShippingForm = () => (
    <>
      <h3 className="text-lg font-medium mb-4">Shipping Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      
      <div className="mb-4">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        <div>
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="state">State</Label>
          <Input
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="zipCode">ZIP Code</Label>
          <Input
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      
      <div className="mb-4">
        <Label htmlFor="country">Country</Label>
        <Select
          value={formData.country}
          onValueChange={(value) => handleSelectChange('country', value)}
        >
          <SelectTrigger id="country">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="United States">United States</SelectItem>
            <SelectItem value="Canada">Canada</SelectItem>
            <SelectItem value="United Kingdom">United Kingdom</SelectItem>
            <SelectItem value="Australia">Australia</SelectItem>
            <SelectItem value="Japan">Japan</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="mt-6">
        <Button 
          onClick={nextStep}
          className="w-full bg-anime-purple hover:bg-anime-pink transition-all group"
        >
          <span>Continue to Payment</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </>
  );
  
  const renderPaymentForm = () => (
    <>
      <h3 className="text-lg font-medium mb-4">Payment Information</h3>
      
      <div className="mb-4">
        <Label htmlFor="cardName">Name on Card</Label>
        <Input
          id="cardName"
          name="cardName"
          value={formData.cardName}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="mb-4">
        <Label htmlFor="cardNumber">Card Number</Label>
        <Input
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleInputChange}
          placeholder="1234 5678 9012 3456"
          required
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <Label htmlFor="expiry">Expiry Date</Label>
          <Input
            id="expiry"
            name="expiry"
            value={formData.expiry}
            onChange={handleInputChange}
            placeholder="MM/YY"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="cvv">CVV</Label>
          <Input
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            placeholder="123"
            required
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-2 mb-4">
        <Checkbox 
          id="savePaymentInfo"
          name="savePaymentInfo"
          checked={formData.savePaymentInfo}
          onCheckedChange={(checked) => handleSelectChange('savePaymentInfo', checked ? 'true' : 'false')}
        />
        <label
          htmlFor="savePaymentInfo"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Save this payment information for next time
        </label>
      </div>
      
      <div className="flex justify-between mt-6">
        <Button 
          variant="outline" 
          onClick={prevStep}
          className="border-anime-purple text-anime-purple hover:bg-anime-purple/10"
        >
          Back
        </Button>
        
        <Button 
          onClick={nextStep}
          className="bg-anime-purple hover:bg-anime-pink transition-all group"
        >
          <span>Continue to Review</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </>
  );
  
  const renderReviewForm = () => (
    <>
      <h3 className="text-lg font-medium mb-4">Review Your Information</h3>
      
      <div className="space-y-4">
        <div className="border rounded-md p-4">
          <h4 className="font-medium mb-2">Shipping Information</h4>
          <p>
            {formData.firstName} {formData.lastName}
          </p>
          <p>{formData.address}</p>
          <p>
            {formData.city}, {formData.state} {formData.zipCode}
          </p>
          <p>{formData.country}</p>
          <p className="mt-2">{formData.email}</p>
          <p>{formData.phone}</p>
        </div>
        
        <div className="border rounded-md p-4">
          <h4 className="font-medium mb-2">Payment Method</h4>
          <p>Card ending in {formData.cardNumber.slice(-4)}</p>
          <p>Expiry: {formData.expiry}</p>
        </div>
      </div>
      
      <div className="flex justify-between mt-6">
        <Button 
          variant="outline" 
          onClick={prevStep}
          className="border-anime-purple text-anime-purple hover:bg-anime-purple/10"
        >
          Back
        </Button>
        
        <Button 
          onClick={nextStep}
          className="bg-anime-purple hover:bg-anime-pink transition-all group"
        >
          <span>Place Order</span>
          <Check className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </>
  );
  
  const forms = [renderShippingForm, renderPaymentForm, renderReviewForm];
  
  return forms[currentStep]();
};

export default CheckoutForm;
