import { instanceApiRouteHandler } from '@/lib/axios/axios';

interface User {
  username: string;
  email: string;
  password: string;
}

export const registerUser = async (user: User) => {
  try {
    const { data } = await instanceApiRouteHandler.post('/auth/register', user);
    return data;
  } catch (error) {
    throw error
  }
};
