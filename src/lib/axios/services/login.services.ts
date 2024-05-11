import { instanceApiRouteHandler } from '@/lib/axios/axios';

interface UserLoginWithCredentials {
  email: string | undefined;
  password: string | undefined;
}

export const postLoginWithCredentials = async (user: UserLoginWithCredentials) =>{
  console.log(user)
  try {
    const { data } = await instanceApiRouteHandler.post('/auth/login/credentials', user);
    console.log(data)
    return data;
  } catch (error) {
    console.log(error)
    throw error
  }
};

interface UserLoginWithGoogle {
  username: string;
  email: string,
  picture:string,
}

export const postLoginWithGoogle = async (user: UserLoginWithGoogle) => {
  try {
    const { data } = await instanceApiRouteHandler.post('/auth/login/google', user);
    return data;
  } catch (error) {
    throw error
  }
};