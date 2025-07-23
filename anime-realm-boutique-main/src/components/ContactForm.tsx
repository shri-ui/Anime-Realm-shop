
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import { Progress } from '@/components/ui/progress';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });
  
  React.useEffect(() => {
    let interval: number | undefined;
    
    if (isSubmitting) {
      interval = window.setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return Math.min(prevProgress + 20, 100);
        });
      }, 300);
    } else {
      setProgress(0);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isSubmitting]);
  
  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission with delay
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast.success('Message sent successfully!', {
        description: "We've received your message and will get back to you shortly.",
      });
      
      form.reset();
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-100 relative overflow-hidden">
      {/* Anime-style decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-anime-purple via-anime-pink to-anime-blue"></div>
      <div className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-anime-purple/5"></div>
      <div className="absolute -left-10 -bottom-10 w-20 h-20 rounded-full bg-anime-blue/5"></div>
      
      <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your name" 
                      disabled={isSubmitting}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="Enter your email" 
                      disabled={isSubmitting}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="What is this regarding?" 
                    disabled={isSubmitting}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="How can we help you?" 
                    className="min-h-[120px]"
                    disabled={isSubmitting}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {isSubmitting && (
            <div className="py-2">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-gray-500 mt-2 text-center">Sending your message...</p>
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full bg-anime-purple hover:bg-anime-purple/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </Form>
      
      <p className="mt-6 text-sm text-gray-500 text-center">
        By submitting this form, you agree to our <a href="#" className="text-anime-blue hover:underline">Privacy Policy</a> and <a href="#" className="text-anime-blue hover:underline">Terms of Service</a>.
      </p>
    </div>
  );
};

export default ContactForm;
