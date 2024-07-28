import { returnAuthError } from '@/app/utilities/auth/responses';
import { resetPassword, ResetPasswordInput } from 'aws-amplify/auth';
import '@/app/utilities/amplify/configure';

export async function POST(request: Request) {
  try {
    const data: ResetPasswordInput = await request.json();

    return new Response(JSON.stringify(await resetPassword(data)));
  } catch (ex) {
    return returnAuthError(ex);
  }
}
