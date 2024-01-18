import { returnBadResponse } from '@/app/utilities/responses';
import { UserFormSubmissionType } from '@/app/interfaces/UserFormSubmissionType';

import { submitUserForm } from '@/app/utilities/submitUserForm';

export async function POST(request: Request) {
  const data = await request.json();
  if (isValidContactUsFormData(data)) {
    const userContactForm: UserFormSubmissionType = {
      ...data,
    };
    const response = await submitUserForm(userContactForm);
    return new Response(JSON.stringify(response));
  }
  return returnBadResponse();
}

function isValidContactUsFormData(
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  obj: any
): obj is UserFormSubmissionType {
  const requiredKeys: (keyof UserFormSubmissionType)[] = [
    'firstname',
    'lastname',
    'email',
    'designation',
  ];
  const keys = Object.keys(obj) as (keyof UserFormSubmissionType)[];
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
  const phoneRegex = /^(?:\+61|0)[2-478](?:\d{8})$/;
  return (
    phoneRegex.test(obj.phone) &&
    emailRegex.test(obj.email) &&
    requiredKeys.every((key) => keys.includes(key))
  );
}
