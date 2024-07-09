'use client';

// NOTE
// Although this returns a component, primary function of this file is to
// be rendered once in the application's life cycle to ensure Amplify is
// configured on the client side.

import { Amplify } from 'aws-amplify';
import awsConfig from '@/app/aws-exports';
import { useEffect } from 'react';
import { startListening } from './authListener';

Amplify.configure(awsConfig, { ssr: true });

const ConfigureAmplifyClientSide: React.FC = () => {
  useEffect(() => {
    const unlistener = startListening();
    return () => unlistener();
  }, []);

  return null;
};

export default ConfigureAmplifyClientSide;
