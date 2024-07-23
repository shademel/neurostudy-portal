import { returnAuthError } from '@/app/utilities/auth/responses';
import { AmplifyError } from '@aws-amplify/core/internals/utils';
import { resetPassword, ResetPasswordInput } from 'aws-amplify/auth';
import '@/app/utilities/amplify/configure';

export async function POST(request: Request) {
  const data: ResetPasswordInput = await request.json();

  try {
    return new Response(JSON.stringify(await resetPassword(data)));
  } catch (ex) {
    return returnAuthError(ex as AmplifyError);
  }
}
