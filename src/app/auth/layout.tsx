'use client';

import { Amplify } from 'aws-amplify';
import awsconfig from '@/app/aws-exports';

Amplify.configure(awsconfig, { ssr: true });

export default function RootAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
