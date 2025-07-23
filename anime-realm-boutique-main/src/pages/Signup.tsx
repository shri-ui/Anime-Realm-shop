
import React from 'react';
import { Helmet } from 'react-helmet';
import AuthLayout from '@/components/AuthLayout';
import AuthForm from '@/components/AuthForm';

const Signup = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up | AnimeRealm Boutique</title>
        <meta name="description" content="Create an AnimeRealm account to enjoy exclusive discounts, save your favorite items, and track your orders." />
      </Helmet>
      
      <AuthLayout
        title="Create an account"
        subtitle="Join our anime community and start shopping"
        backgroundImage="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1974&auto=format&fit=crop"
      >
        <AuthForm type="signup" />
      </AuthLayout>
    </>
  );
};

export default Signup;
