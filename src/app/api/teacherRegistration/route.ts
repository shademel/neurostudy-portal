import TeacherCRMContactInterface from '@/app/interfaces/TeacherCRMContactInterface';
import { TeacherRegistrationType } from '@/app/interfaces/TeacherRegistrationType';
import { COMPANY, INDUSTRY } from '@/app/utilities/constants';
import { registerCRMContact } from '@/app/utilities/registerCRMContact';
import { returnBadResponse } from '@/app/utilities/responses';

export async function POST(request: Request) {
  const data = await request.json();
  if (isValidTeacherRegistrationData(data)) {
    const teacherCRMContact: TeacherCRMContactInterface = {
      ...data,
      industry: INDUSTRY.TEACHER,
      company: COMPANY.INDIVIDUAL,
    };
    const response = await registerCRMContact(teacherCRMContact);
    return new Response(JSON.stringify(response));
  }
  return returnBadResponse();
}

function isValidTeacherRegistrationData(
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  obj: any
): obj is TeacherRegistrationType {
  const requiredKeys: (keyof TeacherRegistrationType)[] = [
    'firstname',
    'lastname',
    'email',
  ];
  const keys = Object.keys(obj) as (keyof TeacherRegistrationType)[];
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
  const phoneRegex = /^(?:\+61|0)[2-478](?:\d{8})$/;
  return (
    phoneRegex.test(obj.phone) &&
    emailRegex.test(obj.email) &&
    requiredKeys.every((key) => keys.includes(key))
  );
}
