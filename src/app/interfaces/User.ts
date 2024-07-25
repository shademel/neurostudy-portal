import { JWT } from 'next-auth/jwt';
import { SAMPLE_USER } from '../utilities/auth/constants';

export type UserProps = Partial<typeof SAMPLE_USER>;

export type UserToken = Partial<Omit<JWT, 'email'>> & {
  email: string;
};
