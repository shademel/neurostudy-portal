import ForgotPassword from '../components/auth/ForgotPassword';
import { Metadata } from 'next';

import { META_KEY } from '@/app/utilities/constants';
import { createMetadata } from '@/app/utilities/common';

export const metadata: Metadata = createMetadata(META_KEY.FORGOT_PASSWORD);

const Page = () => {
  return <ForgotPassword />;
};

export default Page;
