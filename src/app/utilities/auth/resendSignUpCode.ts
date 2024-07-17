import axios from 'axios';
import {
  ResendSignUpCodeInput,
  ResendSignUpCodeOutput,
} from 'aws-amplify/auth';

const resendSignUpCode = async (
  data: ResendSignUpCodeInput
): Promise<ResendSignUpCodeOutput> => {
  const config = {
    method: 'post',
    url: '/api/auth/resendSignUpCode',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  };

  return await axios.request(config).then((res) => res.data);
};

export default resendSignUpCode;
