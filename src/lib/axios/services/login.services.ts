import { instanceApiRouteHandler } from '@/lib/axios/axios';

interface User {
  email: string;
  password: string;
}

export const loginUser = async (user: User) => {
  try {
    const { data } = await instanceApiRouteHandler.post('/auth/login', user);
    return data;
  } catch (error) {
    throw error
  }
};