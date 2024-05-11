import { loginWithCredentials, loginWithGoogle } from '@/lib/firebase/services';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { compare } from 'bcrypt';

export const options: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email:', type: 'email', placeholder: 'example@mail.com' },
        password: { label: 'Password:', type: 'password', placeholder: 'password*' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user: any = await loginWithCredentials(email);
        if (user) {
          const passwordConfirm = await compare(password, user.password);
          if (passwordConfirm) {
            return user;
          }
          return null;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === 'credentials') {
        token.id = user.id;
        token.name = user.username;
        token.email = user.email;
      }
      if (account?.provider === 'google') {
        const data = {
          username: user.name,
          email: user.email,
          picture: user.image,
          type: 'google',
        };

        const result = await loginWithGoogle(data);
        token.id = result.id;
        token.name = result.data?.username;
        token.email = result.data?.email;
        token.image = result.data?.picture;
      }
      return token;
    },

    async session({ session, token }: any) {
      if (token?.id) {
        session.user.id = token.id;
      }
      if (token?.username) {
        session.user.username = token.username;
      }
      if (token?.email) {
        session.user.email = token.email;
      }
      if (token?.image) {
        session.user.image = token.image;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
};
