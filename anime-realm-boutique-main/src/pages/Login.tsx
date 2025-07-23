
import React from 'react';
import { Helmet } from 'react-helmet';
import AuthLayout from '@/components/AuthLayout';
import AuthForm from '@/components/AuthForm';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login | AnimeRealm Boutique</title>
        <meta name="description" content="Sign in to your AnimeRealm account to access your orders, wishlist, and more." />
      </Helmet>
      
      <AuthLayout
        title="Welcome back"
        subtitle="Enter your credentials to access your account"
        backgroundImage="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=1974&auto=format&fit=crop"
      >
        <AuthForm type="login" />
      </AuthLayout>
    </>
  );
};

export default Login;
