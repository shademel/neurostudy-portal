import { TeacherRegistrationType } from './TeacherRegistrationType';

export type UserFormSubmissionType = TeacherRegistrationType & {
  jobtitle: string;
  message?: string;
};
