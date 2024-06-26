'use client';

// NOTE
// Although this returns a component, primary function of this file is to
// be rendered once in the application's life cycle to ensure Amplify is
// configured on the client side.

import { Amplify } from 'aws-amplify';
import awsconfig from '@/app/aws-exports';

Amplify.configure(awsconfig, { ssr: true });

const ConfigureAmplifyClientSide: React.FC = () => {
  return null;
};

export default ConfigureAmplifyClientSide;
