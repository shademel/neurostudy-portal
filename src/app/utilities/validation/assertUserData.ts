import { UserProps } from '@/app/interfaces/User';
import { SAMPLE_USER } from '../auth/constants';

const RETURN_DEFAULT_ERROR_MESSAGE = process.env.NODE_ENV === 'production';
const DEFAULT_ERROR_MESSAGE = `Provided user doesn't satisfy type-check.`;

export default function assertUserProps(
  user: UserProps
): asserts user is UserProps {
  if (!user || typeof user !== 'object') {
    throw new Error(
      RETURN_DEFAULT_ERROR_MESSAGE
        ? DEFAULT_ERROR_MESSAGE
        : `Invalid prop 'user' supplied, expected an object with key-value pairs.`
    );
  }

  let key: string;
  for (key in user) {
    if (key in SAMPLE_USER) {
      /* @ts-expect-error: Server will check this at run-time (along with FE) */
      const expectedType: unknown = typeof SAMPLE_USER[key];
      /* @ts-expect-error: Server will check this at run-time (along with FE) */
      const providedType: unknown = typeof user[key];
      if (expectedType !== providedType) {
        throw new Error(
          RETURN_DEFAULT_ERROR_MESSAGE
            ? DEFAULT_ERROR_MESSAGE
            : `Invalid prop 'user["${key}"]' of type '${providedType}' supplied, expected '${expectedType}'.`
        );
      }
    } else {
      throw new Error(
        RETURN_DEFAULT_ERROR_MESSAGE
          ? DEFAULT_ERROR_MESSAGE
          : `Invalid prop key '${key}' found in 'user'.`
      );
    }
  }
}
