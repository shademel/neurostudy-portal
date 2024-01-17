import TeacherCRMContactInterface from '@/app/interfaces/TeacherCRMContactInterface';
import { TeacherRegistrationType } from '@/app/interfaces/TeacherRegistrationType';
import { registerTeacherContact } from '@/app/utilities/registerCRMContact';

export async function POST(request: Request) {
  const data = await request.json();
  if (isTeacherRegistrationData(data)) {
    const teacherCRMContact: TeacherCRMContactInterface = {
      ...data,
      industry: 'teacher',
      company: 'individual',
    };
    const response = await registerTeacherContact(teacherCRMContact);
    return new Response(JSON.stringify(response));
  }
  return new Response(JSON.stringify({ error: 'Bad Request' }), {
    status: 400,
    statusText: 'Bad Request',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
function isTeacherRegistrationData(obj: any): obj is TeacherRegistrationType {
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
