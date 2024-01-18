import { AxiosResponse } from 'axios';
import { UserFormSubmissionType } from '../interfaces/UserFormSubmissionType';
import UserCRMResposInterface from '../interfaces/UserCRMResposInterface';
import axios from 'axios';

export const submitUserForm = async (
  form: UserFormSubmissionType
): Promise<UserCRMResposInterface | boolean> => {
  const data = JSON.stringify({
    properties: form,
  });

  const config = {
    method: 'post',
    url: `${process.env.CRM_BASE_URL}/objects/contacts`,
    headers: {
      authorization: `Bearer ${process.env.CRM_ACCESS_KEY}`,
      'content-type': 'application/json',
    },
    data: data,
  };

  return await axios
    .request(config)
    .then((response: AxiosResponse) => {
      const { id, updatedAt, createdAt } = response.data;
      return { id, updatedAt, createdAt } as UserCRMResposInterface;
    })

    .catch((error: Error) => {
      console.log(error);
      return false;
    });
};
