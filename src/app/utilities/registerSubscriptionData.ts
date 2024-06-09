import axios from 'axios';
import UserSubscriptionInterface from '../interfaces/UserSubscriptionInterface';
import CRMCreateResponseInterface from '../interfaces/CRMCreateResponseInterface';

export const registerSubscriptionData = async (
  userSubscriptionData: UserSubscriptionInterface
): Promise<CRMCreateResponseInterface> => {
  const data = JSON.stringify(userSubscriptionData);

  const config = {
    method: 'post',
    url: 'https://api.hubapi.com/crm/v3/objects/contacts',
    headers: {
      'Authorization': `Bearer `,
      'Content-Type': 'application/json',
    },
    data: data,
  };

  return await axios
    .request(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
