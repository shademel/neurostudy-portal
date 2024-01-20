import { TeacherRegistrationType } from './TeacherRegistrationType';

export type UserFormSubmissionType = TeacherRegistrationType & {
  designation: string;
  message?: string;
};
