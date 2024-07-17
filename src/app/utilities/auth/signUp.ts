import axios from 'axios';
import { SignUpInput, SignUpOutput } from 'aws-amplify/auth';

const signUp = async (data: SignUpInput): Promise<SignUpOutput> => {
  const config = {
    method: 'post',
    url: '/api/auth/signUp',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  };

  return await axios.request(config).then((res) => res.data);
};

export default signUp;
