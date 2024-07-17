import { returnAuthError } from '@/app/utilities/auth/responses';
import { AmplifyError } from '@aws-amplify/core/internals/utils';
import { signUp, SignUpInput } from 'aws-amplify/auth';
import '@/app/utilities/amplify/configure';

export async function POST(request: Request) {
  const data: SignUpInput = await request.json();

  // NOTE
  // We will manually sign-in regardless of `autoSignIn`,
  // so wouldn't want providing `autoSignIn: true` messing
  // with our operation
  if (data.options?.autoSignIn) {
    data.options.autoSignIn = false;
  }

  try {
    return new Response(JSON.stringify(await signUp(data)));
  } catch (ex) {
    return returnAuthError(ex as AmplifyError);
  }
}
