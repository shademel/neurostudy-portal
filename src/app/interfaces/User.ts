import { JWT } from 'next-auth/jwt';
import { DEFAULT_USER } from '../utilities/auth/constants';

export type UserProps = Partial<typeof DEFAULT_USER>;

export type UserToken = Partial<Omit<JWT, 'email'>> & {
  email: string;
};
