import { returnBadResponse } from '@/app/utilities/responses';
import { UserSubscriptionType } from '@/app/interfaces/UserSubscriptionType';
import { registerCRMContact } from '@/app/utilities/register/registerCRMContact';
import { isValidUserSubscriptionData } from '@/app/utilities/validation/validateUserSubscriptionData';

export async function POST(request: Request) {
  const data = await request.json();
  if (isValidUserSubscriptionData(data)) {
    const userSubscriptionForm: UserSubscriptionType = {
      ...data,
    };

    const response = await registerCRMContact(userSubscriptionForm);
    return new Response(JSON.stringify(response));
  }
  return returnBadResponse();
}
