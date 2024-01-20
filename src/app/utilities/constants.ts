export enum INDUSTRY {
  TEACHER = 'teacher',
}
export enum COMPANY {
  INDIVIDUAL = 'individual',
}

export const EMAIL_REGEX =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;

export const MOBILE_REGEX = /^(?:\+61|0)[2-478](?:\d{8})$/;
export const PHONE_REGEX = /^(?:\+61|0)?[2-9]\d{8}$/;

export const NAME_REGEX = /^[a-zA-Z0-9. -]+$/;
